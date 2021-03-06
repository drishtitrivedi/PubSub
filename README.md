
# Pub Sub for Events
* Publish/subscribe messaging using node/express
* A Publisher-Subscriber project for subscribing for events and publish events

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Install

    $ git clone https://github.com/drishtitrivedi/PubSub
    $ cd PubSub
    $ npm install


## Running the project

    $ npm run server

## Simple build for production

    $ npm build
    
## Curl Request Changes for POST request
    I added Content-Type to the curl request as it was missing. Updated curl requests can be found below:
    
    curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1
    curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
