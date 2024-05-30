import { _decorator, Component, dragonBones, instantiate, Node, Skeleton } from 'cc';
import dd from '../dd';
import { bookData } from '../data/book';
const { ccclass, property } = _decorator;

@ccclass('BookMain')
export class BookMain extends Component {

    @property(Node)
    ani: Node = null;

    skeList: Array<any> = []

    start() {
        this.showPage()
    }


    showPage() {
        const info = dd.book.pageContent;

        for (let i = 0; i < info.skeletalset.length; i++) {
            this.cloneSke(info.skeletalset[i])
        }

    }

    cloneSke(ske: bookData.skeletal) {

        const data = ske.skeletal
        const datafile =   dd.book.getBookRes(this.getSkeName(data.datafile))
        const texturefile =  dd.book.getBookRes(this.getSkeName(data.texturefile))
        console.log(datafile,texturefile)
    }


    getSkeName(filename: string): string {
        return filename.replace(/\.json$/, "");
    }

}


