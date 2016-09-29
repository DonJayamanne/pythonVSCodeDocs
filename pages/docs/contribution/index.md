---
title: Contribution
---

* Please feel free to fork and submit pull requests
* Feature requests can be added [here](https://github.com/DonJayamanne/pythonVSCode/issues/)

## Prerequisites
1. Node.js
2. Python v2.6 or later (required only for testing the extension and running unit tests)
3. Windows, OS X or Linux

## Setup
```
git clone https://github.com/DonJayamanne/pythonVSCode
cd pythonVSCode
npm install
```
## Development workflow
### 1. Incremental Build   
Run the build Task from the [Command Palette](https://code.visualstudio.com/docs/editor/tasks) (short cut CTRL+SHIFT+B or ⇧⌘B)

### 2. Errors and Warnings**   
TypeScript errors and warnings will be displayed in VS Code in the Problems Panel (CTRL+SHIFT+M or ⇧⌘M)

### 3. Validate your changes**  
To test the changes you launch a development version of VS Code on the workspace vscode, which you are currently editing.
Use the "Launch Extension" launch option.

### 4. Unit Tests**  
Run the Unit Tests via the "Launch Test" launch option.   
Currently unit tests only run on [Travis](https://travis-ci.org/DonJayamanne/pythonVSCode)

_Requirements_   
1. Ensure you have disabled breaking into 'Uncaught Exceptions' when running the Unit Tests   
2. For the linters and formatters tests to pass successfully, you will need to have those corresponding Python libraries installed locally   

## Debugging the extension
### 1. Standard Debugging**   
Clone the repo into any directory and start debugging.
From there use the "Launch Extension" launch option.   

### 2. Debugging the Python Extension Debugger**  
The easiest way to debug the Python Debugger (in my opinion) is to clone this git repo directory into [your](https://code.visualstudio.com/docs/extensions/install-extension#_your-extensions-folder) extensions directory.   
From there use the ```Launch Extension as debugserver``` launch option.
