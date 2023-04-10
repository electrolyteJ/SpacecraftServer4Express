const ws = require('ws')
const webSocket = new ws.WebSocket('wss://flask-c8d3-prod-1gj8r0g67f17c052-1309166807.ap-shanghai.run.wxcloudrun.com/chat')
webSocket.onopen = ((event)=>{console.log("onopen")})
webSocket.onclose = ((event) => { console.log("onclose") })
webSocket.onmessage = ((event) => { console.log("onmessage") })

