---
title: More Options
---

### Troubleshooting (Errors)
For details on how and where errors are displayed, go [here](https://github.com/DonJayamanne/pythonVSCode/wiki/UnitTests#errors). 

### Running All Tests
- Click the Status Bar item and select the ```Run All Unit Tests``` option
- Or select the command ```Python: Run All Unit Test``` from the [command palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette)  

![Python Commands](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/commands.png?raw=true)
![Test Options](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/options.png?raw=true)

### Running Failed Tests
- Click the Status Bar item and select the ```Run Failed Unit Tests``` option
- Or select the command ```Python: Run Failed Unit Test``` from the [command palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette)  

![Test Options](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/runFailed.png?raw=true)

### Running All Tests in a Test File
Select the file in the explorer and select the ```Run Unit Tests``` context menu option  

![Test File](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/runTestsInFile.png?raw=true)

### Running All Tests in a Test Class (Test Suite)
- Open the test file in the editor 
- Locate the test class (test suite) in the editor 
- Click the ```Test``` code lens display just above the test class (test suite)  

![Test Function](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/classCodeLens.png?raw=true)

### Test a specific function/method
**Option 1:**    
- Click the Status Bar item and select the ```Run Unit Test Method ...``` option
   + Or select the command ```Python: Run Unit Test Method ...``` from the [command palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette)  
- Type into the textbox to find the test function/method that needs to be tested  
- Once found, select it and press the ```return/enter``` key  

![Test Function](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/searchFunction.png?raw=true)

**Option 2:**    
- Open the test file in the editor 
- Locate the test function/method in the editor 
- Click the ```Test``` code lens display just above the test function/method

![Test Function](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/functionCodeLens.png?raw=true)

### Viewing Test Output
- The total number of tests that have passed, failed, skipped and error'ed will be displayed in the status bar  
- This same information will also be displayed in the ```Python Test Log``` output panel  
- And also in the ```Quick Pick List```

![Test Options](https://github.com/DonJayamanne/pythonVSCode/blob/master/images/tests/results.png?raw=true)
