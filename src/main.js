const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600, backgroundColor: "#171717", titleBarStyle: "hiddenInset"})

    // mainWindow.loadURL("https://www.reddit.com")
    
    mainWindow.loadURL("http://localhost:3000")
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})