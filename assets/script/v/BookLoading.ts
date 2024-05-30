import { _decorator, Component, Node } from 'cc';
import dd from '../dd';
const { ccclass, property } = _decorator;

@ccclass('BookLoading')
export class BookLoading extends Component {
    start() {
        this.load()
    }


    async load() {
        const bookconfig:any = await dd.res.loadTxtFile('book/Iphone2208/json');
        const bookRes = await dd.res.loadBookRes()
        dd.book.initRes(bookRes)
        dd.book.config = bookconfig.book;
        dd.ui.showUI(dd.UIkeys.bookScene)
    }
}


