#!/bin/bash


cd public
git fetch --all
git reset --hard origin/master
git pull

cd ..