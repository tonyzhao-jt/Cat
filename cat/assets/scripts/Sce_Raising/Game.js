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

        time: {
            type: cc.Slider,
            default: null
        },

        label: {
            type: cc.Label,
            default: null
        },

        progress: {
            type: cc.Sprite,
            default: null
        },

        total_time: 120
        

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.string = this.getComponent(cc.Label);
        this.slider = this.time.getComponent(cc.Slider);
        this.time.getComponent('Time_Slider').game = this;
        

    },

    startFeeding: function (event) {
        //cc.director.loadScene('Raising2')
        if (!glo.startCount) 
        {
            if (glo.Timer == 0){
                return;
            }
            glo.startCount = 1;
            glo.Timer -= 1;
            glo.second = 0;
            glo.count = 0;
        }
                
    },

    stopFeeding: function (event, customEventData) {
        glo.startCount = 0;
        glo.Timer = Math.round(this.total_time * this.slider.progress);
        this.slider.progress = glo.Timer / this.total_time;
        this.progress.node.width = this.slider.progress * 600;
    }, 

    backMain: function (event, customEventData) {
        cc.director.loadScene('main');
    },

    start () {

    },


    update (dt) {

        switch (glo.startCount) 
        {
            case 0:
                glo.Timer = Math.round(this.total_time * this.slider.progress);
                this.label.string = glo.Timer + ":00";
                break;
            
            case 1:
                if ( glo.second >= 10 ) 
                {
                    this.label.string = glo.Timer + ":" + glo.second;
                } 
                else 
                {
                    this.label.string = glo.Timer + ":0" + glo.second;
                }
                break;
        }
    }, 
});
