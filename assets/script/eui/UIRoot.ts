import { _decorator, Component, instantiate, Node } from 'cc';
import dd from '../dd';
const { ccclass, property } = _decorator;

@ccclass('UIRoot')
export class UIRoot extends Component {

    private scene: Node;
    private panel: Node;
    private alert: Node;
    private toast: Node;
    private loading: Node;
    private mask: Node;
    private maskNode: Node;


    init() {
        this.scene = dd.UIHelper.findNode('scene', this.node)
        this.panel = dd.UIHelper.findNode('panel', this.node)
        this.alert = dd.UIHelper.findNode('alert', this.node)
        this.toast = dd.UIHelper.findNode('toast', this.node)
        this.loading = dd.UIHelper.findNode('loading', this.node)
        this.mask = dd.UIHelper.findNode('mask', this.node)
        this.maskNode = dd.UIHelper.findNode('maskNode', this.node)
        this.maskNode.active = false;
    }


    addScene(node) {
        node && this.scene.addChild(node)
        const firstScene = this.scene.children[0]
        this.scene.children.length > 1 && firstScene && this.scene.removeChild(firstScene)
    }
    addPanel(node, hasMask: boolean = true) {
        let mask = this.cloneMask
        mask.name = node.name
        mask.addChild(node)
        this.panel.addChild(mask)
    }
    addAlert(node, hasMask: boolean = true) {
        let mask = this.cloneMask
        mask.name = node.name
        mask.addChild(node)
        this.alert.addChild(mask)
    }
    addToast(node) {
        node && this.toast.addChild(node)
    }

    removeAlert(name: string | Node) {
        if (typeof (name) == 'string') {
            let node = this.alert.getChildByName(name)
            node && this.alert.removeChild(node);
        } else {
            this.alert.removeChild(name);
        }
    }

    removePanel(name: string | Node) {
        if (typeof (name) == 'string') {
            let node = this.panel.getChildByName(name)
            node && this.panel.removeChild(node);
        } else {
            this.panel.removeChild(name);
        }
    }

    get cloneMask() {
        let mask = instantiate(this.maskNode)
        mask.active = true
        return mask
    }


    showLoading() {
        this.loading.active = true;
        this.unschedule(this.hideLoading)
        this.scheduleOnce(this.hideLoading, 10)
    }
    showMask() {
        this.mask.active = true;
        this.unschedule(this.hideMask)
        this.scheduleOnce(this.hideMask, 10)
    }

    hideLoading() {
        this.loading.active = false;
    }
    hideMask() {
        this.mask.active = false;
    }
}


