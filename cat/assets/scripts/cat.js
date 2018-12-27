// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var skin_id = [1,1,1,1,1,1,1,1,1,1] 
cc.Class({
    extends: cc.Component,

    editor: {
        requireComponent: sp.Skeleton
    },

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var spine = this.spine = this.getComponent('sp.Skeleton');
        
        // set skin
        let ear_l = this.spine.findSlot('ear-l')
        let atta_ear_l = this.spine.getAttachment('ear-l',skin_id[2])
        ear_l.setAttachment(atta_ear_l)

        let ear_r = this.spine.findSlot('ear-r')
        let atta_ear_r = this.spine.getAttachment('ear-r',skin_id[3])
        ear_r.setAttachment(atta_ear_r)


        let tail = this.spine.findSlot('tail')
        let atta_tail = this.spine.getAttachment('tail',skin_id[4])
        tail.setAttachment(atta_tail)

        let eye_l = this.spine.findSlot('eye-l')
        let atta_eye_l = this.spine.getAttachment('eye-l',skin_id[5])
        eye_l.setAttachment(atta_eye_l)

        let eye_r = this.spine.findSlot('eye-r')
        let atta_eye_r = this.spine.getAttachment('eye-r',skin_id[6])
        eye_r.setAttachment(atta_eye_r)

        let hair = this.spine.findSlot('hair')
        let atta_hair = this.spine.getAttachment('hair',skin_id[7])
        hair.setAttachment(atta_hair)

        let mos_l = this.spine.findSlot('mos-l')
        let atta_mos_l = this.spine.getAttachment('mos-l',skin_id[8])
        mos_l.setAttachment(atta_mos_l)

        let mos_r = this.spine.findSlot('mos-r')
        let atta_mos_r = this.spine.getAttachment('mos-r',skin_id[9])
        mos_r.setAttachment(atta_mos_r)

        let mouse = this.spine.findSlot('mouse')
        let atta_mouse = this.spine.getAttachment('mouse',skin_id[9])
        mouse.setAttachment(atta_mouse)




    },

    start () {

    },

    // update (dt) {},
});
