$(function(){function e(){var e=$("#J_products").val(),t="";""!==e&&(e=JSON.parse(e));for(var r in e)1==r?(e[r].no_mortgage&&(e[r].no_mortgage.one_stage?(s.product_11.find(":radio").prop("checked",!0),s.product_11.find(":text").each(function(t){$(this).val(e[r].no_mortgage.one_stage[t])})):s.product_12.find(":text").each(function(t){s.product_12.find(":radio").prop("checked",!0),$(this).val(e[r].no_mortgage.multi_stage[t])})),e[r].mortgage&&(e[r].mortgage.one_stage?(s.product_13.find(":radio").prop("checked",!0),s.product_13.find(":text").each(function(t){$(this).val(e[r].mortgage.one_stage[t])})):(s.product_14.find(":radio").prop("checked",!0),s.product_14.find(":text").each(function(t){$(this).val(e[r].mortgage.multi_stage[t])})))):7>r?(e[r].no_mortgage&&(t="product_"+r+1,s[t].find("input").each(function(t){$(this).val(e[r].no_mortgage.one_stage[t])})),e[r].mortgage&&(t="product_"+r+2,s[t].find("input").each(function(t){$(this).val(e[r].mortgage.one_stage[t])}))):7==r?e[r].no_mortgage&&(e[r].no_mortgage.one_stage?(s.product_71.find(":radio").prop("checked",!0),s.product_71.find(":text").each(function(t){$(this).val(e[r].no_mortgage.one_stage[t])})):(s.product_72.find(":radio").prop("checked",!0),s.product_72.find(":text").each(function(t){$(this).val(e[r].no_mortgage.multi_stage[t])}))):e[r].no_mortgage&&(t="product_"+r+1,s[t].find("input").each(function(t){$(this).val(e[r].no_mortgage.one_stage[t])}))}function t(){s.loan_type.on("change",function(e){return $(this).prop("checked")?(s.wrapper_product_type.removeClass("hidden"),s.product_type_1.prop("checked",!1).trigger("change"),s.product_type_2.prop("checked",!1).trigger("change"),1==this.value?(s.wrapper_product_type_1.removeClass("hidden").trigger("show"),s.wrapper_mortgage_type.removeClass("hidden").trigger("show"),s.wrapper_product_type_2.addClass("hidden").trigger("hidden"),s.settlement_type.eq(1).parent().removeClass("hidden"),s.settlement_type.eq(3).parent().removeClass("hidden")):(s.wrapper_product_type_2.removeClass("hidden").trigger("show"),s.wrapper_product_type_1.addClass("hidden").trigger("hidden"),s.wrapper_mortgage_type.addClass("hidden").trigger("hidden"),s.settlement_type.eq(1).prop("checked",!1).parent().addClass("hidden"),s.settlement_type.eq(3).prop("checked",!1).parent().addClass("hidden"),s.settlement_type.eq(2).prop("checked")||s.settlement_type.eq(0).prop("checked",!0).trigger("change")),void s.wrapper_discount_product.removeClass("hidden")):!1}),s.wrapper_product_type_1.on({show:function(){s.wrapper_discount_product_type_1.removeClass("hidden")},hidden:function(){s.wrapper_discount_product_type_1.addClass("hidden")}}),s.wrapper_product_type_2.on({show:function(){s.wrapper_discount_product_type_2.removeClass("hidden")},hidden:function(){s.wrapper_discount_product_type_2.addClass("hidden")}}),s.product_types.on("change",function(){var e=$(this);switch(+e.val()){case 1:case 3:if(e.prop("checked")){if(s.product_type_1.eq(0).prop("checked")&&s.product_type_1.eq(2).prop("checked"))return void e.prop("checked",!1);$(e.attr("data-target")).removeClass("hidden")}else $(e.attr("data-target")).addClass("hidden");break;case 5:case 6:e.prop("checked")?($(e.attr("data-target")).removeClass("hidden"),s.settlement_type.eq(1).prop("checked",!1).parent().addClass("hidden"),s.settlement_type.eq(3).prop("checked",!1).parent().addClass("hidden"),s.settlement_type.eq(2).prop("checked")||s.settlement_type.eq(0).prop("checked",!0).trigger("change")):($(e.attr("data-target")).addClass("hidden"),s.product_type_1.eq(4).prop("checked")||s.product_type_1.eq(5).prop("checked")||(s.settlement_type.eq(1).parent().removeClass("hidden"),s.settlement_type.eq(3).parent().removeClass("hidden")));break;default:e.prop("checked")?$(e.attr("data-target")).removeClass("hidden"):$(e.attr("data-target")).addClass("hidden")}s.wrapper_discount_product.trigger("change")}),s.wrapper_mortgage_type.on({show:function(){s.mortgage_type.prop("checked",!1).trigger("change")},hidden:function(){s.mortgage_type.prop("checked",!1).trigger("change")}}),s.mortgage_type.on("change",function(e){var t=$(this);t.prop("checked")?$(t.attr("data-target")).removeClass("hidden"):$(t.attr("data-target")).addClass("hidden"),s.wrapper_discount_product.trigger("change")}),s.wrapper_discount_product.on("change",function(){console.log("开发商贴息率 change");var e=0;s.discount.eq(1).attr("data-check1",1);var t=[],r=[];for(s.product_types.each(function(){$(this).prop("checked")&&t.push(this.value)}),e=0;e<t.length;e++)switch(+t[e]){case 1:s.mortgage_type.eq(0).prop("checked")&&(s.product_11.find(":checked").length>0?r.push(s.product_11):r.push(s.product_12)),s.mortgage_type.eq(1).prop("checked")&&(s.product_13.find(":checked").length>0?r.push(s.product_13):r.push(s.product_14));break;case 2:s.mortgage_type.eq(0).prop("checked")&&r.push(s.product_21),s.mortgage_type.eq(1).prop("checked")&&r.push(s.product_22);break;case 3:s.mortgage_type.eq(0).prop("checked")&&r.push(s.product_31),s.mortgage_type.eq(1).prop("checked")&&r.push(s.product_32);break;case 4:s.mortgage_type.eq(0).prop("checked")&&r.push(s.product_41),s.mortgage_type.eq(1).prop("checked")&&r.push(s.product_42);break;case 5:s.mortgage_type.eq(0).prop("checked")&&r.push(s.product_51),s.mortgage_type.eq(1).prop("checked")&&r.push(s.product_52);break;case 6:s.mortgage_type.eq(0).prop("checked")&&r.push(s.product_61),s.mortgage_type.eq(1).prop("checked")&&r.push(s.product_62);break;case 7:s.product_71.find(":checked").length>0?r.push(s.product_71):r.push(s.product_72);break;case 8:r.push(s.product_81);break;case 9:r.push(s.product_91);break;case 10:r.push(s.product_101)}if(0==r.length)return s.discount.eq(0).prop("checked",!0),s.discount.eq(1).attr("data-check1",0).trigger("check").trigger("change"),!1;for(e=0;e<r.length;e++)if(!a(r[e]))return s.discount.eq(0).prop("checked",!0),s.discount.eq(1).attr("data-check1",0).trigger("check").trigger("change"),!1;s.discount.eq(1).trigger("check")}),s.discount_ratio.on("change",function(){var e=$(this),t=1==e.val()?!0:!1;s.discount_ratio_val.attr("disabled",t),1==e.val()&&e.prop("checked")||0==e.val()&&!e.prop("checked")?s.discount.eq(1).attr("data-check2",1).trigger("check"):(s.discount.eq(0).prop("checked",!0),s.discount.eq(1).attr("data-check2",0).trigger("check").trigger("change"))}),s.settlement_type.on("change",function(){var e=$(this);if(!e.prop("checked"))return!1;switch(+this.value){case 1:case 2:s.discount.eq(0).prop("checked",!0),s.discount.eq(1).attr("data-check3",0).trigger("check").trigger("change");break;default:s.discount.eq(1).attr("data-check3",1).trigger("check")}switch(+this.value){case 4:s.service_fee_settlement_type.eq(0).prop("checked",!0),s.service_fee_settlement_type.eq(1).prop("disabled",!0);break;default:s.service_fee_settlement_type.eq(1).prop("disabled",!1)}}),s.service_fee.on("click",function(){s.service_fee.eq(1).prop("checked")?s.service_fee_settlement.removeClass("hidden"):s.service_fee_settlement.addClass("hidden")}),s.discount.eq(1).on("check",function(){var e=$(this);1==e.attr("data-check1")&&1==e.attr("data-check2")&&1==e.attr("data-check3")?(e.prop("disabled",!1),s.discount_val.prop("disabled",!1)):(e.prop("disabled",!0),s.discount_val.prop("disabled",!0))}),s.discount.on("change",function(){var e=$(this);1==e.val()&&e.prop("checked")||0==e.val()&&!e.prop("checked")?s.discount_count_cycle.closest(".form-group").removeClass("hidden"):s.discount_count_cycle.closest(".form-group").addClass("hidden")}),$("#J_Form").on("focus","input, select",function(){"text"==this.type||"select"==this.tagName.toLowerCase()?$(this).removeClass("hasError"):$(this).closest(".form-group").find(".hasError").removeClass("hasError")}),$("#save").on("click",function(){var e=$(this),t=o();t&&$.ajax({url:p.save,type:"POST",data:t,dataType:"json",beforeSend:function(){e.addClass("disabled")},success:function(e){e.hasError===!1?(alert("保存成功！"),location.href=$("#goBack").attr("href")):alert(e.error)},error:function(e,t,r){alert(r)},complete:function(){e.removeClass("disabled")}})}),$("#endBtn").on("click",function(){var e={sReason:$("#comments").val(),sPlanNum:$("#sPlanNum").val()};return $.trim(e.sReason).length<=0||$.trim(e.sReason).length>40?($(".uPassR").show(),!1):void $.ajax({url:p.endd,data:e,type:"post",success:function(e){0==e.hasError?(alert("操作成功！"),$("#myModal").modal("hide"),window.location.href=$("#backurl").attr("href")):alert(e.error)},error:function(){alert("网络有问题，么么哒！请稍后重试，么么哒！")}})})}function r(e){return 0==e.length||isNaN(e)||0>e||e>100?!1:!0}function a(e){var t=e.find(".percent"),a=t.length,o=t.eq(a-1).val().trim(),c=t.eq(a-2).val().trim();return r(o)&&o===c?!0:!1}function o(){var e={},t=!0;e.loupan_id=s.loupan_id.val(),e.loupan_name=s.loupan_name.val(),e.developers_name=s.developers_name.val(),s.loan_type.each(function(){var t=$(this);t.prop("checked")&&(e.loan_type=t.val())}),e.begin_date=s.begin_date.val(),""===e.begin_date&&(s.begin_date.addClass("hasError"),t=!1),e.end_date=s.end_date.val(),""===e.end_date&&(s.end_date.addClass("hasError"),t=!1),e.bank_account_name=s.bank_account_name.val().trim(),""===e.bank_account_name&&(s.bank_account_name.addClass("hasError"),t=!1),e.bank_id=s.bank_id.val(),0==e.bank_id&&(s.bank_id.addClass("hasError"),t=!1),e.bank_name=s.bank_id.find("option").eq(s.bank_id.prop("selectedIndex")).text(),e.bank_account=s.bank_account.val().trim(),""===e.bank_account&&(s.bank_account.addClass("hasError"),t=!1),e.products={};var a=[];if(s.product_types.each(function(){var e=$(this);e.prop("checked")&&a.push(e.val())}),0==a.length)1==e.loan_type?s.product_types.eq(0).closest(".checkbox").addClass("hasError"):s.product_types.eq(6).closest(".checkbox").addClass("hasError"),t=!1;else for(var o=0;o<a.length;o++)switch(+a[o]){case 1:e.products[1]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[1].no_mortgage={},s.product_11.find(":checked").length>0?(e.products[1].no_mortgage.one_stage=[],s.product_11.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[1].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})):(e.products[1].no_mortgage.multi_stage=[],s.product_12.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[1].no_mortgage.multi_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}))),s.mortgage_type.eq(1).prop("checked")&&(e.products[1].mortgage={},s.product_13.find(":checked").length>0?(e.products[1].mortgage.one_stage=[],s.product_13.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[1].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})):(e.products[1].mortgage.multi_stage=[],s.product_14.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[1].mortgage.multi_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})));break;case 2:e.products[2]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[2].no_mortgage={},e.products[2].no_mortgage.one_stage=[],s.product_21.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[2].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})),s.mortgage_type.eq(1).prop("checked")&&(e.products[2].mortgage={},e.products[2].mortgage.one_stage=[],s.product_22.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[2].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 3:e.products[3]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[3].no_mortgage={},e.products[3].no_mortgage.one_stage=[],s.product_31.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[3].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})),s.mortgage_type.eq(1).prop("checked")&&(e.products[3].mortgage={},e.products[3].mortgage.one_stage=[],s.product_32.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[3].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 4:e.products[4]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[4].no_mortgage={},e.products[4].no_mortgage.one_stage=[],s.product_41.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[4].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})),s.mortgage_type.eq(1).prop("checked")&&(e.products[4].mortgage={},e.products[4].mortgage.one_stage=[],s.product_42.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[4].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 5:e.products[5]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[5].no_mortgage={},e.products[5].no_mortgage.one_stage=[],s.product_51.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[5].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})),s.mortgage_type.eq(1).prop("checked")&&(e.products[5].mortgage={},e.products[5].mortgage.one_stage=[],s.product_52.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[5].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 6:e.products[6]={},s.mortgage_type.eq(0).prop("checked")&&(e.products[6].no_mortgage={},e.products[6].no_mortgage.one_stage=[],s.product_61.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[6].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})),s.mortgage_type.eq(1).prop("checked")&&(e.products[6].mortgage={},e.products[6].mortgage.one_stage=[],s.product_62.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[6].mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 7:e.products[7]={},e.products[7].no_mortgage={},s.product_71.find(":checked").length>0?(e.products[7].no_mortgage.one_stage=[],s.product_71.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[7].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})):(e.products[7].no_mortgage.multi_stage=[],s.product_72.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[7].no_mortgage.multi_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)}));break;case 8:e.products[8]={},e.products[8].no_mortgage={},e.products[8].no_mortgage.one_stage=[],s.product_81.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[8].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)});break;case 9:e.products[9]={},e.products[9].no_mortgage={},e.products[9].no_mortgage.one_stage=[],s.product_91.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[9].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)});break;case 10:e.products[10]={},e.products[10].no_mortgage={},e.products[10].no_mortgage.one_stage=[],s.product_101.find(".percent").each(function(){var a=$(this),o=a.val().trim();e.products[10].no_mortgage.one_stage.push(o),r(o)||(a.addClass("hasError"),t=!1)})}return 1==e.loan_type&&(e.mortgage_type=[],s.mortgage_type.each(function(){var t=$(this);t.prop("checked")&&e.mortgage_type.push(t.val())}),0==e.mortgage_type.length&&(s.mortgage_type.parent().addClass("hasError"),t=!1)),s.discount_ratio.eq(0).prop("checked")?(e.discount_ratio=1,e.discount_ratio_val=100):(e.discount_ratio=0,e.discount_ratio_val=s.discount_ratio_val.val().trim(),r(e.discount_ratio_val)||(s.discount_ratio_val.addClass("hasError"),t=!1)),s.settlement_type.each(function(){var t=$(this);t.prop("checked")&&(e.settlement_type=t.val())}),s.service_fee.eq(0).prop("checked")?e.service_fee=0:(e.service_fee=1,e.service_fee_val=s.service_fee_val.val().trim(),(0==e.service_fee_val.length||isNaN(e.service_fee_val))&&(s.service_fee_val.addClass("hasError"),t=!1)),e.service_fee&&(s.service_fee_settlement_type.eq(0).prop("checked")?e.service_fee_settlement_type=1:e.service_fee_settlement_type=2),s.discount.each(function(){var t=$(this);t.prop("checked")&&(e.discount=t.val())}),1==e.discount&&(e.discount_val=s.discount_val.val().trim(),(0==e.discount_val.length||isNaN(e.discount_val))&&(s.discount_val.addClass("hasError"),t=!1)),1==e.discount&&(e.discount_count_cycle=s.discount_count_cycle.val(),0==e.discount_count_cycle&&(s.discount_count_cycle.addClass("hasError"),t=!1)),e.tax_code=s.tax_code.val(),0==e.tax_code.length&&(s.tax_code.addClass("hasError"),t=!1),e.file=s.file.val(),""==e.file?(s.uploadBtn.addClass("hasError"),t=!1):e.file=JSON.parse(e.file),t?e:!1}function c(){$("[name=begin_date]").datepicker({dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一","二","三","四","五","六","七","八","九","十","十一","十二"],showMonthAfterYear:!0,changeMonth:!0,changeYear:!0,dateFormat:"yy-mm-dd",duration:"fast",showAnim:"fadeIn",showButtonPanel:!1,showOtherMonths:!0,onClose:function(e){$("[name=end_date]").datepicker("option","minDate",e)}}),$("[name=end_date]").datepicker({dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一","二","三","四","五","六","七","八","九","十","十一","十二"],showMonthAfterYear:!0,changeMonth:!0,changeYear:!0,dateFormat:"yy-mm-dd",duration:"fast",showAnim:"fadeIn",showButtonPanel:!1,showOtherMonths:!0,onClose:function(e){$("[name=begin_date]").datepicker("option","maxDate",e)}})}function d(e){e.each(function(){var e=$(this),t=0,r=0,a=[],o=0;new UploadImg({$el:e,url:p.imgUploadUrl,flash_url:p.swfFlashUrl,file_types:"*.jpg; *.png; *.doc; *.docx; *.pdf; *.zip; *.rar;",file_queue_limit:0,file_upload_limit:1,file_dialog_start_handler:function(){this.stopUpload(),a=[],o=0},file_queued_handler:function(e){o+=e.size},file_dialog_complete_handler:function(e,a,c){0!=a&&(t=o,r=0,s.progress.show(),s.progressBar.css("width",0),s.file.val(""),s.fileNames.text(""))},upload_progress_handler:function(e,a,c){o=Math.floor((r+a)/t*100)+"%",s.progressBar.css("width",o)},success:function(e,t){s.uploadBtn.removeClass("hasError");var e=e.Filedata,r=s.file.val(),o=[];e.sKey?(""==r?(r=[],r.push(e)):(r=JSON.parse(r),r.push(e)),s.file.val(JSON.stringify(r)),$.each(r,function(){o.push(this.sFilename)}),s.fileNames.text(o.join("，"))):a.push(t.name)},error:function(e,t,r){switch(t){case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:alert("文件上传错误，确jpg、png、doc、docx、zip、rar格式！"),window.console&&console.log(r);break;case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:alert("文件上传错误,服务器拒绝！");break;case"inputUploadError":alert(r);break;case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:alert("上传文件数目超过限制！");break;default:alert("未知错误"),console.log(t,r)}},upload_complete_handler:function(e){r+=e.size;try{this.getStats().files_queued>0?this.startUpload():(o=this.getStats().upload_errors+a.length,o?""===s.file.val()?(s.uploadBtn.addClass("hasError"),alert("全部文件上传失败！！！")):alert(o+"个文件上传失败!"):alert("全部文件上传成功！"))}catch(t){console.log(t)}}})})}var p={swfFlashUrl:window.config.aURL.sStaticDomain+"/manage/common/plugins/swfupload/swfupload.swf",imgUploadUrl:window.config.aURL.sDFSUpd+"project.html",imgurl:window.config.aURL.sDFSViewDomain+"/view/project/",save:"/"+$("#headerCity").val()+"/api/lp/hfdplan/create.html",endd:"/"+$("#headerCity").val()+"/api/lp/hfdplan/close.html"},s={loupan_id:$("#J_loupan_id"),loupan_name:$("#J_loupan_name"),developers_name:$("#J_developers_name"),loan_type:$(".j_loan_type"),begin_date:$("[name=begin_date]"),end_date:$("[name=end_date]"),bank_account_name:$("[name=bank_account_name]"),bank_id:$("[name=bank_id]"),bank_account:$("[name=bank_account]"),wrapper_product_type:$("#J_product_type"),wrapper_product_type_1:$("#J_wrapper_product_type_1"),product_type_1:$(".j_product_type_1"),wrapper_product_type_2:$("#J_wrapper_product_type_2"),product_type_2:$(".j_product_type_2"),product_types:$(".j_product_type_1, .j_product_type_2"),wrapper_mortgage_type:$("#J_wrapper_mortgage_type"),mortgage_type:$(".j_mortgage_type"),wrapper_discount_product:$("#J_wrapper_discount_product"),wrapper_discount_product_type_1:$("#J_wrapper_discount_product_type_1"),wrapper_discount_product_type_2:$("#J_wrapper_discount_product_type_2"),discount_ratio:$("[name=discount_ratio]"),discount_ratio_val:$("[name=discount_ratio_val]"),service_fee:$("[name=service_fee]"),service_fee_val:$("[name=service_fee_val]"),service_fee_settlement:$("#J_service_fee_settlement"),service_fee_settlement_type:$(".j_service_fee_settlement_type"),discount:$("[name=discount]"),discount_val:$("[name=discount_val]"),discount_count_cycle:$("#J_discount_count_cycle"),settlement_type:$("[name=settlement_type]"),tax_code:$("[name=tax_code]"),uploadBtn:$("#fileUpload"),file:$("[name=file]"),fileNames:$("#J_fileNames"),progress:$("#progress"),progressBar:$("#progress .progress-bar"),product_details:$(".j_product_detail"),product_11:$("#J_product_11"),product_12:$("#J_product_12"),product_13:$("#J_product_13"),product_14:$("#J_product_14"),product_21:$("#J_product_21"),product_22:$("#J_product_22"),product_31:$("#J_product_31"),product_32:$("#J_product_32"),product_41:$("#J_product_41"),product_42:$("#J_product_42"),product_51:$("#J_product_51"),product_52:$("#J_product_52"),product_61:$("#J_product_61"),product_62:$("#J_product_62"),product_71:$("#J_product_71"),product_72:$("#J_product_72"),product_81:$("#J_product_81"),product_91:$("#J_product_91"),product_101:$("#J_product_101")};!function(){e(),t(),s.loan_type.eq(0).prop("checked")?(s.wrapper_product_type_1.removeClass("hidden"),s.wrapper_mortgage_type.removeClass("hidden"),s.wrapper_discount_product_type_1.removeClass("hidden")):(s.wrapper_product_type_2.removeClass("hidden"),s.wrapper_discount_product_type_2.removeClass("hidden")),s.product_types.trigger("change"),s.mortgage_type.trigger("change"),s.discount_ratio.trigger("change"),s.settlement_type.trigger("change"),s.service_fee.trigger("change"),s.discount.trigger("change"),c(),d(s.uploadBtn)}()});