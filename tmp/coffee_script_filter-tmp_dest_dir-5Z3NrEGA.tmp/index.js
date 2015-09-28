(function() {
  var CenteredImage, Model, React, RegisterFormApp, imageUrl, model;

  React = require('react');

  CenteredImage = require('./centeredImageView');

  RegisterFormApp = require('./userFormView');

  Model = require('./model');

  model = new Model('app_name', 'app_purpose');

  window.model = model;

  imageUrl = 'res/Out-of-focus-lights.jpg';

  $(document).css('background-image', 'url(' + imageUrl + ')');

  React.render(CenteredImage({
    src: 'res/NewLifeLogo.png',
    scale: '30%'
  }), document.getElementById('logo-view-mount'));

  React.render(RegisterFormApp({
    model: model
  }), document.getElementById('app-view-mount'));

}).call(this);
