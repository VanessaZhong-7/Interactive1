$(document).ready(function() {

	$(document).mousemove(function(e){
		var x = e.pageX;
		var y = e.pageY;


		$('#moving-image').css({
			'top': y-200+'px',
			'left': x-150+'px'
		})
	});
});


