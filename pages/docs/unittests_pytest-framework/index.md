---
title: py.test
---

This section outlines the details necessary to get you up and started with using the [pytest](http://docs.pytest.org/en/latest/) testing framework with Visual Studio Code.

### Features of pytest
- Detailed info on failing assert statements (no need to remember self.assert* names); 
- Auto-discovery of test modules and functions; 
- Modular fixtures for managing small or parametrized long-lived test resources; 
- Can run unittest (including trial) and nose test suites out of the box; 
- Python2.6+, Python3.3+, PyPy-2.3, Jython-2.5 (untested); 
- Rich plugin architecture, with over 150+ external plugins and thriving community; 

### Enable [pytest](http://docs.pytest.org/en/latest/) framework   
Assign the value ```true``` against the setting ```python.unitTest.pyTestEnabled ``` as outlined [here](/docs/unittests/#Select-and-Enable-a-Test-Framework/).  
Ensure all other test frameworks have been disabled (i.e. have the value ```false```). 

### Install [pytest](http://docs.pytest.org/en/latest/)   
Ensure [pytest](http://docs.pytest.org/en/latest/) has been installed in the [currently configured python environment](/docs/python-path/).

### Configuration Options
**Command line options**  
Command line options for the pytest can be passed by adding the necessary options into the following section in the user or workspace settings file  ```settings.json```: 
- Add the options as individual items as shown below: 
```json
    "python.unitTest.pyTestArgs": [
        "--exitfirst",
        "--verbose"
    ],
```  
Note: 
- Details on command line options can be found [here](http://doc.pytest.org/en/latest/customize.html).  


**Configuration File**  
The use of a configuration file such as ```pytest.ini``` is also supported.
Details on the configuration files and options can be found [here](http://doc.pytest.org/en/latest/customize.html)