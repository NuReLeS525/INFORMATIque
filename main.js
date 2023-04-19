$(function () {

  var mixer = mixitup('.boards__list');

  $('.boards__filter-btn').on('click', function () {
    $('.boards__filter-btn').removeClass('boards__filter-btn--active')
    $(this).addClass('boards__filter-btn--active')
  })

  $('.acc__item-link').on('click', function (e) {
    e.preventDefault()
    // $(this).toggleClass('program__acc-link--active')
    if ($(this).hasClass('acc__item-link--active')) {
      $(this).removeClass('acc__item-link--active')
      $(this).children('.acc__content').slideUp()
    } else {
      $('.acc__item-link').removeClass('acc__item-link--active')
      $('.acc__content').slideUp()
      $(this).addClass('acc__item-link--active')
      $(this).children('.acc__content').slideDown()
    }
  })

})