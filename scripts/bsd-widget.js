!function(a){function d(a){var d,e,b=decodeURIComponent(window.location.search.substring(1)),c=b.split("&");for(e=0;e<c.length;e++)if(d=c[e].split("="),d[0]===a)return void 0===d[1]||d[1]}function e(){b=window.jQuery.noConflict(!0),f()}function f(){!function(a,b,c){function d(a){var b=document.createElement("a");return b.href=a,b}function e(b){var c="No response from sever";if(b&&b.responseJSON)return b.responseJSON;try{return a.parseJSON(b.responseText)}catch(a){return{status:"fail",code:503,message:c,error:c}}}function f(b){return b&&"success"===b.status?b:a.Deferred().rejectWith(this,[b])}function g(a,b,c){a.one("change keyup",function(){a.val()!==c&&b.setCustomValidity("")})}function h(a){this.trigger("bsd-success",[a]),this.data("bsdsignup").no_redirect!==!0&&a.thanks_url&&(b.href=a.thanks_url)}function i(b){var c=this,d=!1,e=this.data("bsdsignup"),f={};b&&b.field_errors&&b.field_errors.length&&(a.each(b.field_errors,function(a,h){var i=c.find('[name="'+h.field+'"]'),j=i.get()[0];"submit-btn"===h.field?b.message=h.message:j&&j.setCustomValidity&&l&&!c[0].noValidate&&!e.no_html5validate&&(j.setCustomValidity(h.message),g(i,j,h.message),d=!0),h.$field=i,f[h.field]=h.message,i.trigger("invalid",h.message)}),d&&l&&c.find('[type="submit"],[type="image"]').eq(0).click()),c.trigger("bsd-error",[b,f])}function j(c,g,j){return function(k){var l=c.serializeObject();if(c.data("isPaused")!==!0){c.data("isPaused",!0);var m=g.replace("//page/(signup|s)/","/page/sapi"),n=a.ajax({url:m,type:"POST",method:"POST",dataType:"json",timeout:j.timeout||3e4,context:c,data:l,beforeSend:function(c,e){if(j.proxyall||e.crossDomain&&!a.support.cors&&(!a.oldiexdr||d(e.url).protocol!==b.protocol)){if(!j.oldproxy&&!j.proxyall)return!1;e.url=j.oldproxy||j.proxyall,e.crossDomain=!1,e.data+="&purl="+m}k.preventDefault()}});"canceled"!==n.statusText&&(c.trigger("bsd-submit",l),n.then(f,e).always(function(){c.data("isPaused",!1)}).done(h).fail(i))}else k.preventDefault(),c.trigger("bsd-ispaused",l)}}function k(b,c,d){var e,f=b.find('[name="'+c+'"]');f.length||(f=a("<input/>",{type:"hidden",name:c}).appendTo(b)),d&&(e=f.val(),f.val((""!==e?e+",":"")+d))}a.fn.serializeObject=function(){var b={},d=this.serializeArray();return a.each(d,function(){b[this.name]!==c?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""}),b};var l="reportValidity"in a("<form/>").get()[0],m=function(a){var c=new RegExp("[\\?&]"+a.replace(/(\[|\])/g,"\\$1")+"=([^&#]*)"),d=c.exec(b.href);return null===d?"":d[1]},n="source",o="subsource",p=m(n)||m("fb_ref"),q=m(o);a.fn.bsdSignup=function(b){return b=b||{},this.each(function(){var c=a(this),d=c.attr("action");"remove"===b?c.off("submit.bsdsignup").removeData("bsdsignup isPaused"):c.is("form")&&d.indexOf("page/s")>-1&&(c.data("bsdsourced")===!0||b.nosource||(k(c,n,p),k(c,o,q),c.data("bsdsourced",!0)),c.data("bsdsignup",b),b.startPaused&&c.data("isPaused",!0),c.on("submit.bsdsignup",j(c,d,b)))})}}(b,window.location);var a=b("#w-embed").data("token");if(!a)var a=d("tkn");b.ajax({url:"https://widget.www.test.which-testing.co.uk/embed.php",method:"GET",dataType:"json",data:{tkn:a},success:function(a){b("#w-embed").html(a[0].embed_html),b('<script type="text/javascript">  var jQuery;if(void 0===window.jQuery||"2.2.4"!==window.jQuery.fn.jquery){var script_tag=document.createElement("script");script_tag.setAttribute("type","text/javascript"),script_tag.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"),script_tag.readyState?script_tag.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||scriptLoadHandler()}:script_tag.onload=scriptLoadHandler,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(script_tag)}else jQuery=window.jQuery,main(); function scriptLoadHandler(){jQuery=window.jQuery.noConflict(!0),main()} function main(){ !function(e,t,r){function n(e){var t=document.createElement("a");return t.href=e,t}function i(t){var r="No response from sever";if(t&&t.responseJSON)return t.responseJSON;try{return e.parseJSON(t.responseText)}catch(n){return{status:"fail",code:503,message:r,error:r}}}function s(t){return t&&"success"===t.status?t:e.Deferred().rejectWith(this,[t])}function a(e,t,r){e.one("change keyup",function(){e.val()!==r&&t.setCustomValidity("")})}function o(e){this.trigger("bsd-success",[e]),this.data("no_redirect")!==!0&&e.thanks_url&&(t=e.thanks_url)}function u(t){var r=this,n=!1,i={};t&&t.field_errors&&t.field_errors.length&&(e.each(t.field_errors,function(e,s){var o=r.find(\'[name="\'+s.field+\'"]\'),u=o.get()[0];"submit-btn"===s.field?t.message=s.message:u&&u.setCustomValidity&&f&&r.data("no_html5validate")!==!0&&(u.setCustomValidity(s.message),a(o,u,s.message),n=!0),s.$field=o,i[s.field]=s.message,o.trigger("invalid",s.message)}),n&&f&&r.find(\'[type="submit"],[type="image"]\').eq(0).click()),r.trigger("bsd-error",[t,i])}function c(r,a,c){return function(l){var f=r.serializeObject(),d=a.replace("/page/(signup|s)/","/page/sapi"),m=e.ajax({url:d,type:"POST",method:"POST",dataType:"json",timeout:c.timeout||3e4,context:r,data:f,beforeSend:function(r,i){if(i.crossDomain&&!e.support.cors&&(!e.oldiexdr||n(i.url).protocol!==t.protocol)){if(!c.oldproxy)return!1;i.url=c.oldproxy,i.crossDomain=!1,i.data+="&purl="+d}l.preventDefault()}});"canceled"!==m.statusText&&m.then(s,i).done(o).fail(u)}}function l(t,r,n){var i,s=t.find(\'[name="\'+r+\'"]\');s.length||(s=e("<input/>",{type:"hidden",name:r}).appendTo(t)),n&&(i=s.val(),s.val((""!==i?i+",":"")+n))}e.fn.serializeObject=function(){var t={},n=this.serializeArray();return e.each(n,function(){t[this.name]!==r?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t};var f="reportValidity"in e("<form/>").get()[0],d=function(e){var r=new RegExp("[?&]"+e.replace(/([|])/g,"$1")+"=([^&#]*)"),n=r.exec(t.href);return null===n?"":n[1]},m="source",p="subsource",h=d(m)||d("fb_ref"),g=d(p);e.fn.bsdSignup=function(t){return this.each(function(){var r=e(this),n=r.attr("action");r.is("form")&&n.indexOf("page/s")>-1&&(l(r,m,h),l(r,p,g),e.isPlainObject(t)&&r.data(t),r.on("submit",c(r,n,t)))})}}(jQuery,window.location); '+a[0].embed_script+"   }</script>").insertBefore("#w-embed"),b("#bsd_widget_source").val(window.location.href),b("#signup_counter").text(a[1].signup);var c=b(".progress-bar").data("target"),d=a[1].signup;d=d.replace(",",""),d=parseInt(d);var e=100*d/c;e>100&&(e=100),b(".progress").css({width:e+"%"}),b(".bsd-embed-intro").length>0&&(b(".bsd-embed-form").hide(),b("#w-embed").on("click",".bsd-embed-intro .expand-petition",function(){b(".bsd-embed-intro").toggle(),b(".bsd-embed-form").toggle()})),b(".thankyou-wrapper").hide(),b(".apiform").on("submit",function(c){c.preventDefault(),b.getJSON("https://widget.www.test.which-testing.co.uk/proxy.php?callback=?&"+b(".apiform").serialize(),function(){if(b(".thankyou-wrapper").length>0){if(b(".bsd-embed-form").hide(),b(".form-post").length>0){var c="";b("#w-embed .form-row").each(function(){b(this).find(".visible-label").not(".visible-label--select").length>0?(c+="<p>"+b(this).find(".form-radio--label").text()+" : ",b(this).find(".w--input-field:checked").val()&&(c+=b(this).find(".w--input-field:checked").prev(".visible-label").text()+" <br />"),c+="</p>"):b(this).find(".w--input-field").val()&&(c+="<p>"+b(this).find("label").text()+" : "+b(this).find(".w--input-field").val()+"</p>")})}b(".form-post").append(c),b(".thankyou-wrapper").show()}else window.location.replace(a[0].thankyou_redirect)})})},error:function(){return!1}})}var b;if(void 0===window.jQuery||"2.2.4"!==window.jQuery.fn.jquery){var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"),c.readyState?c.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||e()}:c.onload=e,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(c)}else b=window.jQuery,f()}(this);