/////////////////////////////////
//      Flip landing frame     //
/////////////////////////////////

var counter = 2;

$('.lf-card, .service-card').click(function(event) {

    counter ++;

    if (counter % 2 !== 0) {

      ////////////////
      $('.lf-card, .service-card').velocity({
        scale  : ".8",
      },{
        duration : '300',
        complete : function(){

          $('.lf-card, .service-card').velocity({
            rotateX : "180deg",
            scale   : "1",
          },{
            duration : '650',
          })
        },
      });
      ////////////////

    } else {

      ////////////////
      $('.lf-card, .service-card').velocity({
        scale  : ".8",
      },{
        duration : '300',
        complete : function(){

          $('.lf-card, .service-card').velocity({
            rotateX : "0deg",
            scale   : "1",
          },{
            duration : '650',
          })
        },
      });
      ////////////////

    };

  });


/////////////////////////////////
//      Logo intro animation   //
/////////////////////////////////

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
    logo_moose_top     = logo_holder_top + 28;
    // width

    // positioning and scaling defaults
    logo_moose.css({
      top       : logo_moose_top,
      // width     : ,
    });

    logo_holder.css({
      top       : logo_holder_top,
      // width     : ,
    });


    logo_moose.velocity({
      rotateZ : "360deg",
      top     : (lf_wrap_height - logo_moose_height) / 2,
      scale   : 6,
    },{
      duration  : 1500,
      easing    : [40, 10],
      delay     :1000,
      complete  : function(){
          logo_holder.css('display', 'block');
      } // callback

    });

    logo_moose.velocity({
      rotateZ : "0deg",
      top     : logo_moose_top,
      scale   : 1,
    },{
      duration  : 1000,
      easing    : [40, 10],
      delay     :1000,
    });
















