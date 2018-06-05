/*jshint browser:true */
/*global $ */
(function() {
    "use strict";
    /*
      hook up event handlers 
    */
    function register_event_handlers() {
        /* button  Daftar */
        $(document).on("click", ".uib_w_16", function(evt) {
            /* your code goes here */
            window.location = "daftar_option.html";
            return false;
        });
        /* button  Masuk */
        $(document).on("click", ".uib_w_17", function(evt) {
            /* your code goes here */
            $.post(rootWebService + "/login", {
                email: $('#email').val(),
                password: $('#password').val()
            }, 'json').done(function(data) {
                if (data.status === 'not_found') {
                    $('#wrong_password').show();
                } else {
                    localStorage.setItem('status_login', 'logged_in');
                    localStorage.setItem('user_id', data.id);
                    localStorage.setItem('user_level', data.status);
                    localStorage.setItem('user_nama', data.nama);
                    localStorage.setItem('user_latitude', data.latitude);
                    localStorage.setItem('user_longitude', data.longitude);
                    if (data.status === 'pelanggan') {
                        window.location = "menu_pelanggan.html";
                    } else {
                        window.location = "menu_penjual.html";
                    }
                    //$.mobile.changePage($(document.location.href = "dashboard.html"), 'slide');
                }
            })
            return false;
        });
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();