// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// var skin_id = [1,1,1,1,1,1,1,1,1,1]
var parts = ['face','body','ear-l','ear-r','tail','eye-l','eye-r','hair','mos-l','mos-r','mouse']
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

        skin_id:{
            type: Array,
            default:[]
        }
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 赋值
        // this.skin_id = [1,1,1,1,1,1,1,1,1,1,1]
        // this.refresh()
       
        
    },

    refresh(){
        var spine = this.spine = this.getComponent('sp.Skeleton');

        for(var i=0;i<parts.length;i++){
            console.log(parts[i],this.skin_id[i])
            this.loadCat(parts[i],this.skin_id[i])
        }
        console.log('生成完毕')
    },

    loadCat: function(part, id){

        let slot = this.spine.findSlot(part)
        let atta = this.spine.getAttachment(part,id)
        slot.setAttachment(atta)
    },

    start () {

    },

    // update (dt) {
        
    // },
});
