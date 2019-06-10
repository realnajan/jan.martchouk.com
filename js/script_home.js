$(document).ready(function() {
  var links = [];
  links.push("women");
  links.push("elvis");
  links.push("woman");
  links.push("vintage-neon");
  links.push("polaroid");
  var randlink = links[Math.floor(Math.random() * links.length)];
  console.log(randlink);
  console.log('url(file:///home/jan/retro.jan.martchouk.com/img/assets/bgs/'+randlink+'.jpg)')
  $('body').css('background', 'linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(112, 66, 20, 0.5) ), url(file:///home/jan/retro.jan.martchouk.com/img/assets/bgs/'+randlink+'.jpg)');

});
