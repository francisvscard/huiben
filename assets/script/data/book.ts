export class book {

    private totalPage: number;
    private _page: number;
    get page() {
        return this._page
    }
    set page(val) {
        this._page = val;
    }

    private _config: Array<bookData.pageItem> = null;
    set config(data) {
        this._config = data;
        this.totalPage = data.length
        this._page = 0;
        console.log(this._config)
    }
    public get config() {
        return this._config;
    }


    private _bookRes: Map<string, any> = new Map()

    private set bookRes(data: any) {
       
        if (data.name) {
            if(this._bookRes.get(data.name)) console.log(data)
            this._bookRes.set(data.name, data)
        }
    }

    public getBookRes(name:string) {
        return this._bookRes.get(name)
    }

    public initRes(data:Array<any>) {
        data.map((value,index)=>{
            this.bookRes = value
        })
    }

    get pageContent() {
        const info = this._config[this.page].page
        this._page++;
        return info
    }

}

export namespace bookData {


    export class pageItem {
        page: pageJson;
    }

    export class pageJson {
        /** 动画设置*/
        animationgroupset: Array<animationgroup>;
        interrupt: interrupt;
        isexercise: isexercise;
        layout: layout;
        next: next_book;
        pagetype: pagetype;
        previous: next_book;
        skanimationgroupset: Array<skanimationgroup>;
        /** 龙骨动画list*/
        skeletalset: Array<skeletal>
        /** 音效名称*/
        sound: string;
        /** 背景图list*/
        spriteset: Array<spriteset>

    }


    export class spriteset {
        allscreen: {
            layout: string;
            position: position
        }
        anchorPoint: anchorPoint;

        dragreset: string;//yes | no
        /** 背景图片*/
        image: string;
        /** 是否可见*/
        isvisible: boolean;

        layout: layout_position;

        multdrag: string;// yes | no
        opacity: string;//255
        position: position;
        /** 旋转*/
        rotation: string;
        /**音效*/
        sound: string;
        stretch: anchorPoint;
        tag: string;
        touchenable: string; // yes | no
    }


    export enum layout_position {
        absolute = "absolute"
    }

    export class position {
        x
        y
        z
    }

    export class skeletal {
        skeletal: {
            allscreen: {
                layout: string;
                position: position
            }
            /** 龙骨ske json*/
            datafile: string;
            texturefile: string;//b1_p1_2_tex.json
            /** 是否需要重置龙骨*/
            dragreset: string; // yes | no
            editorplatform: string//: "dragonbones"
            isalphadetection: string;//: yes | no
            isvisible: boolean;
            layout: string;//absolute
            multdrag: string;//yes | no
            opacity: number;//255
            position: position
            rotation: string
            sound: string
            stretch: anchorPoint
            tag: string;
            touchenable: string;// yes | no
        }
    }

    export class next_book {
        backwards: string;
        duration: string;
        enablesound: string;
        transition: string;
    }


    export class layout {
        allscreen: {
            anchorPoint: anchorPoint
        }
        anchorPoint: anchorPoint
    }


    export enum interrupt {
        no = 'no',

    }

    export enum isexercise {
        no = 'no'
    }

    export class anchorPoint {
        x: string
        y: string
    }

    export class skanimationgroup {
        animationset: skanimation;
        animationtype: string;
        armature: string;
        category: string;
        event: string
        groupid: string;
        spritetag: string
    }



    export class animation {
        category: category
        property: any;
        style: animation_style;
    }

    export class skanimation {
        /** 动画name */
        animation: string;
        /** 延迟播放*/
        delay: string;
        /** 播放次数*/
        playtimes: string;
    }


    export enum category {
        auto = "auto",
        touch = "touch"
    }

    export enum animation_style {
        delaytime = "delaytime"
    }

    export enum pagetype {
        standard = "standard"
    }

    export class animationgroup {
        animationset: Array<animation>;
        animationtype: string;
        event: string;
        groupid: string;
        spritetag: string;
    }
}



