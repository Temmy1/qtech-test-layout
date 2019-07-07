$(document).ready(function () {

    $('.close-nav').on('click', function () {

        $('.sidebar').removeClass('active');

    });

    $('.toggle-button').on('click', function (e) {

        e.preventDefault();
       
        $('.sidebar').toggleClass('active');
        
    });
});