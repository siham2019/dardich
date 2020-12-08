const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1091104',
  key: '02c98f4bdf348259ada2',
  secret: '6ac174cf0a2eec929a5b',
  cluster: 'eu',
  encrypted: true
});
 //channel event
exports.pushEvent=(d)=>{

  pusher.trigger('contact', 'submit',d);
 
}
