app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('phoneNumber', {
      views: [
        {
          name: 'Settings',
          template: 'formio/components/phoneNumber/settings.html'
        },
        {
          name: 'Validation',
          template: 'formio/components/phoneNumber/validate.html'
        },
        {
          name: 'API',
          template: 'formio/components/common/api.html'
        },
        {
          name: 'Display',
          template: 'formio/components/common/display.html'
        }
      ],
      documentation: 'http://help.form.io/userguide/#phonenumber'
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {

    // Create the settings markup.
    $templateCache.put('formio/components/phoneNumber/settings.html',
      '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="placeholder"></form-builder-option>' +
        '<form-builder-option property="inputMask"></form-builder-option>' +
        '<form-builder-option property="prefix"></form-builder-option>' +
        '<form-builder-option property="suffix"></form-builder-option>' +
        '<form-builder-option property="multiple"></form-builder-option>' +
        '<form-builder-option property="unique"></form-builder-option>' +
        '<form-builder-option property="protected"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
      '</ng-form>'
    );

    // Create the Validation markup.
    $templateCache.put('formio/components/phoneNumber/validate.html',
      '<ng-form>' +
        '<form-builder-option property="validate.required"></form-builder-option>' +
      '</ng-form>'
    );
  }
]);
