import { _decorator, Component, Node } from 'cc';
import { BaseScene } from '../base/BaseScene';
import dd from '../dd';
const { ccclass, property } = _decorator;

@ccclass('GameMain')
export class GameMain extends BaseScene {
    private info_btn:Node;

    onLoad() {
        this.initUI()
    }

    initUI() {
        this.info_btn = dd.UIHelper.findNode('top/menu/info_btn',this.node);
        this.onEvent()
    }

    onEvent() {
        this.info_btn.on(Node.EventType.TOUCH_END,this.openInfo,this)
    }

    openInfo() {
        dd.ui.showUI(dd.UIkeys.playerMessage)
    }

   loadBook() {
    dd.bookMgr.loadBook('')
   }
}


