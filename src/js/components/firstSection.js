/**
 * Created by kristofer on 16.12.17.
 */
Vue.component('firstSection', {
    template: window.template.firstSection,
    data: function(){
        return{
            lampFirstOn: false,
            lampSecondOn: false,
            lampThirdOn: false,
            lampForthOn: false,
            lampFifthOn: false,
            lampSixOn: false
        }
    },
    
    created: function () {
        setInterval(()=>{
            this.lampFirstOn = !this.lampFirstOn;
        },3000);

        setTimeout(()=>{
            setInterval(()=>{
                this.lampSecondOn = !this.lampSecondOn;
            }, 3000);
        },300);

        setTimeout(()=>{
            setInterval(()=>{
                this.lampThirdOn = !this.lampThirdOn;
            }, 3000);
        },700);

        setTimeout(()=>{
            setInterval(()=>{
                this.lampForthOn = !this.lampForthOn;
            }, 3000);
        },1100);

        setTimeout(()=>{
            setInterval(()=>{
                this.lampFifthOn = !this.lampFifthOn;
            }, 3000);
        },1400);

        setTimeout(()=>{
            setInterval(()=>{
                this.lampSixOn = !this.lampSixOn;
            }, 3000);
        },1800);
    },
});