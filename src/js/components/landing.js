Vue.component('landing', {
    template: window.template.landing,
    created: function () {
        // $('#fullpage').fullpage();
    } ,

    mounted: function () {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors:['firstPage', 'secondPage','thirdSection', 'mapSection'],
            sectionsColor: ['#fff', '#fff'],
            // offsetSections:false,
            autoScrolling:true,
            // scrollOverflow: true,
            // verticalCentered: falsetrue
        });
    }
});