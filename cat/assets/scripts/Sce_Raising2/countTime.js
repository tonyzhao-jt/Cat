// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var glo = require('Global');

cc.Class({
    extends: cc.Component,

    properties: {

        label: {
            type: cc.Label,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.count = 0;
        this.startCount = true; 
        glo.Timer -= 1;
        glo.second = 59.5;

    },

    start () {

    },

    update (dt) 
    {
        if (this.startCount) 
        {
            glo.second = Math.round(59.5 - this.count);
            this.count += dt;
            
            if ( this.count > 60 && glo.Timer > 0 ) {
                this.count = 0;
                glo.second = 59;
                glo.Timer -= 1;
            }
    
            if ( glo.second == 0 && glo.Timer == 0 ) {
                this.startCount = false;
            }
            
            if ( glo.second >= 10 ) 
            {
                this.label.string = glo.Timer + ":" + glo.second;
            } 
            else 
            {
                this.label.string = glo.Timer + ":0" + glo.second;
            }
        }
    },
});
