import * as vscode from 'vscode';
import {getWebviewContent} from './utils';
 
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "weavy" is now active!');
	let currentPanel: vscode.WebviewPanel | undefined = undefined;

	let messenger = vscode.commands.registerCommand('weavy.messenger', () => {
		const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.One);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyMessenger',
          'Weavy Messenger',
          vscode.ViewColumn.One,
          {
				enableScripts: true
		  }
        );
        currentPanel.webview.html = getWebviewContent("messenger", context.extensionPath);

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
	}});


	let files = vscode.commands.registerCommand('weavy.files', () => {
		const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.Two);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyFiles',
          'Weavy Files',
          vscode.ViewColumn.Two,
          {
				enableScripts: true
		  }
        );
        currentPanel.webview.html = getWebviewContent("files", context.extensionPath);

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
	}});

	let posts = vscode.commands.registerCommand('weavy.posts', () => {
		const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.Three);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'weavyPosts',
          'Weavy Posts',
          vscode.ViewColumn.Three,
          {
				enableScripts: true
		  }
        );
        currentPanel.webview.html = getWebviewContent("posts", context.extensionPath);

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
}

export function deactivate() {}
