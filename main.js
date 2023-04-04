const { BrowserWindow, app,ipcMain} = require('electron');
const Store = require('electron-store')
const path = require('path')

let win;

function createWindow() {
    win = new BrowserWindow({
      width: 1200,
      height: 800,
      backgroundColor: "white",
      webPreferences:{
        nodeIntegration:true,
        preload: path.join(__dirname,'preload.js')
      }
    })
    win.loadFile('index.html');
    //win.webContents.openDevTools({mode:'detach'})
}



require('electron-reload')(__dirname,{
  electron:path.join(__dirname,'node_modules','.bin','electron')
})

let store = new Store()


ipcMain.handle('get_products', async () =>{
  try{
    return store.get('userdata.products')

  }
  catch(error){
    return error
  }
})

ipcMain.handle('save_product', async (event,data) =>{
  store.set('userdata.products',data)
})

app.whenReady().then(createWindow)

/**
 * 
 *   try{

    let store = new Store()
    
    return store.get('userdata.products')

  }
  catch(error){
    return error
  }
 */