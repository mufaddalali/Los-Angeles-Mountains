$(document).ready(function(){

// CAROUSEL
$(".slick-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
    ]
  });


//   TABS
$('.tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
$('.tabs-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $($(this).find('a').attr('href')).show().siblings('.tab-content').hide();
    return false;
});

//Accordion
	$(".accord-heading").on("click", function() {
		var $this = $(this);
		if (!$this.hasClass("accordion-active")) {
			$(".acc-content").slideUp();
			$(".accord-heading").removeClass("accordion-active");
		}
		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
	});
	//END


})