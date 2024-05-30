import { book } from "./data/book";
import UIHelper from "./eui/UIHelper";
import { UIkeys } from "./eui/UIkeys";
import BookManager from "./manager/BookManager";
import ResourceManager from "./manager/ResourceManager";
import UIManager from "./manager/UIManager";

export default class dd {
    static UIkeys: UIkeys;
    static UIHelper: UIHelper;
    static res: ResourceManager;
    static ui: UIManager;
    static bookMgr: BookManager;
    static book: book;
    constructor() {

    }

    static async init() {
        this.UIkeys = new UIkeys()
        this.UIHelper = new UIHelper()
        this.res = new ResourceManager();
        this.ui = new UIManager()
        this.bookMgr = new BookManager()
        this.book = new book()
        return true
    }
}