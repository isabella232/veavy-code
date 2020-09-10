import {Uri} from "vscode";
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
	}
	if(htmlPath === undefined)
		htmlPath = getHtmlPathUri("error", contextPath);
	
	console.log(htmlPath.fsPath);
	return readFileSync(htmlPath.fsPath, "utf8");
}

function getHtmlPathUri(fileName: string, contextPath: string){
	return Uri.file(join(contextPath, "content", "html", `${fileName}.html`)).with({scheme: "vscode-resource"});
}