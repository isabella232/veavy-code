import {Uri, window, workspace} from "vscode";
import {readFileSync} from "fs";
import {join} from "path";

export function getWebviewContent(contextPath: string){
	let htmlPath;
	htmlPath = getHtmlPathUri("template", contextPath);
	if(htmlPath === undefined || htmlPath === null)
		htmlPath = getHtmlPathUri("error", contextPath);
	console.log(htmlPath.fsPath);
	return readFileSync(htmlPath.fsPath, "utf8");
}

export function getAppDetails(appName: string){
	var map = new Map<string, string>();
	if(appName.toLowerCase() == "messenger"){
		map.set("viewType", "weavyMessenger");
		map.set("appTitle", "MESSAGING");
		map.set("title", "Weavy Messaging");
	}else if(appName.toLowerCase() == "files"){
		map.set("viewType", "weavyFiles");
		map.set("appTitle", "SECURE FILE SHARING");
		map.set("title", "Weavy Secure File Sharing");
	}else if(appName.toLowerCase() == "posts"){
		map.set("viewType", "weavyPosts");
		map.set("appTitle", "FEEDS");
		map.set("title", "Weavy Feeds");
	}else if(appName.toLowerCase() == "tasks"){
		map.set("viewType", "weavyTasks");
		map.set("appTitle", "TASKS");
		map.set("title", "Weavy Tasks");
	}
	return map;
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

export function getLogo(contextPath: string){
	return Uri.file(join(contextPath, "content", "images", "icon.svg"));
}