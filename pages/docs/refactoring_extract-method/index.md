---
title: Extract Method
---

Extract refactorings are performed for the various expressions and blocks of code.  
The current release will extract all similar occurrences (within the current scope) of the selected expression and replace with a method call.

### How to invoke the Extract Method command?
There are a three options to invoke the extract method command, they are as follows:

**Option 1 ([Command Palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette))**    
- Select the text (expression/code block) to be extracted into a method
- Launch the [Command Palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette) via the shortcut (⇧⌘P or Ctrl+Shift+P)
- Select the 'Extract Method' command
- The selected expression(s) or block(s) of code will be extracted into a method with a random name prefixed 'newmethod'
- Next provide a new name for this method

![Sample](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractMethodCmd.gif)

**Option 2 ([Quick Fix](https://code.visualstudio.com/docs/languages/csharp#_quick-fixes-suggestions))**  
- Select the text (expression/code block) to be extracted into a method
- Launch the [Quick Fix](https://code.visualstudio.com/docs/languages/csharp#_quick-fixes-suggestions) command from the Command Palette (or use the short cut ⌘. or cmd+.)
- Select the 'Extract Method' command from the menu
- The selected expression(s) or block(s) of code will be extracted into a method with a random name prefixed 'newmethod'
- Next provide a new name for this method

_Launching the Quick Fix command from the Command Palette_   
![Sample using Quick Fix Command](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractMethodQuickFix.gif)
   
_Launching the Quick Fix command using the keyboard shortcut_      
![Sample using Quick Fix Short Cut](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/refactorExtractMethod.gif)
  

**Option 3 (Keyboard Shortcut)**  
- Setup a [custom keyboard](https://code.visualstudio.com/docs/customization/keybindings#_customizing-shortcuts) short cut for the command **'python.refactorExtractMethod'**
- Select the text (expression/code block) to be extracted into a method in the editor
- Invoke the above command using the designated keyboard shortcut
