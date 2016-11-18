---
title: Linting
---

### 1. Unable to import <module> (pylint)
* Scenario: You have a module installed, however the linter in the IDE is complaining about; not being able to import the module, hence error messages such as the following are displayed as linter errors:
```
.. unable to import 'xxx' .. 
```
* Cause: The Python extension is most likely using the wrong version of Pylint. 

**Solution 1: (configure workspace settings to point to fully qualified python executable):**  
1. Open the workspace settings (settings.json)  
2. Identify the fully qualified path to the python executable (this could even be a virtual environment)   
3. Ensure Pylint is installed for the above python environment  
4. Configure the setting "pythonPath" to point to (previously identified) the fully qualified python executable.   
```
"python.pythonPath": "/users/xxx/bin/python"
```

**Solution 2: (open VS Code from an activated virtual environment):**  
1. Open the terminal window  
2. Activate the relevant python virtual environment  
3. Ensure Pylint is installed within this virtual environment ```pip install pylint```  
4. Close all instances of VS Code  
5. Launch VS Code from within this terminal window  
   (this will ensure the VS Code process will inherit all of the Virtual Env environment settings)  

### 2. Linting with xxx failed. ... 
Listing could fail due to a number of reasons. Please check each of the following.

**Cause: The path to the python executable is incorrect**   
Solution: [Configure the path to the python executable in the settings.json](/docs/python-path/)   

**Cause: The linter has not been installed in the Python environment being used**   
Solution: Identify the Python environment (executable) [configured in settings.json](/docs/python-path/). Next install the linter(s) against this Python environment (use the corresponding Pip).

**Cause: The Path to the linter is incorrect**   
Solution: If you have provided a custom path to the linter in settings.json, then ensure this file path exist.

For further information on configuring Linters can be found [here](/docs/linting/).

### 3. Ignore certain messages   
It is possible you would like to ignore certain linter messages. This could be done easily.  
Generally most linters support configuration files, hence all you need to do is create the relevant configuration file and ignore the appropriate error message.  
If on the other hand the linters support the ability to ignore certain messages via command line args, this can be done as well.

**Solution: Add relevant command line args to ignore certain messages**   
Here we'll assume you use a TAB character as indentation of python code instead of 4 or 2 spaces.
Pylint would generally display a warning for this with the error code W0312.   
In order to disable this particular message all one needs to do is as follows in the settings.json file:  
```json
 "python.linting.pylintArgs": [
        "--disable=W0312"
 ],
```

Note: You could apply the above configuration settings in your ```user settings``` file, so that it applies to all workspaces.  
This saves you from having to define these settings for every single workspace (every time).  

For further information on configuring Linters can be found [here](/docs/linting/).