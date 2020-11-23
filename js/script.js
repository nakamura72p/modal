$(function(){
  // $('p').click(function(){
  //   $('p').hide();
  // });

$('.modal__btn').on('click',function(){
  $('.modal__bg, .modal__open, .modal__btn').toggleClass('open');
});


$('.modal__bg').click(function(){
  $('.modal__bg, .modal__open, .modal__btn').removeClass('open');
});

});
