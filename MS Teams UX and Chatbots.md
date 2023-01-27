

# MS Teams UX & Chatbots

Fluent UI is the desired UX framework for Teams applications. We have created a sample application (written in Node JS and React) that uses Fluent UI to demonstrate how to include Fluent UI in your application.

In addition, we will show you how to create a simple chatbot and hook it in to Teams using the bot framework composer. Let’s get started!
## Downloading and running the Fluent UI sample
Here is the URL to get the sample application and see Fluent UI in action: <https://github.com/seetharamanis/rtp/blob/master/Dashboard.zip>. If you need access, please reach out to Seetha Srinivasan.

If you have followed the steps in our last email (located here: <https://github.com/seetharamanis/rtp/blob/master/README.md>), you will only need to run the application to see it in Teams as it runs on the same address (<https://localhost:3000>) as the previous application.

Here are the steps to run the application:

1. Download the application from the URL above.
1. Unzip to a folder on your computer.
1. Open an IDE (preferably Visual Studio Code), and open the folder where you unzipped the application.
1. Open up a terminal, and pull down all the packages by running: npm install
1. In addition, the solution needs react-scripts, which can be installed by running: npm install react-scripts –save
1. To run the application, enter the following command: npm start --prefix tabs
1. The application should now be running – you can see that the Fluent UI components match those used in Teams.
1. You can now launch Teams (if you followed the previous example) and see the application running in the custom app.
## Creating and enabling chatbots in MS Teams
The quickest and easiest way to create a chatbot and run it inside of Teams is to use the Bot Framework Composer, which can be downloaded here: <https://learn.microsoft.com/en-us/composer/install-composer?tabs=windows>. Note that you will also need to have either .NET Core or Node JS installed in order to use the application (details are available on the page). In addition, you will need to have an active Azure subscription that allows you to create LUIS, the bot framework, and web app resources.
## Creating the chatbot
Here are the steps to create your first chatbot using the Bot Framework Composer:

1. After downloading and installing the Bot Framework Composer, launch the application.
2. Click on the “Create new” button located at the top left.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.001.png)

3. For this example, we’ll create an empty bot, so select “Empty Bot” from the menu and then click “Next”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.002.png)

4. Give your project a name – for our example I am going to call it “SampleBot” (note: no spaces or special characters are allowed). Select a folder where you would like to store the project, and then keep the Runtime type as “Azure Web App”. After you entered your information, click the “Create” button.
5. Your sample bot has been created. You will have two pre-defined triggers that are displayed – “Greeting” and “Unknown intent”. If you click on “Greeting”, you should notice two things: 1. This trigger kicks off when a new user starts the conversation, 2. It responds with the words “Welcome to your bot.”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.003.png)

6. We’ll update the words in the response by clicking on purple “Send a response” box and then updating the Responses. Once you have clicked on the “Send a response” box, click on the “Welcome to your bot.” text to edit it. We will update the text to “Welcome to my first chatbot!”. Note: all changes are made without saving.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.004.png)

7. The other pre-defined trigger, “Unknown intent” will be left alone. It handles any unknown intents and will respond with “Sorry, I didn’t get that.”.
8. We will now setup LUIS (Language Understanding) for your bot so that it can use AI to determine what others have asked your bot. To do this, click on the “Configure” menu item (looks like a wrench on the left hand side) and then select the “Development resources” tab.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.005.png)

9. Click on the “Set up Language Understanding” button.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.006.png)

10. On the next window, select “Create and configure new Azure resources” and then click “Next”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.007.png)

11. You will now need to log in with your account. This account should have been provided to you by your mentor and should be in the form of <userXX@brownjameshhotmail.onmicrosoft.com>, where XX is a number. Enter that email and click “Next”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.008.png)

12. If you have not logged in for a bit (or at all), you may be asked for your password at this point.
13. Select the “Azure Pass – Sponsorship” for the Azure subscription drop down and click “Next”.
14. In the “Azure resource group”, you should only have a single option (“TeamXX” where XX is your team number). Select that as the “Azure resource group”. Select “West US” for the region, and then enter “Hackathon\_LUIS” as your resource name and then click “Next” to create the resource in Azure. Click the “Done” button to return to the editor.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.009.png)

15. To go back to the trigger editor, click on the “Create” menu item on the left hand side.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.010.png)

16. We will now create a trigger that will handle the question “What is a hackathon?”. To do this, click on the “…” menu next to the “SampleBot” and add a trigger by clicking on “Add new trigger”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.011.png)

17. In the “Select a trigger type” drop-down box, select “Intent recognized”. Name the trigger “Hackathon”. In the trigger phrases, you can go to the end of the comments and enter the following text:

\- what is a hackathon?

\- tell me about a hackathon

\- what does the word hackathon mean?

\- can you tell me about a hackathon

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.012.png)

18. Click the “Submit” button to save the new trigger and go to the trigger editor. You have now created and trained a new trigger that will respond to any time the user asks about Hackathons similar to the questions you entered.
19. We will now add a response to the trigger by clicking on the + under the “Hackathon” intent and selecting “Send a response”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.013.png)

20. A new “Send a response” box appears. Select the box by clicking on it, then in the “Bot responses”, go ahead and enter the following: A hackathon is an event in which a large number of people meet to engage in collaborative computer programming.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.014.png)

21. We will now test our bot by clicking the “Start bot” button on the top right.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.015.png)

22. You may get the dialog below about an app trying to call external resources. Click on “Allow access” to allow your bot to talk to external resources.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.016.png)

23. You should now get the “Local bot runtime manager” popup displaying that your bot is now running.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.017.png)

24. Click on the “Open Web Chat” button in that dialog to get a chat window to test your bot.
25. The bot should respond initially with “Welcome to my first chatbot!”. Type in “What is a hackathon?” in the “Type your message” box and hit the send icon or enter.
26. You should get back the definition of a hackathon. We are now ready to deploy this to the cloud.
## Deploying to Azure
To deploy your new chat bot to Azure, complete the following steps:

1. Click on the “Publish” menu item in the left-hand menu (it looks like a cloud with an arrow).

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.018.png)

2. Click the “Publishing profile” tab in this view, and then click the “Add new” link.
3. Give your bot a name – “HackathonBot” and then select “Publish bot to Azure” for the “Publishing target” and click “Next”.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.019.png)

4. Keep the default selection “Create new resources” and then click “Next”.
5. In the next screen, select “Azure Pass – Sponsorship” for the Subscription, “TeamXX” for the resource group, and “Windows (Recommended)” for the Operation System. Give the name “HackathonBotXXXX” (where XXXX is a unique text as this will be a externally facing url that has to be unique – EA is being used and will not be available for you) for the resource name. Select “West US” for both the Region and LUIS region drop-downs. Click the “Next” button.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.020.png)

6. The next screen shows all the resources that will be created – scroll down and uncheck all “Optional” items as we do not need any of these resources. Click the “Next” button.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.021.png)

7. You will now see all the resources that will be created in Azure. Click the “Create” button to create these resources.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.022.png)

8. You will see the details of the creation in the upper right-hand corner. Once all resources are provisioned, you’ll see the “Provision success” message at the top right.
9. We will now go out to Azure and test the chatbot and then enable the “Teams” channel.
## Testing chatbot
10. Go to <https://azure.microsoft.com> and click the “Sign in” link in the top right.
11. You will sign-on with the Azure account that you used earlier for deployment. It should be in the form of <userXX@brownjameshhotmail.onmicrosoft.com>.
12. Click on “Resource Groups” in the top of the page. If you don’t see “Resource Groups”, use the search bar and type in “Resource Groups” and select it.
13. You should see your resource group (TeamXX). Select that resource group.
14. You should see the following resources:

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.023.png)

15. Click on the HackathonBotXXXX App Service. We will want to ensure that it’s been deployed successfully (note: the deployment process from the Bot Framework Composer is not the most ideal process).
16. Inside the App Service, click on the “Browse” button at the top of the page.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.024.png)

17. You should see the following web page pop-up:

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.025.png)

18. If you do not see this page pop-up, you may want to wait about 60 seconds and try again as your bot is not currently running. During creation of this tutorial, I had to go back to the Bot Framework Composer and re-deploy the bot again. To do that, go to the Bot Framework Composer, select “Publish” from the left-hand menu (looks like a cloud with an arrow), check the “SampleBot” option and then select “HackathonBot” from the “Publish target” drop-down. Then click the “Publish selected bots” button at the top of the page. After deployment, wait about 30-60 seconds and refresh the page – the page shown in step 8 should now be visible.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.026.png)

19. We will now test the chatbot in Azure.
20. Go back to the resource group and now select HackathonBotXXXX with the type of Azure Bot.
21. Click on “Test in Web Chat” in the left-hand menu.
22. After a delay (usually less than 30 seconds), you should see the “Welcome to my first chatbot!” message display in the chat.
23. Enter “What is a hackathon?” in the text box.
24. You should quickly receive a response with the text we provided.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.027.png)

25. We have now confirmed that the chatbot has been deployed successfully and is functioning inside of Azure.
## Enabling and testing MS Teams channel
1. In order to use the chatbot inside of MS Teams, we will need to enable the MS Teams channel. You should already be in your Azure Bot from the previous step – click on “Channels” on the left-hand side to setup channels for your bot. Note: you may see a red “Issues” on your Web Chat channel if you had issues deploying. You can ignore those if you were able to successfully test your chatbot in the last step.
2. Scroll down to “Microsoft Teams” and click on the link.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.028.png)

3. Accept the Terms of Service.
1. Select “Microsoft Teams Commercial (most common)” and click “Apply”.
1. Click the “Close” button at the top of the page.
1. You should now have a link in the list of channels to “Open in Teams”. Click this link.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.029.png)

7. You will receive this pop-up – click the “Cancel” button so it does not open the MS Teams fat client.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.030.png)

8. Click the “Use the web app instead” button on the page.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.031.png)

9. You may get this same window pop-up again, again click on the “Use the web app instead.”
1. Depending on if this is your first login, you may also need to go back to Chat to see the chatbot. You should be able to ask it “What is a hackathon?” and it should respond back to you.

![](docs/Aspose.Words.a31f31c4-71c1-492f-ac13-7c555baea016.032.png)

11. You have successfully installed the chat bot in to MS Teams!
## Adding a chatbot as part of your Teams application
In order to add your chatbot to your Teams app, you can add the chat bot to the MS Teams manifest. Details of the manifest can be found here: <https://learn.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema>. To add your bot to you just created to a Teams app, you can add the following to your manifest (Note: The commandLists option allows for suggestion in Teams when they visit your bot):

```javascript
"bots": [
    {
      "botId": "<<YOUR-MICROSOFT-APP-ID>>",
      "scopes": ["team", "personal"],
      "commandLists": [
        {
          "commands": [
            {
              "title": "What is a Hackathon?",
              "description": "What is a Hackathon?"
            }
          ],
          "scopes": ["team", "personal"]
        }
      ],
      "isNotificationOnly": false,
      "supportsFiles": false
    }
  ]
```

## Thanks for reading and keep on hacking!

