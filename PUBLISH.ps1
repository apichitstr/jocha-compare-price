param(
  [Parameter(Mandatory = $true)]
  [string]$GitHubUser,

  [string]$RepoName = "jocha-compare-price"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
  git init
}

git checkout -B main
git add .
git commit -m "Initial commit: Jocha Compare Price" 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "No new changes to commit or commit already exists."
}

git remote remove origin 2>$null
$remote = "https://github.com/$GitHubUser/$RepoName.git"
git remote add origin $remote

git push -u origin main

Write-Host "Published to $remote"
