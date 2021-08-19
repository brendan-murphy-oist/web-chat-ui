Modified from MS's botframework example at https://github.com/microsoft/BotFramework-WebChat/tree/master/samples/06.recomposing-ui/a.minimizable-web-chat. 

Notes for production: 
1. The built version of the app (npm run build) will spit out a css folder (1 .css file), a js folder (3 .js files), and a media folder (3 font files). These will all need to be accessible on each page where the app runs. 
2. The app hooks onto <div id="WebChatUI"></div> to render, so this will need to be in the html on each page where the app runs.
