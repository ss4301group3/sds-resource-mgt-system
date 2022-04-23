# Email Notification
**Function:** Filters out the emails of reservation requestors to send them appropriate emails.<br>
**Pre-requisite:** Gmail to be authenticated as the Sender email, Google Cloud account with Gmail API enabled.<br>
**Language:** JavaScript<br>
**Node.js dependencies:** googleapis, nodemailer

## Setting up Sender email
1. Create a Project on Google Cloud Platform
2. Enable GMail API under APIs and Services
3. Create OAuth consent screen (user type: external). May need to add the sender email as a Test User to be able to authorize.
4. Sender email required to turn on Less Secure Apps to be able to authorize it
5. Create API credentials (OAuth client ID). Application type: web application. Redirect URI: https://developers.google.com/oauthplayground
6. At OAuth 2.0 Playground, at the top right gear icon, use own credentials to paste in client ID and client secret from the OAuth client ID created
7. Select GMail API (https://mail.google.com) from left hand side and Authorize. Exchange for Refresh token as well
8. Client ID, Client secret, and Refresh token need to be pasted into the email sending script to be able to run

## Setting up workspace/folder:
npm init -y<br>
npm install googleapis<br>
npm install nodemailer@4.7.0 <br>
execute the .js files in terminal: node filename.js

