# CChat

## Starting the server

To start the server

* Open up a terminal window
* Change directory to the project root.  On my system the command looks like this:
```bash
cd Documents\Test\Nodejs\CChat
```

* Start the nodejs server by entering the following command.  

```bash
DEBUG=myapp:* npm start
```
* once you've starte the server, you'll see trace statements that look like these.

```bash
jcampbell-pro:CChat jcampbell$ DEBUG=myapp:* npm start

> CChat@0.0.0 start /Users/jcampbell/Documents/Test/Nodejs/CChat
> node ./bin/www

```

Note that npm (the package manager we used to install the express generator) is also making our CChat program into a package.  That's why we had to run the npm install command on our app.  The actual command to start the server is inside *package.json* in the scripts section.

## Accessing the app from a browser
Once you've started the server, you can show the app in a browser by starting up a browser and navigating to the following url:  [http://localhost:3000](http://localhost:3000)

## Background information

I've been using a tutorial [http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/] (http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/) as background for using Node.js (javascript web server), Express.js (app framework on top of node.js), and mongodb (document database we'll use for storing our chats).
