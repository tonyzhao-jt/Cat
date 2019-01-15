// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
        this.startCount = 0;

        this.string = this.getComponent(cc.Label);
        this.slider = this.time.getComponent(cc.Slider);
        this.time.getComponent('Time_Slider').game = this;
        
        this.Timer = Math.round(this.total_time * this.slider.progress);
        this.label.string = this.Timer;
    },

    startFeeding: function (event) {
        switch (this.startCount)
        {
            case 0:
                if (this.Timer == 0){
                    break;
                }
                this.startCount = 1;
                this.Timer -= 1;
                this.second = 0;
                this.count = 0;
                break;
            
            case 1:
                break;
        }
    },

    stopFeeding: function (event, customEventData) {
        this.startCount = 0;
        this.Timer = Math.round(this.total_time * this.slider.progress);
        this.slider.progress = this.Timer / this.total_time;
        this.progress.node.width = this.slider.progress * 600;
    },

    backMain: function (event, customEventData) {
        cc.director.loadScene('main');
    },

    start () {

    },


    update (dt) {
        
        switch (this.startCount) 
        {
            case 0:
                this.Timer = Math.round(this.total_time * this.slider.progress);
                this.label.string = this.Timer + ":00";
                break;
            
            case 1:

                this.second = Math.round(59.5 - this.count);
                this.count += dt;
                
                if (this.count > 60 && this.Timer > 0) {
                    this.count = 0;
                    this.Timer -= 1
                }

                if (this.second == 0 && this.Timer == 0) {
                    this.startCount = 0;
                    cc.director.loadScene('main');
                }
                
                if ( this.second >= 10 ) 
                {
                    this.label.string = this.Timer + ":" + this.second;
                } 
                else 
                {
                    this.label.string = this.Timer + ":0" + this.second;
                }
                break;
        }


        

    },
});
