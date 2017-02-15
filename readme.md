To get started you need to have ionic installed:

> npm install -g ionic

Then to run the app:

> npm install
> ionic serve

The app currently uses json-server to simulate a web api and the structure lives in api\db.json.  To launch json-server:

> json-server --watch src\api\db.json

NOTE: when running in chrome open the developer tools and use the device toolbar to simulate a mobile device for the best experience:
    > F12
    > CTRL + SHIFT + M

Enjoy!