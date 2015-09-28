(function() {
  var EventEmitter, Model, print,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  EventEmitter = require('events').EventEmitter;

  print = function(args) {
    return console.log(args);
  };

  Model = (function(superClass) {
    extend(Model, superClass);

    function Model(app_name, app_desc) {
      this.app_name = app_name;
      this.app_desc = app_desc;
      this.users = [];
    }

    Model.prototype.add_data = function(data) {
      return this.users.push(data);
    };

    return Model;

  })(EventEmitter);

  module.exports = Model;

}).call(this);
