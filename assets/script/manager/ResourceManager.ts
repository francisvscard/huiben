import { Asset, Prefab, Sprite, SpriteFrame, TextAsset, assetManager, dragonBones, instantiate, loader, resources } from "cc";

export default class ResourceManager {


    /** 加载resources下图片资源
     * 返回 spriteFrame
     * @param path 图片路径
     * @param node 图片节点 可选参数
     * 
    */
    async loadSprite(path: string, node: Sprite = null) {
        if (!path) return null
        const spriteFrame: any = await resources.load<SpriteFrame>(path, SpriteFrame)
        if (node) {
            node.spriteFrame = spriteFrame
            return
        }
        return spriteFrame
    }
    /** 加载远程服务器图片资源*/
    async loadRemoteSprite(remoteUrl: string, sprite: Sprite = null, type: string = '.png') {
        const texture: any = await assetManager.loadRemote(remoteUrl, { ext: type }); // 加载远程图片资源

        // 将加载的纹理创建成 SpriteFrame
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;

        if (sprite) {
            sprite.spriteFrame = spriteFrame;
            return
        }
        return spriteFrame


    }
    /** 加载预制体*/
    async loadPrefab(path: string) {
        if (!path) return null


        return new Promise((res, rej) => {
            resources.load(path, Prefab, (err, prefab) => {

                if (err) {
                    return res(null)
                }
                res(instantiate(prefab))
            });
        })

    }


    loadScene(path: string, complete: Function, progress: Function = null) {
        if (!path) return
        resources.load(
            path,
            Prefab,
            (completedCount: number, totalCount: number) => {
                const pre = completedCount / totalCount;
                progress && progress(Math.floor(pre * 100))
            },
            (err, assets) => {
                if (!err) complete(instantiate(assets))
            },
        )
    }

    /** 读取txt*/
    async loadTxtFile(filename) {

        return new Promise((res, rej) => {
            resources.load(filename, TextAsset, (err, txt) => {
                if (err) {
                    res(null)
                    return;
                }
                const data = this.convertToJSON(txt.text);
                res(data)
            });
        })

    }

    /** txt 转json*/
    convertToJSON(txtContent) {
        try {
            let jsonObject = JSON.parse(txtContent);
            return jsonObject
        } catch (e) {
            return null
        }
    }


    /** 加载龙骨*/
    async loadDragonBones(assetUrl: string, atlas: string, armatureDisplay: dragonBones.ArmatureDisplay = null) {

        const dragonBonesAsset = await this.loadDragonBonesAsset('book/Iphone2208/image/' + assetUrl + '/texture')
        // const atlasAsset = await this.loadDragonBonesAtlasAsset('book/Iphone2208/image/' + atlas + '/texture')
        if (armatureDisplay) {
            // this.setupArmatureDisplay(armatureDisplay, dragonBonesAsset, atlasAsset)
        }
        // return { atlasAsset, dragonBonesAsset }
    }


    async loadBookRes(): Promise<Array<any>>{
        return new Promise((resolve, reject) => {
            resources.loadDir('book/Iphone2208/image',Asset, (err, asset) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(asset);
                }
            });
        });
    }


    async loadDragonBonesAsset(assetUrl: string){
        console.log(assetUrl)

        return new Promise((resolve, reject) => {
            resources.loadDir('book/Iphone2208/image',Asset, (err, asset) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(asset);
                    console.log(asset)
                }
            });
        });


        // return new Promise((resolve, reject) => {
        //     resources.load(assetUrl, dragonBones.DragonBonesAsset, (err, asset) => {
        //         if (err) {
        //             reject(err);
        //         } else {
        //             resolve(asset);
        //         }
        //     });
        // });
    }

    async loadDragonBonesAtlasAsset(assetUrl: string): Promise<dragonBones.DragonBonesAtlasAsset> {
        return new Promise((resolve, reject) => {
            resources.load(assetUrl, dragonBones.DragonBonesAtlasAsset, (err, asset) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(asset);
                }
            });
        });
    }


    setupArmatureDisplay(armatureDisplay: dragonBones.ArmatureDisplay, dragonBonesAsset: dragonBones.DragonBonesAsset, dragonBonesAtlasAsset: dragonBones.DragonBonesAtlasAsset) {

        armatureDisplay.dragonAsset = dragonBonesAsset;
        armatureDisplay.dragonAtlasAsset = dragonBonesAtlasAsset;

    }
}



interface dbRes {
    atlasAsset: dragonBones.DragonBonesAtlasAsset;
    dragonBonesAsset: dragonBones.DragonBonesAsset
}