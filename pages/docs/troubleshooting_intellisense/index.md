---
title: Autocomplete
---

### 1. Intellisense/Autocompletion not working for custom modules  
Scenario: You have a module installed, however the IDE isn't displaying the intellisense/autocompletion for this custom module.  
  
**Cause: The path to the python executable is incorrect**   
Solution: [Configure the path to the python executable in the settings.json](https://github.com/DonJayamanne/pythonVSCode/wiki/Python-Path-and-Version)     
Remember to re-start VS Code once done (this won't be necessary in a future release).  
  
**Cause: The custom module is located in a non-standard location**   
The custom module hasn't been installed using Pip.  
Solution: [Configure the settings.json to include this custom location for autocompletion to work](https://github.com/DonJayamanne/pythonVSCode/wiki/Autocomplete-Intellisense)     
Remember to re-start VS Code once done (this won't be necessary in a future release).  

**Cause: VS Code was not launched from the active virtual environment**  
The path to the custom modules is set when a virtual environment is activated.  
Solution: Launch VS Code from a Terminal/Command window with the correct virtual environment activated  
```
(venv) ter@minal:~$ code .
```
---

