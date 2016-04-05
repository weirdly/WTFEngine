import {default as $} from 'npm-zepto';
import WTF from './wtf';

class WG {
    constructor() {
        WTF.init('15bN-Wx8qt9Hs8gwQR04-s87ZtP8ZrUQ5KEtyd_JTuvg');
        this.initEvents();
    }

    initEvents() {
        $(document).on('click', 'a#start',         (e) => {e.preventDefault(), this.showPage('.page-generator');});
        $(document).on('click', 'a#new-challenge', (e) => {e.preventDefault(), WTF.generate();});
        $(document).on('click', 'a#about',         (e) => {e.preventDefault(), this.showPage('.page-about');});
    }

    showPage(page) {
        $('.page').addClass('hidden');
        $(page).removeClass('hidden');
    }
};

var wg;

$(function() {
    wg = new WG();
});
