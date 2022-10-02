$.fn.extend({
  equalHeights: function() {
    var top = 0;
    var row = [];
    var classname = ('equalHeights' + Math.random()).replace('.', '');
    $(this).each(function() {
      var thistop = $(this).offset().top;
      if (thistop > top) {
        $('.' + classname).removeClass(classname);
        top = thistop;
      }
      $(this).addClass(classname);
      $(this).height('auto');
      var h = (Math.max.apply(null, $('.' + classname).map(function() {
        return $(this).outerHeight();
      }).get()));
      $('.' + classname).height(h);
    }).removeClass(classname);
  }
});

function country_width() {
  /*country width for mobile*/
  var max_width = $(" .country-block-gallery .img-details").width();

  $(".country-block-gallery .img-wrap .img-details h5").each(function() {
    $this = $(this);
    if ($(window).width() < 600) {
      if ($this.width() > max_width - 5) {
        $(".country-block-gallery").addClass("reduce-size");
      }
    } else {
      $(".country-block-gallery").removeClass("reduce-size");
    }
  });
}

function navactivemenu(){
    // Cache selectors
    var lastId,
    topMenu = $(".activity-menu"),
    topMenuHeight = topMenu.outerHeight()+1,
         // All list items
         menuItems = topMenu.find("a"),
         // Anchors corresponding to menu items
         scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation


        if($(window).width() > 479){
          menuItems.click(function(e){
            var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - $("header").innerHeight();
            $('html, body').stop().animate({ 
              scrollTop: offsetTop
            }, 850);
            e.preventDefault();
          });
        }
        else if( $(window).width() < 480){

         menuItems.click(function(e){
          var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight -  $("header").innerHeight();
          $('html, body').stop().animate({ 
            scrollTop: offsetTop
          }, 850);
          e.preventDefault();
        });
       }


  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length - 1];
     var id = cur && cur.length ? cur[0].id : "";
     if (lastId !== id) {
       lastId = id;
         // Set/remove active class
         menuItems.parent('li').removeClass("active").end().filter("[href=#"+id+"]").parent('li').addClass("active");
       }                   
     });
}
$(document).ready(function() {


  // Login\signup popup
  $(".login-modal .signup-text a").click(function(){
    $(".login-modal").modal("hide");
    $(".login-modal").on("hidden.bs.modal", function(){
      $('.signup-modal').on('shown.bs.modal', function() {
        $('body').addClass('modal-open');
      });
    });
  });

  navactivemenu();

  $(".custom-dropdown").on("change", function(){
    setTimeout(function(){
      $('.fixed-block-outer > div').equalHeights();
    },400);
  });
  $(".custom-swiper-pagination").click(function(){
    setTimeout(function(){
      $('.fixed-block-outer > div').equalHeights();
    },400);
  });


  $(window).resize(function(){

   navactivemenu();
   if ($(window).width() < 768){
    $('.loved-project .activity-project-slider').addClass('owl-carousel');
    $(".activity-project-slider").owlCarousel({
      margin:30,            
      nav:false,
      dots:false,
      loop:false,
      responsive : {
                        // breakpoint from 0 up
                        0 : {
                         items:1,
                         dots:true,
                       },
                        // breakpoint from 480 up
                        480 : {
                          items:2,
                          dots:true,
                        },
                        // breakpoint from 768 up
                        768 : {
                          items:3,
                          dots:false,
                        }
                      }  
                    });
  }
  else{
   $('.loved-project .activity-project-slider').removeClass('owl-carousel');
 }

});


  if ($(window).width() < 768){
    $('.loved-project .activity-project-slider').addClass('owl-carousel');
    $(".activity-project-slider").owlCarousel({
      margin:30,            
      nav:false,
      dots:false,
      loop:false,
      responsive : {
                        // breakpoint from 0 up
                        0 : {
                         items:1,
                         dots:true,
                       },
                        // breakpoint from 480 up
                        480 : {
                          items:2,
                          dots:true,
                        },
                        // breakpoint from 768 up
                        768 : {
                          items:3,
                          dots:false,
                        }
                      }  
                    });
  }
  else{
   $('.loved-project .activity-project-slider').removeClass('owl-carousel');
 }


 $(".activity-destination-slider").owlCarousel({
  margin:30,
  items:3,
  nav:false,
  dots:false,
  loop:false,
  mouseDrag:false,
  touchDrag:false,
  responsive : {
                        // breakpoint from 0 up
                        0 : {
                         items:1,
                         dots:true,
                         mouseDrag:true,
                         touchDrag:true
                       },
                                             // breakpoint from 768 up
                                             768 : {
                                              items:3
                                            }
                                          } 

                                        });

 $(".activity-gallery-slider").owlCarousel({
   loop: true,
   items: 1,
   thumbs: true,
   thumbImage: true,
   thumbContainerClass: 'owl-thumbs',
   thumbItemClass: 'owl-thumb-item',
   nav:true,
   navText: ["<img src='images/left-arrow-big.png'>","<img src='images/right-arrow-big.png'>"],
   responsive : {
                        // breakpoint from 0 up
                        0 : {

                         dots:true,
                         nav:false,
                       },
                                             // breakpoint from 768 up
                                             768 : {
                                               dots:false,
                                               nav:true,
                                             }
                                           } 
                                         });

    // Select2
    $('.select-dropdown').select2({
      placeholder: 'Select an option'
    });

    // Select2 Normal Dropdown
    $(".custom-select").each(function(){
      var $this = $(this);
      var $pl= $this.attr("data-placeholder");
      $this.select2({
        placeholder: $pl,
        dropdownParent:$this.closest("div"),
        minimumResultsForSearch: Infinity
      });
    });

    if($("#popup-video").length){
      var video = document.getElementById("popup-video");
      video.pause();
      $("a[href='#']").click(function(e) {
        e.preventDefault();
      });
      $('#videoModal').on('hidden.bs.modal', function () {
        video.pause();
      })
      $('#videoModal').on('show.bs.modal', function () {
        video.play();
      })
    }

    if ($(window).width() < 768) {
      $(".carousel-banner .imagefill").height($(window).height() * 45 / 100);
    } else {
      $(".carousel-banner .imagefill").height($(window).height() * 70 / 100);
    }


    /*mobile apply btn*/
    $(".apply-now-btn-outer a").click(function() {
      $("body").toggleClass("open-form");
    });

    //fast click for touch devices  
    FastClick.attach(document.body);

    var availableTags = [
    "Bolivia",
    "Costa Rica",
    "India",
    "kenya",
    "Peru",
    "South Africa",
    "Thailand"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });

    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //Datepicker
    $("#select-date").datepicker({
      numberOfMonths: 2,
      onSelect: function( selectedDate ) {
        if(!$(this).data().datepicker.first){
          $(this).data().datepicker.inline = true
          $(this).data().datepicker.first = selectedDate;
        }else{
          if(selectedDate > $(this).data().datepicker.first){
            $(this).val($(this).data().datepicker.first+" - "+selectedDate);
          }else{
            $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
          }
          $(this).data().datepicker.inline = false;
        }
      },
      onClose:function(){
        delete $(this).data().datepicker.first;
        $(this).data().datepicker.inline = false;
      }
    });


    var initWidth;
    
    setTimeout(function(){
      initWidth = $(".single-swiper .swiper-slide").width();
    },1000);

    var mySwiper1 = new Swiper('.single-swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function() {
          setTimeout(function(){
            $(".single-swiper .swiper-slide.swiper-slide-active").width(initWidth+1);
          },1000)
        },
        slideChange: function () {
          setTimeout(function(){
            $(".single-swiper .swiper-slide").width(initWidth);
            $(".single-swiper .swiper-slide.swiper-slide-active").width(initWidth+1);
          },200)
        }
      },

    });

    /*projectDatesSwiper*/
    if ($(window).width() >= 768) {
      var swiper = new Swiper('.volunteers-swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 6,
        loop: false,
        loopedSlides: 6,
        breakpoints: {
         1681: {
          slidesPerView: 6

        },
        1680: {
          slidesPerView: 5

        },
        1600: {
          slidesPerView: 4

        },
        1024: {
          slidesPerView: 3

        },
        1023: {
          slidesPerView: 3

        }
      }
    });
    } else {
      var swiper = new Swiper('.volunteers-swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 6,
        loop: true,
        centeredSlides: true,
        loopedSlides: 6,
        autoHeight: true,
        breakpoints: {
         767: {
          slidesPerView: 3


        },
        320: {
          slidesPerView: 3

        }
      }
    });
    }

    if ($(window).width() >= 768) {
      var swiper = new Swiper('.four-block-swiper', {
        navigation: {
          nextEl: $(".organize-carousel-outer").find('.swiper-button-next'),
          prevEl: $(".organize-carousel-outer").find('.swiper-button-prev'),
        },
        slidesPerView: 4,
        loop: false,
        loopedSlides: 4,
        breakpoints: {
         1199: {
          slidesPerView: 3
        },
        767: {
          slidesPerView: 3,
          loopedSlides: 5
        },

      }
    });
    } else {

      var swiper = new Swiper('.four-block-swiper', {
        navigation: {
          nextEl: $(".organize-carousel-outer").find('.swiper-button-next'),
          prevEl: $(".organize-carousel-outer").find('.swiper-button-prev'),
        },
        slidesPerView: 6,
        loop: true,
        centeredSlides: true,
        loopedSlides: 6,
        autoHeight: 'false',

        breakpoints: {
          767: {
            slidesPerView: 3,
            loopedSlides: 5,
          },
          320: {
            slidesPerView: 3

          }
        }
      });
    }

    if ($(window).width() > 767) {
      var swiper2 = new Swiper('.review-swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          bulletElement: 'span',
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        },
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        slidesPerView: 1,
        autoHeight: 'true',
      });
    }

    var galleryTop = new Swiper('.gallery-top', {
      navigation: {
        nextEl: $(".gallery-swiper-nav").find('.swiper-button-next'),
        prevEl: $(".gallery-swiper-nav").find('.swiper-button-prev'),
      },
      spaceBetween: 10,
      loop: true,
      loopedSlides: 6
    });
    
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      centeredSlides: true,
      slidesPerView: 5,
      loop: true,
      loopedSlides: 6,
      breakpoints: {
        1199: {
          slidesPerView: 4,
          loopedSlides: 5,
          spaceBetween: 5
        },

      }
    });
    
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;


    $('.swiper-slide').on('click', function(ev) {
      var storeAttr = $("iframe").attr("src");
      ev.preventDefault();
      $(".gallery-top .swiper-slide-active").find("iframe").attr("src", storeAttr += "&autoplay=1");
        //$(".gallery-top .swiper-slide-active").siblings(".swiper-slide").find("iframe").attr("src", storeAttr += "&autoplay=0");
      });

    //dropkick
    $(".custom-dropdown").dropkick({
      mobile: true
    });
    $(".custom-dropdown-one").dropkick({
      mobile: true
    });

    // $(".custom-dropdown").find(".dk-selected").wrapInner( "<div class='dk-text-wrap'></div>" );
    // setTimeout(function(){
    //   $(".signup-modal").modal('show');
    // },1000)

    //placeholder
    $("[placeholder]").each(function() {
      $(this).attr("data-placeholder", this.placeholder);

      $(this).bind("focus", function() {
        this.placeholder = '';
      });
      $(this).bind("blur", function() {
        this.placeholder = $(this).attr("data-placeholder");
      });

    });
    if ($(".tabs-outer .tabs").length) {
      var tabTop = ($('.tabs-outer .tabs-inner').offset().top - $("header").innerHeight());
    }

        $(".wrapper").addClass('small-header');       

    // small-header
    $(window).scroll(function() {

      if ($(window).scrollTop() > tabTop) {
        $('body').addClass("tab_fixing");

      } else {
        $('body').removeClass("tab_fixing");
      }


     /* if ($(window).scrollTop() > $(".scroll-hide.header").height()) {
        $(".wrapper").addClass('small-header');       

      } else {
        $(".wrapper").removeClass('small-header');
      }*/

      if ($(window).scrollTop() > ($(".wide-column > .row").innerHeight()/2 - $(".pagination").height() )) {
        $("body").addClass("released-button");
      }else{
        $("body").removeClass("released-button");
      }
      /*  var deduct_val = $(window).scrollTop();
        var map_top_val = 221;
        var final_val  = map_top_val - deduct_val;
        $(".map").css("top",final_val + "px");  */ 
        if($(window).width() > 1199 && ($("footer").length)){
          var footer_top_val = $("footer").offset().top;
          var max_val = $(window).scrollTop() + $("#search-map").innerHeight() + $("header").innerHeight() + $(".search-panel").innerHeight();
          if(max_val > footer_top_val){
            $(".map").addClass("fix_it");
          }else{
            $(".map").removeClass("fix_it");
          }      
        }
      });

    //Fixed Block
    if ($(window).width() > 1199) {
      $(".fixed-block-outer").each(function() {
        var $this = $(this);
        $(window).scroll(function() {
          if ($(window).scrollTop() > ($this.offset().top - $("header").innerHeight() - $(".tabs-inner").height())) {
            $this.find(".links-outer").addClass("fixed");
            if ($(window).scrollTop() > ($(".fixed-block-outer .left-grid").offset().top + ($(".fixed-block-outer .left-grid").height() - parseInt($(".tab-content-outer").css("margin-bottom"), 10) - (parseInt($(".apply-form-outer.fixed .fixed-form").css("top"), 10) + $(".apply-form-outer.fixed .fixed-form").height())))) {
              $this.find(".links-outer").addClass("bottom-touch");
            } else {
              $this.find(".links-outer").removeClass("bottom-touch");
            }
          } else {
            $this.find(".links-outer").removeClass("fixed");
          }
        });
      });
    }

    $(".hamburger-icon").click(function(e) {
      e.stopImmediatePropagation();
      $("html,body").toggleClass("open-menu");
    });

    // imagefill
    $(".imagefill,.single-swiper .swiper-slide").imagefill();

    // owl carousel
    $('.prev-winner-sliders').owlCarousel({
      loop: true,
      stagePadding: 160,
      margin: 35,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: ["<i><img src='images/angle-left-arrow.svg'></i>", "<i><img src='images/angle-right-arrow.svg'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: false,
          stagePadding: 35,
          loop:true,
          margin: 15,
        },
        560: {
          items: 2,
          nav: true,
          margin: 20,
          stagePadding: 80,
        },        
        991: {
          items: 3,
          nav: true,
          loop: true,
          stagePadding: 100,
        },
        1440: {
          items: 4,
          nav: true,
          loop: true,
          stagePadding: 160,
        },


      }
    });

    $('.four-item-carousel').owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: ["<i><img src='images/left-arrow.svg'></i>", "<i><img src='images/right-arrow.svg'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        768: {
          items: 2,
          nav: true,
          margin: 20
        },
        1025: {
          items: 3,
          nav: true,
          loop: false

        },
        1441: {
          items: 4,
          nav: true,
          loop: false
        }
      }
    })
    $('.five-item-carousel').owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: ["<i><img src='images/left-arrow.svg'></i>", "<i><img src='images/right-arrow.svg'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        768: {
          items: 3,
          nav: true,
          margin: 20
        },
        1025: {
          items: 4,
          nav: true,
          loop: false
        },
        1441: {
          items: 5,
          nav: true,
          loop: false
        }
      }
    })
    $('.six-item-carousel').owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: ["<i><img src='images/left-arrow.svg'></i>", "<i><img src='images/right-arrow.svg'></i>"],
      responsive: {
        0: {
          items: 2,
          nav: true,
          margin: 18
        },
        768: {
          items: 3,
          nav: true,
          margin: 20
        },
        1025: {
          items: 5,
          nav: true,
          loop: false
        },
        1441: {
          items: 6,
          nav: true,
          loop: false
        }
      }
    });

    /*project date owl*/
    $('.date-carousel').owlCarousel({
      loop: false,
      margin: 0,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: ["<i><img src='images/left-white-arrow.png'></i>", "<i><img src='images/right-white-arrow.png'></i>"],
      responsive: {
        0: {
          items: 2,
          nav: true,
          margin: 0,

        },
        768: {
          items: 4,
          nav: true,
          loop: false
        }
      }
    });


    $(".img-wrap .img-block,.img-wrap .img-details,.join-block h5 a").mouseover(function() {
      $(this).closest(".item").addClass("hovered");
    })
    $(".img-wrap .img-block,.img-wrap .img-details,.join-block h5 a").mouseout(function() {
      $(this).closest(".item").removeClass("hovered");
    })

    /*tabs*/
    var sections = $('.tab-content-outer > div'),
    nav = $('.tabs');
    $(window).on('scroll', function() {
      if($("body,html").hasClass("triggered")){
        var cur_pos = $(this).scrollTop() + $("header").innerHeight();
      } else {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
          var top = $(this).offset().top - $("header").innerHeight() - $(".tabs").height(),
          bottom = top + $(this).outerHeight();
          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
        });
      }
    });
    nav.find('a').on('click', function(e) {

      $(this).addClass("active");
      $(this).closest('li').siblings('li').find('a').removeClass("active");

      $('html, body').addClass("triggered");
      var $el = $(this),
      id = $el.attr('href');
      $('html, body').animate({
        scrollTop: $(id).offset().top - $("header").innerHeight() - $(".tabs").height() + 5
      }, 500);
      setTimeout(function() {
        $('html, body').removeClass("triggered");
      }, 1000)
      return false;
    });
    if($(window).width() > 767){
      $(".project-start-col .datepicker.approx-date-datepicker").datepicker({
        /*beforeShowDay:function(dt)
        { 
            return [available(dt), "" ];
          },*/
          dateFormat: "mm-dd-yy",
          showOn: "button",
          buttonImage: "images/white-calander-icon.png",
          buttonImageOnly: true,
          onSelect: function() {
            $(".approx-date-datepicker").addClass("highlight-border");
          }
        });
    }
    else if($(window).width() < 768){
      $(".project-start-col .datepicker.approx-date-datepicker").datepicker({
        /*beforeShowDay:function(dt)
        { 
            return [available(dt), "" ];
          },*/
          dateFormat: "mm-dd-yy",
          showOn: "button",
          buttonImage: "images/orange-calander-icon.png",
          buttonImageOnly: true,
          onSelect: function() {
            $(".approx-date-datepicker").addClass("highlight-border");
          }
        });
    }
    $(".datepicker.approx-date-datepicker").datepicker({
        /*beforeShowDay:function(dt)
        { 
            return [available(dt), "" ];
          },*/
          dateFormat: "mm-dd-yy",
          showOn: "button",
          buttonImage: "images/orange-calander-icon.png",
          buttonImageOnly: true,
          onSelect: function() {
            $(".approx-date-datepicker").addClass("highlight-border");
          }
        });

    /*var availableDates = ["10-6-2017", "24-6-2017", "8-7-2017", "22-7-2017", "5-8-2017", "19-8-2017", "16-9-2017", "30-9-2017", "14-10-2017", "28-10-2017", "11-11-2017", "25-11-2017", "6-1-2018", "20-1-2018", "3-2-2018", "17-2-2018", "3-3-2018", "17-3-2018", "31-3-2018", "14-4-2018", "28-4-2018", "12-5-2018", "26-5-2018", "9-6-2018", "23-6-2018", "7-7-2018", "21-7-2018", "4-8-2018", "18-8-2018", "1-9-2018", "15-9-2018", "29-9-2018", "13-10-2018", "27-10-2018", "10-11-2018", "24-11-2018", "12-1-2019", "26-1-2019", "9-2-2019", "9-3-2019", "23-3-2019", "6-4-2019", "20-4-2019", "4-5-2019", "18-5-2019", "1-6-2019", "15-6-2019", "29-6-2019", "13-7-2019", "27-7-2019", "10-8-2019", "24-8-2019", "7-9-2019", "21-9-2019", "5-10-2019", "19-10-2019", "2-11-2019", "16-11-2019", "30-11-2019"];

    function available(date) 
    {
        dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
        if ($.inArray(dmy, availableDates) != -1) {
            return true;
        } else {
            return false;
        }
      }*/

      $(".datepicker").click(function() {
        var $this = $(this).closest(".form-group");
        $this.find(".ui-datepicker-trigger").click();

      })

      $('.read-more').click(function() {
        var moreId = $(this).attr('data-id');
        $("#small-" + moreId.replace("rev-", "")).hide();
        $("#" + moreId).show();
        $(this).hide();
        swiper2.update(true);
        $('.fixed-block-outer > div').equalHeights();
      });




    // range slider
    if ($("#cost-slider").length > 0) {
      var slider = document.getElementById('cost-slider');
      noUiSlider.create(slider, {
        start: 0,
        step: 1,
        connect: true,
        pips: {
          mode: 'values',
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          density: 0
        },
        range: {
          'min': 1,
          'max': 12
        }
      });
    }

    if($("#price-slider").length > 0){
      var input0 = document.getElementById('input-with-keypress-0');
      var input1 = document.getElementById('input-with-keypress-1');
      var inputs = [input0, input1];

      var slider = document.getElementById('price-slider');

      noUiSlider.create(slider, {
        start: [0, 300],
        connect: true,
        range: {
          'min': 0,
          'max': 300
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          prefix: '$',
          suffix: ''
        })

      });

      slider.noUiSlider.on('update', function( values, handle ) {
        inputs[handle].value = values[handle];
        var inputValue = $("#input-with-keypress-0").val();
        var inputValue1 = $("#input-with-keypress-1").val();
        $(".input-with-keypress-0,.input-with-keypress-1").empty();
        $(".input-with-keypress-0").append("/week")
        $(".input-with-keypress-1").append("/week")
        $(".input-with-keypress-0").prepend(inputValue)
        $(".input-with-keypress-1").prepend(inputValue1)
      });
    }

    if($("#duration-slider").length > 0){
      var input2 = document.getElementById('input-with-keypress-2');
      var input3 = document.getElementById('input-with-keypress-3');
      var inputs1 = [input2, input3];

      var slider1 = document.getElementById('duration-slider');

      noUiSlider.create(slider1, {
        start: [0, 10],
        connect: true,
        range: {
          'min': 0,
          'max': 50
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          prefix: '',
          suffix: ''
        })

      });

      slider1.noUiSlider.on('update', function( values, handle ) {
        inputs1[handle].value = values[handle];
        var inputValue = $("#input-with-keypress-2").val();
        var inputValue1 = $("#input-with-keypress-3").val();
        $(".input-with-keypress-2,.input-with-keypress-3").empty();
        $(".input-with-keypress-2").append("weeks")
        $(".input-with-keypress-3").append("months")
        $(".input-with-keypress-2").prepend(inputValue)
        $(".input-with-keypress-3").prepend(inputValue1)
      });
    }

    /*accordion*/
    if($(".faq-outer").length < 1){
      $(".accordion-toggle,.left-accordion-title .logo-block,.left-accordion-title .detail-block h3").click(function(e) {
        e.preventDefault();
        $this = $(this).closest(".accordion-block");
        $this.find(".accordion-content").stop(true, true).slideToggle();
        $this.toggleClass("active");
        $(".imagefill").imagefill();
      });
    }

    $(".no-result-wrap").css({"min-height":($(window).height() - $(".small-thumbs").height() - $(".search-panel").innerHeight() - $("header").height() - 36)})

    $(".more-filters-btn").click(function(){
      var $this = $(this).closest(".search-panel");
      if($(window).width() > 1199 ){
        $this.find(".more-filters").slideToggle();
      }
      $("html,body").toggleClass("filters-open");
      if($(window).width() < 768 ){
        $this.find(".mobile-search-expand").slideUp();
        $("html,body").removeClass("more-search");
      }
    });

    $(".filter-search-btn").click(function(){
      var $this = $(this).closest(".search-panel");
      $this.find(".mobile-search-expand").slideToggle();
      $("html,body").toggleClass("more-search");
      $("html,body").removeClass("filters-open");
    });

    $(".close-filter").click(function(){
      $("html,body").removeClass("filters-open");
    })

    $(".view-map-btn").click(function(){
      var $this = $(this).find("span > em");
      $("html,body").toggleClass("view-map");
      if($this.text() == "View on map"){
        $this.text("List view");
      }else{
        $this.text("View on map");
      }
    });

    $(".search-result-btn").click(function(){
      var $this = $(this).closest(".search-panel");
      if($(window).width() > 1024 ){
        $this.find(".more-filters").slideUp();
      }
      $("html,body").removeClass("filters-open");
      if($(window).width() < 768 ){
        $this.find(".mobile-search-expand").slideUp();
      }
      $("html,body").removeClass("more-search");
    });

    $(".faq-outer .accordion-block").click(function(e){
      e.stopImmediatePropagation();
      e.preventDefault();
      $this = $(this);
      $this.find(".accordion-content").stop(true, true).slideToggle();
      $this.toggleClass("active");
    });

    $(".faq-outer .accordion-content a").click(function(e){
      e.stopImmediatePropagation();

    })

    $(".see-all-lang").click(function(e){
      var $this = $(this).find("em");
      e.preventDefault();
      $(".more-languages").slideToggle();
      $(this).toggleClass("expand");
      if($this.text() == "See all languages"){
        $this.text("Minimize languages");
      }else{
        $this.text("See all languages");
      }
    });



    $(".approx-date-datepicker").keydown(function(e) {
      e.preventDefault();
    })

    $("#carousel-modal .swiper-button-white,#carousel-modal .swiper-container,.gallery-swiper-nav.swiper-nav-outer .img-info p").click(function(e) {

      e.stopPropagation();
    });
    $("#carousel-modal").click(function() {
      $(this).modal("hide");
    })

  })

$(window).load(function() {


if($(window).width() > 1199){
  $('.activity-menu').sticky({ topSpacing: 0, center:true, className:"stickydiv" });
}
else if($(window).width() < 1200)
{
 $('.activity-menu').sticky({ topSpacing: 0, center:true, className:"stickydiv" });
}
    // setTimeout(function(){
      country_width();
    // },500);

    $('.banner-search .col').equalHeights();
    $('.prev-winner-slider .winner-detail').equalHeights();
    $('.fixed-block-outer > div').equalHeights();
    $(".cards").equalHeights();

    setTimeout(function() {
      $(".page-banner img").css("opacity", 1);
    }, 300)


    if ($(window).width() > 1199) {
      var showChar = 155;
    } else if (($(window).width() < 1200) && ($(window).width() > 767)) {
      var showChar = 99;
    } else if ($(window).width() < 768) {
      var showChar = 82;
    }
    var ellipsestext = "...";
    $('.more').each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar - 1, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '<br/></span>';
        $(this).html(html);
      }
    });

  });

$(window).resize(function() {


  if($(window).width() > 1199){
    $('.activity-menu').sticky({ topSpacing: 0, center:true, className:"stickydiv" });
  }
  else if($(window).width() < 1200)
  {
   $('.activity-menu').sticky({ topSpacing: 0, center:true, className:"stickydiv" });
 }

    // imagefill
    $(".imagefill").imagefill();

    $(".cards").equalHeights();

    $(".no-result-wrap").css({"min-height":($(window).height() - $(".small-thumbs").height() - $(".search-panel").innerHeight() - $("header").height() - 36)})
    
    setTimeout(function() {
      country_width();

      $('.banner-search .col').equalHeights();

     //  $(".banner-wrap .banner-img").css({ "height": ($(window).height() - $("header").innerHeight()) * 72.2 / 100 })
     //  if ($(window).width() < 1199) {
     //   $(".banner-wrap .banner-img").css({ "height": ($(window).height() - $("header").innerHeight()) * 68.4 / 100 })
     // }
     // if ($(window).width() < 768) {
     //   $(".banner-wrap .banner-img").css({ "height": ($(window).height() - $("header").innerHeight()) * 100 / 100 })
     // }


   }, 600);
    if ($(window).width() < 768) {
      $(".carousel-banner .imagefill").height($(window).height() * 45 / 100);
    } else {
      $(".carousel-banner .imagefill").height($(window).height() * 70 / 100);
    }

    $('.fixed-block-outer > div').equalHeights();

    if ($(window).width() > 1199) {
      $(".fixed-block-outer").each(function() {
       var $this = $(this);
       $(window).scroll(function() {
        if ($(window).scrollTop() > ($this.offset().top - $("header").innerHeight() - $(".tabs-inner").height())) {
         $this.find(".links-outer").addClass("fixed");
         if ($(window).scrollTop() > ($(".fixed-block-outer .left-grid").offset().top + ($(".fixed-block-outer .left-grid").height() - parseInt($(".tab-content-outer").css("margin-bottom"), 10) - (parseInt($(".apply-form-outer.fixed .fixed-form").css("top"), 10) + $(".apply-form-outer.fixed .fixed-form").height())))) {
          $this.find(".links-outer").addClass("bottom-touch");
        } else {
          $this.find(".links-outer").removeClass("bottom-touch");
        }
      } else {
       $this.find(".links-outer").removeClass("fixed");
     }
   });
     });
    }



  });