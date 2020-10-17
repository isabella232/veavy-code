import * as vscode from 'vscode';
import {getWebviewContent, checkForMandatory, getLogo, getAppDetails} from './utils';

export function weavyTemplateFunction(appName: string, currentPanelTemp: vscode.WebviewPanel, context: vscode.ExtensionContext): void {

    let windowMap = new Map();
  
    const columnToShowInM = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    
    const appDetails = getAppDetails(appName);
    var viewType = appDetails.get("viewType");
    if(viewType == undefined) viewType = "";

    var title = appDetails.get("title");
    if(title === undefined) title = "Error";

    let currentPanel;
    if(windowMap.has(appName)) currentPanel = windowMap.get(appName);
    else currentPanel = currentPanelTemp;
    
    if (currentPanel) {
      currentPanel.reveal(columnToShowInM);
    } else {
      currentPanel = vscode.window.createWebviewPanel(
        viewType,
        title,
        columnToShowInM || vscode.ViewColumn.One,
        {
                  enableScripts: true
            }
      );

      windowMap.set(appName, currentPanel);

      const logoUri = getLogo(context.extensionPath);
      currentPanel.iconPath = logoUri;

      const weavyLogo = currentPanel.webview.asWebviewUri(logoUri);
      const appTitle = appDetails.get("appTitle");
      const weavy = vscode.workspace.getConfiguration("weavy");
      const weavyUrl = weavy.get<string>("url");
      const weavyUserMail = weavy.get<string>("user.mail");
      const spacesKey = weavy.get<string>("space.key");
      const appKey = weavy.get<string>(`${appName}.key`);

      const checkStatus = checkForMandatory(weavyUrl, weavyUserMail, spacesKey);
      
      if(!checkStatus) return;
      
      if(appKey === undefined || appKey === null || appKey === ""){
        vscode.window.showErrorMessage(`Weavy ${appTitle} Key Cannot be empty/null. Please update a correct value in settings`);
        return;
      }

      const content = eval("`" + getWebviewContent(context.extensionPath) + "`");
      
      currentPanel.webview.html = content;

      currentPanel.onDidDispose(
        () => {
          windowMap.delete(appName);
        },
        null,
        context.subscriptions
      );
  }

}