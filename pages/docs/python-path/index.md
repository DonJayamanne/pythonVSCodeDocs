---
title: Python Path and Version
---

By default the extension uses the Python interpreter available in the current path. You could always change this by specifying the path to the interpreter in the [user or worksapce settings](https://code.visualstudio.com/docs/customization/userandworkspace).

## [Selecting an interpreter](/docs/miscellaneous/#Select-an-Interpreter)
Configuring the extension to use a particular interpreter is now easy. 
All you now need to do is make use of the command [```Select Workspace Interpreter```](https://github.com/DonJayamanne/pythonVSCode/wiki/Miscellaneous#select-an-interpreter) from the command palette and select an interpreter from the list. 
If the interpreter you are looking for isn't listed here, then please proceed to the next section and enter it manually. 
 
## Manual Configuration
 
**Python Version used for Intellisense, Autocomplete, Linting, Formatting, etc**  
The same python interpreter is used for intellisense, autocomplete, linting, formatting, etc. (everything other than debugging). The standard interpreter used is the first "python" interpreter encountered in the current path.

If a specific version is to be used, then configure the path to the python interpreter in the **User or Workspace Settings file (settings.json)** as follows.    
Ensure to specify the fully qualified name of the python executable (Mac and Linux supported).
```json
"python.pythonPath": "c:/python27/python.exe"
```

## Virtual Environments
There are two approaches to to getting this extension working in a particular Virtual Environment.

**Option 1: Ensure the path to the python interpreter is set in python.pythonPath as defined previously.**  

_Note: Do remember to configure the pythonPath in launch.json as well._  
```json
{
    "python.pythonPath": "/home/xxx/dev/ala/venv/bin/python"
}
```
Finally, restart VS Code, necessary for intellisense to work (future release will not require a restart)  
Ensure the libraries/modules you plan on using for linting are also installed within this virtual environment. 

**Option 2: Activate the Virtual Environment from your Terminal/Command Window and then launch VS Code.**  
1. _Ensure none of the Python paths are configured in the settings.json file (leave them to their defaults)._ 
2. Open your terminal (command) window and activate the relevant Python environment
3. _Close all instances of VS Code_    
3. Next, launch VS Code from that same terminal (command window) session  
```
(venv) ter@minal:~$ code .
```

## <a id="Python-Version-used-for-debugging"></a>Python Version used for debugging
Details on configuration settings for debugging can be found here [Debugging](https://github.com/DonJayamanne/pythonVSCode/wiki/Debugging).    

Configuring the version of the python executable is no longer necessary.  
Provided the setting ```python.pythonPath``` in settings.json (see above) has been configured correctly, the debugger will use this same setting.

This is made possible by setting the value of the pythonPath setting to ```${config.python.pythonPath}```. I.e. the debugger merely references the pythonPath setting from the settings.json file.


```json
{
    "name": "Python",
    "type": "python",
    "request": "launch",
    "stopOnEntry": true,
    "program": "${file}",
    "pythonPath": "${config.python.pythonPath}",
    "debugOptions": [
        "WaitOnAbnormalExit",
        "WaitOnNormalExit",
        "RedirectOutput"
    ]
}
```

## Relative Paths to Python Interpreter
Unfortunately use of relative paths when configuring the interpreter in settings.json will not work with the debugger. Hence the solution is to provide the fully qualified path. 
This could be achieved with the use of simple variables such as the following:   
Where ```${workspaceRoot}``` resolves to the current work space (project) directory.  
```json
{
    "python.pythonPath": "${workspaceRoot}/venv/bin/python"
}
```

## Environment Variables
Similar to the use of ```${workspaceRoot}```, environment variables could be used in configuring the path to the python interpreter. 
Where ```${env.PYTHONPATH}``` resolves to the value of the environment variable xyz.  
```json
{
    "python.pythonPath": "${env.PYTHONPATH}/venv/bin/python"
}
```
