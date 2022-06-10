#Usefull links

[Tutorial Markdown](https://tutorialmarkdown.com/sintaxis)  
[VsCodeExtension: Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)  
[DevHints JSDoc](https://devhints.io/jsdoc)  

# Project Setup
***
### Run project
***
To create documentation use:
__npm run docs__
this is a script inside package.json scripts section, this command will generate a folder __./docs__ you can check on your explorer serving the index.html file.
***
### Setup Wokspace
You can use the ___jsconfig.json___ file to configure TS/Check and JS/Check on your files.

***
### To install a template without NPM
You can set as a package name on package json:
``` json
   "dependencies": {
        "braintree":"https://github.com/braintree/jsdoc-template.git"
    }
```
__braintree__ is a custom name to add that package
this will clone the repository as a package and you can use as a simple template on __jsdoc.json__
```  javascript
    "opts":{
        "recurse": "true",
        "destination": "./docs",
        "template": "node_modules/braintree"
    }   
```