
## Nodemon Third Package to run de app without save it all the time

1) Terminal: npm install nodemon --save-dev 
2) Package.json:  

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon app.js",
    }

2) npm start




## Types of Errors

1. Syntax Errors
2. Runtime Errors
3. Logical Erros

## Configuration

"version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/app.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
        }
    ]
}