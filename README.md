## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Some resources 

Base url for api requests: https://devo-api.shopsogood.live

Start [here](https://www.agora.io/en/blog/building-a-video-chat-app-using-react-hooks-and-agora/) for the basics on how to implement an Agora video call. 

Check out the doc for values to hardcode and some handy agora docs 
                      
When joining a stream the host client will have to, in order: 

1. Set the client role to ‘host’
2. Create local microphone and camera tracks 
3. Join the channel 
4. Publish the local tracks
5. Render the local video track in window

The audience client simply has to join the channel and render the remote video track, if a remote user exists. 
Each of these methods are [documented](https://api-ref.agora.io/en/video-sdk/web/4.x/index.html)

### Reach out!

Email [am@shopsogood.live](mailto://am@shopsogood.live) with any questions, PRs or commits you want me to take a look at
