(function() {
  var FormSerializer;

  FormSerializer = (function() {
    function FormSerializer() {
      this.data_dict = {};
    }

    FormSerializer.prototype.serialize = function() {
      this.getFieldValue('first-name');
      this.getFieldValue('last-name');
      this.getFieldValue('email');
      this.getCheckboxValue('taco-box');
      console.log(this.data_dict);
      return this.data_dict;
    };

    FormSerializer.prototype.getFieldValue = function(id) {
      return this.data_dict[id] = document.getElementById(id).value;
    };

    FormSerializer.prototype.getCheckboxValue = function(id) {
      var checked;
      checked = $('#' + id + ':checked').val();
      checked = checked ? checked : 'off';
      return this.data_dict[id] = checked;
    };

    return FormSerializer;

  })();

  module.exports = FormSerializer;

}).call(this);
