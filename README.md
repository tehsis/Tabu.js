Tabu.js
=======
Play [Tabu](http://en.wikipedia.org/wiki/Taboo_%28game%29 "Taboo description") using your mobile or desktop device!

Description
------------

Tabu.js is a Webapp for playing Taboo without the need of having phisical cards. 
It allows you to play this game with your friends just using your mobile phone or tablet. 

Current features
----------------

* Oriented to mobile phones.
* Two teams.
* Changes turns between each team after 1' 30".
* +500 cards (Spanish only, at the moment).
* Firefox OS support.

On future realeases
-------------------

* Posibility of using more than one device on a game.
* Whatever comes to my mind.

How to get it running
---------------------

1. Clone the project into a local project.
2. Make sure you have Node.js on your machine.
3. Run 

   > npm install 

   at root in order to get the necessary dependencies.

4. Build the project using Volo.js (you must "npm install -g volo" if you hadn't
   done this before)
   
   >volo build

5. Start the server executing:

   >$node tabu-build 
   
6. Point your browser to: 

   >htpp://localhost:3000.

Technical details
-----------------

This app is being written entirely using Javascript and HTML5 on both backend and frontend using the following libs and technologies:

* Backend
    * [Node](http://nodejs.org "Node")
       * [Express](http://expressjs.com/ "Express")
       * [Less](http://lesscss.org "Less") with [Less-middleware](https://github.com/emberfeather/less.js-middleware "Less-middleware")
* Frontend
    * [Zepto](http://zeptojs.com  "Zepto")
    * [Require.js](http://requirejs.org/ "Require")  with [Text plugin](https://github.com/requirejs/text "Text plugin for require")
    * [Underscore](http://underscorejs.org/ "Underscore")
    * [Backbone](http://backbonejs.org/ "Backbone")
    * [FirefoxOS-Bootstrap](http://ubersoldat.github.io/FirefoxOS/FirefoxOS-Bootstrap/, "FirefoxOS like ui")
