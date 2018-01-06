/**
 * Created by kristofer on 17.12.17.
 */
Vue.component('navbar', {
    template: window.template.navbar,
    data:function(){
        return {
            openMenu: false
        };
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