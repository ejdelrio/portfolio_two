'use strict';

var $slider = $('#slider');

var arrows = $slider.children('div');

function nextSlide() {
    var slides = $slider.find('span');
    var discs = $slider.find('li');
    var currentSlide = slides.map(ind => ind).filter(ind => $(slides[ind]).css('display') === 'block');
    var nextSlide = currentSlide[0] === 2 ? 0 : (currentSlide[0] === 1 ? 2 : 1);
    console.log('current: ', currentSlide[0])
    $(slides[currentSlide[0]]).fadeOut(400);
    $(discs[currentSlide[0]]).css('background', 'rgba(255, 255, 255, 0.5');
    $(slides[nextSlide]).delay(400).fadeIn(400);
    $(discs[nextSlide]).css('background', 'rgba(255, 255, 255, 1');
}

function previousSlide() {
    var slides = $slider.find('span');
    var discs = $slider.find('li');
    var currentSlide = slides.map(ind => ind).filter(ind => $(slides[ind]).css('display') === 'block');
    var nextSlide = currentSlide[0] === 2 ? 1 : (currentSlide[0] === 1 ? 0 : 2);
    console.log('current: ', nextSlide)
    $(slides[currentSlide[0]]).fadeOut(350);
    $(discs[currentSlide[0]]).css('background', 'rgba(255, 255, 255, 0.5');
    $(slides[nextSlide]).delay(400).fadeIn(350);
    $(discs[nextSlide]).css('background', 'rgba(255, 255, 255, 1');

}
$(arrows[0]).on('click', previousSlide);
$(arrows[1]).on('click', nextSlide);