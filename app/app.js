$(document).ready(function() {

    setTimeout(function() {
        $('.navigation').css('opacity','1')
    },500)
    
    setInterval(function() {
        $('.privelege-image').toggleClass('rotate-glass')
    },2000)

    $(window).scroll(function() {
        
        if($(this).scrollTop()>50) {
            $('.privilege-description').css({
                "top" : "0",
                "opacity": "1"
            })
        }
    }) 

    $(window).scroll(function() {

        if($(this).scrollTop()>900) {
            $('.new-wine-container').css({
                "top" : "0",
                "opacity": "1"
            })
        }
    })

    $(window).scroll(function() {

        if($(this).scrollTop()>2100) {
            $('.degustation-container').fadeIn(1000)
        } else {
            $('.degustation-container').fadeOut()
        }
    })

    let fullImg = $('.new-wine-gallery>img:first-child');
    let smallImg = $('.new-wine-gallery>img:not(:first-child)');

    smallImg.click(function(e) {
        let swap = fullImg.attr('src');
        fullImg.hide().attr('src', $(this).attr('src')).fadeIn(500);
        $(this).hide().attr('src', swap).fadeIn(500);
    })

    
    function req() {
        fetch('http://localhost:3000/wine')
            .then(data => data.json())
            .then(data => data.forEach(item => createCard($('.catalog-wine-cards'),item)))      
    }

    function createCard(elem,data) {
        $(`<div class="card">
        <img src="${data.image}" width="100" height="250" alt="" class="wine-image">
        <p class="title">${data.name}</p>
        <p class="country">${data.country}</p>
        <p class="year">${data.year}</p>
        <p class="price">${data.price}</p>
        </div>`)
        .appendTo(elem)
    }

    $('button').on('click',req)


})  


