




$(document).ready(function () {

    $('.opticalLink').click(function (e) { 
        e.preventDefault();
        $('.opticalLink').addClass('active');
        $('.functionalLink').removeClass('active');
        $('.sunglassesLink').removeClass('active');
        $('.productSunglassesContent').addClass('dp_none');
        $('.productOpticalContent').removeClass('dp_none');
    });$('.sunglassesLink').click(function (e) { 
        e.preventDefault();
        $('.sunglassesLink').addClass('active');
        $('.functionalLink').removeClass('active');
        $('.opticalLink').removeClass('active');
        $('.productOpticalContent').addClass('dp_none');
        $('.productSunglassesContent').removeClass('dp_none');
    });
    $('.functionalLink').click(function (e) { 
        e.preventDefault();
        $('.functionalLink').addClass('active');
        $('.opticalLink').removeClass('active');
        $('.sunglassesLink').removeClass('active');
        $('.productSunglassesContent').addClass('dp_none');
        $('.productOpticalContent').removeClass('dp_none');
    });
    
    
});