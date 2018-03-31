/**
 * Created by kristofer on 11.02.18.
 */
Vue.component('thirdSection', {
    template: window.template.thirdSection,
    created: function () {
        console.log("open first section");
    },
    data:function(){
        return {
            openLetFlag: false
        }
    },
    methods: {
        openLetter: function(e){
            this.openLetFlag = !this.openLetFlag;
            console.log("e", this.openLetFlag);
        }
    }
});