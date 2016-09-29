---
title: unittest
---

This section outlines the details necessary to get you up and started with using the python unittest testing framework with Visual Studio Code.

### Enable unittest framework   
Assign the value ```true``` against the setting ```python.unitTest.unittestEnabled``` as outlined [here](/docs/unittests/#Select-and-Enable-a-Test-Framework/).  
Ensure all other test frameworks have been disabled (i.e. have the value ```false```). 

### Configuration Options
**Test Discovery Pattern**  
The default pattern used to match test files is ```test*.py```. 
This can be configured as follows:  
- Open the user or workspace settings (settings.json) 
- Add the configuration item (```"-p *_test.py"```) if not found (else alter it as follows): 
```json
    "python.unitTest.unittestArgs": [
        "-p *_test.py"
    ],
```  
Note: 
- The above is merely an example that picks all files ending with ```_test.p``` to be treated as test files. 
- Further details and values of this config item can be found [here](https://docs.python.org/2/library/unittest.html#cmdoption-unittest-discover-p).  


**Verbosity**  
The default verbosity is 'v'.
This can be configured as follows:  
- Open the user or workspace settings (settings.json) 
- Add the configuration item (```"-v"```) if not found (else alter it as follows): 
```json
    "python.unitTest.unittestArgs": [
        "-v"
    ],
```
- If you do not require a verbose output, simple remove the "-v" entry as follows:
```json
    "python.unitTest.unittestArgs": [
    ],
```


**Start Directory**  
This is the directory to start the test discovery (defaults to the project/workspace root directory).  
This can be configured as follows:  
- Open the user or workspace settings (settings.json) 
- Add the configuration item (```"-s ./tests"```) if not found (else alter it as follows): 
```json
    "python.unitTest.unittestArgs": [
        "-v",
        "-s ./tests"
    ],
```  
Note: 
- Further details and values of this config item can be found [here](https://docs.python.org/2/library/unittest.html#cmdoption-unittest-discover-s).  


**Fail Fast**  
Use this option to stop the test run on the first error or failure.  
By default this is disabled, i.e. if a test fails the test run continues with other tests. 
This can be configured as follows:  
- Open the user or workspace settings (settings.json) 
- Add the configuration item (```"-f"```) if not found (else alter it as follows): 
```json
    "python.unitTest.unittestArgs": [
        "-v",
        "-f"
    ],
```
Note: 
- Further details and values of this config item can be found [here](https://docs.python.org/2/library/unittest.html#cmdoption-unittest-f).  
