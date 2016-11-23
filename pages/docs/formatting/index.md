---
title: Formatting
---

### Default Formatter
Code formatting is supported using either one of yapf or autopep8.   
The default code format provider is autopep8.   

### Auto Formatting  
Formatting the source code as and when you save the contents of the file is supported.  
Enabling this requires configuring the setting ```"editor.formatOnSave": true``` as identified [here](https://code.visualstudio.com/updates#_format-on-save). 

#### Paths  
All samples provided here are for windows.   
However Mac/Linux paths are also supported.

## AutoPep8
You can configure the format provider by changing a setting in the User or Workspace settings file as follows:
```json
"python.formatting.provider": "autopep8"
```

#### Installing autopep8 
```
pip install pep8   
pip install --upgrade autopep8
```

#### Custom Path 
This is generally unnecessary. As the Extension will resolve the path to the formatter based on Python executable being used or configured in python.pythonPath of settings.json. If this cannot be found, then the formatter will be resolved based on the current environment Path settings.

If this is not the case or you wish to use another version of autopep8, all you need to do is configure the path as follows either in the User or Workspace settings file:    
```json
"python.formatting.autopep8Path": "c:/path/autopep8.exe"
```

## Yapf
You can configure the format provider by changing a setting in the User or Workspace settings file as follows:
```json
"python.formatting.provider": "yapf"
```

#### Custom Path
This is generally unnecessary. As the Extension will resolve the path to the formatter based on Python executable being used or configured in python.pythonPath of settings.json. If this cannot be found, then the formatter will be resolved based on the current environment Path settings.

If this is not the case or you wish to use another version of yapf, all you need to do is configure the path as follows either in the User or Workspace settings file:    
```json
"python.formatting.yapfPath": "c:/yapfPath/yapf.exe"
```

#### Custom arguments to Yapf
Custom arguments can be passed into yaps by configuring the settings in the User or Workspace settings as follows:   
```json
"python.formatting.yapfArgs": ["--style", "{based_on_style: chromium, indent_width: 20}"]
```

#### Installing Yapf
pip install yapf