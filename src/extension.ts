// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { strict } from 'assert';
import { Http2ServerRequest } from 'http2';
import { isNull, isSymbol, TextDecoder } from 'util';
import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import { addConsoleLog } from "./consoleCommands";

let sug: string;
let unsug: string;

class Info {
	name:string;
	store:number;
	load:number;
	advice:boolean;
	
	constructor(name:string,store:number,load:number,advice:boolean) { 
        this.name = name; 
		this.store = store;
		this.load = load;
		this.advice = advice;
    }

	printstr():string {
		var info = "**异构内存优化插件**               \n\n" 
				+ "**变量名：**  "+ String(this.name) + "               \n\n" 
				+ "**store：**" +  String(this.store) + "              \n\n" 
				+ "**load：**" + String(this.load) +  "              \n\n" ;
				// + "顺序读结构，**建议存放在NVM中**"
		if (this.advice) {
			info += "顺序读结构，**建议存放在NVM中**";
		} else {
			info += "非顺序读结构，**建议存放在DRAM中**";
		}
		return "";
	}

}

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "roy-ext1" is now active!');
	var dic: string[][] = [];
	sug = fs.readFileSync("/Users/yxy/Desktop/tscode/hello-world/suggest", "utf8");
	unsug = fs.readFileSync("/Users/yxy/Desktop/tscode/hello-world/unsuggest", "utf8");



	var suggest:string[] = sug.split('\n');
	
			
	for (var i = 0; i < suggest.length; i++) {
		suggest[i] = suggest[i].replace(/\s+/g,"");
	}
	
	var unsuggest:string[] = unsug.split('\n');
	for (var i = 0; i < unsuggest.length; i++) {
		unsuggest[i] = unsuggest[i].replace(/\s+/g,"");
	}

	let commandDisposable = vscode.commands.registerCommand(
		"extension.addConsoleLog",
		addConsoleLog
	);
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
		// vscode.window.showOpenDialog({
		// 	defaultUri: vscode.Uri.file("/Users/yxy/Desktop/tscode/aaa/README.md")
		// });
		vscode.window.showTextDocument(
			vscode.Uri.file("/Users/yxy/Desktop/tscode/aaa/README.md"),
			{
				preview: true
			}
			// vscode.Uri.file("/Users/yxy/Desktop/tscode/aaa/README.md")
		);
		let text:string = fs.readFileSync("/Users/yxy/Desktop/tscode/hello-world/a.csv", "utf8");
		
		let lines:string[] = text.split('\n');
		
		for (var i = 0; i < lines.length; i++) {
			let tmp:string[] = lines[i].split(",")
			dic.push(tmp)
		}
		// console.log(dic[1][1])
		// console.log(lines[0])
		vscode.window.showInformationMessage('Hello roy!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(commandDisposable);

	let hover = vscode.languages.registerHoverProvider('*', {
		provideHover(document, position, token) {
			// vscode.window.showInformationMessage(document.fileName);
			let line = document.lineAt(position.line).text;
			var str;
			var info;
			const editor = vscode.window.activeTextEditor!;
			let wordRange = editor.document.getWordRangeAtPosition(position);
			let highlight_text = editor.document.getText(wordRange);

			if (suggest.filter(value => value == highlight_text).length == 0
				&& unsuggest.filter(value => value == highlight_text).length == 0)  {
				return null;
			}
			info = "**异构内存访存模式检测**\n\n" 
				+ "**结构名：**"+ String(highlight_text) + "\n\n" 
				+ "**store：**10" + "\n\n" 
				+ "**load：**1000" + "\n\n" 
				+ "**放置建议：**顺序读结构，**建议存放在NVM中**" + "\n\n"
				+ "**冗余零比例：**30.34%"
			return new vscode.Hover(info);
		}
	});
	context.subscriptions.push(hover);
	
	let register_documentHighlightProvider = vscode.languages.registerDocumentHighlightProvider('*',
	{
		provideDocumentHighlights(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentHighlight[]>{
			// vscode.window.showInformationMessage();
			// let sug: string = fs.readFileSync("/Users/yxy/Desktop/tscode/hello-world/suggest", "utf8", function (err:string, data:string) {
			// 	console.log(data);
			// 	return data;
			// });
			const text = document.getText();
			
			var name: vscode.DocumentHighlight[] = [];
			suggest.forEach(value => {
				if (value == null || value.length === 0) {
					return;
				}
				let idx = -1;
				while ((idx = text.indexOf(value,idx + 1)) >= 0) {
					const pos = document.positionAt(idx);
                	const range = document.getWordRangeAtPosition(pos);
					if (document.getText(range) != value) {
						continue;
					}
					name.push(new vscode.DocumentHighlight(range!));
					vscode.window.showInformationMessage(String(name));
				}
			});
			unsuggest.forEach(value => {
				if (value == null || value.length === 0) {
					return;
				}
				let idx = -1;
				while ((idx = text.indexOf(value,idx + 1)) >= 0) {
					const pos = document.positionAt(idx);
                	const range = document.getWordRangeAtPosition(pos);
					if (document.getText(range) != value) {
						continue;
					}
					name.push(new vscode.DocumentHighlight(range!, 2));
				}
			});
			return name;
		}
	}
	);
	context.subscriptions.push(register_documentHighlightProvider);

	// var s1 =  vscode.languages.registerCodeLensProvider({scheme: 'file', language: 'csharp'}, {
    //     provideCodeLenses(document, token) {
    //         const result: vscode.CodeLens[] = [];
    //         let idx = -1;
    //         let count = 0;
    //         while ((idx = document.getText().indexOf('abc', idx + 1)) >= 0) {
    //             count ++ ;
    //         }
    //         while ((idx = document.getText().indexOf('abc', idx + 1)) >= 0) {
    //             const pos = document.positionAt(idx);
    //             const range = document.getWordRangeAtPosition(pos);
    //             const titleInfo = (count === 1 ? `${count} reference` : `${count} references`);
    //             result.push(new vscode.CodeLens(range, { title: titleInfo, command: 'extension.sayHello', arguments: ["123", "456", "789"]}));
    //         }
    //         return result;
    //     },
    //     resolveCodeLens: (codeLens: vscode.CodeLens, token: vscode.CancellationToken) => {
    //         return codeLens;
    //     },
        
    // });

    // var s2 =  vscode.languages.registerCodeLensProvider({ pattern: '**/*.abc' }, {
    //     provideCodeLenses(document, token) {
    //         const result: vscode.CodeLens[] = [];
    //         let idx = -1;
    //         let count = 0;
    //         while ((idx = document.getText().indexOf('abc', idx + 1)) >= 0) {
    //             count ++ ;
    //         }
    //         while ((idx = document.getText().indexOf('abc', idx + 1)) >= 0) {
    //             const pos = document.positionAt(idx);
    //             const range = document.getWordRangeAtPosition(pos);
    //             const titleInfo = (count === 1 ? `${count} reference` : `${count} references`);
    //             result.push(new vscode.CodeLens(range, { title: titleInfo, command: 'extension.sayHello', arguments: ["abc abc abc"] }));
    //         }
    //         return result;
    //     },
    //     resolveCodeLens: (codeLens: vscode.CodeLens, token: vscode.CancellationToken) => {
    //         codeLens.command.command = 'extension.sayHello';
    //         codeLens.command.arguments = ["aaa bbb ccc"];
    //         return codeLens;
    //     }
    // });

	let register_codeLensProvider = vscode.languages.registerCodeLensProvider('*',
	{

        /**
         * Compute a list of [lenses](#CodeLens). This call should return as fast as possible and if
         * computing the commands is expensive implementors should only return code lens objects with the
         * range set and implement [resolve](#CodeLensProvider.resolveCodeLens).
         *
         * @param document The document in which the command was invoked.
         * @param token A cancellation token.
         * @return An array of code lenses or a thenable that resolves to such. The lack of a result can be
         * signaled by returning `undefined`, `null`, or an empty array.
         */
        provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken) {
			const text = document.getText();
			
			var codeLens: vscode.CodeLens[] = [];
			suggest.forEach(value => {
				if (value == null || value.length === 0) {
					return;
				}
				let idx = -1;
				while ((idx = text.indexOf(value,idx + 1)) >= 0) {
					const pos = document.positionAt(idx);
                	const range = document.getWordRangeAtPosition(pos);
					if (document.getText(range) != value) {
						continue;
					}
					codeLens.push(new vscode.CodeLens(range!, 
						{ title: "查看调用上下文", command: 'extension.addConsoleLog', arguments: [value,"fuck:1\nfuck:2\n"] }));
					// vscode.window.showInformationMessage(String(codeLens));
				}
			});

			return codeLens;
		},

        /**
         * This function will be called for each visible code lens, usually when scrolling and after
         * calls to [compute](#CodeLensProvider.provideCodeLenses)-lenses.
         *
         * @param codeLens Code lens that must be resolved.
         * @param token A cancellation token.
         * @return The given, resolved code lens or thenable that resolves to such.
         */
        resolveCodeLens:(codeLens: vscode.CodeLens, token: vscode.CancellationToken) => {
			codeLens.command!.command = 'hello-world.helloWorld';
    		codeLens.command!.arguments = ["aaa bbb ccc"];
			return codeLens;
		}
	});

	context.subscriptions.push(register_codeLensProvider);

}

// this method is called when your extension is deactivated
export function deactivate() {}


