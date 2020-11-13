




$(document).ready(function () {
 //點擊product頁面 切換產品資訊
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
//點擊local頁面 切換地圖資訊
    $('.locationContentItemButton').click(function (e) { 
        e.preventDefault();
        $('.locationContent').addClass('dp_none');
        $('.location2Content').removeClass('dp_none');
    });
    $('.location2ContentBackup').click(function (e) { 
        e.preventDefault();
        $('.location2Content').addClass('dp_none');
        $('.locationContent').removeClass('dp_none');
        
    });
//點擊blog頁面 切換資訊    
    $('.blogLink').click(function (e) { 
        $('.blog2').addClass('dp_none');
        $('.blog1').removeClass('dp_none');
    });
    $('.specialProjectLink').click(function (e) { 
        e.preventDefault();
        $('.blog1').addClass('dp_none');
        $('.blog2').removeClass('dp_none');
    });
    $('.blogContentItemContentMoreLink').click(function (e) { 
        e.preventDefault();
        $('.blog1').addClass('dp_none');
        $('.blog2').removeClass('dp_none');
    });
    
});