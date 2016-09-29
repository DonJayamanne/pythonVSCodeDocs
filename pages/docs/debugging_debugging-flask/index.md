---
title: Flask
---

Debugging Flask Applications is as simple as debugging any other Python Application.  
The following section uses the sample application outlined [here](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world). The sample flask application can be downloaded form [here](https://github.com/miguelgrinberg/microblog/archive/version-0.1.zip).

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
            "stopOnEntry": true,
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
