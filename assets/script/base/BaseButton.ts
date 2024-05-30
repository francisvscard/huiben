import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseButton')
export class BaseButton extends Button {
    start() {
        if(this.transition == 3) {
            this.zoomScale = 1.08
        }
    }

    
}


