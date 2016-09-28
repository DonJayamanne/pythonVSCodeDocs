---
title: Configuration
---

### Standard settings
```json
    "python.jupyter.defaultKernel": "",
    "python.jupyter.startupCode": [
        "%matplotlib inline"
    ],
    "python.jupyter.appendResults": true
```

### Default kernel
If you have more than one kernel you could optionally configure the default kernel either at a user level of workspace (project) level.
If configuring at a user level then edit the [user settings](https://code.visualstudio.com/docs/customization/userandworkspace) file else edit the [workspace settings](https://code.visualstudio.com/docs/customization/userandworkspace) file.
Add or change the following setting to setup the default kernel:
```json
"python.jupyter.defaultKernel": "Python 3"
```

### Startup code
When using libraries such as matplotlib, the default behaviour of jupyter is to display an interactive graph that is (quite unfortunately - for now) supported only in the Jupyter Notebook. 
Note: This will change in a future release of this extension along with a future release of matplotlib. 
Such interactive graphs are only understood by the Jupyter Notebook application and not by any other application. The solution is to execute the magic command ```%matplotlib inline```. This instructs the jupyter kernel to send an output that can be displayed inline.

It is assumed that most developers will have matplotlib installed, if not you will see a message similar to the following:
```Failed to execute kernel startup code. Details: ImportError: No module named matplotlib```.
This could be avoided if you changed the startup code as follows (either in [user or worksapce settings](https://code.visualstudio.com/docs/customization/userandworkspace)): 

```json
    "python.jupyter.startupCode": [
    ]
```

If on the other hand, you had some standard code to be executed you could always update it as follows:
Each line of code as a separate item.   
```json
    "python.jupyter.startupCode": [
        "%matplotlib inline",
        "... additional command...",
        "... additional command..."
        "... additional command..."
    ]
```

### Displaying results 
By default results are appended in the results window.
This behaviour could be changed such that previous resuls are cleared when displaying the latest results.

As in any other case, this could be configured either in the [user or worksapce settings](https://code.visualstudio.com/docs/customization/userandworkspace) as follows: 

```json
"python.jupyter.appendResults": false
```
