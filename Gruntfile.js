var matter = require('gray-matter');
var S = require('string-russian');

var CONTENT_PATH_PREFIX = 'content';

module.exports = function(grunt) {
    grunt.registerTask('search-index', function() {
        grunt.log.writeln('Build pages index');

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                // индексируем только md файлы
                if (filename.split('.').pop() != 'md') {
                    return
                }
                grunt.verbose.writeln('Parse file:', abspath);
                d = processMDFile(abspath, filename);
                if (d !== undefined) {
                    pagesIndex.push(d);
                }
            });
            return pagesIndex;
        };

        var processMDFile = function(abspath, filename) {
            var content = matter(grunt.file.read(abspath, filename));
            // console.log(filename, 'content:', content)
            if (content.data.draft) {
                // don't index draft posts
                return;
            }
            href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s
            if (filename === "index.md" || filename === "_index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }
            var pageIndex;
            return {
                title: content.data.title,
                categories: content.data.categories,
                tags: content.data.tags,
                href: href,
                content: S(content.content).trim().stripTags().stripPunctuation().s
            };
        };

        grunt.file.write('static/js/search/index.json', JSON.stringify(indexPages()));
        grunt.log.ok('Index built');
    });
};