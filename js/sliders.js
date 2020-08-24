$(".commercial__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: "cubic-bezier(0.77, 0, 0.18, 1)"
});

$(".commercial__nav").on("init", function (event, slick) {
  $(".commercial__nav .slick-slide.slick-current").addClass("is-active");
  }).slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
});

$(".commercial__slider").on("afterChange", function (event, slick, currentSlide) {
  $(".commercial__nav").slick("slickGoTo", currentSlide);
  var currrentNavSlideElem = '.commercial__nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $(".commercial__nav .slick-slide.is-active").removeClass("is-active");
  $(currrentNavSlideElem).addClass("is-active");
});

$(".commercial__nav").on("click", ".slick-slide", function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data("slick-index");
  $(".commercial__slider").slick("slickGoTo", goToSingleSlide);
});

$('.coaches-list__slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.reviews__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true
  });
