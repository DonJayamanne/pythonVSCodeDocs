---
title: nose
---

This section outlines the details necessary to get you up and started with using the [nose](http://nose.readthedocs.io/en/latest/) testing framework with Visual Studio Code.

### Enable [nose](http://nose.readthedocs.io/en/latest/) framework   
Assign the value ```true``` against the setting ```python.unitTest.nosetestsEnabled ``` as outlined [here](/docs/unittests/#Select-and-Enable-a-Test-Framework/).  
Ensure all other test frameworks have been disabled (i.e. have the value ```false```). 

### Install [nose](http://nose.readthedocs.io/en/latest/)   
Ensure [nose](http://nose.readthedocs.io/en/latest/) has been installed in the [currently configured python environment](/docs/python-path/).

### Configuration Options
**Command line options**  
Command line options for the nose can be passed by adding the necessary options into the following section in the user or workspace settings file  ```settings.json```: 
- Add the options as individual items as shown below: 
```json
    "python.unitTest.noseTestArgs": [
        "--stop",
        "--match=REGEX", 
        "--where", 
        "tests/"
    ],
```  
Note: 
- Details on command line options can be found [here](http://nose.readthedocs.io/en/latest/usage.html#options).  


**Configuration File**  
The use of a configuration file such as ```.noserc``` or ```nose.cfg``` are also supported.
Details on the configuration files and options can be found [here](http://nose.readthedocs.io/en/latest/usage.html#configuration)