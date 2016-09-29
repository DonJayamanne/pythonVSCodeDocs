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

**Cause: Custom arguments have been configured in the corresponding 'path' setting**   
Solution: Custom linter arguments have been defined incorrectly in the **python.linting.xxxPath" setting as follows:
```json
"python.linting.pylintPath": "pylint --load-plugins pylint_django"
```
Defining command line arguments in this manner is not supported, instead it will have to be defined as follows:
```json
"python.linting.pylintArgs": ["--load-plugins", "pylint_django"]
```
For further information on configuring Linters can be found [here](/docs/linting/).