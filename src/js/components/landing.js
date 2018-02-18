Vue.component('landing', {
    template: window.template.landing,
    created: function () {
        // $('#fullpage').fullpage();
    } ,

    mounted: function () {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors:['firstPage', 'secondPage','thirdSection', 'ourInstagram'],
            sectionsColor: ['#fff', '#4BBFC3'],
            offsetSections:true,
            autoScrolling:false,
            // verticalCentered: false
        });
    }
});