'use strict';

var app = app||{};

var navTabs = $('nav').find('li');


function navHandler() {

  navTabs.each((ind, ele) => {
    let target = $($(ele).find('p')).text();
    console.log(`/${target.toLowerCase()}`);
    page(`/${target.toLowerCase()}`, ()=>{
      $('#' + target.toLowerCase()).show();
      $(navTabs.find('p')).filter((ind, tag) => $(tag).text() !== target).each((ind, tag) =>
        $(`#${$(tag).text().toLowerCase()}`).hide());
    });
  });


}

navHandler();
page();
