'use strict';

//var app = app||{};

function navHandler() {
  $('nav p').each((_, ele) => {
    let target = $(ele).text().toLowerCase();

    page(`/${target}`, () => {
      $('main').hide();
      $(`#${target}`).show();
    });
  });
}

function notFound() {
  page('*', function(){
    $('body').text('Not found!');
  });
}


navHandler();
page();
