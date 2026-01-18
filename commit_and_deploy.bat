git add .

if "%1"=="" (
    echo Usage: ./commit.bat <commit message>.
    exit /b 1
)

git commit -m "%1"

git merge main deploy

git push