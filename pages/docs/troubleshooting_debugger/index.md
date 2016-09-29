---
title: Debugger
---

### 1. Debugger not working
Unfortunately there could be a number of reasons why the debugger isn't working.   
For instance it is possible VS Code is displaying some errors that could provide a hint.
Look at the debugger console for any error messages displayed.
Look at the [Debugger Tools](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#using-the-chrome-developer-tools) console output for any errors.

**Cause: The path to the python executable is incorrect**   
Solution: [Configure the path to the python executable in the launch.json](https://github.com/DonJayamanne/pythonVSCode/wiki/Python-Path-and-Version#python-version-used-for-debugging)   
Remember to re-start VS Code once done (this won't be necessary in a future release).  

**Cause: Invalid expressions in watch window**   
The following error is displayed:  
```sh
Traceback (most recent call last):
  File ".../visualstudio_py_debugger.py", line 1646, in loop
    cmd()
  File ".../visualstudio_py_debugger.py", line 1918, in command_execute_code
    thread.run_on_thread(text, cur_frame, eid, frame_kind, repr_kind)
  File ".../visualstudio_py_debugger.py", line 1246, in run_on_thread
    self.schedule_work(lambda : self.run_locally(text, cur_frame, execution_id, frame_kind, repr_kind))
  File ".../visualstudio_py_debugger.py", line 1238, in schedule_work
    self.unblock()
  File ".../visualstudio_py_debugger.py", line 1234, in unblock
    self._block_lock.release()
RuntimeError: release unlocked lock
```   
Solution: Clear all expressions from the debugger Watch window and start debugging again.

### 2. Unable to capture user input while debugging
Capturing user input while debugging is only possible when using the **Python Console App** debug configuration.

**Cause: Visual Studio Code Debug output window doesn't support capturing input from the user**   
Solution: [Select the **Python Console App** debug configuration](https://github.com/DonJayamanne/pythonVSCode/wiki/Capture-User-Input-via-input-raw_input)