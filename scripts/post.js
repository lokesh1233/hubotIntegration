// Generated by CoffeeScript 1.12.6
//(function() {
 var http = require('https');
  module.exports = function(robot) {
    return robot.router.post('/hubot/notify/:room', function(req, res) {
      var message, room,options,callback,post_data;
      room = req.params.room;
      message = req.body.message;

      post_data=JSON.stringify({botcust2:"f72a712b1e7aa47e",
        "lang":"en",
        "query":message,
        "sessionId":"6853bd05-bea4-2c0f-8389-0e9c0f1a6e40"});
       options = {
        host: 'api.api.ai',
        port: '443',
        path: '/v1/query?v=20150910',
        //since we are listening on a custom port, we need to specify it by hand
        //This is what changes the request to a POST request
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer b92098ca3d5b44fb8e202290a383168a',
          'Content-Length': Buffer.byteLength(post_data)
      }
      };
      //The url we want is `www.nodejitsu.com:1337/`
    
      callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
          str += chunk;
          });
        response.on('end', function () {
          console.log(str);

          var parseMessage=JSON.parse(str).result.fulfillment.speech;

        var body=JSON.stringify({
    message: parseMessage
  });
        res.end(body);
        });
      }
var postReq=http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
    postReq.write(post_data);
postReq.end();
    });
  };

//}).call(this);