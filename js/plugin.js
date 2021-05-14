// change header height 
    $('.header').height($(window).height());

// change intro location to center 
    $('.header .intro').css('padding-top',($('.header').height() - $('.header .intro').height() ) / 2);

// show more works 
    $('.show-more').on('click',function () {

        $('.items-box .hidden').removeClass('hidden');

        $(this).addClass('disabled');
    });

// create testimonials slider 
    var rightArrow = $('.fa-chevron-right'),

        leftArrow  = $('.fa-chevron-left');
        
    // next arrow 
        rightArrow.on('click',function () {

            if($('.testim .active').is(':last-of-type')){

                $('.testim .active').removeClass('active');
                $('.testim .person').eq(0).addClass('active');

            }else {

                $('.testim .active').removeClass('active').next('.person').addClass('active');
            }         
        });

    //  prev arrow 
        leftArrow.on('click',function () {

           if ($('.testim .active').is(':first-of-type')) {

                $('.testim .active').removeClass('active');
                $('.testim .person:last-of-type').addClass('active');
           }else{

                $('.testim .active').removeClass('active').prev('.person').addClass('active');
           }
      });