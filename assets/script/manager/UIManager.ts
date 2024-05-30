import { Sprite, Node } from "cc"
import dd from "../dd";
import { UIRoot } from "../eui/UIRoot";
import { BaseUI } from "../base/BaseUI";
import { UIType } from "../eui/UIkeys";

export default class UIManager {

    /** 正在加载中的弹窗  用于异步加载锁*/
    private uiLoaded = new Map()
    private _root: UIRoot;
    get root() {
        if (!this._root) this._root = dd.UIHelper.findNode('UIRoot').getComponent(UIRoot);
        return this._root;
    }

    /**
     * 添加UI面板
     * @param showLoading 加载是否显示loading
     * @param single 是否是单弹窗 唯一
     * */
    async showUI(ui: UIItem, data: any = null, showLoading: boolean = true, single: boolean = true) {
        if (this.uiLoaded.get(ui.name) && single) return
        this.uiLoaded.set(ui.name, ui)
        showLoading && this.showLoading()

        let node: any = await dd.res.loadPrefab(ui.path);
        this.uiLoaded.delete(ui.name)
        showLoading && this.hideLoading()
        if (!node) return;
        if (node.getComponent(BaseUI)) node.getComponent(BaseUI).data = data
        
        switch (ui.type) {
            case UIType.scene:
                this.root.addScene(node)
                break;
            case UIType.panel:
                this.root.addPanel(node)
                break;
            case UIType.alert:
                this.root.addAlert(node)
                break;
            case UIType.toast:
                this.root.addToast(node)
                break;
            default:
                console.log('失败')

        }

    }

    loadScene(path: string, complete: Function, progress: Function = null) {
        dd.res.loadScene(path, complete, progress)
    }

    removeAlert(name:string | Node) {
        this.root.removeAlert(name)
    }

    removePanel(name:string | Node) {
        this.root.removePanel(name)
    }
    showLoading() {
        this.root.showLoading()
    }
    hideLoading() {
        this.root.hideLoading()
    }
}


