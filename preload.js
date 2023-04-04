const {contextBridge,ipcRenderer} = require('electron')


contextBridge.exposeInMainWorld('electron',{
    products: () =>{
        return ipcRenderer.invoke('get_products')
    },
    save: (data) =>{
        return ipcRenderer.invoke('save_product',data)
    }
})