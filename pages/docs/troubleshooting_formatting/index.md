---
title: Formatting
---

### 1. Formatting failed. ... 
Formatting could fail due to a number of reasons. Please check each of the following.

**Cause: The path to the python executable is incorrect**   
Solution: [Configure the path to the python executable in the settings.json](https://github.com/DonJayamanne/pythonVSCode/wiki/Python-Path-and-Version#python-path-and-version)   

**Cause: The formatter has not been installed in the Python environment being used**   
Solution: Identify the Python environment (executable) [configured in settings.json](https://github.com/DonJayamanne/pythonVSCode/wiki/Python-Path-and-Version#python-path-and-version). Next install the formatter against this Python environment (use the corresponding Pip).

**Cause: The Path to the formatter is incorrect**   
Solution: If you have provided a custom path to the formatter in settings.json, then ensure this file path exist.

**Cause: Custom arguments have been configured in the corresponding 'path' setting**   
Solution: Custom formatter arguments have been defined incorrectly in the **python.formatting.xxxPath" setting as follows:
```json
"python.formatting.yapfPath": "yapf --style='{based_on_style: chromium, indent_width: 4}'"
```
Defining command line arguments in this manner is not supported, instead it will have to be defined as follows:
```json
"python.formatting.yapfArgs": ["--style", "{based_on_style: chromium, indent_width: 20}"]
```
For further information on configuring Formatters can be found [here](https://github.com/DonJayamanne/pythonVSCode/wiki/Formatting).