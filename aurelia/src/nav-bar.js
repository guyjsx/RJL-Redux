import {Router} from 'aurelia-router';

export class NavBar {
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;

        var routerMap = [];

        if (typeof userObj !== "undefined") {
            if (userObj.role == "admin" || userObj.role == "caseadmin") {
                var routerMap = [
                    { route: ['cases/'], moduleId: 'cases', nav: false, title:'Cases' },
                    { route: ['victim/'], moduleId: 'victims', nav: false, title:'Victims' },
                    { route: ['offender/'], moduleId: 'offenders', nav: false, title:'Offenders' },
                    { route: ['users/'], moduleId: 'users', nav: false, title:'Users' },
                    { route: ['admin/'], moduleId: 'admin', nav: false, title:'Admin' }
                ];
            } else if (userObj.role !== "facilitator") {
                var routerMap = [
                    { route: ['cases/'], moduleId: 'cases', nav: false, title:'Cases' },
                    { route: ['victim/'], moduleId: 'victims', nav: false, title:'Victims' },
                    { route: ['offender/'], moduleId: 'offenders', nav: false, title:'Offenders' },
                    { route: ['users/'], moduleId: 'users', nav: false, title:'Users' }
                ];
            } else if (userObj.role == "facilitator") {
                var routerMap = [
                    { route: ['cases/'], moduleId: 'cases', nav: false, title:'Cases' }
                ];
            }
        }

        this.router.configure(config => {
            config.title = this.user;
            config.parent = "true";
            config.map(routerMap);
        });
    }

    openNav() {
        let $nav = $('#navbar-app');
        let $overlay = $('.mobile-menu-overlay');


        if ($nav.hasClass('show-menu')) {
            $nav.removeClass('show-menu');
            $overlay.addClass('hide');

        } else {
            $nav.addClass('show-menu');
            $overlay.removeClass('hide');
        }
    }
}
