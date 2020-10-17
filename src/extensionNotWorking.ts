import * as vscode from 'vscode';
import { weavyTemplateFunction } from './weavyTemplate';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "weavy" is now active!');
    var apps:string[] = new Array("messenger", "files", "posts", "tasks");
    let currentPanel: vscode.WebviewPanel;
    
    for (let app of apps) {
        context.subscriptions.push(vscode.commands.registerCommand(`weavy.${app}`, () => weavyTemplateFunction(app, currentPanel, context)));
    }
}

export function deactivate() {}