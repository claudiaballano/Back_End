# TEXT-TO-SERVER

We want to create a form that will be able to send text to a server we'll also implement.
You need to open with Live Server the client in order to make this work.

Resources:

* NodeJS URL module - [Link](https://www.w3schools.com/nodejs/nodejs_url.asp)
* NodeJS Http module - [Link](https://www.w3schools.com/nodejs/nodejs_http.asp)
* File System module - [Link](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
* Check if file exists in NodeJS - [Link](https://coderrocketfuel.com/article/check-if-a-file-exists-using-node-js)

Video describing this exercise (Spanish) - [Link](https://oscarm.tinytake.com/tt/NTI2OTI3N18xNjQ4NjI3NQ)

## Requeriment 1
Create a server in your local machine that will be listening to incoming requests in port 3000. Submit the form for the first time with any information. Is the server receiving all the fields from the form? 

## Requeriment 2
The server should always work if the incoming request is to the endpoint __/sendtext__ and only if the client is performing a GET request. In any other case, it should respond back a 404 error with a messsage of your choice.

To pass this requirmenet, just try to console.log que **content** parameter that you receive from the client GET request.

## Requeriment 3
The server should write information to a file everytime it receives a petition.

1. If the filename.txt written by the user does not exists; the server will create a new file with the information coming from the __content__ field
2. If the filename.txt already exists, the new information coming from content should be appended at the end of the file.

The filename can be stored in the same folder that app.js.

## Requermient 4
Submit a new form entry with this infromation:
Filename: duckduckgo
Content: this is just a test.

Now, try to navigate to http://localhost:3000/duckduckgo.txt. Can you see the file? Why or why not?

## Requeriment 5
Open a new Git Bash terminal in your server project folder

1. Write a command to show all the files with TXT extension sorted by modification date. 

2. Write another command to watch every second the files sorted  by modification date. Perform a new submit in the form and notice if the file list is updated

### BONUS

1. Store your files in path named **files**; instead of the root directory of the server. 

2. Use the [Path module](https://www.w3schools.com/nodejs/met_path_join.asp) to create the path to the filename you want to store, insted of concateneiting strings.


3. Introduce some client validation to avoid the user to input more that 1024 caracters in the contect field form. Add also some server validation: if the server receives a content with more than 1024, it should response an 500 error; with a message informing the client that the text submitted is too long.