To get started you need to have ionic installed:

> npm install -g ionic

Then to run the app:

> npm install
> ionic serve

The app currently uses json-server to simulate a web api and the structure lives in api\db.json.  To launch json-server:

> json-server --watch src\api\db.json



To build the app for Android:
> ionic build android --release

To build for iOS (on a mac):
> ionic build ios --release

Reference: https://forum.ionicframework.com/t/ionic-toturial-for-building-a-release-apk/15758



It's easiest to open two command prompts in VSCode: one for ionic serve and the other for json-server.

NOTE: when running in chrome open the developer tools and use the device toolbar to simulate a mobile device for the best experience:
    > F12
    > CTRL + SHIFT + M

Enjoy!
