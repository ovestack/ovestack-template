var Vue = require('vue')

module.exports = Vue.extend({
    template: __inline('./<$= name $>.tpl'),
    props: {}
})