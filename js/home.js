define(function(require, exports, module) {
    var Home = {
        initPage: function() {
            this.homepage();
            this.footerpage();
            this.headerpage();
            this.skiingpage();
        },
        headerpage: function() {
            var _html = require('../view/header.html');
            var headerHtml = _.template(_html);
            $('.header').html(headerHtml);
            $('.nav .nav-inner a').click(function() {
                $(this).css({ backgroundColor: "#319630" }).siblings('a').css({ backgroundColor: " #3cb43c" })
            })
        },
        skiingpage: function() {
            var _html = require('../view/skiing.html');
            var skiingHtml = _.template(_html);
            $('.skiing').html(skiingHtml)
        },
        homepage: function() {

            var _html = require('../view/home.html');
            var homeHtml = _.template(_html);

            // banner 轮播图
            var timer = setInterval(slideShow, 2000);
            var showIndex = 0;

            function slideShow() {
                showIndex++;
                if (showIndex == $('.banner-img img').length) { showIndex = 0 }
                $('.banner-img img').eq(showIndex).fadeIn(1000).siblings().fadeOut(1000);
                $('.banner-icon li').eq(showIndex).css({ background: "yellow" }).siblings().css({ background: "lightblue" })
            };

            $('body').on('mouseover', ".banner-icon li", function() {
                clearInterval(timer);
                var index = $(this).index()
                $('.banner-img img').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
                $(this).css({ background: "yellow" }).siblings().css({ background: "lightblue" })
            });
            $('body').on('mouseout', ".banner-icon li", function() {
                var index = $(this).index();
                timer = setInterval(slideShow, 2000);
                showIndex = index;
            });

            // main5动画

            $.ajax({
                type: 'get',
                url: '../json/index.json',
                success: function(data) {
                    $('.content').html(homeHtml({ data: data }));

                    $('.main-3').sliphover({
                        backgroundColor: 'rgba(0,0,0,.7)',
                        fontColor: '#fff'
                    });

                    $('.main-4 .main4-item').hover(function() {
                        var index = $(this).index()
                        $('.main-4 .a-abs').eq(index).stop().slideToggle()
                    }, function() {
                        var index = $(this).index()
                        $('.main-4 .a-abs').eq(index).stop().slideToggle()
                    })

                    $('.main-5 .item').hover(function() {
                        $(this).find('.item-block').stop().fadeOut().siblings('.item-none').stop().fadeIn()
                    }, function() {
                        $(this).find('.item-none').stop().fadeOut().siblings('.item-block').stop().fadeIn()
                    });


                    $('.ul-show li').hover(function() {
                        index = $(this).index();
                        $('.ul-hide li').eq(index).show().siblings('li').hide();
                        $(this).addClass('active').siblings().removeClass('active');
                        $('.ul-hide').show();

                    }, function() {
                        $('.ul-hide').hide();
                        $(this).removeClass('active')
                    });

                    $('.ul-hide li').hover(function() {
                        index = $(this).index();
                        $(this).show();
                        $('.ul-show li').eq(index).addClass('active').siblings().removeClass('active');
                        $('.ul-hide').show();
                    }, function() {
                        $('.ul-hide').hide();
                        $('.ul-show li').eq(index).removeClass("active")
                    })


                }


            })


        },


        footerpage: function() {
            var _html = require('../view/footer.html');
            var footerHtml = _.template(_html);
            $.ajax({
                type: 'get',
                url: '../json/index.json',
                success: function(data) {
                    $('.footer').html(footerHtml({ data: data }));

                }
            })
        }
    }
    module.exports = Home;
})
