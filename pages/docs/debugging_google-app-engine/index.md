---
title: Google App Engine
---

The [Google App Engine](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python) launches the application by itself. Hence debugging the application by launching it from within VS Code isn't possible. Instead, what could be done is one could launch Google App Engine in a particular mode that allows one to use VS Code to attach to the code being executed by the Google App Engine.

The files in the [hello_world](https://github.com/GoogleCloudPlatform/python-docs-samples/tree/master/appengine/standard/hello_world) directory will be used to demonstrate the ability to debug Google App Engine applications.

You can skip the steps and go directly to a simple video.

## Solution:
The solution implemented to enable debugging of Google App Engine applications is fairly simple.   
We launch the Google App Engine in a particular mode that will allow us to use VS Code to attach to the code.
This is where the [ptvsd](https://pypi.python.org/pypi/ptvsd) library comes in. This library contains the debug server that will be started by a startup program named pydev_startup.py that we will create and execute via the Google App Engine.

We launch Google App Engine with the necessary arguments by creating a task for this in tasks.json.
You could optionally launch Google App engine with these arguments from a terminal (command line) window as well.  
Once the debug server has started, we simply attach to this debug server.

## How to debug Google App Engine
![Google App Engine Debugging](https://raw.githubusercontent.com/DonJayamanne/pythonVSCode/master/images/debugGAE.gif)
  

## Detailed steps as follows:
- **Step 1:** Open the application directory in VS Code 
- **Step 2:** Download the [ptvsd](https://pypi.python.org/pypi/ptvsd) library and extract the pdvsd directory into your working directory.  
You should have a sub directory named 'ptvsd' under your working directory.     
You are free to download [ptvsd](https://pypi.python.org/pypi/ptvsd) into any directory, provided you configure the path in the startup program pydev_startup.py.   
- **Step 2:** Create a [tasks.json] file with the following contents (short cut - ⇧⌘B).  

Note: The value **"/usr/local/google_appengine/dev_appserver.py"** will have to be replaced with the absolute path to the dev_appserver.py file (paths for each OS can be found [here](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python))  
  -> Mac OS X: /usr/local/google_appengine/dev_appserver.py   
  -> Linux: Where ever you extracted Google App Engine files into  
  -> Windows: Where ever you installed the Google App Engine into  
 
```json
{
    "version": "0.1.0",
    "command": "python",
    "isShellCommand": true,
    "showOutput": "always",
    "args": [
        "/usr/local/google_appengine/dev_appserver.py",
        "--python_startup_script=${workspaceRoot}/pydev_startup.py",
        "--automatic_restart=no",
        "--max_module_instances=default:1",
        "${workspaceRoot}/app.yaml"
    ]
}
```
- **Step 3:** Create a file named pydev_startup.py with the following contents in the root directory of your application:
```python
import sys
import os
#Assuming that pdvsd is located in the working folder
sys.path.append(os.getcwd()) 
import ptvsd
#Fee free to change the secret and port number 
ptvsd.enable_attach(secret = 'gae', address = ('0.0.0.0', 3000))
#The debug server has started and you can now use VS Code to attach to the application for debugging
print("Google App Engine has started, ready to attach the debugger")
```
- **Step 4:** Create a debug configuration with the following entry (in launch.json): 
  
Note:   
  -> The value for the secret **gae** could be any string you desire. As you are debugging locally this doesn't matter.   
  -> The value for the port will have to be one that isn't blocked on your machine. This is the port that will be used by the debugger to enable remote debugging (however here you are debugging locally using the remote debugging capabilities)  
  
```json
        {
            "name": "Attach",
            "type": "python",
            "request": "attach",
            "host": "localhost",
            "secret": "gae",
            "port": 3000,
            "remoteRoot": "${workspaceRoot}",
            "localRoot": "${workspaceRoot}",
            "preLaunchTask": "python"
        }
```
- **Step 5:** Start the task created earlier using the short cut ⇧⌘B (or use Command 'Run Build Task' from the Command Palette)
- **Step 6:** This will now open up the Tasks output window and will display information such as the following:
```
INFO     2016-07-27 05:29:01,672 sdk_update_checker.py:229] Checking for updates to the SDK.
```
- **Step 7:** Wait until you see the message **Google App Engine has started, ready to attach the debugger** displaed, as follows:
```
INFO     2016-07-27 05:29:01,672 sdk_update_checker.py:229] Checking for updates to the SDK.
INFO     2016-07-27 05:29:02,664 api_server.py:205] Starting API server at: http://localhost:52245
INFO     2016-07-27 05:29:02,668 dispatcher.py:197] Starting module "default" running at: http://localhost:8080
INFO     2016-07-27 05:29:02,671 admin_server.py:116] Starting admin server at: http://localhost:8000
Google App Engine has started, ready to attach the debugger
```
- **Step 7:** Finally, go into the debug configuration and select the 'Attach' option
- **Step 8:** Add a break point in main.py and open up the website in your browser and watch breakpoints being hit.