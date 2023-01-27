# Installing and running the sample
The following is a list of the steps to run in order to get a sample Teams application to show up in a developer tenant.
## Pre-requisites

 1. **All work will be done on your personal laptop**  – this will not work on your work laptop.
 2. Download Visual Studio Code ([https://code.visualstudio.com/download](https://code.visualstudio.com/download)) – you may also use your own IDE of your choice.
 3. Install node.js ([https://nodejs.org/download/release/v16.18.1/](https://nodejs.org/download/release/v16.18.1/) - [https://nodejs.org/download/release/v16.18.1/node-v16.18.1-x64.msi](https://nodejs.org/download/release/v16.18.1/node-v16.18.1-x64.msi)). Please note the version used for this sample as Fluent UI does not play well with the current version of node.js.
 4. Get SQLite3 ([https://www.sqlite.org/download.html](https://www.sqlite.org/download.html) [https://www.sqlite.org/2022/sqlite-tools-win32-x86-3400100.zip](https://www.sqlite.org/2022/sqlite-tools-win32-x86-3400100.zip)) and unzip to a folder. Add the folder to your system path environment variable.
 5. Download the ngrok utility ([https://ngrok.com/download](https://ngrok.com/download)). Unzip the utility in a folder.
 6.  Setup a developer tenant in MS Teams [https://microsoft.github.io/app-camp/aad/A01-begin-app/#exercise-2-set-up-your-microsoft-365-subscription](https://microsoft.github.io/app-camp/aad/A01-begin-app/#exercise-2-set-up-your-microsoft-365-subscription). Follow the instructions for Exercise 2 only. Ensure to note down the user account and password for the admin account created.
## Running the application
1. Download the react-app.zip file from [https://github.com/seetharamanis/rtp/blob/master/react-app.zip](https://github.com/seetharamanis/rtp/blob/master/react-app.zip). If you need access, please reach out to Seetha Srinivasan.
2. Unzip the application to a new folder on your laptop.
3. Open up Visual Studio Code. Open the new folder to which you have unzipped the code (File/Open folder).

[//]: # (Not a list)

![Visual Studio Code](/docs/pic1.png?raw=true)
6. Click on “Terminal/New Terminal” to open up a new terminal. At the terminal prompt, run the command: npm install
7. All the modules in packages.json should download at that point.
8. Next, run the following command: npm install react-router-dom
9. The react-router-dom module should now be installed.
10. Next run the command: npm run dev
11. The application should build and launch a new browser window.

[//]: # (Not a list)

![Running App in Browser](/docs/pic2.png?raw=true) 
## Using ngrok for tunneling
1.	Open a command prompt (cmd.exe) and move to the location of the ngrok folder you unzipped in step 5 of the pre-requisites.
2.	Enter the following command: ngrok http http://localhost:3000
3.	You will get a window that looks something like this:

[//]: # (Not a list)

![Ngrok Command Window](/docs/pic3.png?raw=true)
4.	This will allow traffic to be routed from the internet to your locally hosted application. You can test this by opening up a browser and navigating to the URL highlighted in the red box (note – your URL will be different from the one in the image).
5.	Take note of the URL – it will be used later to setup the manifest. Ngrok has been set up successfully.
## Setup app in Azure Active Directory
1.	Go to the url: https://aad.portal.azure.com/
2.	Login with the credentials for your developer tenant that you set up in Step 6 of the pre-requisites. You should be presented with the following screen:

[//]: # (Not a list)

![Azure Active Directory](/docs/pic4.png?raw=true)

3.	Click on the “Azure Active Directory” left-hand menu item:

[//]: # (Not a list)

![Azure AD](/docs/pic5.png?raw=true)

4.	Click on “App Registrations”:

[//]: # (Not a list)

![Azure AD - App Registrations](/docs/pic5.png?raw=true)

5.	Then click on “New registration” at the top of the page:

[//]: # (Not a list)

![Azure AD - New App Registration](/docs/pic6.png?raw=true)

6.	Enter in a name for the application (e.g. U.S. Bank Sample App). Select “Account in any organizational directory (Any Azure AD directory – Multitenant)” for the “Supported account types”. Redirect URI should be “Single-page application (SPA)” and the url should be the ngrok url you setup previously in the Ngrok for tunneling section (use the https version). Here’s what it should look like:

[//]: # (Not a list)

![Azure AD - New App Registration](/docs/pic7.png?raw=true)

7.	Click the “Register” button at the bottom of the page. You should now have a registered application. Copy the “Application (client) ID” to your clipboard. If you hover over the id, it will give you a button to easily copy the id to your clipboard.
8.	You will now click on the “Expose an API” menu item:

[//]: # (Not a list)

![Azure AD - App Registration](/docs/pic8.png?raw=true)

9.	And then click the “Add a scope” button:

[//]: # (Not a list)

![Azure AD - App Registration - Add Scope](/docs/pic9.png?raw=true)

10.	In the “Application ID URI” field, you will enter a URI in the following format: api://<Your ngrok host name>/<Application ID>. Your “Application ID” should already be there – you’ll just need to insert your ngrok host name. Here’s an example (both your ngrok host name and Application ID should be different): 

 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic10.png?raw=true)
 
11.	Click the “Save and continue” button at the bottom of the screen. You will then be presented with the “Add a scope” dialog. Enter the following values:
a.	Scope name: access_as_user
b.	Who can consent: Admins only
c.	Admin consent display name: Access as logged in user
d.	Admin consent description: Access U.S. Bank sample app as the logged in user
e.	State: Enabled

 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic11.png?raw=true)
 
12.	Click the “Add scope” button at the bottom of the dialog. You have now added your application to Azure AD.
13.	If you ever re-run ngrok, this will update the URL of your application, and you will need to update the URL in the app registration with the new host name that was generated.
## Creating the manifest for MS Teams
1.	You will now go back to your IDE (Visual Studio Code). Inside the files, navigate to the .env file in the root folder and open it up to display in the editor.

[//]: # (Not a list)
 
![Azure AD - App Registration](/docs/pic12.png?raw=true)
 
 
2.	Replace the value for “TEAMS_APP_ID” with the Application ID you just created.
3.	Replace the value for “HOST_NAME” with the ngrok hostname (ensure to only include the hostname and do not include the HTTP/HTTPS portion of the URL).
4.	Open a new terminal using “Terminal/New Terminal” from the top menu.
5.	In the terminal, run the following command: node ./manifest/makepackage
6.	This will take the values out of your .env file and insert them into the manifest.tempate.json file and create a new manifest.json file for you. It will then take the new manifest.json file and zip it up with two icon files and create a manifest package for Teams called obapi.zip. We will use that file in the next section to create the app in your org.
## Creating your application in MS Teams admin
1.	Go to the Teams admin page: https://admin.teams.microsoft.com/dashboard
2.	Login with the credentials for your developer tenant that you set up in Step 6 of the pre-requisites. You should be presented with the following screen:

 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic13.png?raw=true)
 
3.	Click on “Teams apps/Manage app” fly-out:
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic14.png?raw=true)
 
4.	Click on “Upload new app” on the top of the table of applications:
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic15.png?raw=true)
 
5.	Click the “Upload” button.
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic16.png?raw=true)
 
6.	You will now need to browse to the project folder where you unzipped the react-app.zip file. The manifest file is located here: /manifest/obapi.zip. Select the file and click “Open”.
7.	You should receive confirmation that the new app has been added. You can see it’s there by searching for “HD”. It will show in the search results:

 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic17.png?raw=true)
 
## Accessing the app in MS Teams
1.	Log in to the MS Teams fat client (or go to https://teams.microsoft.com for the web client) using the credentials for your developer tenant.
2.	Click on the “Apps” menu item on the side of Teams:
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic18.png?raw=true)
 
3.	Click on the “Manage your apps” button at the bottom right of the page.
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic19.png?raw=true)
 
4.	Click on “Upload an app” in the top menu.
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic20.png?raw=true)
 
5.	Click on “Upload a custom app” selection.
 
 [//]: # (Not a list)
 
 ![Azure AD - App Registration](/docs/pic21.png?raw=true)
 
6.	Select the /manifest/obapi.zip file that you uploaded previously.
7.	You can now click on the “Add” button and it will add the application.
8.	The application is now available in Teams.
