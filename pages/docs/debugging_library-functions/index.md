---
title: Library Functions
---

By default debugging of library functions is turned off. 
If this is necessary, please proceed as follows: 
- Open the debug configuration file ```launch.json``` 
- Change the ```"debugOptions"``` (see below) of the relevant debug configuration to include the option ```"DebugStdLib"``` as follows:   
```python
    "configurations": [
          {
            "name": "Python",
            "type": "python",
            "request": "launch",
            "stopOnEntry": true,
            "pythonPath": "${config.python.pythonPath}",
            "program": "${file}",
            "cwd": "null",
            "debugOptions": [
              "WaitOnAbnormalExit",
              "WaitOnNormalExit",
              "RedirectOutput"
            ]
          },
```