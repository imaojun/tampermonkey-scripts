var removeElementsList = ['#nav-left-menu',    //头部栏的左侧导航条目
                              'li.write-bolg-btn', //头部栏的"写博客"
                              'li.baidu-app-btn',  //头部栏的"小程序"
                              '#mainBox aside',    //文章左侧信息框
                              '#dmp_ad_58',        //评论上方的广告
                              '.recommend-right',  //文章右侧信息框
                              //'.tool-box',         //文章右侧工具栏 --‘点赞 评论数 目录 收藏 上下页’
                              '.option-box[data-type="vip"]',        //右侧"VIP免广告"
                              '.option-box[data-type="app"]',    //右侧“手机看” 扫二维码
                              '.option-box[data-type="cs"]',      //右侧“客服”
                              '.recommend-ad-box', //底部相关文章里面的广告
                              '.type_hot_word',    //底部相关文字里面的热词提示
                              '.recommend-box',     //底部相关文章
                              '.pulllog-box',     //底部蓝色flex属性的广告栏+登录注册框
                              '#article_content > a > img'];//文章标题上方的广告
//添加css样式 copy的
function addStyle(css) {
    var e = document.createProcessingInstruction('xml-stylesheet','type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"');
    return document.insertBefore(e, document.documentElement);
}
var tackleInterval = setInterval(function(){
        if(document.querySelector("head") != null){
            clearInterval(tackleInterval);
            //查看文章全文
            addStyle(".article_content{height:auto !important;max-height:unset !important;}");
            addStyle(".hide-article-box{display:none !important;}");
            //导航栏位置修改
            addStyle("#csdn-toolbar > .container{width: 30% !important}");
            //文章宽度修改
            addStyle("#mainBox > main{width: 100% !important;}");
            //addStyle("#mainBox{width: inherit !important;}");
            //返回顶部位置修改
            addStyle("div.meau-gotop-box{left: unset !important;}");
            //文章底部评论
            addStyle("div.comment-list-box{max-height: unset !important}");
            addStyle("#btnMoreComment{display: none !important}");
            //移除不喜欢的元素
            removeElementsList.forEach(ele=>{
                addStyle(ele+"{display:none !important;}");
            });
        }
}, 100);

//评论页数
var remarkPage = setInterval(function(){
    if( document.querySelector("#commentPage") ){
        clearInterval(remarkPage);
        document.querySelector("#commentPage").classList.remove("d-none");
    }
},100);

//复制代码段
var copyCode = setInterval(function(){
    typeof(mdcp) != 'undefined' ? (mdcp.signin = mdcp.copyCode,clearInterval(copyCode)) : null ;
    typeof(hljs) != 'undefined' ? (hljs.signin = hljs.copyCode,clearInterval(copyCode)) : null;
    typeof(csdn) != 'undefined' ? (unsafeWindow.csdn.copyright.init("","",""),clearInterval(copyCode)): null;
},100);

window.onload = function(){
    $("head").append("<style>.hljs-button::after{content:'复制'}</style>");
        $(".hljs-button").click(()=>{
        $("head > style:contains('.hljs-button::after{content:'复制'}')").html("<style>.hljs-button::after{content:'复制成功'}</style>");
        setTimeout(()=>{
              $("head > style:contains('.hljs-button::after{content:'复制成功'}')").html("<style>.hljs-button::after{content:'复制'}</style>");
            },1000);
        });
}
