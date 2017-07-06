!function(e){e.tips=function(t){var i=e.extend({},e.tips.methods,e.tips.defaults,t);i.init(i)},e.tips.methods={init:function(e){this.template(e)},template:function(t){var i=e("#tips");void 0==i.html()?(i=e("<div id='tips' class='tips "+t.controls+"' style='top:-30px'><i class='icon'></i><span>"+t.content+"</span></div>"),e("body").append(i),this.binding(i,t)):(i.find("span").html(t.content),this.binding(i,t)),e(i).animate({top:0},500)},setStyle:function(t){var i=(e(window).width()-t.width())/2;t.css({left:i})},binding:function(t,i){var n=this;this.setStyle(t),e(window).resize(function(){n.setStyle(t)}),t.timer=setTimeout(function(){clearTimeout(t.timer),t.animate({top:-50},500)},800*i.timer)}},e.tips.defaults={content:"请稍后，数据正在加载中...",controls:"tm_success",timer:1}}(jQuery)(function(e){e.fn.Drag=function(t){var i=this;(t=e.extend({},e.fn.Drag.methods,t)).inits(i,t)},e.fn.Drag.methods={inits:function(e,t){this.getCenter(e),this.resize(e),e.show().removeClass("bounceInOut").addClass(" bounceInUp"),this.dragsMove(e,t)},dragsMove:function(t,i){var n=this,o=t.children("div").eq(0),s=t.find(i.obj1),a=t.find(i.obj2);s.off("mousedown").on("mousedown",n.cancleEvent(t,i)),a.off("click").on("click",n.cancleEvent(t,i)),i.iDrag&&o.on("mousedown",function(i){var n=(i=i||window.event).clientX,o=i.clientY,s=t.offset().left,a=t.offset().top,l=t.width(),d=t.height(),r=e(window).scrollLeft(),c=e(window).scrollTop(),f=e("<div></div>");f.css({width:l,height:d,position:"fixed",overflow:"hidden","border-radius":"3px",left:s-r-2,top:a-c-2,cursor:"move",zIndex:"12",border:"2px dashed #ccc"}),e("body").append(f);var u=e(window).width()-l,h=e(window).height()-d;return e(document).on("mousemove",function(e){var t=(e=e||window.event).clientX,i=e.clientY,l=t-n+s,d=i-o+a;d<=0&&(d=0),l<=0&&(l=0),l>=u&&(l=u),d>=h&&(d=h),f.css({left:l,top:d})}),e(document).on("mouseup",function(i){var n=f.offset().left,o=f.offset().top;f.remove(),t.animate({left:n,top:o},300),e(document).off("mousedown"),e(document).off("mouseup")}),!1})},getCenter:function(t,i){var n=t.width(),o=t.height(),s=(e(window).width()-n)/2,a=(e(window).height()-o)/2;i?t.stop(!0,!0).animate({left:s,top:a}):t.css({left:s,top:a})},resize:function(t){var i=this;e(window).on("resize",function(){i.getCenter(t,!0)})},cancleEvent:function(e,t){return function(){return e.removeClass(" bounceInUp").addClass(" bounceInOut"),setTimeout(function(){e.hide()},400),t.closeFn&&t.closeFn(),!1}}}})(jQuery);var data=[{id:0,pid:-1,title:"全部文件",timer:"2016-09-06"},{id:1,pid:0,title:"赵目录1",timer:"2016-09-07"},{id:2,pid:1,title:"钱目录1.1",timer:"2016-09-06"},{id:3,pid:2,title:"孙目录1.1_1",timer:"2016-09-06"},{id:4,pid:0,title:"李目录2",timer:"2016-09-05"},{id:5,pid:4,title:"周目录2.1",timer:"2016-09-06"},{id:6,pid:4,title:"吴目录2.2",timer:"2016-09-06"},{id:7,pid:5,title:"郑目录2.1_1",timer:"2016-09-06"},{id:8,pid:0,title:"王目录3",timer:"2016-09-06"}](function(){var e={getID:function(e,t){for(var i=[],n=0;n<e.length;n++)e[n].pid==t&&i.push(e[n]);return i},getParents:function(t,i){for(var n=[],o=0;o<t.length;o++)if(t[o].id==i){n.push(t[o]),n=n.concat(e.getParents(t,t[o].pid));break}return n},level:function(e,t){return this.getParents(e,t).length},getTimer:function(){var e=this,t=new Date,i=t.getFullYear(),n=t.getMonth(),o=t.getDay();return e.dataFromat(i)+"-"+e.dataFromat(n)+"-"+e.dataFromat(o)},getTimers:function(){var e=this,t=new Date,i=t.getHours(),n=t.getMinutes(),o=t.getSeconds();return e.dataFromat(i)+"-"+e.dataFromat(n)+"-"+e.dataFromat(o)},dataFromat:function(e){return e>=10?e:"0"+e},isNameExsit:function(t,i,n,o){for(var s=e.getID(t,i),a=0;a<s.length;a++)if(s[a].title===n&&s[a].id!=o)return!0;return!1},changeNameById:function(e,t,i){for(var n=0;n<e.length;n++)if(e[n].id==i)return e[n].title=t,!0;return!1},delDataByArr:function(e,t,i){for(o=0;o<e.length;o++)for(var n=0;n<t.length;n++)e[o].id===t[n].id&&e[o].pid===t[n].pid&&e[o].title===t[n].title&&e.splice(o,1);for(var o=0;o<e.length;o++)e[o].id==i&&e.splice(o,1)},isChildren:function(e,t){for(var i=0;i<e.length;i++)if(e[i].id==t)return!0;return!1}};window.dataContral=e})()(function(e){e.toolTip=function(t){(t=e.extend({},e.toolTip.methods,e.toolTip.defaults,t)).init(t)},e.toolTip.methods={init:function(e){this.template(e)},template:function(t){if(void 0==(i=e("#h_tips")).html()){var i=e('<div id="h_tips" class="h_tips"><div class="tm_title"><span>'+t.title+'</span><a href="javascript:void(0)" class="icon tm_close"></a> </div><div class="t_txt"><p>'+t.content+'</p></div><div class="t_close"><a href="javascript:void(0)"  class="tm_sure">确定</a><a href="javascript:void(0)" class="tm_cancle">取消</a></div></div>');e("body").append(i)}this.setStyle(i),this.resize(i),e("#hiden").show(),i.show(),i.removeClass("bounceInOut").addClass("bounceInUp"),this.dragsMove(i,t)},setStyle:function(t){var i=e(window).width(),n=e(window).height(),o=(i-t.width())/2,s=(n-t.height())/2;t.css({left:o,top:s})},resize:function(t){var i=this;e(window).on("resize",function(){i.setStyle(t)})},dragsMove:function(t,i){var n=this,o=t.children("div").eq(0),s=t.find(".tm_close"),a=t.find(".tm_cancle"),l=t.find(".tm_sure");s.off("mousedown").on("mousedown",n.cancleEvent(t,i)),l.off("click").on("click",function(){var e=setTimeout(function(){i.success&&i.success(),clearTimeout(e)},500);n.cancleEvent(t,i)()}),a.off("click").on("click",n.cancleEvent(t,i)),i.iDrag&&o.on("mousedown",function(i){var n=(i=i||window.event).clientX,o=i.clientY,s=t.offset().left,a=t.offset().top,l=t.width(),d=t.height(),r=e(window).scrollLeft(),c=e(window).scrollTop(),f=e("<div></div>");f.css({width:l,height:d,position:"fixed",overflow:"hidden","border-radius":"3px",left:s-r-2,top:a-c-2,cursor:"move",zIndex:"12",border:"2px dashed #ccc"}),e("body").append(f);var u=e(window).width()-l,h=e(window).height()-d;return e(document).on("mousemove",function(e){var t=(e=e||window.event).clientX,i=e.clientY,l=t-n+s,d=i-o+a;d<=0&&(d=0),l<=0&&(l=0),l>=u&&(l=u),d>=h&&(d=h),f.css({left:l,top:d})}),e(document).on("mouseup",function(i){var n=f.offset().left,o=f.offset().top;f.remove(),t.animate({left:n,top:o},300),e(document).off("mousedown"),e(document).off("mouseup")}),!1})},cancleEvent:function(e,t){return function(){return e.removeClass(" bounceInUp").addClass(" bounceInOut"),setTimeout(function(){e.hide()},400),t.closeFn&&t.closeFn(),!1}}}})(jQuery)(function(e){e.fn.tmDrags=function(t){var i=this,n=e.extend({},e.fn.tmDrags.methods,e.fn.tmDrags.defalutes,t);n.inits(i,n)},e.fn.tmDrags.methods={inits:function(e,t){this.getCenter(e),e.show().removeClass("bounceInOut").addClass("bounceInUp"),this.resize(e),this.dragMoves(e,t)},dragMoves:function(t,i){var n=this,o=t.children("div").eq(0),s=t.find(i.closeBtn),a=t.find(i.suerBtn),l=t.find(i.cancleBtn);s.off("mousedown").on("mousedown",n.cancleEvent(t,i)),l.off("click").on("click",n.cancleEvent(t,i)),a.off("click").on("click",function(){i.callback&&i.callback(),l.trigger("click")}),i.isDrag&&o.on("mousedown",function(i){var n=(i=i||window.event).clientX,o=i.clientY,s=t.offset().left,a=t.offset().top,l=t.width(),d=t.height(),r=e(window).scrollLeft(),c=e(window).scrollTop(),f=e("<div></div>");f.css({width:l,height:d,position:"fixed",overflow:"hidden","border-radius":"3px",left:s-r-2,top:a-c-2,cursor:"move",zIndex:"12",border:"2px dashed #ccc"}),e("body").append(f);var u=e(window).width()-l,h=e(window).height()-d,v=!0;return e(document).on("mousemove",function(e){if(v){var t=e||window.event,i=t.clientX,l=t.clientY,d=Math.abs(i-n),m=Math.abs(l-o);if(d>=10||m>=10){var w=i-n+s-r,p=l-o+a-c;w<=0&&(w=0),p<=0&&(p=0),w>u&&(w=u),p>h&&(p=h),f.css({left:w,top:p})}}}),e(document).on("mouseup",function(i){var n=f.offset().left,o=f.offset().top;if(f.remove(),n==s-l-2&&o==a-d-2)f.remove();else{if(0==n&&0==o)return!1;n<=0&&(n=0),o<=0&&(o=0);var l=e(window).scrollLeft(),d=e(window).scrollTop();t.animate({left:n-l+2,top:o-d+2},300)}v=!1,e(document).off("mousedown"),e(document).off("mouseup")}),!1})},resize:function(t){var i=this;e(window).on("resize",function(){i.getCenter(t,!0)})},cancleEvent:function(e,t){return function(){return e.removeClass("bounceInUp").addClass("bounceInOut"),setTimeout(function(){e.hide()},400),t.closeFn&&t.closeFn(),!1}},getCenter:function(t,i){var n=t.height(),o=t.width(),s=(e(window).width()-o)/2,a=(e(window).height()-n)/2;i?t.stop(!0,!0).animate({left:s,top:a}):t.css({left:s,top:a})}},e.fn.tmDrags.defalutes={isDrag:!0,closeBtn:e(".tm_close"),suerBtn:e(".tm_sure"),cancleBtn:e(".tm_cancel"),closeFn:function(){},callback:function(){}}})(jQuery);!function(){var e=data;window.Firing=function(){var t={init:function(){t.setViewH(),t.changeMenu(data),t.drawTreeMenu(e,-1),t.WayFn(),t.selectFloader(),$(window).resize(function(){t.setViewH()})},WayFn:function(){var e=this;$("#download").on("click",function(){$.tips({content:"暂无下载资源，请联系管理员",timer:2})}),$("#share").on("click",function(){$("#hiden").fadeIn(),$("#share_1").Drag({iDrag:!0,obj1:$(".close"),obj2:$("#shareEnd"),closeFn:function(){$("#hiden").fadeOut()}})}),$("#refresh").on("click",function(){location.reload()}),$("#changeView").on("click",function(){var e=$(this).data("view");""!==$("#V-content").find(".details").html()?"view"==e?($(this).data("view","list"),$("#filesLists").hide(),$("#filesView").show()):($(this).data("view","view"),$("#filesLists").show(),$("#filesView").hide()):$.tips({content:"页面无内容，可移步别处",timer:1.5})}),$("#newfolder").on("click",function(){function e(e){var t=$("#"+e).find(".newFile");if(t.length)t.find(".txt").focus();else{var i={title:"新建文件夹",id:(new Date).getTime(),timer:dataContral.getTimer()};$("#filesLists").prepend(template.L_newFile(i)),$("#filesView").prepend(template.V_newFile(i));var n=$("#"+e).find(".newFile"),o=n.find(".txt");o.addClass("showing"),o.select(),o.on("blur",function(){var e=$(this).val();if(""==e.trim())n.remove(),$.tips({content:"新建文件夹失败！",controls:"tm_warning"});else{var t=$("#getPidInput").val(),s=n.data("file-id");if(dataContral.isNameExsit(data,t,e,i.id))$.tips({content:"有相同的名字啦！",controls:"tm_warning",timer:2}),o.select();else{var a={title:e,pid:t,id:i.id,timer:i.timer};n.find(".filename").html(e),n.removeClass("newFile"),$("#filesView").find(".files[data-file-id='"+i.id+"'] .filename").html(e),$("#filesLists").find(".files[data-file-id='"+i.id+"'] .filename").html(e),$("#filesView").find(".files").removeClass("newFile"),$("#filesLists").find(".files").removeClass("newFile"),o.removeClass("showing"),data.push(a);var l=$("#treeMenu").find("div[data-file-id='"+t+"']").siblings("ul"),d=dataContral.level(data,s);l.append(template.createTreeMenu({title:e,id:s,level:d})),$.tips({content:"文件创建成功",timer:1.5})}o.off("blur")}})}}e("view"==$("#changeView").data("view")?"filesLists":"filesView")}),$("#rename").on("click",function(){function e(e){if(e.length)if(e.length>=2)$.tips({content:"所选文件不能大于两个",timer:2});else{var t=$("#V-content").find(".active"),i=t.find(".txt");i.addClass("showing"),i.select();var n=t.data("file-id"),o=$("#treeMenu").find(".title[data-file-id='"+n+"']"),s=$("#V-content .details").find('.files[data-file-id="'+n+'"]'),a=t.find(".filename"),l=s.find(".filename");i.on("blur",function(){var e=$(this).val();if(""==e.trim())$.tips({content:"请输入文字",timer:2}),i.focus();else{var t=$("#getPidInput").val();dataContral.isNameExsit(data,t,e,n)?($.tips({content:"重名了",timer:2}),i.select()):(a.html(e),l.html(e),o.find("span").html(e),i.removeClass("showing"),dataContral.changeNameById(data,e,n)?($.tips({content:"重命名成功",timer:1}),i.off("blur")):$.tips({content:"重命名失败",timer:1}))}})}else $.tips({content:"您没选中文件，请选择",timer:2})}e("view"==$("#changeView").data("view")?$("#filesLists").find(".active"):$("#filesView").find(".active"))}),$("#cancle").on("click",function(){var e=$("#filesLists").find(".active");e.length?$.toolTip({title:"友情提示",content:"你确定要删除么？",iDrag:!0,closeFn:function(){$("#hiden").hide()},success:function(){function t(e,i){for(var n=0;n<e.length;n++)e[n].pid==i&&(s.push(e[n]),t(e,e[n].id))}e.remove();for(var i=0;i<e.length;i++){var n=$(e[i]).data("file-id"),o=$("#treeMenu").find(".title[data-file-id='"+n+"']");$("#filesView").find(".files[data-file-id="+n+"]").remove(),o.parent().remove();var s=[];t(data,n),dataContral.delDataByArr(data,s,n),$("#selectAll").removeClass("sel"),$.tips({content:"文件删除成功！",timer:1})}}}):$.tips({content:"请选择要删除的文件",timer:1})}),$("#move").on("click",function(){var t=$("#filesLists").find(".active");if(t.length)if(t.length>=2)$.tips({content:"只能移动一个文件",timer:2});else{$("#hiden").show();var i=$("#treeMenuPanel"),n=template.S_template(data,-1);i.html(n),e.selctCurrTreeMenu(i,0),$("#treeMenuPanel").off("click").on("click",".title",function(){$("#treeMenuPanel").find(".title").removeClass("active"),$(this).addClass("active")}),$("#moveLocation").tmDrags({isDrag:!0,closeBtn:$(".close"),suerBtn:$(".sure"),cancleBtn:$(".cancel"),closeFn:function(){$("#hiden").hide()},callback:function(){function i(e,t){for(var n=0;n<e.length;n++)e[n].pid==t&&(l.push(e[n]),i(e,e[n].id))}var n=t.data("file-id"),o=$("#treeMenuPanel").find(".active").data("file-id");if(n===o)$.tips({content:"文件移动失败，重新选择目标位置！",timer:2});else{for(var s=dataContral.getParents(data,o),a=0;a<s.length;a++)s[a].id==o&&s.splice(a,1);if(dataContral.isChildren(s,n))$.tips({content:"上级文件不能放在本身的下级文件中",timer:3});else{if(o==$("#getPidInput").val())return $.tips({content:"你这样做没什么改变",timer:2}),!1;for(var l=[],a=0;a<data.length;a++)data[a].id==n&&(data[a].pid=o,l.push(data[a]));i(data,n),console.log(l),t.remove(),$("#filesView").find(".files[data-file-id='"+n+"']").remove();var d=dataContral.level(data,o);for(l.forEach(function(e){for(var t={id:(new Date).getTime()+Math.floor(100*Math.random()),title:e.title,level:d++},i=0;i<data.length;i++)data[i].id==e.id&&(data[i].id=t.id,e.id=t.id)}),a=1;a<l.length;a++)l[a].pid=l[a-1].id;for(a=0;a<data.length;a++)for(var r=0;r<l.length;r++)data[a].id==l[r].id&&(data[a].pid=l[r].pid);var c=$("#treeMenu"),f=template.S_template(data,-1);c.html(f),e.selctCurrTreeMenu(c,$("#getPidInput").val())}}}})}else $.tips({content:"请选择文件",timer:2})})},changeMenu:function(e){function t(t){var n=$("#treeMenu"),o=t.data("file-id");i.selctCurrTreeMenu(n,o),i.drawBreadNav(e,o),$("#getPidInput").val(o),$("#selectAll").removeClass("sel")}var i=this;$("#treeMenu").on("click",".title",function(){t($(this))}),$("#breadNav").on("click","li>a",function(){t($(this))})},drawTreeMenu:function(e,t){var i=$("#treeMenu"),n=template.S_template(e,-1);i.html(n),this.selctCurrTreeMenu(i,0),this.drawBreadNav(e,0)},drawBreadNav:function(e,t){var i=dataContral.getParents(e,t).reverse();template.Nav(i),this.drawFiles(e,t)},drawFiles:function(e,t){var i="",n="";dataContral.getID(e,t).forEach(function(e){i+=template.View(e),n+=template.forlderLists(e)}),$("#filesLists").html(n),$("#filesView").html(i)},selctCurrTreeMenu:function(e,t){t=t||0;var i=e.find(".title[data-file-id='"+t+"']");e.find(".title").removeClass("active"),i.addClass("active")},selectFloader:function(){var e=this;$("#selectAll").on("click",function(){$(this).toggleClass("sel"),$(this).hasClass("sel")?($("#filesLists").find(".files").addClass("active"),$("#filesView").find(".files").addClass("active")):($("#filesLists").find(".files").removeClass("active"),$("#filesView").find(".files").removeClass("active"))}),$("#V-content").find(".filesLists").on("mousedown",".files .selectBox",function(){$(this).parents(".files").toggleClass("active"),e.selectAll()}),$("#V-content").find(".filesView").on("mousedown",".files .selectBox",function(){$(this).parents(".files").toggleClass("active"),e.selectAll()})},selectAll:function(){var e=$("#filesLists").find(".files").length=$("#filesView").find(".files").length;e===($("#filesLists").find(".active").length=$("#filesView").find(".active").length)&&e?$("#selectAll").addClass("sel"):$("#selectAll").removeClass("sel")},setViewH:function(){var e=$("body").height()-130,t=$("body").width()-$(".leftView").outerWidth();$("#mainView").css("height",e),$("#panelArea").css("width",t)}};return t.init()}}();