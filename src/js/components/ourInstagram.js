/**
 * Created by kristofer on 17.02.18.
 */
Vue.component('ourInstagram', {
    template: window.template.ourInstagram,

    data:function(){
        return {
            userFeed: new Instafeed({
                get: 'user',
                userId: '508710153',
                limit:6,
                accessToken:'508710153.f79816c.2396e3972e9e440aafb7867dd17628b0',
                resolution:'standard_resolution',
                template: window.template.instaContainer
            })
        }
    },

    methods: {
        getNextPage: function(){
            this.userFeed.next();
        }
    },

    created: function () {
        console.log("insta page");
        this.userFeed.run();
    },

});