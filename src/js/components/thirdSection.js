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
            openLetFlag: false,
            showListFlag: false,
            animate:false
        }
    },
    props:['start'],
    watch:{
        start:function(){
            console.log("start change");
            this.openLetter();
        }
    },
    methods: {
        openLetter: function(e){
            console.log("props", this.start);
            if(!this.animate){
                this.animate = true;
                if(!this.openLetFlag){
                    this.openLetFlag = !this.openLetFlag;
                    setTimeout(()=>{
                        this.showListFlag = !this.showListFlag;
                        this.animate = false;
                    },100);
                }else{
                    this.showListFlag = !this.showListFlag;
                    setTimeout(()=>{
                        this.openLetFlag = !this.openLetFlag;
                        this.animate = false;
                    },1200);
                }
            }
        }
    }
});