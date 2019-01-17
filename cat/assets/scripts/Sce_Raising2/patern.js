// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var glo = require('Global')

cc.Class({
    extends: cc.Component,

    properties: {

        raise: {
            type: cc.Sprite,
            default: null
        },

        caught: {
            type: cc.Sprite,
            default: null
        },

        cancel: {
            type: cc.Button,
            default: null
        },

        done_butt: {
            type: cc.Button,
            default: null
        }


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.raise.node.active = true;
        this.caught.node.active = false;

        this.cancel.node.active = true;
        this.done_butt.node.active = false;
    },

    start () {

    },

    done_back_main: function (event, customEventData) {
        cc.director.loadScene('main');
    },

    giveUp: function (event, customEventData) {
        cc.director.loadScene('Raising');
    },

    update (dt) 
    {
        if ( glo.second == 0 && glo.Timer == 0 ) {
            this.raise.node.active = false;
            this.caught.node.active = true;

            this.cancel.node.active = false;
            this.done_butt.node.active = true;
        }
        
    },
});
