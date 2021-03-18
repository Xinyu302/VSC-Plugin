import { Range, window, SnippetString, OutputChannel } from "vscode";

let channel_name_set:Set<string> = new Set();
function addConsoleLog(structName: string,logs: string) {
    if (channel_name_set.has(structName)) return;

    let channel:OutputChannel = window.createOutputChannel(structName);
    channel_name_set.add(structName)
    channel.appendLine(logs);
    channel.show();
    // let lineNumStr = await window.showInputBox({
    //     prompt: "Line Number"
    //   });
      
    //   let lineNum = +lineNumStr!;
    
    //   let insertionLocation = new Range(lineNum - 1, 0, lineNum - 1, 0);
    //   let snippet = new SnippetString("console.log($1);\n");
    
    //   window.activeTextEditor!.insertSnippet(snippet, insertionLocation);
    
}

export {addConsoleLog};