$ErrorActionPreference = 'Stop'

$sourceRoot = $PSScriptRoot
$projectRoot = Split-Path -Parent $sourceRoot
$packageRoot = Join-Path $projectRoot 'packages'
$buildRoot = Join-Path $packageRoot '.build-v1.0.1'
$firefoxStage = Join-Path $buildRoot 'firefox'
$chromiumStage = Join-Path $buildRoot 'chromium'
$firefoxArchive = Join-Path $packageRoot 'CyberSecurityTheme-v1.0.1-firefox.zip'
$chromiumArchive = Join-Path $packageRoot 'CyberSecurityTheme-v1.0.1-chromium.zip'

New-Item -ItemType Directory -Path $packageRoot -Force | Out-Null
if (Test-Path -LiteralPath $buildRoot) {
    Remove-Item -LiteralPath $buildRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $firefoxStage, $chromiumStage -Force | Out-Null

try {
    foreach ($item in Get-ChildItem -LiteralPath $sourceRoot -Force) {
        Copy-Item -LiteralPath $item.FullName -Destination $firefoxStage -Recurse -Force
        Copy-Item -LiteralPath $item.FullName -Destination $chromiumStage -Recurse -Force
    }

    Copy-Item -LiteralPath (Join-Path $sourceRoot 'manifest_firefox.json') `
        -Destination (Join-Path $firefoxStage 'manifest.json') -Force
    Remove-Item -LiteralPath (Join-Path $chromiumStage 'manifest_firefox.json') -Force

    foreach ($archive in @($firefoxArchive, $chromiumArchive)) {
        if (Test-Path -LiteralPath $archive) {
            Remove-Item -LiteralPath $archive -Force
        }
    }

    Compress-Archive -Path (Join-Path $firefoxStage '*') `
        -DestinationPath $firefoxArchive -CompressionLevel Optimal
    Compress-Archive -Path (Join-Path $chromiumStage '*') `
        -DestinationPath $chromiumArchive -CompressionLevel Optimal

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $expected = @(
        @{ Path = $firefoxArchive; ManifestVersion = 2 },
        @{ Path = $chromiumArchive; ManifestVersion = 3 }
    )
    foreach ($package in $expected) {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($package.Path)
        try {
            $manifestEntry = $zip.GetEntry('manifest.json')
            if ($null -eq $manifestEntry) {
                throw "Package is missing a root manifest.json: $($package.Path)"
            }
            $reader = [System.IO.StreamReader]::new($manifestEntry.Open())
            try {
                $manifest = $reader.ReadToEnd() | ConvertFrom-Json
            } finally {
                $reader.Dispose()
            }
            if ($manifest.version -ne '1.0.1' -or $manifest.manifest_version -ne $package.ManifestVersion) {
                throw "Package manifest is not the expected release: $($package.Path)"
            }
            foreach ($requiredEntry in @('newtab/newtab.html', 'popup/popup.html', 'background/background.js')) {
                if ($null -eq $zip.GetEntry($requiredEntry)) {
                    throw "Package is missing $requiredEntry : $($package.Path)"
                }
            }
        } finally {
            $zip.Dispose()
        }
        $file = Get-Item -LiteralPath $package.Path
        Write-Output ("Built and verified {0} ({1:N0} bytes)" -f $file.Name, $file.Length)
    }
} finally {
    if (Test-Path -LiteralPath $buildRoot) {
        Remove-Item -LiteralPath $buildRoot -Recurse -Force
    }
}
