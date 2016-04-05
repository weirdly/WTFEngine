import {default as $} from 'npm-zepto';
import WTF from './wtf';

$(function() {
    WTF.init( '15bN-Wx8qt9Hs8gwQR04-s87ZtP8ZrUQ5KEtyd_JTuvg' );
});

$(document).on('click', 'a#start', function () {
    $('.page').addClass('hidden');
    $('.page-generator').removeClass('hidden');
});

$(document).on('click', 'a#new-challenge', function (e) {
    e.preventDefault();
    WTF.generate();
});
