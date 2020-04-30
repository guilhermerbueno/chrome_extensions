# What is it?
This extension uses firebase real time database to load a list of useful pages on Google Chrome extension format.

# How to organize
The format of database should be:
[ {"title":"", "url":"", "tag":"",} ]
The tag field will be used to filter items on extension.
An example of this json is on /docs directory (db_sample.json).

# Configurations
This page contains the step-by-step to configure a new real-time database on firebase https://firebase.google.com/docs/database/web/start?authuser=0

Besides create a real-time database, to customize your extension you will need to change the icon files inside images directory

# Locales
The supported locales are pt, en and es. To validate messages on linux launch Google Chrome from terminal using the following command
LANGUAGE=pt google-chrome
