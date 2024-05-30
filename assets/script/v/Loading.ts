import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import dd from '../dd';
import { BasePanel } from '../base/BasePanel';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends BasePanel {

    private progress: ProgressBar;
    private progressLabel: Label;


    onLoad(): void {
       
    }

    initUI() {
        super.initUI()
        this.progress = dd.UIHelper.findProgress('progress', this.node);
        this.progressLabel = dd.UIHelper.findLabel('progressLabel', this.node);

        this.init()
    }

    init() {
        dd.ui.loadScene(dd.UIkeys.mainScene.path,
            (node) => {
                if (node) {
                    dd.ui.root.addScene(node);
                    this.node.removeFromParent()
                }
            },
            (progress) => {
                this.progressLabel.string = progress + '%';
                this.progress.progress = progress / 100;
            }
        )
    }


}


