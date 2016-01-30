import {Behavior} from 'aurelia-framework';

export class ChildNavBar {
    static metadata(){ return Behavior.withProperty('router'); }
}