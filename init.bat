echo -e "create project directories"
@echo on

mkdir markova_biz_site
cd markova_biz_site
git clone https://github.com/pepelazz/markova_biz.git .

mkdir public
cd public
git clone https://github.com/pepelazz/markova_biz_site.git .
cd ../..