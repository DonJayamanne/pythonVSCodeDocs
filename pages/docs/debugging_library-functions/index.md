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
            "program": "${file}",
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput",
                "DebugStdLib"
            ]
        },
```