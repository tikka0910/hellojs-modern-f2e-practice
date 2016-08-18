require('./index.scss');

var $ = require('jquery');

$('div').fadeOut(2000, function(){
  $('div').fadeIn(2000);
});
