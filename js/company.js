
define(function(require,exports,module){
	var Company={

	   initPage: function(){
            this.footerpage();
            this.headerpage();
            this.companypage();
	  },
	  headerpage:function(){
         var _html = require('../view/header.html');
         var headerHtml=_.template(_html);
         $('.header').html(headerHtml);
          $('.nav-inner a').eq(3).css({backgroundColor:"#319630"}).siblings().css({backgroundColor:"#3cb43c"})
         
	  },
	  companypage:function(){
         var _html = require('../view/company.html');
         var companyHtml=_.template(_html);
         $.ajax({
            type:'get',
            url:'../json/index.json',
            success:function(data){
              $('.company').html(companyHtml({data:data}));
              $('.nav-inner a').eq(2).css({background:""})
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

	module.exports=Company
})