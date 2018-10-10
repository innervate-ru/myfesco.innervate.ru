#!/bin/bash

# функция выхода из скрипта при ошибке
is_err () {
    [ $? -ne 0 ]
}

git_push(){
    git add .
    if is_err; then return; fi
    msg="rebuilding site `date`"
    if [ $# -eq 1 ]
      then msg="$1"
    fi
    git commit -m "$msg"
    if is_err; then return; fi
    git push origin master
    if is_err; then return; fi
}

git_pull(){
    git stash
    if is_err; then return; fi
    git checkout master
    if is_err; then return; fi
    git pull
    if is_err; then return; fi
    git stash apply
    if is_err; then return; fi
    git_push
}


echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# обновление из git основного проекта
echo -e "\033[0;32m dev git pull...\033[0m"
git_pull
if is_err; then return; fi
git_push
if is_err; then return; fi

# Build the project.
hugo

cd public
# отправляем сгенерированный проект в удаленный репозиторий
echo -e "\033[0;32m dev git push...\033[0m"
git_push
if is_err; then return; fi

cd ..