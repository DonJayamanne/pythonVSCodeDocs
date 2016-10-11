---
title: Django
---

- [Standard debugging](#Standard-debugging)
- [Debugging templates](#Templates)

### <a id="Standard-debugging"></a>Standard debugging
Debugging django applications requires the use of the 'Django' debug configuration.  
Unfortunately currently live reloading (automatic reloading) of django applications is not possible whilst debugging.  
Use either the 'django' debugging configuration or add the following settings in the ```launch.json``` file as following:   
```json
        {
            "name": "Django",
            "type": "python",
            "request": "launch",
            "stopOnEntry": false,
            "pythonPath": "${config.python.pythonPath}",
            "program": "${workspaceRoot}/manage.py",
            "args": [
                "runserver",
                "--noreload"
            ],
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput",
                "DjangoDebugging"
            ]
        },
```

### <a id="Templates"></a>Templates
Debugging Django templates is as simple as adding breakpoints to the ```templates```.  
Django templates must be html files.  
