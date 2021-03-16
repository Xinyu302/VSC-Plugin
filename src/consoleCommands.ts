
import { Range, window, SnippetString, OutputChannel } from "vscode";

let channels:OutputChannel[] = [];
function addConsoleLog(structName: string,logs: string) {
    if (channels.filter(value=>value.name==structName).length) {
        return;
    } 
    let channel:OutputChannel = window.createOutputChannel(structName);
    channels.push(channel);
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