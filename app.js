$(function(){
  $('#search').on('keyup', function(e){
    if(e.keyCode === 13) {
  	  var imageUrl = $(this).val()
	    var imgTag = ["<img src='", imageUrl, "'>"].join('');
			for (var i=1;i<30;i++) {$('#images').append(imgTag);}
			$('#search').hide()
			$('#example').hide()
    }
  })
})
