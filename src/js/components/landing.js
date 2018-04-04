Vue.component('landing', {
    template: window.template.landing,
    created: function () {
        // $('#fullpage').fullpage();
    } ,

    data: function(){
        return {
            openLetter: false,
            startTimingAnimation: false
        }
    },

    methods:{
        isXs: function(){
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            return width < 768;
        }
    },

    mounted: function () {
        var that = this;
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors:['firstPage', 'secondPage','thirdSection','timingSection', 'mapSection'],
            sectionsColor: ['#fff', '#fff'],
            // offsetSections:false,
            autoScrolling:true,
            // scrollOverflow: true,
            // verticalCentered: falsetrue
            afterLoad: function( anchorLink, index){
                var loadedSlide = $(this);
                if(anchorLink == 'thirdSection'){
                    setTimeout(function(){
                        that.openLetter = true;
                    },200);
                }else if(anchorLink == 'timingSection'){
                    setTimeout(function(){
                        that.startTimingAnimation = true;
                    },100);
                }
            }
        });
    }
});