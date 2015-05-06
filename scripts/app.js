(function (document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('template-bound', function() {
    console.log('The app is ready!');
    // YOU MUST CHANGE THE FOLLOWING CLIENTID TO YOU PERSONAL CLIENTID
    this.clientId = "xxxxxxxxxxx";
    this.imgId = "http://imgur.com/gallery/Nubk9vB";
    var coreAjaxImgur = document.querySelector('core-ajax-imgur');
    coreAjaxImgur.go();
    this.imgId = "";
  });

  app.submit = function(event, detail, sender) {
    console.log("submit");
    console.log("imgId: ", this.imgId);
    var coreAjaxImgur = document.querySelector('core-ajax-imgur');
    coreAjaxImgur.go();
  };

  app.handleResponse = function(event, res){
    console.log("handleResponse");
    console.log("res.response.data: ", res.response.data);
    if (res.response.data.images_count > 0) {
      this.imgSrc = res.response.data.images[1].link;
    } else {
      this.imgSrc = res.response.data.link;
    }
    this.jsonResponse = JSON.stringify(res.response.data, null, '\t');
    console.log("jsonResponse: ", this.jsonResponse);
  };

})(wrap(document));   