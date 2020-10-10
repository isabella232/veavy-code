import * as vscode from 'vscode';
import {getWebviewContent, checkForMandatory} from './utils';
 
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "weavy" is now active!');
	let currentPanel: vscode.WebviewPanel | undefined = undefined;

  let messenger = vscode.commands.registerCommand('weavy.messenger', () => {
    const columnToShowInM = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowInM);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyMessenger',
          'Weavy Messenger',
          columnToShowInM || vscode.ViewColumn.One,
          {
			  	  enableScripts: true
		      }
        );
        
        const appTitle = "Messenger";
        const appName = appTitle.toLowerCase();
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
        
        currentPanel.webview.html = content;

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
	}});


	let files = vscode.commands.registerCommand('weavy.files', () => {
		const columnToShowInF = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowInF);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyFiles',
          'Weavy Files',
          columnToShowInF || vscode.ViewColumn.Two,
          {
				enableScripts: true
		  }
        );
        
        const appTitle = "Files";
        const appName = appTitle.toLowerCase();
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
        
        currentPanel.webview.html = content;

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
	}});

	let posts = vscode.commands.registerCommand('weavy.posts', () => {
		const columnToShowInP = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowInP);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyPosts',
          'Weavy Posts',
          columnToShowInP || vscode.ViewColumn.Three,
          {
				enableScripts: true
		  }
        );
        
        const appTitle = "Posts";
        const appName = appTitle.toLowerCase();
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
        
        currentPanel.webview.html = content;

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
  }});
  
  let tasks = vscode.commands.registerCommand('weavy.tasks', () => {
		const columnToShowInP = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowInP);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyTasks',
          'Weavy Tasks',
          columnToShowInP || vscode.ViewColumn.Three,
          {
				enableScripts: true
		  }
        );
        
        const appTitle = "Tasks";
        const appName = appTitle.toLowerCase();
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
        
        currentPanel.webview.html = content;

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
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
