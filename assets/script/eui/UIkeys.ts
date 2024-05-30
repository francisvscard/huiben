export class UIkeys {
    
    mainScene:UIItem = {path:'prefab/main',name:'main',type:UIType.scene}
    playerMessage:UIItem = {path:'prefab/playerMessage',name:'playerMessage',type:UIType.alert}
    bookLoading:UIItem = {path:'prefab/BookLoading',name:'BookLoading',type:UIType.scene}
    bookScene:UIItem = {path:'prefab/game',name:'game',type:UIType.scene}

    myClass:UIItem = {path:'',name:'',type:UIType.panel}
}

export enum UIType {
    alert,
    panel,
    scene,
    toast,
    loading
}










