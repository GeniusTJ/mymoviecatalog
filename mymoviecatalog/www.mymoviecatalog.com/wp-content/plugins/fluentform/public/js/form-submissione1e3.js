!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1394)}({1394:function(e,t,n){e.exports=n(1395)},1395:function(e,t,n){n(1396),n(1397),n(1398),n(1399)},1396:function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i;jQuery(document).ready(function(){window.fluentFormrecaptchaSuccessCallback=function(e){if(window.innerWidth<768&&/iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var t=jQuery(".g-recaptcha").filter(function(t,n){return grecaptcha.getResponse(t)==e});t.length&&jQuery("html, body").animate({scrollTop:t.first().offset().top-jQuery(window).height()/2},0)}},function(e,t){e||(e={}),e.stepAnimationDuration=parseInt(e.stepAnimationDuration);var i=function(){var e=function(){};return(e.prototype=Object.create(Error.prototype)).constructor=e,e}();window.fluentFormApp=function(a){var s=a.attr("data-form_instance"),o=window["fluent_form_"+s];if(o){var f,l,c,d,u,p,m,h,v,g,_,y,x,b,w,C,k,j,A,S,T,N,z,F,O,Q,E,R,I,M,D=o.form_id_selector,V="."+s;return f=r,l=0,c=function(){return t("body").find(V)},d=function(){a.hasClass("ff-form-inline")&&a.find("button.ff-btn-submit").css("height","50px")},u=function(){c().find(".fluentform-step:first").find('.step-nav [data-action="prev"]').remove()},p=function(){c().find('input[type="file"]').each(function(n,i){var r,a=t(this);r=t("<div/>",{class:"ff-uploaded-list",style:"font-size:12px; margin-top: 15px;"}),a.closest("div").append(r);var s=o.rules[a.prop("name")],f=s.max_file_count.value;"max_file_count"in s&&(s.max_file_count.remaining=Number(f));var l="";"allowed_file_types"in s?(l=s.allowed_file_types.value.join("|"),a.prop("accept","."+l.replace(/\|/g,",."))):(l=s.allowed_image_types.value.join("|"))?a.prop("accept","."+l.replace(/\|/g,",.")):a.prop("accept","image/*"),a.fileupload({dataType:"json",url:e.ajaxUrl+"?action=fluentform_file_upload&formId="+o.id,change:function(e,n){if("max_file_count"in s){t(V+"_errors").empty(),t(this).closest("div").find(".error").html("");var i=s.max_file_count.remaining;if(!i||n.files.length>i){var r="Maximum 1 file is allowed!",l=a.prop("name");if(r=f>1?"Maximum "+f+" files are allowed!":r,s.max_file_count&&s.max_file_count.message&&(r=s.max_file_count.message),errorSetting=o.settings.layout.errorMessagePlacement,errorSetting&&"stackToBottom"!=errorSetting)E(l,r);else{var c={};c[l]=[r],Q(c)}return!1}}return!0},add:function(e,n){var i=t("<div/>",{class:"ff-upload-preview"});n.context=i;var s=t("<div/>",{class:"ff-upload-thumb"}),f=t("<div/>",{class:"ff-upload-details"}),l=t("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('"+m(n.files[0])+"');"}),c=t("<div>",{class:"ff-upload-error",style:"color:red;"}),d=t("<span/>",{html:"0% Completed",class:"ff-upload-progress-inline-text ff-inline-block"}),u=t('\n\t\t\t\t\t\t\t\t\t<div class="ff-upload-progress-inline ff-el-progress">\n\t\t\t\t\t\t\t\t\t\t<div class="ff-el-progress-bar"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t'),p=t("<div/>",{class:"ff-upload-filename",html:n.files[0].name}),v=t("<span/>",{"data-href":"#",html:"&times;",class:"ff-upload-remove"}),_=t("<div>",{class:"ff-upload-filesize ff-inline-block",html:h(n.files[0].size)});s.append(l),f.append(p,u,d,_,c,v),i.append(s,f),r.append(i),p.css({maxWidth:n.context.width()-91+"px"});var y=g(n.files[0],o.rules[a.prop("name")]);y.length?(n.context.css("border","solid red 1px"),n.context.find(".ff-upload-error").html(y.join(", "))):n.submit()},progress:function(e,t){var n=parseInt(t.loaded/t.total*100,10);t.context.find(".ff-el-progress-bar").css("width",n+"%"),t.context.find(".ff-upload-progress-inline-text").text(n+"% Completed")},done:function(e,t){if(t.result&&"data"in t.result&&"files"in t.result.data)"error"in t.result.data.files[0]?(t.context.css("border","solid red 1px"),t.context.find(".ff-upload-error").html("Upload Error: "+t.result.data.files[0].error)):(s.max_file_count.remaining-=1,t.context.css("border","1px solid #6f757d"),t.context.attr("data-src",t.result.data.files[0].url),t.context.find(".ff-upload-remove").attr("data-href",t.result.data.files[0].file));else{var n="Sorry! The upload failed for some unknown reason.";if(t.messages){var i=Object.keys(t.messages);i.length&&(n=t.messages[i[0]])}t.context.css("border","solid red 1px"),t.context.find(".ff-upload-error").html(n)}},fail:function(e,n){var i=[];n.jqXHR.responseJSON&&n.jqXHR.responseJSON.errors?t.each(n.jqXHR.responseJSON.errors,function(e,n){t.each(n,function(e,t){i.push(t)})}):n.jqXHR.responseText?i.push(n.jqXHR.responseText):i.push("Something is wrong when uploading the file! Please try again"),n.context.css("border","solid red 1px"),n.context.find(".ff-upload-error").html(i.join(", "))}})})},m=function(e){if(e.type.match("image"))return URL.createObjectURL(e);var t=document.createElement("canvas");t.width=60,t.height=60,t.style.zIndex=8,t.style.position="absolute",t.style.border="1px solid";var n=t.getContext("2d");return n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(0,0,60,60),n.font="13px Arial",n.fillStyle="white",n.textAlign="center",n.fillText(e.type.substr(e.type.indexOf("/")+1),30,30,60),t.toDataURL()},h=function(e){return e<1024?e+"bytes":e>=1024&&e<=1048576?(e/1024).toFixed(1)+"KB":e>1048576?(e/1048576).toFixed(1)+"MB":void 0},v=function(){t(".ff-uploaded-list").on("click",".ff-upload-remove",function(n){n.preventDefault();var i=t(this),r=i.closest(".ff-uploaded-list"),a=i.attr("data-href");"#"==a?(i.closest(".ff-upload-preview").remove(),r.find(".ff-upload-preview").length||r.siblings(".ff-upload-progress").addClass("ff-hidden")):t.post(e.ajaxUrl,{path:a,action:"fluentform_delete_uploaded_file"}).then(function(e){if(e){var t=i.closest(".ff-el-input--content").find("input");o.rules[t.prop("name")].max_file_count.remaining+=1,i.closest(".ff-upload-preview").remove(),r.find(".ff-upload-preview").length||r.siblings(".ff-upload-progress").addClass("ff-hidden")}else i.closest("div").find(".ff-upload-error").text("There's a problem deleting this file!")})})},g=function(e,t){var n=[],i="",r="";if("allowed_file_types"in t?(i=t.allowed_file_types.value,r=t.allowed_file_types.message):"allowed_image_types"in t&&(i=t.allowed_image_types.value,r=t.allowed_image_types.message),i){var a=new RegExp("("+i.join("|")+")","i"),s=e.name.split(".").pop();s=s.toLowerCase(),a.test(s)||n.push(r)}return"max_file_size"in t&&e.size>t.max_file_size.value&&n.push(t.max_file_size.message),n},_=function(){var e=a.find(".ff_has_formula");if(e.length){mexp.addToken([{type:8,token:"round",show:"round",value:function(e,t){return t||0===t||(t=2),parseFloat(e.toFixed(t))}}]);a.find("input[type=number],input[data-calc_value],select[data-calc_value]").on("change keyup",function(){jQuery.each(e,function(e,r){var s=jQuery(r),o=s.data("calculation_formula"),f=[].concat(n(o.matchAll(/{(.*?)}/g))),l={};jQuery.each(f,function(e,t){var n=t[0];if(-1!=n.indexOf("{input.")){var r=n.replace(/{input.|}/g,"");l[n]=a.find("input[name="+r+"]").val()||0}else if(-1!=n.indexOf("{select.")){var s=n.replace(/{select.|}/g,""),o=i("select[data-name="+s+"] option:selected");a.find("select[data-name="+s+"]").attr("data-calc_value",o),l[n]=o}else if(-1!=n.indexOf("{checkbox.")){var f=n.replace(/{checkbox.|}/g,"");l[n]=i("input[data-name="+f+"]:checked")}else if(-1!=n.indexOf("{radio.")){var c=n.replace(/{radio.|}/g,"");l[n]=a.find("input[name="+c+"]:checked").attr("data-calc_value")||0}}),jQuery.each(l,function(e,t){t||(t=0),o=o.split(e).join(t)});var c="";try{c=mexp.eval(o),isNaN(c)&&(c="")}catch(e){console.log(e)}"text"==s[0].type?t(s).val(c).prop("defaultValue",c).trigger("change"):s.text(c)})}).trigger("change")}function i(e){var n=0,i=a.find(e);return t.each(i,function(e,i){var r=t(i).attr("data-calc_value");r&&!isNaN(r)&&(n+=Number(r))}),n}},y=function(){var e=t(".frm-fluent-form .ff_has_multi_select");e.length&&t.each(e,function(e,n){t(n).selectWoo({placeholder:t(n).attr("placeholder")})})},x=function(){var e={clearIfNotMatch:!0,translation:{"*":{pattern:/[0-9a-zA-Z]/}}};t("input[data-mask]").each(function(n,i){var r=(i=t(i)).data("mask").mask;i.mask(r,e)})},b=function(){var n=c(),i=n.find(".ff-step-body"),r=n.find(".fluentform-step"),a=r.length,s=n.find(".ff-step-titles li");i.css({width:100*a+"%"}),r.css({width:100/a+"%"}),t(r[l]).addClass("active"),t(s[l]).addClass("active"),r.length&&!r.last().hasClass("active")&&n.find('button[type="submit"]').css("display","none"),w({activeStep:l,totalSteps:a}),C(e.stepAnimationDuration)},w=function(e){var n=c();if(n.find(".ff-el-progress").length){var i=e.totalSteps,r=e.activeStep,a=100/i*(r+1),s=n.find(".ff-el-progress-title li"),o=n.find(".ff-el-progress-bar"),f=o.find("span");o.css({width:a+"%"}),a?o.append(f.text(parseInt(a)+"%")):f.empty();var l=window.fluentFormVars.step_text,d=t(s[r]).text();l=l.replace("%activeStep%",r+1).replace("%totalStep%",i).replace("%stepTitle%",d),n.find(".ff-el-progress-status").html(l),s.css("display","none"),t(s[r]).css("display","inline")}},C=function(e){var n,r;t(document).on("keydown",V+" .fluentform-step > .step-nav button",function(e){9==e.which&&"next"==t(this).data("action")&&e.preventDefault()}),t(document).on("click",V+" .fluentform-step  .step-nav button",function(s){n=t(this).data("action");var o="next";if(r=t(this).closest(".fluentform-step"),"next"==n){try{var f=r.find(":input").not(":button").filter(function(e,n){return!t(n).closest(".has-conditions").hasClass("ff_excluded")});f.length&&F(f),l++}catch(s){if(!(s instanceof i))throw s;return O(s.messages),void N(350)}a.trigger("ff_to_next_page",l)}else l--,o="prev",a.trigger("ff_to_prev_page",l);k(l,e,!0,o)})},k=function(e,i){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";t("div"+V+"_errors").empty(),l=e;var s=c(),o=s.find(".ff-step-body"),f=s.find(".ff-step-titles li"),d=s.find(".fluentform-step"),u=d.length,p=s.offset().top-(t("#wpadminbar")?32:0)-20;d.removeClass("active"),t(d[l]).addClass("active"),f.removeClass("ff_active ff_completed"),t.each([].concat(n(Array(l).keys())),function(e){t(t(f[e])).addClass("ff_completed")}),t(f[l]).addClass("ff_active");if(o.animate({left:-100*l+"%"},i,r?void(window.ff_disable_step_scroll||(window.ff_scroll_top_offset&&(p=window.ff_scroll_top_offset),t("html, body").delay(i).animate({scrollTop:p},i,function(e){t(".fluentform-step.active",s).find(":input:visible:first").focus()}))):null),w({activeStep:l,totalSteps:u}),d.last().hasClass("active"))s.find('button[type="submit"]').css("display","inline-block");else if(s.find('button[type="submit"]').css("display","none"),!window.ff_disable_auto_step){var m=s.find(".fluentform-step.active"),h=s.find(".fluentform-step.active > div").length-1,v=s.find(".fluentform-step.active > .ff_excluded").length;s.find(".fluentform-step.active > .ff-t-container").length&&(h-=s.find(".fluentform-step.active > .ff-t-container").length,h+=s.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > div").length,v+=s.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > .ff_excluded").length),h==v&&m.find(".step-nav button[data-action="+a+"]").click()}},j=function(){var e=c();e.on("click",".repeat-plus",function(e){var n=t(this),i=n.closest(".ff-el-repeat"),r=parseInt(i.data("max_repeat")),a=i.find(".ff-t-cell:first-child .ff-el-input--content > input").length;if(!(r&&r<=a)){r&&r-a==1&&i.find(".repeat-plus").hide();var s=n.closest("div"),o=s.index(),f=n.closest(".ff-el-input--content").find(".ff-t-cell").length;n.closest(".ff-el-input--content").find(".ff-t-cell").each(function(e,n){var i=t(this).find(".ff-el-form-control:last-child"),r=i.attr("tabindex"),a=i.clone(),s={value:"",id:"ffrpt-"+(new Date).getTime()+e};r&&(s.tabIndex=parseInt(r)+f),a.prop(s),a.insertAfter(i)}),s.clone().insertAfter(s),n.closest(".ff-el-input--content").find(".ff-t-cell").eq(0).find("input:eq("+(o+1)+")").focus()}}),e.on("click",".repeat-minus",function(e){var n=!1,i=t(this),r=i.closest("div");i.closest(".ff-el-repeat").find(".repeat-plus").show(),i.closest(".ff-el-input--content").find(".ff-t-cell").each(function(){var e=r.index(),i=t(this).find(".ff-el-form-control:eq("+e+")");r.siblings().length&&(n=i.remove().length)}),n&&r.remove()})},A=function(){t(document).on("submit",V,function(n){n.preventDefault(),function(n){var r=n;try{var a=n.find(":input").filter(function(e,n){return!t(n).closest(".has-conditions").hasClass("ff_excluded")});F(a);var s={data:a.serialize(),action:"fluentform_submit",form_id:n.data("form_id")};r.find(".ff-el-recaptcha.g-recaptcha").length&&(s.data+="&"+t.param({"g-recaptcha-response":grecaptcha.getResponse(S(s.form_id))}));var f=!1;if(t.each(n.find("[type=file]"),function(e,n){var i={},r=n.name+"[]";i[r]=[],t(n).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each(function(e,n){i[r][e]=t(this).data("src")}),t.each(i,function(e,n){if(n.length){var i={};i[e]=n,s.data+="&"+t.param(i),f=!0}})}),"denyEmptySubmission"in o.settings.restrictions&&o.settings.restrictions.denyEmptySubmission.enabled&&!(a.serializeArray().map(function(e){return e.value}).filter(function(e){return e.length}).length>3||f)){var l=t("<div/>",{class:"error text-danger"}),c=t("<span/>",{class:"error-clear",html:"&times;",click:function(e){return t(V+"_errors").html("")}}),d=t("<span/>",{class:"error-text",text:o.settings.restrictions.denyEmptySubmission.message});return void t(V+"_errors").html(l.append(d,c))}t(V+"_success").remove(),t(V+"_errors").html(""),n.find(".error").html(""),n.find(".ff-btn-submit").addClass("disabled").attr("disabled","disabled").parent().append('<div class="ff-loading"></div>'),r.parent().find(".ff-errors-in-stack").hide(),t.post(e.ajaxUrl,s).then(function(e){return e&&e.data&&e.data.result?(r.trigger("fluentform_submission_success",{form:r,response:e}),"redirectUrl"in e.data.result?(e.data.result.message&&(t("<div/>",{id:D+"_success",class:"ff-message-success"}).html(e.data.result.message).insertAfter(r),r.find(".ff-el-is-error").removeClass("ff-el-is-error")),void(location.href=e.data.result.redirectUrl)):(t("<div/>",{id:D+"_success",class:"ff-message-success"}).html(e.data.result.message).insertAfter(r),r.find(".ff-el-is-error").removeClass("ff-el-is-error"),void("hide_form"==e.data.result.action?r.hide():r[0].reset()))):(r.trigger("fluentform_submission_failed",{form:n,response:e}),void O(e))}).fail(function(t){if(r.trigger("fluentform_submission_failed",{form:n,response:t}),!t||!t.responseJSON||!t.responseJSON.errors)return console.log(t),r.trigger("fluentform_submission_failed",{form:n,response:t}),void O(t.responseText);if(O(t.responseJSON.errors),N(350),r.find(".fluentform-step").length){var i=r.find(".error").not(":empty:first").closest(".fluentform-step").index();k(i,e.stepAnimationDuration,!1)}}).always(function(e){n.find(".ff-btn-submit").removeClass("disabled").attr("disabled",!1).siblings(".ff-loading").remove(),window.grecaptcha&&grecaptcha.reset(S(s.form_id))})}catch(e){if(!(e instanceof i))throw e;O(e.messages),N(350)}}(t(this))}),t(document).on("reset",V,function(n){var i;i=t(this),t(".ff-step-body",a).length&&k(0,e.stepAnimationDuration),i.find(".ff-el-repeat .ff-t-cell").each(function(){t(this).find("input").not(":first").remove()}),i.find(".ff-el-repeat .ff-el-repeat-buttons-list").find(".ff-el-repeat-buttons").not(":first").remove(),i.find("input[type=file]").closest("div").find(".ff-uploaded-list").html("").end().closest("div").find(".ff-upload-progress").addClass("ff-hidden").find(".ff-el-progress-bar").css("width","0%"),t.each(o.conditionals,function(e,n){t.each(n.conditions,function(e,t){T(R(t.field))})})})},S=function(e){var n;return t("form").has(".g-recaptcha").each(function(i,r){t(this).attr("data-form_id")==e&&(n=i)}),n},T=function(e){var n=e.prop("type");void 0!=n&&("checkbox"==n||"radio"==n?e.each(function(e,n){var i=t(this);i.prop("checked",i.prop("defaultChecked"))}):n.startsWith("select")?e.find("option").each(function(e,n){var i=t(this);i.prop("selected",i.prop("defaultSelected"))}):e.val(e.prop("defaultValue")),e.trigger("change"))},N=function(e){var n=o.settings.layout.errorMessagePlacement;if(n&&"stackToBottom"!=n){var i=a.find(".ff-el-is-error").first();i.length&&!z(i[0])&&t("html, body").delay(e).animate({scrollTop:i.offset().top-(t("#wpadminbar")?32:0)-20},e)}},z=function(e){if(!e)return!0;var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=t(window).height()&&n.right<=t(window).width()},F=function(e){e.length||(e=t(".frm-fluent-form").find(":input").not(":button").filter(function(e,n){return!t(n).closest(".has-conditions").hasClass("ff_excluded")})),e.each(function(e,n){t(n).closest(".ff-el-group").removeClass("ff-el-is-error").find(".error").remove()}),f().validate(e,o.rules)},O=function(e){if(e)if("string"!=typeof e){var n=o.settings.layout.errorMessagePlacement;if(!n||"stackToBottom"==n)return Q(e),!1;a.find(".error").empty(),a.find(".ff-el-group").removeClass("ff-el-is-error"),t.each(e,function(n,i){var r,a;t.each(i,function(e,t){return E(n,t),!1}),Q((r={},a=["restricted"],t.each(e,function(e,n){-1!=t.inArray(e,a)&&(r[e]=n)}),r))})}else Q({error:[e]})},Q=function(e){var n=c().parent().find(".ff-errors-in-stack");n.empty(),t.isEmptyObject(e)||(t.each(e,function(e,i){t.each(i,function(i,r){var a=t("<div/>",{class:"error text-danger"}),s=t("<span/>",{class:"error-clear",html:"&times;"}),o=t("<span/>",{class:"error-text","data-name":R(e).attr("name"),html:r});a.append(o,s),n.append(a).show()});var r=R(e);if(r){var a=r.attr("name"),s=t("[name='"+a+"']").first();s&&s.closest(".ff-el-group").addClass("ff-el-is-error")}}),z(n[0])||t("html, body").animate({scrollTop:n.offset().top-100},350),n.on("click",".error-clear",function(){t(this).closest("div").remove(),n.hide()}).on("click",".error-text",function(){var e=t("[name='"+t(this).data("name")+"']").first();t("html, body").animate({scrollTop:e.offset()&&e.offset().top-100},350,function(t){return e.focus()})}))},E=function(e,n){var i,r;i=R(e),r=t("<div/>",{class:"error text-danger"}),i.closest(".ff-el-group").addClass("ff-el-is-error"),i.closest(".ff-el-input--content").find("div.error").remove(),i.closest(".ff-el-input--content").append(r.text(n))},R=function(e){var n=c(),i=t("[data-name='"+e+"']",n);return(i=i.length?i:t("[name='"+e+"']",n)).length?i:t("[name='"+e+"[]']",n)},I=function(){var e=c();e.find(".ff-el-form-check input[type=radio]").on("change",function(){t(this).is(":checked")&&(t(this).closest(".ff-el-input--content").find(".ff-el-form-check").removeClass("ff_item_selected"),t(this).closest(".ff-el-form-check").addClass("ff_item_selected"))}),e.find(".ff-el-form-check input[type=checkbox]").on("change",function(){t(this).is(":checked")?t(this).closest(".ff-el-form-check").addClass("ff_item_selected"):t(this).closest(".ff-el-form-check").removeClass("ff_item_selected")})},M=function(){if(p(),v(),y(),x(),j(),I(),_(),a.find(".ff-el-recaptcha.g-recaptcha").length){var e=a.find(".ff-el-recaptcha.g-recaptcha"),t=e.data("sitekey"),n=e.attr("id");grecaptcha.render(document.getElementById(n),{sitekey:t})}},t(document).on("reInitExtras",V,function(){M()}),{initFormHandlers:function(){u(),p(),v(),y(),x(),b(),j(),A(),_(),d(),I(),a.removeClass("ff-form-loading").addClass("ff-form-loaded")},removePrevFromFirstFirstStep:u,initUploader:p,registerFileRemove:v,initMultiSelect:y,initMask:x,initStepSlider:b,registerRepeaterButtons:j,registerFormSubmissionHandler:A,initNumberCalculations:_,maybeInlineForm:d,initCheckableActive:I,reinitExtras:M,initTriggers:function(){jQuery(document.body).trigger("fluentform_init",[a,o]),jQuery(document.body).trigger("fluentform_init_"+o.id,[a,o]),jQuery(a).find("input.ff-el-form-control").on("keypress",function(e){return 13!==e.which})},settings:o}}console.log("No Fluent form JS vars found!")};var r=function(){return new function(){this.errors={},this.validate=function(e,n){var i,r,a=this,s=!0;e.each(function(e,o){i=t(o),r=i.prop("name").replace("[]",""),n[r]&&t.each(n[r],function(e,t){if(!(e in a))throw new Error("Method ["+e+"] doesn't exist in Validator.");a[e](i,t)||(s=!1,r in a.errors||(a.errors[r]={}),a.errors[r][e]=t.message)})}),!s&&this.throwValidationException()},this.throwValidationException=function(){var e=new i("Validation Error!");throw e.messages=this.errors,e},this.required=function(e,n){if(!n.value)return!0;var i=e.prop("type");if("checkbox"==i||"radio"==i)return e.parents(".ff-el-group").attr("data-name")?n.per_row?t('[name="'+e.prop("name")+'"]:checked').length:e.parents(".ff-el-group").find("input:checked").length:t('[name="'+e.prop("name")+'"]:checked').length;if(i.startsWith("select")){var r=e.find(":selected");return!(!r.length||!r.val().length)}return"file"==i?e.closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").length:String(t.trim(e.val())).length},this.url=function(e,t){var n=e.val();return!t.value||!n.length||new RegExp("^(http|https|ftp|ftps)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|[a-zA-Z]{2,10}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$").test(n)},this.email=function(e,t){var n=e.val();if(!t.value||!n.length)return!0;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.toLowerCase())},this.numeric=function(e,n){var i=e.val();return!n.value||!i.length||t.isNumeric(i)},this.min=function(e,t){var n=e.val();return!t.value||!n.length||(this.numeric(e,t)?Number(n)>=Number(t.value):void 0)},this.max=function(e,t){var n=e.val();return!t.value||!n.length||(this.numeric(e,t)?Number(n)<=Number(t.value):void 0)},this.max_file_size=function(){return!0},this.max_file_count=function(){return!0},this.allowed_file_types=function(){return!0},this.allowed_image_types=function(){return!0},this.valid_phone_number=function(e,t){if(!e.val())return!0;if(void 0===window.intlTelInputGlobals)return!0;if(e&&e[0]){var n=window.intlTelInputGlobals.getInstance(e[0]);if(!n)return!0;if(e.hasClass("ff_el_with_extended_validation"))return!!n.isValidNumber()&&(e.val(n.getNumber()),!0);var i=n.getSelectedCountryData(),r=e.val();return!e.attr("data-original_val")&&r&&i&&i.dialCode&&(e.val("+"+i.dialCode+r),e.attr("data-original_val",r)),!0}}}},a=t(".frm-fluent-form");t.each(a,function(e,n){var i=t(n),r=fluentFormApp(i);r.initFormHandlers(),r.initTriggers()})}(window.fluentFormVars,jQuery)}),(i=String.prototype).startsWith||(i.startsWith=function(e,t){return t=!t||t<0?0:+t,this.substring(t,t+e.length)===e}),i.endsWith||(i.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},1397:function(e,t){jQuery(document).ready(function(){var e,t;window.fluentFormVars,e=jQuery,(t=e(".jss-ff-el-ratings")).length&&e.each(t,function(t,n){var i=e(n);i.find("label.active").prevAll().addClass("active"),i.on("mouseenter","label",function(t){var n=e(this),i="[data-id="+n.find("input").attr("id")+"]";n.addClass("active"),n.prevAll().addClass("active"),n.nextAll().removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(i).css("display","inline")}).on("click","label",function(t){var n=e(this).find(".jss-ff-svg");n.addClass("scale"),n.addClass("scalling"),setTimeout(function(e){n.removeClass("scalling"),n.removeClass("scale")},150)}).on("mouseleave",function(t){var n=e(this),i="[data-id="+n.find("input:checked").attr("id")+"]",r=n.find("input:checked").parent("label");r.length?(r.addClass("active"),r.prevAll().addClass("active"),r.nextAll().removeClass("active")):n.find("label").removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(i).css("display","inline")})})})},1398:function(e,t){jQuery(document).ready(function(){var e,t;e=jQuery,t=e(".js-repeat"),e.each(t,function(t,n){var i=e(n);if(i.find(".ff-t-cell").length>1){var r=i.find(".ff-el-group").height()-i.find(".ff-el-group").find(".ff-el-input--content").height();i.find(".js-repeat-buttons").css("margin-top",r+"px")}var a=i.find(".ff-el-group").find(".ff-el-input--content .ff-el-form-control").outerHeight();i.find(".ff-el-repeat-buttons").height(a)})})},1399:function(e,t){jQuery(document).ready(function(){var e,t;window.fluentFormVars,e=jQuery,(t=e(".jss-ff-el-net-promoter")).length&&e.each(t,function(t,n){e(n).on("click","label",function(t){var n=e(this);n.addClass("active"),n.prevAll().removeClass("active"),n.nextAll().removeClass("active")})})})}});