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
JSON.parse;
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
    var nameArray = ['int', 'main'];
    let register_documentHighlightProvider = vscode.languages.registerDocumentHighlightProvider('*', {
        provideDocumentHighlights(document, position, token) {
            // vscode.window.showInformationMessage();
            var name = [];
            nameArray.forEach(value => {
                let idx = -1;
                let cnt = 0;
                while ((idx = document.getText().indexOf(value, idx + 1)) >= 0) {
                    const pos = document.positionAt(idx);
                    const range = document.getWordRangeAtPosition(pos);
                    name.push(new vscode.DocumentHighlight(range));
                    cnt++;
                }
            });
            return name;
        }
    });
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
    let register_codeLensProvider = vscode.languages.registerCodeLensProvider('*', {
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
        provideCodeLenses(document, token) {
            return null;
        },
        /**
         * This function will be called for each visible code lens, usually when scrolling and after
         * calls to [compute](#CodeLensProvider.provideCodeLenses)-lenses.
         *
         * @param codeLens Code lens that must be resolved.
         * @param token A cancellation token.
         * @return The given, resolved code lens or thenable that resolves to such.
         */
        resolveCodeLens: (codeLens, token) => {
            return codeLens;
        }
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map