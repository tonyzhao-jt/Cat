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
        
        duration: 0.5,
        angle: 10

    },

    // LIFE-CYCLE CALLBACKS:

    setRotateAction () {
        var rotateRight = cc.rotateTo(this.duration, this.angle).easing(cc.easeInOut(3));
        var rotateLeft = cc.rotateTo(this.duration, -this.angle).easing(cc.easeInOut(3));

        return cc.repeatForever(cc.sequence(rotateRight, rotateLeft));
    },

    onLoad () {
        //var init = cc.rotateTo(this.duration, -this.angle).easing(cc.easeOut());
        //this.node.runAction(init);

        this.rotateAction = this.setRotateAction();
        this.node.runAction(this.rotateAction);
    },

    start () {

    },

    // update (dt) {},
});
