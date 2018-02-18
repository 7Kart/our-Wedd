"use strict";

window['template'] = { "firstSection": "<div class=\"section first-section-container col-xs-12\">\n    <navbar admin=\"true\"></navbar>\n</div>\n\n", "landing": "\n<div id=\"fullpage\">\n    <firstSection></firstSection>\n    <secondSection></secondSection>\n    <thirdSection></thirdSection>\n    <ourInstagram></ourInstagram>\n</div>", "navbar": "<div class=\"firs-Slide-container\">\n    <!--<nav>!!!!</nav>-->\n    <nav class=\"clearfix\">\n        <ul class=\"desk-menu desk-menu-left hidden-xs hidden-sm\" >\n            <li><a href=\"#secondPage\" v-on:click=\"chooseItem\">О церемонии</a></li>\n            <li><a href=\"#thirdSection\" v-on:click=\"chooseItem\">Приглашение</a></li>\n        </ul>\n        <a class=\"hidden-xs hidden-sm logo-container\" href=\"#firstPage\"></a>\n\n        <ul class=\"desk-menu desk-menu-right hidden-xs hidden-sm\">\n            <li><a v-on:click=\"chooseItem\">Место проведения</a></li>\n            <li><a href=\"#ourInstagram\" v-on:click=\"chooseItem\">Наш инстаграм</a></li>\n        </ul>\n\n\n        <!--<a class=\"hidden-md hidden-lg\" href=\"#\" id=\"pull\" v-on:click=\"showMenu\">Menu</a>-->\n        <button class=\"hidden-md hidden-lg cmn-toggle-switch cmn-toggle-switch__rot\" v-on:click=\"showMenu\">\n            <span>toggle menu</span>\n        </button>\n    </nav>\n    <transition name=\"phonemenubut\">\n        <ul v-if=\"openMenu\" class=\"mobile-menu hidden-lg hidden-md col-xs-12 col-sm-12\" >\n            <li><a href=\"#firstPage\" v-on:click=\"chooseItem\">Логотип</a></li>\n            <li><a href=\"#secondPage\" v-on:click=\"chooseItem\">О церемонии</a></li>\n            <li><a v-on:click=\"chooseItem\">Приглашение</a></li>\n            <li><a v-on:click=\"chooseItem\">Место проведения</a></li>\n\n        </ul>\n    </transition>\n</div>\n", "ourInstagram": "<div class=\"section our-instagramm-container col-xs-12\">\n    <h1>Инста пейдж</h1>\n</div>\n\n", "secondSection": "<div class=\"section\">\n    <div class=\"section-container section-container-desc hidden-xs\">\n        <div id=\"first-sub-block\" class=\"side-block col-lg-6 col-md-6 col-sm-6\">\n\n        </div>\n        <div id=\"second-sub-block\" class=\"side-block col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"sub-block-container col-xs-12\">\n                <h3 class=\"col-xs-12\">Регистрация</h3>\n                <span class=\"col-xs-12\">Суббота / 2 июня 2018 / 11.30</span>\n                <span class=\"col-xs-12\">Дворец бракосочетания ВДНХ</span>\n                <span class=\"col-xs-12\">Москва, проспект Мира, домовладение 119, ВДНХ</span>\n            </div>\n        </div>\n        <div id=\"third-sub-block\" class=\"side-block col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"sub-block-container col-xs-12\">\n                <h3 class=\"col-xs-12\">Банкет</h3>\n                <span class=\"col-xs-12\">Суббота / 2 июня 2018 / 17.30</span>\n                <span class=\"col-xs-12\">Отель Katerina City</span>\n                <span class=\"col-xs-12\">Шлюзовая набережная, 6 115 114 Москва</span>\n            </div>\n        </div>\n        <div id=\"foth-sub-block\" class=\"side-block col-lg-6 col-md-6 col-sm-6\"></div>\n\n    </div>\n    <div class=\"section-container section-container-mobile hidden-md hidden-sm hidden-lg\">\n        <div class=\" col-xs-12\">\n            <h3 class=\"col-xs-12\">Регистрация</h3>\n            <span class=\"col-xs-12\">Суббота / 2 июня 2018 / 11.30</span>\n            <span class=\"col-xs-12\">Дворец бракосочетания ВДНХ</span>\n            <span class=\"col-xs-12\">Москва, проспект Мира, домовладение 119, ВДНХ</span>\n        </div>\n        <div class=\"sub-block-container col-xs-12\">\n            <h3 class=\"col-xs-12\">Банкет</h3>\n            <span class=\"col-xs-12\">Суббота / 2 июня 2018 / 17.30</span>\n            <span class=\"col-xs-12\">Отель Katerina City</span>\n            <span class=\"col-xs-12\">Шлюзовая набережная, 6 115 114 Москва</span>\n        </div>\n    </div>\n</div>", "thirdSection": "<div class=\"section third-section\">\n    <h1>this invite</h1>\n</div>" };
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
            anchors: ['firstPage', 'secondPage', 'thirdSection', 'ourInstagram'],
            sectionsColor: ['#fff', '#4BBFC3'],
            offsetSections: true,
            autoScrolling: false
            // verticalCentered: false
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
    props: ['admin'],
    data: function data() {
        return {
            openMenu: false
        };
    },
    created: function created() {
        console.log("navbar init");
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
"use strict";

/**
 * Created by kristofer on 11.02.18.
 */
Vue.component('thirdSection', {
    template: window.template.thirdSection,
    created: function created() {
        console.log("open first section");
    }

});
"use strict";

/**
 * Created by kristofer on 17.02.18.
 */
Vue.component('ourInstagram', {
    template: window.template.ourInstagram,
    created: function created() {
        console.log("open first section");
    }

});