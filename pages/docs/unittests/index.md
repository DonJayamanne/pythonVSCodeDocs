---
title: Unittests
---

The following Unit Test frameworks are supported: 
* [UnitTests](https://docs.python.org/2/library/unittest.html) (Unit Testing framework built into Python)
* [Nose](http://nose.readthedocs.io/en/latest/)
* [PyTest](http://docs.pytest.org/en/latest/)

![Unit Tests](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/unittest.gif)

### Prerequisites
**<a id="Select-and-Enable-a-Test-Framework"></a>Select and Enable a Test Framework**  
- If using [Nose](http://nose.readthedocs.io/en/latest/) or [PyTest](http://docs.pytest.org/en/latest/), then ensure this test framework is installed in the [currently configured Python interpreter](/docs/python-path/).
- If not installed errors would be displayed in the ```Python Test Log``` output panel. 

**Select and Enable a Test Framework**  
UnitTests are turned off by default. Unit Testing of Python code is supported by enabling one of the above Unit Tests via the [user or workspace settings files (settings.json)](https://code.visualstudio.com/docs/customization/userandworkspace#_creating-user-and-workspace-settings), as follows: 

- Open the user or workspace settings file (settings.json) 
- Pick a unit test framework and enable **one** of them as follows:
```json
// Place your settings in this file to overwrite default and user settings.
{
    "python.unitTest.pyTestEnabled": true,
    "python.unitTest.unittestEnabled": false,
    "python.unitTest.nosetestsEnabled": false
``` 
Note: Use the value ```true``` to enable a particular unit test framework and ```false``` to disable.

### Running Tests
Tests can be run (executed) a number of ways. 
1. Click the ```Run Tests``` statusbar button and select any one of the options such as ```Run All Tests``` in the subsequent list of options displayed.   
2. Select a file from the explorer and from the context menu select ```Run Unit Tests```  
3. Open a test file and click the ```Test``` code lens.  

**For further (advanced) options and details on running tests, go [here].**  

![Discover Tests](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/options.png?raw=true)

### [More Options](/docs/unittests_more-options/)

### [unittest Framework](/docs/unittests_unittest-framework/)
### [pytest Framework](/docs/unittests_pytest-framework/)
### [nose Framework](/docs/unittests_nose-framework/)
