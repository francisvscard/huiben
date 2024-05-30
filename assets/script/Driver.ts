import { _decorator, Component, Node } from 'cc';
import dd from './dd';
import { Loading } from './v/Loading';
import { UIRoot } from './eui/UIRoot';
const { ccclass, property } = _decorator;

@ccclass('Driver')
export class Driver extends Component {
   
    onLoad() {
        this.init()
    }

    async init() {
        await dd.init()
        const uiroot = dd.UIHelper.findNode('UIRoot',this.node)
        uiroot.getComponent(UIRoot).init()
        const loading =  dd.UIHelper.findNode('loading',this.node)
        loading.getComponent(Loading).initUI();
    }

    update(deltaTime: number) {

    }
}


