/**
 * Created by kristofer on 17.12.17.
 */
Vue.component('mob-navbar', {
    template: window.template.mobilenavbar,
    props: ['admin'],
    data:function(){
        return {
            openMenu: false,
            hideNav: false
        };
    },
    created: function () {
        console.log("navbar init");
    },
    methods: {
        showMenu: function () {
            var self = this;
            if(this.hideNav == true){
                setTimeout(function(){
                    self.hideNav = ! self.hideNav;
                },200)
            }else{
                this.hideNav = ! this.hideNav;
            }
            if(self.openMenu == false){
                setTimeout(function(){
                    self.openMenu = !self.openMenu;
                }, 200);
            }else{
                self.openMenu = !self.openMenu;
            }

        },

        chooseItem: function(){
            this.openMenu = false;
        }
    }
});
