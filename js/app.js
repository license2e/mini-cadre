(function($,window,document,undefined){
  // CADRE settings
  CADRE.TPL_FRAME = {
    'frame-tpl-login': 'js/tpl/login.json?1'
  };
  // define the scope globals
  var $body = $('body')
    , $viewport = $('#app-viewport')
    , _t = CADRE.TPL_FRAME;
  
  // define the display login screen
  var display_login = function(){
    $.get(_t['frame-tpl-login'], function(data){
      
      var login_tpl = data.tpl
        , $login_form;
      $viewport.prepend(login_tpl);
      $login_form = $('#login-form');

      $login_form.on('submit.login', function(e){
        e.preventDefault();
        CADRE.loading_frame('show');
        var $this = $(this)
          , $username = $this.find('#username')
          , $password = $this.find('#password')
          , options = {
            'username': $username.val()
            , 'password': $password.val()
          }

        if ( options["username"] == '' || options["password"] == '' ) {
          console.log('error');
        } else {
          console.log('no error');
        }

        return false;
      });

      CADRE.loading_frame('hide');
      
    });
  }
  display_login();
  
  
})(jQuery,this,this.document)