# MESSENGER APP

## How to invoke the messenger app?

### Prerequisites
1. Enter the weavy javascript endpoint url in settings
1. Enter the spaces key in settings
1. Enter the mail id in settings
1. Enter the messenger space key in settings

### Invocation of the Messenger App

1. Click "Start Debugging" from the Run Menu or F5  
   ![vscode-start-debugging](../images/vscode-debug.png)
1. Open Command Palette by clicking Ctrl+Shift+P. More info - https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-palette **OR** click on the settings icon in bottom left corner of the visual code. Click on the Command Palette.

![settings-vscode](../images/vscode-settings.png)

1. A new Vscode Window opens up with the extension loaded
    ![command](../images/commands.png)
1. Click the "Weavy Messenger" entry
1. You can see the following screen appear

![front-look](../images/messenger/messenger-front-look.PNG)

4. A User can message others. I'm currently logged in as user_2. Hence, messaged others

![user-2-message](../images/messenger/user-2-message.PNG)

5. I changed my login in settings to user_1 to check if the messages are delivered to me.

![user-2-message-delivered](../images/messenger/user-2-message-delivered.PNG)

6. As user_1, replied on the messages

![user-1-response](../images/messenger/user-1-response.PNG)


## Limitations of the Messenger App

1. Third party integrations like zoom which is visible in web is not available here due to popups being disabled in vscode