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
        
        progress: {
            type: cc.Sprite,
            default: null
        },

        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.slider = this.getComponent(cc.Slider);
        if ( this.progress == null || this.slider == null ){
            return;
        }

        this.sli_width = this.progress.node.width;
        this.progress.node.width = this.slider.progress * this.sli_width;

        this.slider.node.on('slide', function(event) {
            if(this.game.startCount == 0) 
            {
                this.progress.node.width = this.slider.progress * this.sli_width;
            }
            else 
            {
                return;
            }
        },this)
    },

    start () {

    },

    update (dt) {

        var per = (this.game.second + this.game.Timer*60) / (this.game.total_time*60)
        if (this.game.startCount == 1) 
        {
            this.progress.node.width = Math.round(this.sli_width * per);
            this.slider.progress = per;
        }
    },
});
