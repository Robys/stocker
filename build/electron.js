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
        webSecurity: false,
        nodeIntegration:true,
        preload: path.join(__dirname,'preload.js')
      }
    })
    
    win.loadURL(path.join(__dirname,"index.html"));
}

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