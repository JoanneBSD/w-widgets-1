!function(a){!function(a,b,c){function d(a){var b=document.createElement("a");return b.href=a,b}function e(a){var b="No response from sever";return a&&a.responseJSON?a&&a.responseJSON?a.responseJSON:void 0:{status:"fail",code:503,message:b,error:b}}function f(b){return b&&"success"===b.status?b:a.Deferred().rejectWith(this,[b])}function g(a,b,c){a.one("change keyup",function(){a.val()!==c&&b.setCustomValidity("")})}function h(a){this.trigger("bsd-success",[a]),this.data("no_redirect")!==!0&&a.thanks_url&&(b=a.thanks_url)}function i(b){var c=this,d=!1,e={};b&&b.field_errors&&b.field_errors.length&&(a.each(b.field_errors,function(a,b){var f=c.find('[name="'+b.field+'"]'),h=f.get()[0];h&&h.setCustomValidity&&l&&c.data("no_html5validate")!==!0&&(h.setCustomValidity(b.message),g(f,h,b.message),d=!0),b.$field=f,e[b.field]=b.message,f.trigger("invalid",b.message)}),d&&l&&c.find('[type="submit"],[type="image"]').eq(0).click()),c.trigger("bsd-error",[b,e])}function j(c,g,j){return function(k){var l=c.serializeObject(),m=g.replace(/\/page\/(signup|s)/,"/page/sapi"),n=a.ajax({url:m,type:"POST",method:"POST",dataType:"json",timeout:j.timeout||3e4,context:c,data:l,beforeSend:function(c,e){if(e.crossDomain&&!a.support.cors&&(!a.oldiexdr||d(e.url).protocol!==b.protocol)){if(!j.oldproxy)return!1;e.url=j.oldproxy,e.crossDomain=!1,e.data+="&purl="+m}k.preventDefault()}});"canceled"!==n.statusText&&n.then(f,e).done(h).fail(i)}}function k(b,c,d){var e,f=b.find('[name="'+c+'"]');f.length||(f=a("<input/>",{type:"hidden",name:c}).appendTo(b)),d&&(e=f.val(),f.val((""!==e?e+",":"")+d))}a.fn.serializeObject=function(){var b={},d=this.serializeArray();return a.each(d,function(){b[this.name]!==c?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""}),b};var l="reportValidity"in a("<form/>").get()[0],m=function(a){var c=new RegExp("[\\?&]"+a.replace(/(\[|\])/g,"\\$1")+"=([^&#]*)"),d=c.exec(b.href);return null===d?"":d[1]},n="source",o="subsource",p=m(n)||m("fb_ref"),q=m(o);a.fn.bsdSignup=function(b){return this.each(function(){var c=a(this),d=c.attr("action");c.is("form")&&d.indexOf("page/s")>-1&&(k(c,n,p),k(c,o,q),a.isPlainObject(b)&&c.data(b),c.on("submit",j(c,d,b)))})}}(jQuery,window.location);var b=jQuery("#w-embed").data("token");$.ajax({url:"/embed.php",method:"GET",dataType:"json",data:{tkn:b},success:function(a){jQuery("#w-embed").html(a[0].embed_html),jQuery('<script type="text/javascript">'+a[0].embed_script+"</script>").insertBefore("#w-embed"),jQuery("#bsd_widget_source").val(window.location.href),jQuery("#signup_counter").text(a[1].signup);var b=jQuery(".progress-bar").data("target"),c=a[1].signup;c=c.replace(",",""),c=parseInt(c);var d=100*c/b;d>100&&(d=100),jQuery(".progress").css({width:d+"%"}),jQuery(".bsd-embed-intro").length>0&&(jQuery(".bsd-embed-form").hide(),jQuery("#w-embed").on("click",".bsd-embed-intro .expand-petition",function(){jQuery(".bsd-embed-intro").toggle(),jQuery(".bsd-embed-form").toggle()})),jQuery(".thankyou-wrapper").hide(),jQuery(".apiform").on("submit",function(b){b.preventDefault(),jQuery.getJSON("/proxy.php?callback=?&"+jQuery(".apiform").serialize(),function(){if(jQuery(".thankyou-wrapper").length>0){if(jQuery(".bsd-embed-form").hide(),jQuery(".form-post").length>0){var b="";jQuery("#w-embed .form-row").each(function(){jQuery(this).find(".visible-label").not(".visible-label--select").length>0?(b+="<p>"+jQuery(this).find(".form-radio--label").text()+" : ",jQuery(this).find(".w--input-field:checked").val()&&(b+=jQuery(this).find(".w--input-field:checked").prev(".visible-label").text()+" <br />"),b+="</p>"):jQuery(this).find(".w--input-field").val()&&(b+="<p>"+jQuery(this).find("label").text()+" : "+jQuery(this).find(".w--input-field").val()+"</p>")})}jQuery(".form-post").append(b),jQuery(".thankyou-wrapper").show()}else window.location.replace(a[0].thankyou_redirect)})})},error:function(){return!1}})}(this);