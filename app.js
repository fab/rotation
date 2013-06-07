$(document).ready(function() {
  var image = $('body').find('img');
  var imageUrl = image.attr('src');
  var imgTag = ["<img src='", imageUrl, "'>"].join('');
  for (var i=1;i<30;i++) {$('#images').append(imgTag);}
  var loop = 45;
  setInterval(function(){
    var images = $('body').find('img');
    loop += 45;
    images.rotate(loop);
  },25);
});
