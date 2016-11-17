---
title: Sudo (root privileges)
---

Debugging of applications that root (sudo) privileges is possible, though currently limited to external console applications. This is because of the prompt (terminal input) required to capture the password.

- Select the ```Python Console App``` debug configuration, when debugging the application  
- Open the launch.json file and add the option ```sudo``` to ```debugOptions``` as follows:  
```json
          {
            "name": "External Terminal/Console",
            "type": "python",
            "request": "launch",
            "stopOnEntry": true,
            "pythonPath": "${config.python.pythonPath}",
            "program": "${file}",
            "cwd": "null",
            "console": "externalTerminal",
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "Sudo"
            ]
        },
```