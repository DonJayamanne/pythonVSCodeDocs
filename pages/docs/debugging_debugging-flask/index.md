---
title: Flask
---

Debugging Flask Applications is as simple as debugging any other Python Application.  

## Solution 1:  
Originally documented by [KEATH MILLIGAN on 13 October 2016](http://keathmilligan.net/debugging-a-flask-0-11-app-in-visual-studio-code/)

If you are using Flask 0.11.x, chances are you use the new “flask” command to launch your app. You could add a run script just for debugging, but that isn’t necessary. Here’s how you can debug your app without modifying your code:

First, be sure you have your [virtual environment](https://docs.python.org/3/library/venv.html) configured in VSCode (you are using a virtual environment, right?). Select Preferences > Workspace Settings from the menu. Your .vscode/settings.json file should have a line something like this:

```json
"python.pythonPath": "/Users/kmilligan/.virtualenvs/flask/bin/python"
```

In the .vscode directory, create a file named launch.json if it does not already exist. Change the “Flask” entry as follows:  
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Flask",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "${config.python.pythonPath}",
            "program": "${env.HOME}/.virtualenvs/flask/bin/flask",
            "env": {
                "FLASK_APP": "${workspaceRoot}/quickstart/app.py"
            },
            "args": [
                "run",
                "--no-debugger",
                "--no-reload"
            ],
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput"
            ]
        }
    ]
}
```

- Unless you really need to debug app startup, set ```stopOnEntry``` to false so it won’t break in library code.  
- Change program to the path to your “flask” command in the virtual environment. You can get this from the command line (with the virtual environment active) by typing “which flask” (Mac OSX/Linux/Unix) or “where flask” (Windows).  
- Change the ```FLASK_APP``` environment variable to the name of your app’s bootstrap file.  
- Set ```--no-debugger``` to avoid any potential conflicts with the Werkzueg debugger.  
- Set ```--no-reload```. The Python debugger doesn’t support module reloading.  

Now set some breakpoints and start debugging!

## Solution 2:  
The following section uses the sample application outlined [here](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) (assumes you have an old-style “run.py” script in your project). The sample flask application can be downloaded form [here](https://github.com/miguelgrinberg/microblog/archive/version-0.1.zip).

- Download and extract the above flask application  
- Open the directory in Visual Studio Code  
- Modify the run.py file as follows:  
```python
#!flask/bin/python
from app import app

#Do not add debug=True
#app.run(debug=True)

app.run()
```
- Debug the Flask application using the standard Python debug configuration (see below):  
```json
        {
            "name": "Python",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "${config.python.pythonPath}",
            "program": "${file}",
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput"
            ]
        },
```

Note:  
- Breakpoints added to the views work as expected

