
import dd from "../dd";

export default class BookManager {



    loadBook(id:string) {
        dd.ui.showUI(dd.UIkeys.bookLoading)
    }
}