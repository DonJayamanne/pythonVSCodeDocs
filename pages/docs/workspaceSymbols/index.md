---
title: Workspace Symbols
---

Displaying and navigating through Workspace symbols in a Python project is supported with the use of [Exuberant CTags](http://ctags.sourceforge.net/) or [Universal CTags for Windows](https://github.com/universal-ctags/ctags-win32).   

### Prerequisites
- [Exuberant CTags](http://ctags.sourceforge.net/) needs to be installed or [Universal CTags for Windows](https://github.com/universal-ctags/ctags-win32).   

**Mac (OS X)**    
- Using Homebrew:  
    + ```brew install ctags```
  
- Using MacPorts:  
    + ```port install ctags```
  
**Linux**  
- For Debian-based systems (Ubuntu, Mint, etc.):  
    + ```sudo apt-get install exuberant-ctags```
  
- For Red Hat-based systems (Red Hat, Fedora, CentOS):  
    + ```sudo yum install ctags```
  
**<a id="Install-Windows"></a>Windows**    
- Download the CTags binary from the [Universal CTags site](https://github.com/universal-ctags/ctags-win32).  
- Option 1: Extract ctags.exe from the downloaded zip to any folder within your PATH so that Visual Studio Code can run it.    
- Option 2: Extract to any folder and add the path to this folder to the command setting.  
- Option 3: Extract to any folder and define that path in the ```python.workspaceSymbols.ctagsPath``` setting of your user settings file (```settings.json```).    
