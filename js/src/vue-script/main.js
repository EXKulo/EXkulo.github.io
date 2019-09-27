new Vue({
    delimiters: ['${', '}'],
    el: '#vue-test',
    data: {
        welcomeStr: '欢迎，欢迎',
        VueTestClass: 'title-welcome',
    },
    methods: {
        OnClick: function () {
            this.message += 12345
            console.log(this.message)
        }
    },
    created: function () {
    }
})