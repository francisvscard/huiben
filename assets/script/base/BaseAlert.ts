import { _decorator, Component, Enum, Node, tween, Vec3 } from 'cc';
import { BaseUI } from './BaseUI';
import dd from '../dd';
const { ccclass, property } = _decorator;

enum aniType {
    center,
    left,
    right,
    down,
    top,
    none
}

Enum(aniType)
@ccclass('BaseAlert')
export class BaseAlert extends BaseUI {

    @property({
        type: aniType,
        displayName: '动画类型'
    })
    aniType: aniType = aniType.center;


    onLoad() {
        switch (this.aniType) {
            case aniType.center:
                tween(this.node).set({ scale: new Vec3(0, 0, 0) }).to(0.2, { scale: new Vec3(1, 1, 1) }).start();
                break;
        }
    }

    closeUI() {

        switch (this.aniType) {
            case aniType.center:
                tween(this.node).to(0.2, { scale: new Vec3(0, 0, 0) }).call(()=>{
                    this.removeNode()
                }).start();
                break;
            default:
                this.removeNode()
        }


    }


    private removeNode() {
        dd.ui.removeAlert(this.node.parent)
    }




}


