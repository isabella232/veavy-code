import * as vscode from 'vscode';
import {getWebviewContent, checkForMandatory, getLogo} from './utils';
 
let windowMap = new Map();

export function activate(context: vscode.ExtensionContext) {
  let currentPanel: vscode.WebviewPanel | undefined;
	console.log('Congratulations, your extension "weavy" is now active!');

  let messenger = vscode.commands.registerCommand('weavy.messenger', () => {
    const appName = "messenger";
    let currentPanelMess;
    if(windowMap.has(appName)) currentPanelMess = windowMap.get(appName);
    else currentPanelMess = currentPanel;

    const columnToShowInM = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
      
      if (currentPanelMess) {
        currentPanelMess.reveal(columnToShowInM);
      } else {
        currentPanelMess = vscode.window.createWebviewPanel(
          'weavyMessenger',
          'Weavy Messaging',
          columnToShowInM || vscode.ViewColumn.One,
          {
			  	  enableScripts: true
		      }
        );
        windowMap.set(appName, currentPanelMess);
        const logoUri = getLogo(context.extensionPath);
        currentPanelMess.iconPath = logoUri;
        const weavyLogo = currentPanelMess.webview.asWebviewUri(logoUri);
        const appTitle = "MESSAGING";
        const weavy = vscode.workspace.getConfiguration("weavy");
        const weavyUrl = weavy.get<string>("url");
        const weavyUserMail = weavy.get<string>("user.mail");
        const spacesKey = weavy.get<string>("space.key");
        const appKey = weavy.get<string>(`${appName}.key`);
  
        const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
        
        if(!checkStatus) return;
        
        if(appKey === undefined || appKey === null || appKey === ""){
          vscode.window.showErrorMessage(`Weavy ${appTitle} Key Cannot be empty/null. Please update a correct value in settings`);
          return false;
        }

        const content = eval("`" + getWebviewContent(context.extensionPath) + "`");
        
        currentPanelMess.webview.html = content;

        currentPanelMess.onDidDispose(
          () => {
            currentPanelMess = undefined;
            windowMap.delete(appName);
          },
          null,
          context.subscriptions
        );
  }});
  

  let files = vscode.commands.registerCommand('weavy.files', () => {
    const appName = "files";
    let currentPanelMess;
    if(windowMap.has(appName)) currentPanelMess = windowMap.get(appName);
    else currentPanelMess = currentPanel;

    const columnToShowInM = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
      
      if (currentPanelMess) {
        currentPanelMess.reveal(columnToShowInM);
      } else {
        currentPanelMess = vscode.window.createWebviewPanel(
          'weavyFiles',
          'Weavy Secure File Sharing',
          columnToShowInM || vscode.ViewColumn.One,
          {
			  	  enableScripts: true
		      }
        );
        windowMap.set(appName, currentPanelMess);
        const logoUri = getLogo(context.extensionPath);
        currentPanelMess.iconPath = logoUri;
        const weavyLogo = currentPanelMess.webview.asWebviewUri(logoUri);
        const appTitle = "SECURE FILE SHARING";
        const weavy = vscode.workspace.getConfiguration("weavy");
        const weavyUrl = weavy.get<string>("url");
        const weavyUserMail = weavy.get<string>("user.mail");
        const spacesKey = weavy.get<string>("space.key");
        const appKey = weavy.get<string>(`${appName}.key`);
  
        const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
        
        if(!checkStatus) return;
        
        if(appKey === undefined || appKey === null || appKey === ""){
          vscode.window.showErrorMessage(`Weavy ${appTitle} Key Cannot be empty/null. Please update a correct value in settings`);
          return false;
        }

        const content = eval("`" + getWebviewContent(context.extensionPath) + "`");
        
        currentPanelMess.webview.html = content;

        currentPanelMess.onDidDispose(
          () => {
            currentPanelMess = undefined;
            windowMap.delete(appName);
          },
          null,
          context.subscriptions
        );
  }});
  
  let posts = vscode.commands.registerCommand('weavy.posts', () => {
    const appName = "posts";
    let currentPanelMess;
    if(windowMap.has(appName)) currentPanelMess = windowMap.get(appName);
    else currentPanelMess = currentPanel;

    const columnToShowInM = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
      
      if (currentPanelMess) {
        currentPanelMess.reveal(columnToShowInM);
      } else {
        currentPanelMess = vscode.window.createWebviewPanel(
          'weavyPosts',
          'Weavy Feeds',
          columnToShowInM || vscode.ViewColumn.One,
          {
			  	  enableScripts: true
		      }
        );
        windowMap.set(appName, currentPanelMess);
        const logoUri = getLogo(context.extensionPath);
        currentPanelMess.iconPath = logoUri;
        const weavyLogo = currentPanelMess.webview.asWebviewUri(logoUri);
        const appTitle = "FEEDS";
        const weavy = vscode.workspace.getConfiguration("weavy");
        const weavyUrl = weavy.get<string>("url");
        const weavyUserMail = weavy.get<string>("user.mail");
        const spacesKey = weavy.get<string>("space.key");
        const appKey = weavy.get<string>(`${appName}.key`);
  
        const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
        
        if(!checkStatus) return;
        
        if(appKey === undefined || appKey === null || appKey === ""){
          vscode.window.showErrorMessage(`Weavy ${appTitle} Key Cannot be empty/null. Please update a correct value in settings`);
          return false;
        }

        const content = eval("`" + getWebviewContent(context.extensionPath) + "`");
        
        currentPanelMess.webview.html = content;

        currentPanelMess.onDidDispose(
          () => {
            currentPanelMess = undefined;
            windowMap.delete(appName);
          },
          null,
          context.subscriptions
        );
  }});
  
  let tasks = vscode.commands.registerCommand('weavy.tasks', () => {
    const appName = "tasks";
    let currentPanelMess;
    if(windowMap.has(appName)) currentPanelMess = windowMap.get(appName);
    else currentPanelMess = currentPanel;

    const columnToShowInM = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
      
      if (currentPanelMess) {
        currentPanelMess.reveal(columnToShowInM);
      } else {
        currentPanelMess = vscode.window.createWebviewPanel(
          'weavyTasks',
          'Weavy Tasks',
          columnToShowInM || vscode.ViewColumn.One,
          {
			  	  enableScripts: true
		      }
        );
        windowMap.set(appName, currentPanelMess);
        const logoUri = getLogo(context.extensionPath);
        currentPanelMess.iconPath = logoUri;
        const weavyLogo = currentPanelMess.webview.asWebviewUri(logoUri);
        const appTitle = "TASKS";
        const weavy = vscode.workspace.getConfiguration("weavy");
        const weavyUrl = weavy.get<string>("url");
        const weavyUserMail = weavy.get<string>("user.mail");
        const spacesKey = weavy.get<string>("space.key");
        const appKey = weavy.get<string>(`${appName}.key`);
  
        const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
        
        if(!checkStatus) return;
        
        if(appKey === undefined || appKey === null || appKey === ""){
          vscode.window.showErrorMessage(`Weavy ${appTitle} Key Cannot be empty/null. Please update a correct value in settings`);
          return false;
        }

        const content = eval("`" + getWebviewContent(context.extensionPath) + "`");
        
        currentPanelMess.webview.html = content;

        currentPanelMess.onDidDispose(
          () => {
            currentPanelMess = undefined;
            windowMap.delete(appName);
          },
          null,
          context.subscriptions
        );
	}});

  context.subscriptions.push(messenger);
  context.subscriptions.push(files);
  context.subscriptions.push(posts);
  context.subscriptions.push(tasks);
  
}

export function deactivate() {}
