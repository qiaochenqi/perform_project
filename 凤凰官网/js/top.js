$(function(){
    $('.dis_b').mouseover(function(){
            $(this).next().removeClass('dn');
    });
    $('.top_tk').mouseleave(
        function(){
            $('.top_tk').addClass('dn');
    })
//  $('.dis_b').mouseleave(
//      function(){
//          $('.top_tk').addClass('dn');
//  })
})

