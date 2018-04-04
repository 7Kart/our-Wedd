/**
 * Created by kristofer on 02.04.18.
 */
Vue.component('mobilefifthpage', {
    template: window.template.mobilefifthpage,
    created: function () {
        console.log("open mobilefifthpage", this.start);
    },

    props:['start'],
    
    watch:{
        start:function(){            
            this.showedIcons();
        }
    },
    
    data:function(){
        return {
            showIcons1: false,
            showIcons2: false,
            showIcons3: false,
            showIcons4: false,
        }
    },

    methods: {
        showedIcons: function(){
            this.showIcons1 = !this.showIcons1;
            setTimeout(()=>{
                this.showIcons2 = !this.showIcons2;
            },300);
            setTimeout(()=>{
                this.showIcons3 = !this.showIcons3;
            },600);
            setTimeout(()=>{
                this.showIcons4 = !this.showIcons4;
            },900);
        }
    }

});