---
title: Miscellaneous
---

### Select an Interpreter
The extension now exposes a command that will display a list of known (automatically discovered) interpreters. Selecting an item from this interpreter will automatically configure your workspace settings file ```settings.json``` to make use of this interpreter.  
This now frees you from having to manually open the ```settings.json``` file and make the necessary changes.  

**How are the interpreters discovered?** 
- Standard paths such as ```/usr/local/bin, /usr/sbin, /sbin, C:\\Python2.7```, etc. will be searched for interpreters 
- Virtual environments located under the workspace (project) directory will be searched  
- Conda environments will be listed

**How to use this feature?**     

- Select the command ```Python: Select Workspace Interpreter``` from the ```[command palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette)```   
- Upon selecting the above command a list of discovered interpreters will be displayed in a ```quick pick``` list     
- Selecting an interpreter from this list will update the ```settings.json``` file automatically.    

**Interpreter is not listed**  
If the interpreter you are looking for is not listed here, then please enter is manually using the instructions found [here](https://github.com/DonJayamanne/pythonVSCode/wiki/Python-Path-and-Version/_edit#manual-configuration). 

![Select Interpreter](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/misc/commands.png?raw=true)
![Select Interpreter](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/misc/interpreters.png?raw=true)

### Execute in Python Terminal
The extension now exposes a command that allows you to:
- Execute the currently opened file in a python terminal window
- Execute a file from the explorer in a python terminal window
- And finally to send the selected text in the current editor to a python terminal window

![Run from Explorer](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/misc/runFileExplorer.png?raw=true)
![Run from Editor](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/misc/runFile.png?raw=true)
![Run Selection](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/misc/runSelection.png?raw=true)
