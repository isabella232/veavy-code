import * as vscode from 'vscode';
import {getWebviewContent, checkForMandatory} from './utils';
 
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "weavy" is now active!');
	let currentPanel: vscode.WebviewPanel | undefined = undefined;
  
  // if(weavyUserMail === undefined || weavyUserMail === null){
      // vscode.window.showErrorMessage("Weavy User Mail cannot be empty or null. Please update in settings");
      // return;
  // }

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
          
        const weavy = vscode.workspace.getConfiguration("weavy");
        const weavyUrl = weavy.get<string>("url");
        const weavyUserMail = weavy.get<string>("user.mail");
        const spacesKey = weavy.get<string>("space.key");
        const appKey = weavy.get<string>("messenger.key");
  
        const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
        
        if(!checkStatus) return;
        
        if(appKey === undefined || appKey === null || appKey === ""){
          vscode.window.showErrorMessage(`Weavy messenger Key Cannot be empty/null. Please update a correct value in settings`);
          return false;
        }
        
        const content = eval("`" + getWebviewContent("messenger", context.extensionPath) + "`");
        
        currentPanel.webview.html = content;

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
	}});


	// let files = vscode.commands.registerCommand('weavy.files', () => {
	// 	const columnToShowInF = vscode.window.activeTextEditor
  //       ? vscode.window.activeTextEditor.viewColumn
  //       : undefined;

  //     if (currentPanel) {
  //       currentPanel.reveal(columnToShowInF);
  //     } else {
  //       currentPanel = vscode.window.createWebviewPanel(
  //         'weavyFiles',
  //         'Weavy Files',
  //         columnToShowInF || vscode.ViewColumn.Two,
  //         {
	// 			enableScripts: true
	// 	  }
  //       );
  //       currentPanel.webview.html = getWebviewContent("files", context.extensionPath);

  //       currentPanel.onDidDispose(
  //         () => {
  //           currentPanel = undefined;
  //         },
  //         null,
  //         context.subscriptions
  //       );
	// }});

	// let posts = vscode.commands.registerCommand('weavy.posts', () => {
	// 	const columnToShowInP = vscode.window.activeTextEditor
  //       ? vscode.window.activeTextEditor.viewColumn
  //       : undefined;

  //     if (currentPanel) {
  //       currentPanel.reveal(columnToShowInP);
  //     } else {
  //       currentPanel = vscode.window.createWebviewPanel(
  //         'weavyPosts',
  //         'Weavy Posts',
  //         columnToShowInP || vscode.ViewColumn.Three,
  //         {
	// 			enableScripts: true
	// 	  }
  //       );
  //       currentPanel.webview.html = getWebviewContent("posts", context.extensionPath);

  //       currentPanel.onDidDispose(
  //         () => {
  //           currentPanel = undefined;
  //         },
  //         null,
  //         context.subscriptions
  //       );
	// }});

  context.subscriptions.push(messenger);
  // context.subscriptions.push(files);
  // context.subscriptions.push(posts);
}

export function deactivate() {}
