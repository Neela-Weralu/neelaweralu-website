#!/bin/bash
set -e

git add .

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
    echo "This script must be run from the 'main' branch. Current branch: $current_branch. \n Please switch to 'main' and try again."
    exit 1
fi

if [ -z "$1" ]; then
    echo "Usage: ./commit.sh <commit message>."
    exit 1
fi

git commit -m "$1"
git push origin main