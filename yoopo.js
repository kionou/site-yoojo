let slide1 = document.querySelector('.slide1')

  console.log('eeee');

$('.slid').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });



let previous = document.querySelectorAll('.slick-prev')
for (let i = 0; i < previous.length; i++) {
    const previousall = previous[i];
   previousall.innerHTML = `<i class="fal fa-chevron-circle-left"></i> `   
}

let next = document.querySelectorAll('.slick-next')
for (let i = 0; i < next.length; i++) {
    const nextall = next[i];
   nextall.innerHTML = `<i class="fal fa-chevron-circle-right"></i>`   
}
