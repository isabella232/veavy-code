import * as vscode from 'vscode';
import {getWebviewContent, checkForMandatory, getLogo} from './utils';
 
export function activate(context: vscode.ExtensionContext) {
  let currentPanel: vscode.WebviewPanel | undefined;
	console.log('Congratulations, your extension "weavy" is now active!');

  let messenger = vscode.commands.registerCommand('weavy.messenger', () => {
    let currentPanelMess = currentPanel;
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
        
        const logoUri = getLogo(context.extensionPath);
        currentPanelMess.iconPath = logoUri;
        const weavyLogo = currentPanelMess.webview.asWebviewUri(logoUri);
        const appTitle = "MESSAGING";
        const appName = "messenger";
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
          },
          null,
          context.subscriptions
        );
	}});


	let files = vscode.commands.registerCommand('weavy.files', () => {
    let currentPanelFiles = currentPanel;
		const columnToShowInF = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanelFiles) {
        currentPanelFiles.reveal(columnToShowInF);
      } else {
        currentPanelFiles = vscode.window.createWebviewPanel(
          'weavyFiles',
          'Weavy Secure File Sharing',
          columnToShowInF || vscode.ViewColumn.Two,
          {
				enableScripts: true
		  }
        );
        
        const logoUri = getLogo(context.extensionPath);
        currentPanelFiles.iconPath = logoUri;
        const weavyLogo = currentPanelFiles.webview.asWebviewUri(logoUri);
        const appTitle = "SECURE FILE SHARING";
        const appName = "files";
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
        
        currentPanelFiles.webview.html = content;

        currentPanelFiles.onDidDispose(
          () => {
            currentPanelFiles = undefined;
          },
          null,
          context.subscriptions
        );
	}});

	let posts = vscode.commands.registerCommand('weavy.posts', () => {
    let currentPanelPosts = currentPanel;
		const columnToShowInP = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanelPosts) {
        currentPanelPosts.reveal(columnToShowInP);
      } else {
        currentPanelPosts = vscode.window.createWebviewPanel(
          'weavyPosts',
          'Weavy Feeds',
          columnToShowInP || vscode.ViewColumn.Three,
          {
				enableScripts: true
		  }
        );
        
        const logoUri = getLogo(context.extensionPath);
        currentPanelPosts.iconPath = logoUri;
        const weavyLogo = currentPanelPosts.webview.asWebviewUri(logoUri);
        const appTitle = "FEEDS";
        const appName = "posts"
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
        
        currentPanelPosts.webview.html = content;

        currentPanelPosts.onDidDispose(
          () => {
            currentPanelPosts = undefined;
          },
          null,
          context.subscriptions
        );
  }});
  
  let tasks = vscode.commands.registerCommand('weavy.tasks', () => {
    let currentPanelTasks = currentPanel;
		const columnToShowInP = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanelTasks) {
        currentPanelTasks.reveal(columnToShowInP);
      } else {
        currentPanelTasks = vscode.window.createWebviewPanel(
          'weavyTasks',
          'Weavy Tasks',
          columnToShowInP || vscode.ViewColumn.Three,
          {
				enableScripts: true
		  }
        );
        
        const logoUri = getLogo(context.extensionPath);
        currentPanelTasks.iconPath = logoUri;
        const weavyLogo = currentPanelTasks.webview.asWebviewUri(logoUri);
        const appTitle = "TASKS";
        const appName = "tasks"
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
        
        currentPanelTasks.webview.html = content;

        currentPanelTasks.onDidDispose(
          () => {
            currentPanelTasks = undefined;
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
