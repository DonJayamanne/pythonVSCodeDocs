---
title: Jupyter (IPython)
---

You can now run Python code directly in a Jupyter (IPython) kernel.

### Features
- Running a line of Python code in a Kernel
- Running selected Pytohn code in a Kernel
- Running a block of code (cell) in a Kernel
- Restart, Interrupt and Shutdown a kernel
- Selecting a kernel
- Viewing output within Visual Studio Code (Images, Html, Graphs, Latex, SVG, and more)

### Getting Started
- Before using Jupyter (IPython), you will need to ensure the [prerequisites](/docs/jupyter_prerequisites/) are installed and setup.
- Once you have the necessary prerequisites installed and setup, you are ready to evaluate code in a Jupyter kernel from within Visual Studio Code. 
- For instance you can select a line or a block of code and evaluate it in a kernel and view the results
- Evaluating a block of code is what starts a kernel, and results in the displaying of the results and a status bar item to manage the kernel
- If selecting blocks of code is too cumbersome you can always use comment blocks to define a block of code also known as a ```cell``` for easy execution.

### Features in detail
- Running a line or selection of code in a kernel
    + You could select a block of code and execute it in a kernel
    + You could place the cursor at a line and execute just that line
- Running a cell in a kernel
    + Provided you have defined a block of code using the necessary characters, code lenses will automatically appear allowing you to run that cell in a kernel
- Managing kernels
    + Running a block of code in a kernel results in a kernel being Started
    + The kernel can be managed via the quick pick options displayed when clicking a status bar item
    + You could restart, interrupt, shutdown or even select a different kernel (e.g. you could have two kernels, one for Python 2.7 and another for Python 3.5)
- Results are displayed within Visual Studio Code (with support for various interactive graphs)

### Configuration
At the moment, the following configuration options are supported.
More details on setting up the following configuration settings can be found [here](/docs/jupyter_configuration/).
- Defining the default kernel 
- Defining startup code for the jupyter kernel
    + The default startup code is ```%matplotlib inline```
- Controlling whether results are appended to existing results or not.


