// active menu
$('header .bot .wrp .left nav a').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('header .bot .wrp .left nav a').removeClass('active');
    $(this).toggleClass('active');
});

//  tags click vào lựa chọn
$('.cellection1 .cell_bot .wrp .left .search .box_tags .tags').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.cellection1 .cell_bot .wrp .left .search .box_tags .tags').removeClass('active');
    $(this).toggleClass('active');
});
$('.cellection1 .cell_bot .wrp .right .top_sort .sort .left_sort .sort_tt span').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.cellection1 .cell_bot .wrp .right .top_sort .sort .left_sort .sort_tt span').removeClass('active');
    $(this).toggleClass('active');
});
// active page
$('.cellection1 .cell_bot .wrp .right .phantrang .page').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.cellection1 .cell_bot .wrp .right .phantrang .page').removeClass('active');
    $(this).toggleClass('active');
});
//
// active shirt type
$('.product .wrp .right .box_right .shirt_type .type_s').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .right .box_right .shirt_type .type_s').removeClass('active');
    $(this).toggleClass('active');
});

// active color
$('.product .wrp .right .box_right .color .list_color .mau').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .right .box_right .color .list_color .mau').removeClass('active');
    $(this).toggleClass('active');
});
//
// active size
$('.product .wrp .right .box_right .color .list_size .size').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .right .box_right .color .list_size .size').removeClass('active');
    $(this).toggleClass('active');
});
//
// active data img
$('.product .wrp .left .top .left_d .anhD').on('click', function () {
    var val = $(this).attr("data")
   if( $(this).hasClass(".active")) return;
   $(".product .wrp .left .top .left_d .anhD").removeClass("active")
   $(".product .wrp .left .top .left_img .top_img .anh").removeClass("active")
   $(".product .wrp .left .top .left_img .list .item").removeClass("active")
   $(this).addClass("active");
   $(val).addClass("active");
});
//
// active tags products
$('.product .wrp .left .bot .detail .box_tags .tags').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .left .bot .detail .box_tags .tags').removeClass('active');
    $(this).toggleClass('active');
});
// active star của reviews
$('.product .wrp .left .bot .detail .evaluate .right_evaluate .group_star .item').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .left .bot .detail .evaluate .right_evaluate .group_star .item').removeClass('active');
    $(this).toggleClass('active');
});
// 
// active phân trang product
$('.product .wrp .left .bot .phantrang .page').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.product .wrp .left .bot .phantrang .page').removeClass('active');
    $(this).toggleClass('active');
});
// 
// tăng giảm số lượng cart
$('.soluong_product').on('click', '.sub', function () {
    const num = $(this).next('input').val();
    if (num >= 1) {
        $(this)
            .next('input')
            .val(num - 1);
    }
});
$('.soluong_product').on('click', '.push', function () {
    const num = $(this).prev('input').val();
    $(this)
        .prev('input')
        .val(parseInt(num) + 1);
});
// tăng giảm số lượng product
$('.soluong').on('click', '.sub', function () {
    const num = $(this).next('input').val();
    if (num >= 1) {
        $(this)
            .next('input')
            .val(num - 1);
    }
});
$('.soluong').on('click', '.push', function () {
    const num = $(this).prev('input').val();
    $(this)
        .prev('input')
        .val(parseInt(num) + 1);
});
//
// active delivery
$('.checkout .wrp .left .boxx_left .boxx_left_shipp .delivery .left_delivery li').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.checkout .wrp .left .boxx_left .boxx_left_shipp .delivery .left_delivery li').removeClass('active');
    $(this).toggleClass('active');
});

// active payment info
$('.checkout .wrp .left .boxx_left .boxx_left_shipp .payment .top .left_payment li').on("click",function(){
    var val = $(this).attr("data")
   if( $(this).hasClass(".active")) return;
   $(".checkout .wrp .left .boxx_left .boxx_left_shipp .payment .top .left_payment li").removeClass("active");
   $(".checkout .wrp .left .boxx_left .boxx_left_shipp .payment .hienthi").removeClass("active");
   $(this).addClass("active");
   $(val).addClass("active");
});
// active last day Top Sellers
$('.topsellers .wrp .title .right_title .day').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.topsellers .wrp .title .right_title .day').removeClass('active');
    $(this).toggleClass('active');
});
// active page popular collection
$('.topsellers .wrp .phantrang .page').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.topsellers .wrp .phantrang .page').removeClass('active');
    $(this).toggleClass('active');
});
////
$('.shop2 .cell_bot .wrp .left .search .box_tags .tags').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.shop2 .cell_bot .wrp .left .search .box_tags .tags').removeClass('active');
    $(this).toggleClass('active');
});
///.
////
$('.shop2 .cell_bot .wrp .right .top_sort .sort .left_sort .sort_tt span').on('click', function () {
    if( $(this).hasClass(".active")) return;
    $('.shop2 .cell_bot .wrp .right .top_sort .sort .left_sort .sort_tt span').removeClass('active');
    $(this).toggleClass('active');
});
//
// active shop info and all product
$('.shop2 .title_top_shop .wrp .title_shop_info').on("click",function(){
    var val = $(this).attr("data")
   if( $(this).hasClass(".active")) return;
   $(".shop2 .title_top_shop .wrp .title_shop_info").removeClass("active");
   $(".shop2 .cell_bot").removeClass("active");
   $(this).addClass("active");
   $(val).addClass("active");
});
////
$('.shop2 .cell_bot .vouchers .group_items.owl-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:2000,
    responsive:{
        320:{
            items:1.1,
        },
        770:{
            items:2.4,
        },
        992:{
            items:3.3,
        }
    }
});

//// owl-carousel product list ảnh
$('.product .wrp .left .top .left_img .list .item.owl-carousel').owlCarousel({
    loop:false,
    margin:12,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:2000,
    responsive:{
        320:{
            items:3.6,
        },
        770:{
            items:5.45,
        },
        992:{
            items:7.6,
        }
    }
});
//// menu nav 

$('.menu_btn').on('click', function(){
    $('header .bot .wrp .left nav').show()
    $('.lightbox').show()
});

$('.lightbox') .on('click' ,function(){
    $('header .bot .wrp .left nav').hide()
    $('.lightbox').hide()
});
//// search 
$('.btn_seachrsss').on('click', function(){
    $('header .top .wrp .left .box').show()
    $('.lightbox').show()
});

$('.lightbox') .on('click' ,function(){
    $('header .top .wrp .left .box').hide()
    $('.lightbox').hide()
});

// 


