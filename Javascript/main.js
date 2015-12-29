// .ScrollTo()

(function(){
	$(document).ready(function(){
		var slide = 1;
		$('#slideup-r').click(function(){
			if(slide < 4) {
				slide++;
				$('#slide' + slide).ScrollTo();
				$('#slideup-r').css('right', '-=966');
				$('#slideup-l').css('left', '+=966');
			}
			else {
				slide = 1;
				$('#slide' + slide).ScrollTo();
				$('#slideup-r').css('right', '10px');
				$('#slideup-l').css('left', '10px');
			}
		});

		$('#slideup-l').click(function(){
			if(slide > 1) {
				slide--
				$('#slide' + slide).ScrollTo();
				$('#slideup-r').css('right', '+=966');
				$('#slideup-l').css('left', '-=966');
			}
			else {
				slide = 4;
				$('#slide' + slide).ScrollTo();
				$('#slideup-r').css('right', '-2890px');
				$('#slideup-l').css('left', '2910px');
			}
		});

	});
})();