---
title: Remote Debugging
---

1. First get the ptvs library from https://pypi.python.org/pypi/ptvsd
2. Create a sample python script file and import the above library (see below two lines)
```python
import ptvsd
ptvsd.enable_attach("my_secret", address = ('0.0.0.0', 3000))

#Enable the below line of code only if you want the application to wait untill the debugger has attached to it
#ptvsd.wait_for_attach()
```
3. Make the above change in both script files (i.e. scripts on both the local and remote machines)
However on the client side, ensure the above two lines are commented out
I.e. this is necessary to ensure we have the same line numbers on the server and they match.
4. Run your remote program
5. Open the local script and add an entry into your launch.json as follows:
```json
        {
            "name": "Attach (Remote Debug)",
            "type": "python",
            "request": "attach",
            "localRoot": "${workspaceRoot}",
            "remoteRoot": "C:/temp/myscripts",
            "port": 3000,
            "secret": "my_secret",
            "host":"ipaddress or 'localhost'"
        }
```

Details:
- ```remoteRoot```: Is the path to the script file on the remote machine.
- ```port```: Is the port to connect to the remote machine on
- ```remoteRoot```: Is where the source python files are located on the server
- ```secret```: Is a pass phrase used to authenticate for remote debugging
- ```host```: Is the ipaddress to the remove server. You can also use the value ```localhost```

