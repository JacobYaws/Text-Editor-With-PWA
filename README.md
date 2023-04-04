# Text Editor Starter Code

## Description

In this project, I was tasked with creating a text editing PWA that can be used without an internet connection and still save the user's changes to the application.
I also made the application installable as a standalone product, and any changes that happen within the installable product will also be shown in the web application.

## Table of Contents
[Install](#install)
[Overview](#overview)
[Screenshots](#screenshots)
[Links](#links)

## Install
If you want to run the application locally, follow these steps:
To install the application, you will need to install the required npm packages for the project by running 'npm i' in a command line terminal.
After the install is complete, run 'npm run build' and then 'npm start' to get the application to start at `http://localhost:3000`.

## Overview

 - For this project, I used a webpack and a service worker to help create the application. The webpack essentially creates all of the contents needed to run the application and bundle them up for the webpage to read and display.
 - The webpack includes plugins needed to create the application, such as the HTML structuring a manifest that contains general data about the application, and a service worker to help build the rest of the application.
 - IndexedDB was used to create a client side database storage for making changes to the application. The data stored in this database is stored in the browser so changes can still be made without an internet connection.
 - The application can be installed to the user's local machine to use outside of a web browser. The standalone application is essentially another Google Chrome browser that runs on the applications deployed site, without any options to navigate outside of the application. This essentially updates the IndexedDB stored in the browser so the changes will be shared across all open Chrome applications.
 - Babel was also used to help with asynchronous operations.


## Screenshots

<img src="https://github.com/JacobYaws/Text-Editor-With-PWA/blob/main/assets/Assign19screenshot1.png">
<img src="https://github.com/JacobYaws/Text-Editor-With-PWA/blob/main/assets/Assign19screenshot2.png">


## Links

-Github link: https://github.com/JacobYaws/Text-Editor-With-PWA

    -To download, navigate to the repository and click on the green 'Code' button. Copy the ssh link and clone it in a terminal by using 'git clone git@github.com:JacobYaws/Text-Editor-With-PWA.git'

-Link to the deployed site: https://quiet-eyrie-50087.herokuapp.com/