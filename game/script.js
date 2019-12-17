var score = 0
var timer = 3.1

function plusone() {
	if (timer > 0) {
		document.getElementById('score').innerHTML = score + 1;
		score++
		var audio = new Audio('uh.mp3');
		audio.fastSeek(0.3);
		audio.play();
	}
}

function minusone() {
	if (timer > 0) {
	document.getElementById('score').innerHTML = score - 1;
	$('#score').addClass('shake');
	setTimeout(function() {
			$('#score').removeClass('shake');
	}, 500)
	score--
	var audio = new Audio('wrong.mp3');
	audio.fastSeek(0.5);
	audio.play();
	}
}

function randompos() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('.pic'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
};

$('.minus').click(function() {
	minusone();
	randompos();
})

function timerReset() {
	timer = 3.1
}

setInterval(function() {
	if ( timer > 0 ) {
		timer = timer - 0.1;
		document.getElementById('timer').innerHTML = timer.toString().substr(0, 4);
	} else {
		timer = 0
		document.getElementById('timer').innerHTML = timer.toString().substr(0, 6);
		document.getElementById('pic').style.display = 'none'
		document.getElementById('timer').style.display = 'none'
		document.getElementById('over').style.display = 'block'
		document.getElementById('score').style.color = 'gray'
	}
}, 100)