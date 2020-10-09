import {Uri, window, workspace} from "vscode";
import {readFileSync} from "fs";
import {join} from "path";

export function getWebviewContent(appName: string, contextPath: string){
	let htmlPath;
	switch(appName){
		case "messenger":
			htmlPath = getHtmlPathUri("messenger", contextPath);
			break;
		case "files":
			htmlPath = getHtmlPathUri("files", contextPath);
			break;
		case "posts":
			htmlPath = getHtmlPathUri("posts", contextPath);
			break;
		default:
			htmlPath = getHtmlPathUri("a", contextPath);
			
	}
	if(htmlPath === undefined)
		htmlPath = getHtmlPathUri("error", contextPath);
	
	console.log(htmlPath.fsPath);
	return readFileSync(htmlPath.fsPath, "utf8");
}

export function checkForMandatory(weavyUrl:string|any, weavyUserMail: string|any, spacesKey: string|any): boolean{
	
	if(weavyUrl === undefined || weavyUrl === null || weavyUrl === ""){
		window.showErrorMessage("Weavy App Url Endpoint Cannot be empty/null. Please update a correct value in settings");
		return false;
	}
	if(weavyUserMail === undefined || weavyUserMail === null || weavyUserMail === ""){
		window.showErrorMessage("Weavy User Mail Cannot be empty/null. Please update a correct value in settings");
		return false;
	}
	if(spacesKey === undefined || spacesKey === null || spacesKey === ""){
		window.showErrorMessage(`Weavy Spaces Key Cannot be empty/null. Please update a correct value in settings`);
		return false;
	}
	return true;
}

function getHtmlPathUri(fileName: string, contextPath: string){
	return Uri.file(join(contextPath, "content", "html", `${fileName}.html`)).with({scheme: "vscode-resource"});
}