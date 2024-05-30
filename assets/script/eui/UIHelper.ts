import { Button, find, Label, Node, ProgressBar, Sprite, Toggle } from "cc"

export default class UIHelper {

    private _canvas: Node = null;

    private get canvas() {
        if (!this._canvas) this._canvas = find('Canvas');
        return this._canvas;
    }

    findNode(path: string, parent: Node = null) {
        if (!path) return null
        if(!parent) parent = this.canvas
        return find(path, parent);
    }

    findSprite(path: string, parent: Node = null) {
        return this.findNode(path,parent)?.getComponent(Sprite)
    }
    findButton(path: string, parent: Node = null) {
        return this.findNode(path,parent)?.getComponent(Button)
    }
    findToggle(path: string, parent: Node = null) {
        return this.findNode(path,parent)?.getComponent(Toggle)
    }
    findLabel(path: string, parent: Node = null) {
        return this.findNode(path,parent)?.getComponent(Label)
    }
    findProgress(path:string,parent:Node = null) {
        return this.findNode(path,parent)?.getComponent(ProgressBar)
    }
}


