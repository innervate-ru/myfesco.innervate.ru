#!/bin/bash

echo -e "create project directories"
@echo on

mkdir help_fesco_com
cd help_fesco_com
git clone https://github.com/isaburov/help.fesco.com-hugo.git .

mkdir public
cd public
git clone https://github.com/isaburov/help.fesco.com.git .
cd ../..