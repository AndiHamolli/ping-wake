const https = require('https');
const request = require("request");
function get_req1(link)
{
https.get(link, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', (data) => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}

function get_req(link)
{

    return new Promise ((resolve, reject) => {
        request(
            {url: link, 
            headers:{
                'User-Agent': 'Node Browser',
                'Connection': 'keep-alive',
            } 
            }, (err, res, body) => {
                if (err) { reject(err); }
                resolve(body);
            }
        )});
}



module.exports = {get_req};
