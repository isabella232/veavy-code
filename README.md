# Veavy'S Code

Veavy'S Code Extension for Visual Studio Code. This repository contains the visual studio code extension for [weavy](https://www.weavy.com/)

## What's Weavy?

The complete white-label framework for in-app messaging and collaboration. Different features of weavy are as follows:

1. Instant Messaging
2. Secure File Sharing
3. Activity Feeds
4. To-Do Tasks

------
# CAUTION: THIS IS A PROTOTYPE WITH CLIENT SIDE JWT TOKEN AUTHENTICATION. DO NOT RUN IN PRODUCTION

## Mandatory Prerequisites before installation

1. Download and install Visual Studio Code - [Download Link](https://code.visualstudio.com/download)
2. Install the latest version of [Nodejs](https://nodejs.org/en/)
3. Install [npm](https://www.npmjs.com/get-npm)
4. Install [Git](https://www.atlassian.com/git/tutorials/install-git)
5. Install [TypeScript](https://www.typescriptlang.org/download)

## Installing in your local environment:

The steps to install in your local environment are as follows:

1. Get the [Veavy'S Server](https://github.com/Better-Boy/veavy-server) Up and Running
2. Clone this repository using the following command
   ```bash
   git clone https://github.com/Better-Boy/veavy-code
   ```
3. Change the directory to veavy-code
    ```bash
    cd veavy-code
    ```
4. Open the code in visual studio code
    ```bash
    code .
    ```
5. Click "Start Debugging" from the Run Menu or F5
   ![vscode-start-debugging](./docs/images/vscode-debug.png)
1. A new Vscode Window opens up with the extension loaded

## Veavy's Code Settings:
There are certain settings that need to be done before using the extension. They are as follows:

![VeavySettings](./docs/images/veavy-settings.png)

1. Weavy: Url - Weavy Minimal Javascript with Jquery EndPoint Url. 
2. Weavy › User: Mail - Weavy User Mail
3. Weavy › Space: Key - Weavy Space Key
4. Weavy › Files: Key - Weavy Files Key
5. Weavy › Messenger: Key - Weavy Messenger Key
6. Weavy › Posts: Key - Weavy Posts Key
7. Weavy › Tasks: Key - Weavy Tasks Key

