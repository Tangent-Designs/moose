

/////////////////////////////////
//      Flip landing frame     //
/////////////////////////////////

var flip_landing_frame = function(){

  var counter = 2;

  lf_service_button.click(function(event) {

      counter ++;

      if (counter % 2 !== 0) {

        lf_service_card.velocity({
          scale  : ".8",
        },{
          duration : '300',
          complete : function(){
            lf_service_card.velocity({
              rotateX : "180deg",
              scale   : "1",
            },{
              duration : '650',
            })
          },
        });

      } else {

        lf_service_card.velocity({
          scale  : ".8",
        },{
          duration : '300',
          complete : function(){

            lf_service_card.velocity({
              rotateX : "0deg",
              scale   : "1",
            },{
              duration : '650',
            })
          },
        });

      };

    });

} // flip_landing_frame



/////////////////////////////////
//      Load page              //
/////////////////////////////////

var load_frame_anim = function(){

  fade_load.velocity({
    opacity: '1',
  },{
    duration: 400 ,
  });

  fade_load_out.velocity({
    opacity: '0',
  },{
    duration: 200 ,
  });


} // load_frame



/////////////////////////////////
//      Logo intro animation   //
/////////////////////////////////

var logo_intro_anim = function(){


    if ($(window).width() >= 1121){  

      var logo_moose         = $('#logo-moose'),
          logo_holder        = $('#logo-holder'),
          logo_holder_height = logo_holder.height(),
          logo_moose_height  = logo_moose.height(),

          // viewport info
          lf_wrap            = $('.lf-wrap'),
          lf_wrap_width      = lf_wrap.width(),
          lf_wrap_height     = lf_wrap.height(),
          // top
          logo_holder_top    = (lf_wrap_height - logo_holder_height) / 2,
          logo_moose_top     = logo_holder_top + 11;

          logo_holder.css({
            top       : logo_holder_top,
          });

          logo_holder.css('display', 'block');

          logo_moose.velocity({
            rotateZ : "360deg",
            top     : '-183px',
            width   : '225px',
            bottom  : 'none',
          },{
            duration  : 1000,
            easing    : [40, 10],
          });

        }; // end if


} // logo_intro_anim


/////////////////////////////////
//      Scroll animation       //
/////////////////////////////////

var arrow_scroll = function(){

  down_arrow.click(function() {
    $('html, body').animate({
        scrollTop: $("#eastlake").offset().top
    }, 500);
  });

} // arrow_scroll



/////////////////////////////////
//      Service Accordian      //
/////////////////////////////////

var service_accordian = function(){


  // accordian_h2.next().hide();

  accordian_h2.click(function(event) {
    accordian_h2.next().velocity("slideUp", { duration: 120 });
    $(this).next().velocity("slideDown", { duration: 120 });
  });

} // service_accordian



/////////////////////////////////
//      Mobile Size LF         //
/////////////////////////////////

var service_frame_height = function(){

  if ($(window).width() <= 1120){  

  var h = $('.service-accordian').height();
  $('.lf-wrap, .flipdiv').css({
    height: h + 140,
  });

} // if

} // service_frame_height










