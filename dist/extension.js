/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function valid(c) {
    return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}
// JSON.parse('
// {name:'fuck',store:18,load:18,advice:false}');
class Info {
    constructor(name, store, load, advice) {
        this.name = name;
        this.store = store;
        this.load = load;
        this.advice = advice;
    }
    printstr() {
        var info = "**异构内存优化插件**               \n\n"
            + "**变量名：**  " + String(this.name) + "               \n\n"
            + "**store：**" + String(this.store) + "              \n\n"
            + "**load：**" + String(this.load) + "              \n\n";
        // + "顺序读结构，**建议存放在NVM中**"
        if (this.advice) {
            info += "顺序读结构，**建议存放在NVM中**";
        }
        else {
            info += "非顺序读结构，**建议存放在DRAM中**";
        }
        return "";
    }
}
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "roy-ext1" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // vscode.window.showOpenDialog();
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello roy!');
    });
    context.subscriptions.push(disposable);
    let tmp = vscode.languages.registerHoverProvider('*', {
        provideHover(document, position, token) {
            // vscode.window.showInformationMessage(document.fileName);
            let line = document.lineAt(position.line).text;
            var str;
            var info;
            const editor = vscode.window.activeTextEditor;
            let wordRange = editor.document.getWordRangeAtPosition(position);
            let highlight = editor.document.getText(wordRange);
            // vscode.window.showInformationMessage(highlight);
            for (var i = 0; i < position.character; i++) {
                if (!valid(line.charCodeAt(i))) {
                    str = "";
                    continue;
                }
                str = str + line.charAt(i);
            }
            while (i < line.length) {
                if (!valid(line.charCodeAt(i))) {
                    break;
                }
                str = str + line.charAt(i);
                i++;
            }
            // vscode.window.showInformationMessage(String(str));
            info = "**异构内存优化插件**               \n\n"
                + "**变量名：**  " + String(str) + "               \n\n"
                + "**store：**10" + "              \n\n"
                + "**load：**1000" + "              \n\n"
                + "顺序读结构，**建议存放在NVM中**";
            // vscode.window.showInformationMessage(String(position.line) + " " + String(position.character));
            return new vscode.Hover(info);
        }
    });
    context.subscriptions.push(tmp);
    // classGoDocumentHighlightProviderimplements vscode.DocumentHighlightProvider{
    // 	public provideDocumentHighlights(
    // 			document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
    // 			vscode.DocumentHighlight[]|Thenable<vscode.DocumentHighlight[]>;
    // 	...
    // 	}
    // 	}
    // 	exportfunction activate(ctx: vscode.ExtensionContext):void{
    // 	...
    // 		ctx.subscriptions.push(
    // 			vscode.languages.registerDocumentHighlightProvider(
    // 				GO_MODE,newGoDocumentHighlightProvider()));
    // 	...
    // 	}
    // registerDocumentHighlightProvider(selector: DocumentSelector, provider: DocumentHighlightProvider)=
    let register_documentHighlightProvider = vscode.languages.registerDocumentHighlightProvider('*', {
        provideDocumentHighlights(document, position, token) {
            // vscode.window.showInformationMessage();
            var name1 = [new vscode.DocumentHighlight(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 7)), vscode.DocumentHighlightKind.Text),
                new vscode.DocumentHighlight(new vscode.Range(new vscode.Position(1, 0), new vscode.Position(1, 7)), vscode.DocumentHighlightKind.Write),
                new vscode.DocumentHighlight(new vscode.Range(new vscode.Position(2, 0), new vscode.Position(2, 7)), vscode.DocumentHighlightKind.Read)];
            return name1;
        }
    });
    context.subscriptions.push(register_documentHighlightProvider);
    vscode.languages.registerCodeLensProvider;
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
// const tokenTypes = new Map<string, number>();
// const tokenModifiers = new Map<string, number>();
// const legend = (function () {
// 	const tokenTypesLegend = [
// 		'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
// 		'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
// 		'method', 'macro', 'variable', 'parameter', 'property', 'label'
// 	];
// 	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
// 	const tokenModifiersLegend = [
// 		'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
// 		'modification', 'async'
// 	];
// 	tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));
// 	return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
// })();
// export function activate(context: vscode.ExtensionContext) {
// 	context.subscriptions.push(vscode.commands.registerCommand('roy-ext1.helloWorld', () => {
// 		vscode.window.showInformationMessage('Hello roy!');
// 	}));
// 	context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(
// 		{ language: '*'}, new DocumentSemanticTokensProvider(), legend));
// }
// interface IParsedToken {
// 	line: number;
// 	startCharacter: number;
// 	length: number;
// 	tokenType: string;
// 	tokenModifiers: string[];
// }
// class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
// 	async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
// 		const allTokens = this._parseText(document.getText());
// 		const builder = new vscode.SemanticTokensBuilder();
// 		allTokens.forEach((token) => {
// 			builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
// 		});
// 		return builder.build();
// 	}
// 	private _encodeTokenType(tokenType: string): number {
// 		if (tokenTypes.has(tokenType)) {
// 			return tokenTypes.get(tokenType)!;
// 		} else if (tokenType === 'notInLegend') {
// 			return tokenTypes.size + 2;
// 		}
// 		return 0;
// 	}
// 	private _encodeTokenModifiers(strTokenModifiers: string[]): number {
// 		let result = 0;
// 		for (let i = 0; i < strTokenModifiers.length; i++) {
// 			const tokenModifier = strTokenModifiers[i];
// 			if (tokenModifiers.has(tokenModifier)) {
// 				result = result | (1 << tokenModifiers.get(tokenModifier)!);
// 			} else if (tokenModifier === 'notInLegend') {
// 				result = result | (1 << tokenModifiers.size + 2);
// 			}
// 		}
// 		return result;
// 	}
// 	private _parseText(text: string): IParsedToken[] {
// 		const r: IParsedToken[] = [];
// 		const lines = text.split(/\r\n|\r|\n/);
// 		for (let i = 0; i < lines.length; i++) {
// 			const line = lines[i];
// 			let currentOffset = 0;
// 			do {
// 				const openOffset = line.indexOf('[', currentOffset);
// 				if (openOffset === -1) {
// 					break;
// 				}
// 				const closeOffset = line.indexOf(']', openOffset);
// 				if (closeOffset === -1) {
// 					break;
// 				}
// 				const tokenData = this._parseTextToken(line.substring(openOffset + 1, closeOffset));
// 				r.push({
// 					line: i,
// 					startCharacter: openOffset + 1,
// 					length: closeOffset - openOffset - 1,
// 					tokenType: tokenData.tokenType,
// 					tokenModifiers: tokenData.tokenModifiers
// 				});
// 				currentOffset = closeOffset;
// 			} while (true);
// 		}
// 		return r;
// 	}
// 	private _parseTextToken(text: string): { tokenType: string; tokenModifiers: string[]; } {
// 		const parts = text.split('.');
// 		return {
// 			tokenType: parts[0],
// 			tokenModifiers: parts.slice(1)
// 		};
// 	}
// }

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map