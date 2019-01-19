// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var bag_length = 10;
var glo = require('Global');

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

        mask_out:{
            type:cc.Node,
            default:null,
        },

        // 皮肤数据
        skin_data:{
            type: Array,
            default: null,
        },

        raising: {
            type: cc.Sprite,
            default: null
        },

        closeDone: {
            type: cc.Sprite,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 隐藏
        this.scrollView.node.active = false;
        // 生成默认
        this.generateDefault();
        // 生成包内 id
        this.setSkin();
        // 吸引状态显示
        this.statusDiffer();
        
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
        // 手动生成home内内容
        for(var i =0; i<bag_length;i++){
            // 默认的皮肤
            var default_array = [1,1,1,1,2,2,1,2,1,2,1];
            var opt_item = cc.instantiate(this.opt_prefab);
            
            let cat = opt_item.getChildByName('cat');
            cat.getComponent('cat').skin_id=default_array;

            let title = opt_item.getChildByName('number');
            title.getComponent(cc.Label).string = i + "";

            let cat_data = opt_item.getChildByName('cat-data');
            cat_data.getChildByName('data').getComponent(cc.Label).string = "\
            head:"+default_array[0]+",1,1,1,2,2,1,2,1,2,1";
            
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

    statusDiffer: function() {
        //显示吸引状态（代码待修改）
        console.log(glo.startCount)
        switch (glo.startCount) 
        {
            case 0: 
                this.raising.node.active = false;
                this.closeDone.node.active = false;
                break;
            case 1:
                this.raising.node.active = true;
                this.closeDone.node.active = false;
                break;
            case 2:
                this.raising.node.active = false;
                this.closeDone.node.active = true;
                break;
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
        this.scrollView.node.active = false;
        this.mask_out.active = false;
    },
    
    openBag: function (event, customEventData) {
        this.scrollView.node.active = true;
        this.mask_out.active = true;
        this.refreshSkin()
    },

    goRaising: function (event, customEventData) {
        if (glo.startCount == 2) {
            glo.startCount = 0;
        }
        cc.director.loadScene('Raising')
    },

    closeDoneSprite: function (event, customEventData)  {
        glo.startCount = 0;
        this.closeDone.node.active = false  
    },

    confirm: function(){
        console.log('确认')
    }


});
