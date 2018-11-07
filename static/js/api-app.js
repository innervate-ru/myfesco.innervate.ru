$(document).ready(function () {
    $('table').addClass('table')
    $(".jquery-off").unbind()
});

var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#page',
    data: {
        lang: 'graphql',
    },
    methods: {
        selectLang(lang) {
            this.lang = lang
            // console.log('in selectLang:', lang)
        }
    },
})