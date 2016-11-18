
define(function(require,exports,module){
	var Skiing={

	   initPage: function(){
            this.footerpage();
            this.headerpage();
            this.skiingpage();
	  },
	  headerpage:function(){
         var _html = require('../view/header.html');
         var headerHtml=_.template(_html);
         $('.header').html(headerHtml);
         $('.nav-inner a').eq(1).css({backgroundColor:"#319630"}).siblings().css({backgroundColor:"#3cb43c"})
         
	  },
	  skiingpage:function(){
         var _html = require('../view/skiing.html');
         var skiingHtml=_.template(_html);
         $.ajax({
            type:'get',
            url:'../json/index.json',
            success:function(data){
              $('.skiing').html(skiingHtml({data:data}));
              $('.head-content .item a').click(function(){

               $(this).css({backgroundColor:"#3cb43c",color:"#fff"}).siblings('a').css({backgroundColor:"#fff",color:"#333"})
              })
            }
         })

	  },
	   footerpage:function(){
         var _html = require('../view/footer.html');
         var footerHtml=_.template(_html);
          $.ajax({
         	type:'get',
         	url:'../json/index.json',
         	success:function(data){
            $('.footer').html(footerHtml({data:data}));
         		
         	}
         })
	  }
	}

	module.exports=Skiing
})