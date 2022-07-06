var axios = require('axios');

var config = {
  method: 'get',
  url: 'curl https://techhubhk.netlify.app/menu/Backend',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
