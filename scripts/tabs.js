'use strict';

var navTabs = $('nav').find('li');


function navHandler() {
    navTabs.each((ind, el) => $(el).on('click', function () {
        var targetMain = $($(el).children('p')).text();

        $('#' + targetMain.toLowerCase()).show();
        $(navTabs.find('p')).filter((ind, tag) => $(tag).text() !== targetMain).each((ind, tag) =>
            $(`#${$(tag).text().toLowerCase()}`).hide())

    }));

}

navHandler();