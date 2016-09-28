---
title: Getting Started
---

### Prerequisites
Before using Jupyter (IPython), you will need to ensure the [prerequisites](/docs/jupyter_prerequisites/) are installed and setup.

### Running a line of code in a kernel
- Open a python file
- Select a line or a block of code
- From the [command palette](https://code.visualstudio.com/Docs/editor/codebasics#_command-palette) select the command ```Jupyter: Run seletion/line```
- The results will be displayed on the right hand side
- A status bar will appear with the name and status of the kernel

![Simple Hello World](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/helloWorld.gif)

### Running selected code in a kernel
- Open a python file
- Select a block of code
- From the [command palette](https://code.visualstudio.com/Docs/editor/codebasics#_command-palette) select the command ```Jupyter: Run seletion/line```
- The results will be displayed on the right hand side
- A status bar will appear with the name and status of the kernel

Note: 
- If there were any previous results, depending on the setting ```Append Results```,
the results will either be appended to the existing result set or cleared and then displayed
- You can always use the ```Clear Results``` button to clear the results window

![Run selected code](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/codeSelection.gif)

### Running a cell in a kernel
- Open a python file
- Identify the block of code to be defined as a cell
- Add the text ```#%%``` in separate lines, both before and after the previously identified block of code
- In doing this, the editor will automatically display a code lens with the text ```Run Cell```
- Clicking this will send the code within this cell to the kernel

Note: 
- This is a much more convinient way of organizing code to be executed in a kernel
- This also save you from having to select text

![Run cell](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/runCell.gif)

### Defining a cell
A “code cell” is a concept similar to MATLAB’s “cell” (except that there is no “cell mode” in Visual Studio Code, at least not yet), i.e. a block of lines to be executed at once in the current interpreter (Python or IPython). Every script may be divided in as many cells as needed.

Cells are separated by lines starting with:

- ```#%%``` (standard cell separator)
- ```# %%``` (standard cell separator, when file has been edited with Eclipse)
- ```# <codecell>``` (IPython notebook cell separator)

### Managing a kernel
- Click on the statusbar displaying the name and status of the kernel
- Select an option from the quick pick list to either restart, interrup, shutdown or select a differnt kernel

Note:
- You can always configure the default kernel in you settings.json file ([see here](/docs/jupyter_configuration/)).

![Manage Kernel](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/manageKernel.gif)

### Miscellaneous commands
A number of commands have been added to make it easier to manage and work with cells in a file.
Commands include:
- ```Jupyter: Go to next cell``` 
- ```Jupyter: Go to previous cell```
- ```Jupyter: Run cell```
- ```Jupyter: Run cell and advance```

The purpose of each of these commands should be fairly obvious.
Note: You can always configure shutcut keys for each of these commands. [See here](https://code.visualstudio.com/Docs/customization/keybindings#_customizing-shortcuts).

![Cell Commands](https://raw.githubusercontent.com/DonJayamanne/pythonVSCodeDocs/master/images/jupyter/cellCommands.gif)
