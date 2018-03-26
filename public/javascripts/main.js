"use strict";

window['template'] = { "firstSection": "<div class=\"section first-section-container col-xs-12\">\n\n    <nav class=\"col-md-12 col-lg-12 desk-nav-bar hidden-xs hidden-sm\">\n        <div class=\"black-line col-md-12 col-lg-12\"> </div>\n        <div class=\"plant-container col-md-12 col-lg-12\"></div>\n        <div class=\"black-round col-md-12 col-lg-12\">\n            <div class=\"round\"> </div>\n        </div>\n        <div class=\"nav-container col-md-12\"></div>\n        <div class=\"desk-menu-container col-md-12\">\n            <ul class=\"desk-menu col-md-5 col-lg-5 desk-menu-left \" >\n                <li class=\"col-md-6\"><a href=\"#secondPage\">О церемонии</a></li>\n                <li class=\"col-md-6\"><a href=\"#thirdSection\">Приглашение</a></li>\n            </ul>\n            <ul class=\"desk-menu col-md-5 col-lg-5 col-lg-offset-2  col-md-offset-2 desk-menu-right\" >\n                <li class=\"col-md-6\"><a href=\"#secondPage\">Наш инстаграм</a></li>\n                <li class=\"col-md-6\"><a href=\"#mapSection\">Схема проезда</a></li>\n            </ul>\n        </div>\n    </nav>\n\n    <mob-navbar></mob-navbar>\n\n    <div class=\"light-container col-xs-12 hidden-sm hidden-xs\">\n        <div class=\"col-md-5\">\n            <div class=\"col-lg-4 col-md-6\">\n                <div id=\"first-lamp\" class=\"lamp\">\n\n                </div>\n                <!--<div class=\"lamp-light\">-->\n\n                <!--</div>-->\n            </div>\n            <div class=\"col-lg-4 col-md-6 \">\n                <div id=\"second-lamp\" class=\"lamp\">\n\n                </div>\n            </div>\n            <div class=\"col-lg-4 hidden-md\">\n                <div id=\"third-lamp\" class=\"lamp\">\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-5 col-md-offset-2 \">\n            <div class=\"col-lg-4 hidden-md\" >\n                <div id=\"forth-lamp\" class=\"lamp\">\n\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div id=\"fifth-lamp\" class=\"lamp\">\n\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div id=\"six-lamp\" class=\"lamp\">\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"main-page-container col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-12 col-md-offset-0\">\n        <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg mobile-plant\">\n\n        </div>\n    </div>\n    <div class=\"col-xs-12 hidden-xs hidden-md hidden-lg mobile-plant-small\">\n\n    </div>\n</div>\n\n", "instaContainer": "<div class=\"gallery-container col-lg-4\">\n    <div class=\"gallery\">\n        <img src=\"{{image}}\"/>\n        <div class=\"caption\">\n            <h4>{{caption}}</h4>\n            <p>{{likes}}</p>\n        </div>\n    </div>\n</div>", "landing": "\n<div id=\"fullpage\">\n    <firstSection></firstSection>\n    <secondSection></secondSection>\n    <thirdSection></thirdSection>\n    <mapSection></mapSection>\n    <!--<ourInstagram></ourInstagram>-->\n</div>", "mapSection": "<div class=\"col-xs-12 col-md-12 section map-section-container\">\n    <!--<iframe class=\"col-xs-12 col-sm-6\" src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ae77900346ced1b894f15d76d11f0b0f0dd097ed2d24e9bb53607749e5ff7e487&amp;source=constructor\" height=\"50%\" frameborder=\"0\"></iframe>-->\n    <h1 class=\"col-xs-12\">\n        Контакты и схема\n    </h1>\n    <iframe class=\"map-container col-xs-12 col-md-10 col-md-offset-1\" src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ae77900346ced1b894f15d76d11f0b0f0dd097ed2d24e9bb53607749e5ff7e487&amp;source=constructor\" frameborder=\"0\">\n\n    </iframe>\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 contact-text\">\n        <span class=\"col-xs-6\"> Артем </span>\n        <span class=\"col-xs-6\"> Александра </span>\n        <span class=\"col-xs-6\"> +7(964)582-82-07</span>\n        <span class=\"col-xs-6\"> +7(963)663-61-85</span>\n    </div>\n</div>", "mobilenavbar": "<nav class=\"col-xs-12 mobile-navbar hidden-md hidden-lg\">\n    <div class=\"col-xs-12 col-sm-12 mobile-nav-container\">\n        <div v-bind:class=\"[hideNav ? 'mobile-logo-container-hide' : 'mobile-logo-container']\" class=\"col-xs-6 col-xs-offset-3\">\n\n        </div>\n        <div class=\"col-xs-3 col-xs-offset-9 mobile-menu-but-container\" >\n            <div class=\"menu-button\" v-bind:class=\"[{ open: openMenu }]\" v-on:click=\"showMenu()\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </div>\n    </div>\n    <transition name=\"roundclose\">\n        <div v-if=\"hideNav == false\" class=\"col-xs-12 nav-round\">\n            <div class=\"col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-2 round-bonder\">\n\n            </div>\n        </div>\n    </transition>\n    <transition name=\"close\">\n            <ul v-if=\"openMenu\" class=\"col-xs-12 col-sm-12 mobile-menu\" >\n                <li class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n                    <a href=\"#secondPage\">о церемонии</a>\n                </li>\n                <li class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n                    <a href=\"#thirdSection\">приглашение</a>\n                </li>\n                <li class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n                    <a>наш инстаграм</a>\n                </li>\n                <li class=\"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4\">\n                    <a href=\"#mapSection\">схема проезда</a>\n                </li>\n            </ul>\n    </transition>\n</nav>", "ourInstagram": "<div class=\"section our-instagramm-container col-xs-12\">\n    <div id=\"instafeed\" class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2\">\n\n    </div>\n    <div class=\"col-xs-12\">\n        <button v-on:click=\"getNextPage\"> next </button>\n    </div>\n</div>\n\n", "secondSection": "<div class=\"section\">\n    <div class=\"section-container section-container-desc \">\n        <div id=\"first-sub-block\" class=\"hidden-xs side-block col-lg-6 col-md-6 col-sm-6\">\n\n        </div>\n        <div id=\"second-sub-block\" class=\"side-block col-xs-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"sub-block-container col-xs-12\">\n                <h3 class=\"col-xs-12\">Регистрация брака</h3>\n                <h4 class=\"col-xs-12\"> Дворец бракосочетания ВДНХ начало в 11:20</h4>\n                <span class=\"col-xs-12 hidden-xs\">В ЗАГСе произойдет официальная чатсь нашей программы.</span>\n                <span class=\"col-md-12 hidden-xs\">Эта часть необязательно, но мы будем рады видеть Вас.</span>\n                <span class=\"col-md-12 hidden-xs\">Адрес: Москва, проспект Мира, дом 119, строение 421, ВДНХ</span>\n                <p class=\"col-xs-12 hidden-sm hidden-sm hidden-lg\">\n                    В ЗАГСе&shy; про&shy;изой&shy;дет офи&shy;циаль&shy;ная часть на&shy;шей про&shy;грам&shy;мы.\n                    Эта часть не&shy;обя&shy;за&shy;тель&shy;но, но мы бу&shy;дем ра&shy;ды ви&shy;деть Вас.\n                    Ад&shy;рес: Моск&shy;ва, прос&shy;пект Ми&shy;ра, дом 119, строе&shy;ние 421, ВДНХ\n                </p>\n            </div>\n        </div>\n        <div id=\"third-sub-block\" class=\"side-block col-xs-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"sub-block-container col-xs-12\">\n                <h3 class=\"col-xs-12\">Банкет</h3>\n                <h4 class=\"col-xs-12\">Ресторан \"Katerina city\" начало в 18:00</h4>\n                <span class=\"col-md-12 hidden-xs\">Здесь Вас ожидает фуршет, тавнцы и праздничный стол</span>\n                <span class=\"col-md-12 hidden-xs\">Адрес: Москва, Шлюзовая набережная, дом 6</span>\n                <p class=\"col-xs-12 hidden-sm hidden-sm hidden-lg\">\n                    Здесь Вас ожи&shy;дает фур&shy;шет, тан&shy;цы и празд&shy;нич&shy;ный стол\n                    Ад&shy;рес: Моск&shy;ва, Шлю&shy;зо&shy;вая на&shy;бе&shy;реж&shy;ная, дом 6\n                </p>\n            </div>\n        </div>\n        <div id=\"foth-sub-block\" class=\"hidden-xs side-block col-lg-6 col-md-6 col-sm-6\"></div>\n\n    </div>\n\n</div>", "thirdSection": "<div class=\"col-xs-12 section third-section\">\n\n    <div class=\"col-lg-12 hidden-xs hidden-sm hidden-md top-invite\">\n        <div class=\"col-lg-4 col-md-3 photo-container\">\n            <div class=\"art-photo\">\n\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 invite-text-content\">\n            <h3>Приглашение</h3>\n            <p>\n                2 июня 2018 го&shy;да в на&shy;шей жиз&shy;ни сос&shy;тоит&shy;ся тор&shy;жест&shy;вен&shy;ное\n                и зна&shy;ме&shy;на&shy;тель&shy;ное со&shy;бы&shy;тие – день на&shy;шей свадь&shy;бы.\n            </p>\n            <p>\n                По&shy;зволь&shy;те приг&shy;ла&shy;сить Вас раз&shy;де&shy;лить с на&shy;ми\n                ра&shy;дость это&shy;го дня. По&shy;да&shy;ри&shy;те свою под&shy;держ&shy;ку и доб&shy;рые по&shy;же&shy;ла&shy;ния,\n                а мы в свою оче&shy;редь по&shy;де&shy;лимся ча&shy;сти&shy;чкой на&shy;ше&shy;го счас&shy;тья.\n            </p>\n        </div>\n        <div class=\"col-lg-4 col-md-3 photo-container\">\n            <div class=\"alex-photo\">\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-12 hidden-xs hidden-lg top-invite-sm\">\n        <div class=\"col-sm-10 col-sm-offset-1 invite-text-content-sm\">\n            <h3>Приглашение</h3>\n            <p>\n                2 июня 2018 го&shy;да в на&shy;шей жиз&shy;ни сос&shy;тоит&shy;ся тор&shy;жест&shy;вен&shy;ное\n                и зна&shy;ме&shy;на&shy;тель&shy;ное со&shy;бы&shy;тие – день на&shy;шей свадь&shy;бы.\n            </p>\n            <p>\n                По&shy;зволь&shy;те приг&shy;ла&shy;сить Вас раз&shy;де&shy;лить с на&shy;ми\n                ра&shy;дость это&shy;го дня. По&shy;да&shy;ри&shy;те свою под&shy;держ&shy;ку и доб&shy;рые по&shy;же&shy;ла&shy;ния,\n                а мы в свою оче&shy;редь по&shy;де&shy;лимся ча&shy;сти&shy;чкой на&shy;ше&shy;го счас&shy;тья.\n            </p>\n        </div>\n        <div class=\"col-sm-12 sm-photo-container\">\n            <div class=\"col-sm-6\">\n                <div class=\"art-photo\">\n\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"alex-photo\">\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"hidden-xs col-sm-12 bottom-invite\">\n        <span class=\"col-xs-12\">\n            Пожалуйста используйте наш хештег свадьбы\n        </span>\n        <h3 class=\"col-xs-12\">\n            #gama_wed\n        </h3>\n        <span class=\"col-xs-12\">\n            мы будем рады, если вы поддержите цветовую гамму нашей свадьбы\n        </span>\n\n        <ul class=\"col-xs-12 colors-rounds\">\n            <li class=\"color-round\" id=\"blue\"></li>\n            <li class=\"color-round\" id=\"grey\"></li>\n            <li class=\"color-round\" id=\"lightgrey\"></li>\n            <li class=\"color-round\" id=\"white\"></li>\n            <li class=\"color-round\" id=\"pink\"></li>\n        </ul>\n    </div>\n\n    <div class=\"hidden-lg hidden-sm hidden-md col-xs-12 mobile-invite-body\">\n        <h3 class=\"col-xs-12\">Приглашение</h3>\n        <p class=\"col-xs-12\">\n            2 июня 2018 года в на&shy;шей жи&shy;зни сос&shy;тоит&shy;ся тор&shy;жест&shy;вен&shy;ное\n            и зна&shy;ме&shy;на&shy;тель&shy;ное со&shy;бы&shy;тие – день на&shy;шей свадь&shy;бы.\n        </p>\n        <p class=\"col-xs-12\">\n            Позвольте при&shy;гла&shy;сить Вас раз&shy;де&shy;лить с на&shy;ми\n            ра&shy;дость это&shy;го дня. По&shy;да&shy;ри&shy;те свою под&shy;держ&shy;ку и доб&shy;рые по&shy;же&shy;ла&shy;ния,\n            а мы в свою оче&shy;редь по&shy;де&shy;лим&shy;ся час&shy;тич&shy;кой на&shy;ше&shy;го счас&shy;тья.\n        </p>\n        <div class=\"col-xs-12 mobile-photo-cont\">\n            <ul class=\"col-xs-12\">\n                <li id=\"art-img\"></li>\n                <li id=\"shu-img\"></li>\n            </ul>\n        </div>\n        <h4 class=\"col-xs-12\">#gama_wed</h4>\n        <div class=\"col-xs-12 footer\">\n            <p>Цвета свадьбы</p>\n            <ul class=\"col-xs-12 mob-colors\">\n                <li class=\"color-round-mob\" id=\"blue\"></li>\n                <li class=\"color-round-mob\" id=\"grey\"></li>\n                <li class=\"color-round-mob\" id=\"lightgrey\"></li>\n                <li class=\"color-round-mob\" id=\"white\"></li>\n                <li class=\"color-round-mob\" id=\"pink\"></li>\n            </ul>\n        </div>\n    </div>\n\n</div>" };
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
            anchors: ['firstPage', 'secondPage', 'thirdSection', 'mapSection'],
            sectionsColor: ['#fff', '#fff'],
            // offsetSections:false,
            autoScrolling: true
            // scrollOverflow: true,
            // verticalCentered: falsetrue
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
Vue.component('mob-navbar', {
    template: window.template.mobilenavbar,
    props: ['admin'],
    data: function data() {
        return {
            openMenu: false,
            hideNav: false
        };
    },
    created: function created() {
        console.log("navbar init");
    },
    methods: {
        showMenu: function showMenu() {
            var self = this;
            if (this.hideNav == true) {
                setTimeout(function () {
                    self.hideNav = !self.hideNav;
                }, 200);
            } else {
                this.hideNav = !this.hideNav;
            }
            if (self.openMenu == false) {
                setTimeout(function () {
                    self.openMenu = !self.openMenu;
                }, 200);
            } else {
                self.openMenu = !self.openMenu;
            }
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
'use strict';

/**
 * Created by kristofer on 17.02.18.
 */
Vue.component('ourInstagram', {
    template: window.template.ourInstagram,

    data: function data() {
        return {
            userFeed: new Instafeed({
                get: 'user',
                userId: '508710153',
                limit: 6,
                accessToken: '508710153.f79816c.2396e3972e9e440aafb7867dd17628b0',
                resolution: 'standard_resolution',
                template: window.template.instaContainer
            })
        };
    },

    methods: {
        getNextPage: function getNextPage() {
            this.userFeed.next();
        }
    },

    created: function created() {
        console.log("insta page");
        this.userFeed.run();
    }

});
"use strict";

/**
 * Created by kristofer on 26.03.18.
 */
Vue.component('mapSection', {
    template: window.template.mapSection,
    created: function created() {
        console.log("open first section");
    }
});