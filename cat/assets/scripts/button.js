// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var bag_length = 10
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

        cat:{
            type: cc.Node,
            default:null,
        },

        opt_prefab:{
            type:cc.Prefab,
            default: null,
        },

        scrollView:{
            type:cc.ScrollView,
            default:null,
        },

        // 皮肤数据
        skin_data:{
            type: Array,
            default: null,
        }


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 隐藏
        this.scrollView.node.active = false;
        // 生成默认
        this.generateDefault();
        // 生成包内 id
        this.setSkin()


        
    }, 

    generateDefault(){
        this.cat.getComponent('cat').skin_id = [1,1,1,1,1,1,1,1,1,1,1]
        this.cat.getComponent('cat').refresh()
    },

    setDefault(event, customEventData){
        let default_skin = [1,1,1,1,1,1,1,1,1,1,1]
        default_skin[customEventData] = 2
        this.cat.getComponent('cat').skin_id = default_skin
        this.cat.getComponent('cat').refresh()
    },

    setSkin(){
        // var bag = this.bag = []
        // 生成包内内容
        for(var i =0; i<bag_length;i++){
            var opt_item = cc.instantiate(this.opt_prefab);
            
            let target = opt_item.getChildByName('cat')
            target.getComponent('cat').skin_id=[1,1,1,1,2,2,1,2,1,2,1];
            this.scrollView.content.addChild(opt_item)
        }
    },

    refreshSkin(){
        let local = this.scrollView.content.getChildren()
        for(var i =0; i<local.length;i++){
            let opt_item = local[i]
            opt_item.getChildByName('cat').getComponent('cat').refresh()
            
        }   
    },

    start () {
        // 更新包内皮肤
         
    },




    // update (dt) {},

    alert: function (event, customEventData) {
        // //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        // var node = event.target;
        // var button = node.getComponent(cc.Button);
        // //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
        // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
        Alert.show("开始养猫🐎",confirm(), true);

        
    },

    closeBag: function(event, customEventData) {
        this.scrollView.node.active = false
    },
    
    openBag: function (event, customEventData) {
        this.scrollView.node.active = true
        this.refreshSkin()
    },

    confirm: function(){
        console.log('确认')
    }


});
