#!/bin/bash

projectName="LightReactNative"
projectName2="lightreactnative"


setup() {
    # Find and replace the string
    
    # Update app.json
    grep -rl "$projectName" ./app.json | xargs sed -i "" "s/$projectName/$newProjectName/g"
    
    # Update package.json
    grep -rl "$projectName" ./package.json | xargs sed -i "" "s/$projectName/$newProjectName/g"
    grep -rl "$projectName2" ./package.json | xargs sed -i "" "s/$projectName2/$newProjectName/g"
    
    grep -rl "$projectName" ./src | xargs sed -i "" "s/$projectName/$newProjectName/g"
    
    grep -rl "$projectName" ./android | xargs sed -i "" "s/$projectName/$newProjectName/g"
    grep -rl "$projectName2" ./android | xargs sed -i "" "s/$projectName2/$newProjectName/g"
    
    grep -rl "$projectName" ./ios | xargs sed -i "" "s/$projectName/$newProjectName/g"
    grep -rl "$projectName2" ./ios | xargs sed -i "" "s/$projectName2/$newProjectName/g"
    
    # Legacy
    # LC_ALL=C find ./app.json -type f -print0 | xargs -0 sed -i '' "s/$projectName/$newProjectName/g"
    # LC_ALL=C find ./package.json -type f -print0 | xargs -0 sed -i '' "s/$projectName/$newProjectName/g"
    # LC_ALL=C find ./package.json -type f -print0 | xargs -0 sed -i '' "s/$projectName2/$newProjectName/g"
    # LC_ALL=C find ./src/ -type f -print0 | xargs -0 sed -i '' "s/$projectName/$newProjectName/g"
    # LC_ALL=C find ./ios/ -type f -print0 | xargs -0 sed -i '' "s/$projectName/$newProjectName/g"
    
    # Rename the folder names
    LC_ALL=C find ./ios -path "*$projectName*" -print0 | xargs -0 -n 1 -I % bash -c 'mv % $(echo % | sed 's/$projectName/$newProjectName/g' )'
    sleep 1
    LC_ALL=C find ./ios -path "*$projectName*" -print0 | xargs -0 -n 1 -I % bash -c 'mv % $(echo % | sed 's/$projectName/$newProjectName/g' )'
}



cleanup() {
    rm -rf ".git"
}

initializeGit() {
    git init
}


echo "--------- @joeygoksu/LightReactNative --------"
echo

echo "❓  What is the name of the new project? "
read newProjectName
echo

echo "⚠️  Setting up the project..."
setup
echo "---------------------------------------------- "

echo "♻️  Cleaning up dirty files...  "
cleanup
echo "---------------------------------------------- "

echo "⬇️  Git initialized... "
initializeGit
echo "---------------------------------------------- "


echo "✅ It's ready "
