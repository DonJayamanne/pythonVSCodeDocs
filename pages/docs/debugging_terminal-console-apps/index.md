---
title: Capture User Input
---

Capturing user input via Console Application whist debugging a Python application is possible when using a Terminal (console window) to capture the input.

There are two options for using terminals in Visual Studio Code when debugging: 
- [Option 1](#Option-1): Use the Visual Studio Code Terminal (integrated terminal)  
- [Option 2](#Option-2): Use the native (OS) Terminal (external terminal) 

### <a id="Option-1"></a>Option 1
* Open the file to be debugged 
* From the debug configuration select **Integrated Terminal/Console** 
* Start debugging 
* The integrated terminal will be displayed (if not you can open it using instructions outlined [here](https://code.visualstudio.com/docs/editor/integrated-terminal))

Note: All debug output will now be displayed in the Terminal/Console Window and not in the Python Debugger console.

![Sample](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/debug/integratedDebugger.gif)

### <a id="Option-2"></a>Option 2
* Open the file to be debugged 
* From the debug configuration select **External Terminal/Console** 
* Start debugging 
* The external terminal will be displayed

Note: All debug output will now be displayed in the Terminal/Console Window and not in the Python Debugger console.

![Sample](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/debugUserInput.gif)