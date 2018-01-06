Vue.component('landing', {
    template: window.template.landing,
    created: function () {
        // $('#fullpage').fullpage();
    } ,

    mounted: function () {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors:['firstPage', 'secondPage'],
            sectionsColor: ['#f2f2f2', '#4BBFC3']
        });
    }
});