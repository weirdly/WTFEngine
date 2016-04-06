import {default as $} from 'npm-zepto';
import WTF from './wtf';

class WG {
    constructor() {
        WTF.init('15bN-Wx8qt9Hs8gwQR04-s87ZtP8ZrUQ5KEtyd_JTuvg');
        this.initEvents();
    }

    initEvents() {
        $(document).on('click', 'a#start',         (e) => {e.preventDefault(), this.changePage('.page-generator');});
        $(document).on('click', 'a#new-challenge', (e) => {e.preventDefault(), WTF.generate();});
        $(document).on('click', 'a#about',         (e) => {e.preventDefault(), this.showPage('.page-about');});
        $(document).on('click', 'button#close',    (e) => {e.preventDefault(), this.hidePage('.page-about');});
    }

    changePage(page) {
        this.hidePage('.page');
        this.showPage(page);
    }

    showPage(page) {
        $(page).removeClass('hidden');
    }

    hidePage(page) {
        $(page).addClass('hidden');
    }
};

var wg;

$(function() {
    wg = new WG();
});
