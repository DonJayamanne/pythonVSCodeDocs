---
title: Extract Variables
---

Extract refactorings are performed for the various expressions and blocks of code, including strings.
Currently Extract refactoring on substrings is not supported.  
Refactoring is limited to complete expressions and blocks of code.

The current release will extract all occurenes (within the current scope) of the selected expression and replace with a variable.

### How to invoke the Extract Variable command?
There are a two options to invoke the extract variable command, they are as follows:

**Option 1 ([Command Palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette))**  
- Select the text (expression) to be extracted into a variable
- Launch the [Command Palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette) via the shortcut (⇧⌘P or Ctrl+Shift+P)
- Select the 'Extract Variable' command
- The selected expression(s) will be extracted into a variable with a random name prefixed 'newvariable'
- Next provide a new name for this variable

![Sample](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractVarCmd.gif)

**Option 2 ([Quick Fix](https://code.visualstudio.com/docs/languages/csharp#_quick-fixes-suggestions))**  
- Select the text (expression) to be extracted into a variable
- Launch the [Quick Fix](https://code.visualstudio.com/docs/languages/csharp#_quick-fixes-suggestions) command from the Command Palette (or use the short cut ⌘. or cmd+.)
- Select the 'Extract Variable' command from the menu
- The selected expression(s) will be extracted into a variable with a random name prefixed 'newvariable'
- Next provide a new name for this variable

_Launching the Quick Fix command from the Command Palette_    
![Sample using Quick Fix Command](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractVarQuickFix.gif)
   
_Launching the Quick Fix command using the keyboard shortcut_      
![Sample using Quick Fix Short Cut](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractVar.gif)
  

**Option 3 (Keyboard Shortcut)**  
- Setup a [custom keyboard](https://code.visualstudio.com/docs/customization/keybindings#_customizing-shortcuts) short cut for the command **'python.refactorExtractVariable'**
- Select the text (expression) to be extracted into a variable in the editor
- Invoke the above command using the designated keyboard shortcut
