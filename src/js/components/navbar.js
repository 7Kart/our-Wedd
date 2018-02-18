/**
 * Created by kristofer on 17.12.17.
 */
Vue.component('navbar', {
    template: window.template.navbar,
    props: ['admin'],
    data:function(){
        return {
            openMenu: false
        };
    },
    created: function () {
        console.log("navbar init");
    },
    methods: {
        showMenu: function () {
            this.openMenu = !this.openMenu;
        },
        chooseItem: function(){
            this.openMenu = false;
        }
    }
});
