(function() {
    'use strict';
    
    var app         = require('app'),  // Module to control application life.
        cloudcmd    = require('cloudcmd');
    
    var BrowserWindow = require('browser-window');  // Module to create native browser window.
    
    // Report crashes to our server.
    require('crash-reporter').start();
    
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the javascript object is GCed.
    var mainWindow = null;
    
    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      if (process.platform !== 'darwin')
        app.quit();
    });
    
    // This method will be called when atom-shell has done everything
    // initialization and ready for creating browser windows.
    app.on('ready', function() {
      var webContents;
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 800, height: 600}),
      webContents = mainWindow.webContents;
    
      // and load the index.html of the app.
      
      mainWindow.loadUrl('http://localhost:31337');
      
      webContents.on('did-finish-load', function() {
          webContents.executeJavaScript('window.module = undefined');
          mainWindow.openDevTools();
      });
      
      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
      });
    });
})();
