"use strict";

window['template'] = { "firstSection": "<div class=\"section col-xs-12\">\n    <h1>  this first section </h1>\n</div>", "landing": "\n<div id=\"fullpage\">\n    <firstSection></firstSection>\n    <secondSection></secondSection>\n</div>", "navbar": "<div>\n    <nav id=\"menu\" class=\"clearfix\">\n        <ul class=\"desk-menu hidden-xs hidden-sm\" >\n            <li><a href=\"#firstPage\">First section</a></li>\n            <li><a href=\"#secondPage\">Second section</a></li>\n        </ul>\n        <!--<a class=\"hidden-md hidden-lg\" href=\"#\" id=\"pull\" v-on:click=\"showMenu\">Menu</a>-->\n        <button class=\"hidden-md hidden-lg cmn-toggle-switch cmn-toggle-switch__rot\" v-on:click=\"showMenu\">\n            <span>toggle menu</span>\n        </button>\n    </nav>\n    <transition name=\"phonemenubut\">\n        <ul v-if=\"openMenu\" class=\"mobile-menu hidden-lg hidden-md col-xs-12 col-sm-12\" >\n            <li><a href=\"#firstPage\" v-on:click=\"chooseItem\">First section</a></li>\n            <li><a href=\"#secondPage\" v-on:click=\"chooseItem\">Second section</a></li>\n        </ul>\n    </transition>\n</div>\n", "secondSection": "<div class=\"section\">\n    <h1>  this second section </h1>\n</div>" };
'use strict';

$(document).ready(function () {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });

    //$('#fullpage').fullpage();
});
'use strict';

Vue.component('landing', {
    template: window.template.landing,
    created: function created() {
        // $('#fullpage').fullpage();
    },

    mounted: function mounted() {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors: ['firstPage', 'secondPage'],
            sectionsColor: ['#f2f2f2', '#4BBFC3']
        });
    }
});
"use strict";

/**
 * Created by kristofer on 16.12.17.
 */
Vue.component('firstSection', {
    template: window.template.firstSection,
    created: function created() {
        console.log("open first section");
    }

});
"use strict";

/**
 * Created by kristofer on 17.12.17.
 */
Vue.component('secondSection', {
    template: window.template.secondSection,
    created: function created() {
        console.log("open first section");
    }
});
'use strict';

/**
 * Created by kristofer on 17.12.17.
 */
Vue.component('navbar', {
    template: window.template.navbar,
    data: function data() {
        return {
            openMenu: false
        };
    },
    methods: {
        showMenu: function showMenu() {
            this.openMenu = !this.openMenu;
        },
        chooseItem: function chooseItem() {
            this.openMenu = false;
        }
    }
});