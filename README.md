# Send-Mail-Using-NodeMailer
Nodemailer is a module for Node.js applications to allow easy email sending. SMTP is the main transport in Nodemailer for delivering messages. SMTP is also the protocol used between different email hosts, so its truly universal.
First Create A Folder With A JS File
Open The JS file with any editor ex-VS Code in my case
Now , run **npm init -y** in your Terminal// This will Create A Package
Next , run **npm install nodemailer -S** // To install and -S to save your dependency
Next , I have installed **npm install dotenv -S** // So that the senders mail address and password is not visible to public
Now , To work with dotenv I have Installed .env using **touch.env** file while store usermail and password
Also , Dont Forget to Create the .gitignore using **touch.env** and ignore the .env file
Now Run Using node filename.js in your terminal

// Dont forget to turn on Allow Less Sure Apps in Your Gmail
// Install Touch Using **npm install touch-cli -g**
