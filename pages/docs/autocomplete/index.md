---
title: Autocomplete
---

Autocomplete and intellisense is available out of the box for standard python modules and all code within the current working directory. However if intellisense is required for some packages that are not installed in the usual locations, these too could be added via some configuration changes.

For instance intellisense for the Google App Engine will not work out of the box.
This is because the modules for the Google App Engine are installed in a custom location. 

To add support for such modules/libraries you need to do two things:    
* Identify the location(s) of the custom libraries/modules.    
* Make the necessary changes in the User Settings or Workspace Settings file.

Here's a sample entry in the User Settings file that will enable Google App Engine autocomplete and intellisense:
```json
"python.autoComplete.extraPaths": [
    "C:/Program Files (x86)/Google/google_appengine",
    "C:/Program Files (x86)/Google/google_appengine/lib" ]
```