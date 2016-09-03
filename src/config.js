const developing = location.hostname === 'localhost';

// TODO: Get Webpack to do this for us
const config = developing ? {
  socketUrl: 'http://localhost:3000'
} : {
  socketUrl: 'https://apa-data-requester.herokuapp.com'
};

module.exports = config;
