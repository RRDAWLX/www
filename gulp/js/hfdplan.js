/**
 * @fileOverview  新房楼盘管理（新增、编辑）分账方案
 * @author	wanglongxiang
 * @version  2.1.0
 * @date  2015-09-22
 * @update 2015-11-30  功能大调整
 * @update 2015-12-11  文件只能上传1个；“好房贷无抵押有担保”时“结算方式”只可选择“代收代付砍头息模式”、“代收代付非砍头息模式”。
 */

$(function(){
		
	var url = {
			swfFlashUrl: window.config.aURL.sStaticDomain+"/manage/common/plugins/swfupload/swfupload.swf", 		// 文件上传flash控件地址
  			imgUploadUrl: window.config.aURL.sDFSUpd + 'project.html', 		// 图片上传接口
  			imgurl: window.config['aURL']['sDFSViewDomain'] + '/view/project/',		 // 上传后的图片所在文件夹
			save: '/' + $('#headerCity').val() + '/api/lp/hfdplan/create.html',		// 数据保存接口
			endd:'/' + $('#headerCity').val() + '/api/lp/hfdplan/close.html'		// 终止分账方案
		},
		form = {
			loupan_id: $('#J_loupan_id'),		// 楼盘id
			loupan_name: $('#J_loupan_name'),		// 楼盘名
			developers_name: $('#J_developers_name'),		// 开发商名称
			loan_type: $('.j_loan_type'),		// 贷款类型，2个选项
			begin_date: $('[name=begin_date]'),		// 开始日期
			end_date: $('[name=end_date]'),			// 结束日期
			bank_account_name: $('[name=bank_account_name]'),		// 银行账户名
			bank_id: $('[name=bank_id]'),		// 所在银行
			bank_account: $('[name=bank_account]'),			// 银行账号
			wrapper_product_type: $('#J_product_type'),		// 整个 产品类型 字段包裹块
			wrapper_product_type_1: $('#J_wrapper_product_type_1'),		// 好房贷有抵押 对应产品集包裹块
			product_type_1: $('.j_product_type_1'),		// 好房贷有抵押 对应产品集，6个
			wrapper_product_type_2: $('#J_wrapper_product_type_2'),		// 好房贷无抵押有担保 对应产品集包裹块
			product_type_2: $('.j_product_type_2'),		// 好房贷无抵押有担保 对应产品集，4个
			product_types: $('.j_product_type_1, .j_product_type_2'),		// 所有10个产品集列表
			wrapper_mortgage_type: $('#J_wrapper_mortgage_type'),		// 抵押物抵押情况 字段包裹块
			mortgage_type: $('.j_mortgage_type'),			// 抵押物抵押情况，2个选项
			wrapper_discount_product: $('#J_wrapper_discount_product'),		// 开发商贴息率整个字段包裹块
			wrapper_discount_product_type_1: $('#J_wrapper_discount_product_type_1'),		// 开发商贴息率 好房贷有抵押 产品集包裹块
			wrapper_discount_product_type_2: $('#J_wrapper_discount_product_type_2'),		// 开发商贴息率 好房贷无抵押有担保 产品集包裹块
			discount_ratio: $('[name=discount_ratio]'),			// 贴息基数比例，2个选项
			discount_ratio_val: $('[name=discount_ratio_val]'),			// 贴息基数比例值
			service_fee: $('[name=service_fee]'),			// 是否收取服务费，2个选项
			service_fee_val: $('[name=service_fee_val]'),			// 服务费值
			service_fee_settlement: $('#J_service_fee_settlement'),		// 服务费结算方式 字段包裹块
			service_fee_settlement_type: $('.j_service_fee_settlement_type'),		// 服务费结算方式，2个选项
			discount: $('[name=discount]'),		// 预付贴息款，2个选项
			discount_val: $('[name=discount_val]'),		// 预付贴息款值
			discount_count_cycle: $('#J_discount_count_cycle'),		// 贴息计算周期 选择框
			settlement_type: $('[name=settlement_type]'),		// 结算方式，4个选项
			tax_code: $('[name=tax_code]'),		// 纳税标识码
			uploadBtn: $('#fileUpload'),		// 文件上传按钮
			file: $('[name=file]'),		// 附件
			fileNames: $('#J_fileNames'),		// 文件名信息
			progress: $('#progress'),	// 进度
			progressBar: $('#progress .progress-bar'),		// 进度条
			
			product_details: $('.j_product_detail'),		// 所有19个产品具体明细
			product_11: $('#J_product_11'),
			product_12: $('#J_product_12'),
			product_13: $('#J_product_13'),
			product_14: $('#J_product_14'),
			product_21: $('#J_product_21'),
			product_22: $('#J_product_22'),
			product_31: $('#J_product_31'),
			product_32: $('#J_product_32'),
			product_41: $('#J_product_41'),
			product_42: $('#J_product_42'),
			product_51: $('#J_product_51'),
			product_52: $('#J_product_52'),
			product_61: $('#J_product_61'),
			product_62: $('#J_product_62'),
			product_71: $('#J_product_71'),
			product_72: $('#J_product_72'),
			product_81: $('#J_product_81'),
			product_91: $('#J_product_91'),
			product_101: $('#J_product_101')
		},
		regExp = {
			bank_account: /^\d+$/		// 银行账号，纯数字
		};
	
	/**
	 * 初始化
	 * @method  init
	 */
	!function init (){
		// 填充“开发商贴息率”中各产品明细的数据
		fillProducts();
		
		// 各表单元素添加事件监听
		addListener();
		
		// 1、根据“贷款类型”控制显示“产品类型”、“抵押物抵押情况”、“开发商贴息率”
		if(form.loan_type.eq(0).prop('checked')){
			form.wrapper_product_type_1.removeClass('hidden');
			form.wrapper_mortgage_type.removeClass('hidden');
			form.wrapper_discount_product_type_1.removeClass('hidden');
		}else{
			form.wrapper_product_type_2.removeClass('hidden');
			form.wrapper_discount_product_type_2.removeClass('hidden');
		}
		
		// 2、触发“产品类型”中10个元素的 change 事件
		form.product_types.trigger('change');
		
		// 3、触发“抵押物抵押情况”中2个元素的 change 事件
		form.mortgage_type.trigger('change');
		
		// 4、触发“贴息基数比例”2个元素的 change 事件
		form.discount_ratio.trigger('change');
		
		// 5、触发“结算方式”4个元素的 change 事件
		form.settlement_type.trigger('change'); 
		
		// 6、触发“是否收取服务费”2个元素的 change 事件
		form.service_fee.trigger('change');
		
		// 7、触发“预付贴息款”2元素的 change 事件
		form.discount.trigger('change');
		
		// 初始化日期选择器
		initDate();
		
		// 初始化文件上传按钮
		initUploadBtn(form.uploadBtn);
		
	}();
	
	
	/**
	 * 填充“开发商贴息率”中各产品明细的数据
	 * @method fillProducts
	 */
	function fillProducts () {
		var products = $('#J_products').val(),
			product = '';
		
		if(products !== ''){
			products = JSON.parse(products);
		}
		
		for(var type in products){
			if(type == 1){
				if(products[type].no_mortgage){		// 未抵押
					if(products[type].no_mortgage.one_stage){		// 不区分期限
						form.product_11.find(':radio').prop('checked', true);
						
						form.product_11.find(':text').each(function(idx){
							$(this).val(products[type].no_mortgage.one_stage[idx]);
						});
					}else{			// 区分期限
						form.product_12.find(':text').each(function(idx){
							form.product_12.find(':radio').prop('checked', true);
						
							$(this).val(products[type].no_mortgage.multi_stage[idx]);
						});
					}
				}
				
				if(products[type].mortgage){		// 有按揭
					if(products[type].mortgage.one_stage){		// 不区分期限
						form.product_13.find(':radio').prop('checked', true);
						
						form.product_13.find(':text').each(function(idx){
							$(this).val(products[type].mortgage.one_stage[idx]);
						});
					}else{			// 区分期限
						form.product_14.find(':radio').prop('checked', true);
						
						form.product_14.find(':text').each(function(idx){
							$(this).val(products[type].mortgage.multi_stage[idx]);
						});
					}
				}
			}else if(type < 7){
				if(products[type].no_mortgage){		// 未抵押
					product = 'product_' + type + 1;
					
					form[product].find('input').each(function(idx){
						$(this).val(products[type].no_mortgage.one_stage[idx]);
					});
				}
				
				if(products[type].mortgage){		// 有按揭
					product = 'product_' + type + 2;
					
					form[product].find('input').each(function(idx){
						$(this).val(products[type].mortgage.one_stage[idx]);
					});
				}
			}else if(type == 7){
				if(products[type].no_mortgage){		// 未抵押
					if(products[type].no_mortgage.one_stage){		// 不区分期限
						form.product_71.find(':radio').prop('checked', true);
						
						form.product_71.find(':text').each(function(idx){
							$(this).val(products[type].no_mortgage.one_stage[idx]);
						});
					}else{			// 区分期限
						form.product_72.find(':radio').prop('checked', true);
						
						form.product_72.find(':text').each(function(idx){
							$(this).val(products[type].no_mortgage.multi_stage[idx]);
						});
					}
				}
			}else{
				if(products[type].no_mortgage){		// 未抵押
					product = 'product_' + type + 1;
					
					form[product].find('input').each(function(idx){
						$(this).val(products[type].no_mortgage.one_stage[idx]);
					});
				}
			}
		}
	}
	
	
	
	/**
	 * 为各表单元素添加事件监听
	 * @method addListener
	 */
	function addListener () {
		/* 第一部分：各表单字段间的相互控制 */
		
		// “贷款类型”变化，切换“产品类型”和“抵押物抵押情况"
		form.loan_type.on('change', function(e){
			// 如果本元素未被选中，则退出
			if(!$(this).prop('checked')){
				return false;
			}
			
			// 显示“产品类型”字段
			form.wrapper_product_type.removeClass('hidden');
			// 所有产品类型都设置为不选中
			form.product_type_1.prop('checked', false).trigger('change');
			form.product_type_2.prop('checked', false).trigger('change');
			
			// 判断显示哪个系列的产品，及是否显示“抵押物抵押情况”字段
			if(this.value == 1){		// 好房贷有抵押 
				form.wrapper_product_type_1.removeClass('hidden').trigger('show');
				form.wrapper_mortgage_type.removeClass('hidden').trigger('show');
				
				form.wrapper_product_type_2.addClass('hidden').trigger('hidden');
				
				// 支持全部4种“结算方式”
				// 显示“结算方式”中的 2选项“代收不代付砍头息模式”、 4选项“非代收代付”。
				form.settlement_type.eq(1).parent().removeClass('hidden');
				form.settlement_type.eq(3).parent().removeClass('hidden');
				
			}else{		// 好房贷无抵押有担保 
				form.wrapper_product_type_2.removeClass('hidden').trigger('show');
				
				form.wrapper_product_type_1.addClass('hidden').trigger('hidden');
				form.wrapper_mortgage_type.addClass('hidden').trigger('hidden');
				
				// 仅“代收代付砍头息模式”、“代收代付非砍头息模式”2种“结算方式”
				// 隐藏“结算方式”中的 2选项“代收不代付砍头息模式”、 4选项“非代收代付”。
				form.settlement_type.eq(1).prop('checked', false).parent().addClass('hidden');
				form.settlement_type.eq(3).prop('checked', false).parent().addClass('hidden');
				
				// 如果 3选项“代收代付非砍头息模式”未被选中，则选中 1选项“代收代付砍头息模式”。
				if(!form.settlement_type.eq(2).prop('checked')){
					form.settlement_type.eq(0).prop('checked', true).trigger('change');
				}
			}
			
			// 显示“开发商贴息率”字段，并触发 change 事件
			form.wrapper_discount_product.removeClass('hidden');
		});
		
		
		// “好房贷有抵押”对应产品集包裹块 show|hidden
		form.wrapper_product_type_1.on({
			 'show': function(){
				 // 显示“开发商贴息率”中对应的产品集包裹块
				 form.wrapper_discount_product_type_1.removeClass('hidden');
			 },
			 'hidden': function(){
				 // 隐藏“开发商贴息率”中对应的产品集包裹块
				 form.wrapper_discount_product_type_1.addClass('hidden');
			 }
		});
		
		
		// “好房贷无抵押有担保”对应产品集包裹块 show|hidden
		form.wrapper_product_type_2.on({
			 'show': function(){
				 // 显示“开发商贴息率”中对应的产品集包裹块
				 form.wrapper_discount_product_type_2.removeClass('hidden');
			 },
			 'hidden': function(){
				 // 隐藏“开发商贴息率”中对应的产品集包裹块
				 form.wrapper_discount_product_type_2.addClass('hidden');
			 }
		});
		
		
		// “产品类型”中的产品被勾选/取消勾选，显示/隐藏“开发商贴息率”中对应的产品明细
		form.product_types.on('change', function(){
			var _this = $(this);
			
			switch (+_this.val()){
				// “好房贷1.0”和“好房贷3.0"不可同时选择
				case 1:
				case 3:
					if(_this.prop('checked')){
						if(form.product_type_1.eq(0).prop('checked') && form.product_type_1.eq(2).prop('checked')){
							_this.prop('checked', false);
							return;
						}
						
						$(_this.attr('data-target')).removeClass('hidden');
					}else{
						$(_this.attr('data-target')).addClass('hidden');
					}
					break;
				// 若选择“三年期”或“五年期”，则“结算方式”仅可选择“代收代付砍头息”和“代收代付非砍头息”
				case 5:
				case 6:
					if(_this.prop('checked')){
						$(_this.attr('data-target')).removeClass('hidden');
						
						// 隐藏“结算方式”中的 2选项“代收不代付砍头息模式”、 4选项“非代收代付”。
						form.settlement_type.eq(1).prop('checked', false).parent().addClass('hidden');
						form.settlement_type.eq(3).prop('checked', false).parent().addClass('hidden');
						
						// 如果 3选项“代收代付非砍头息模式”未被选中，则选中 1选项“代收代付砍头息模式”。
						if(!form.settlement_type.eq(2).prop('checked')){
							form.settlement_type.eq(0).prop('checked', true).trigger('change');
						}
						
						
					}else{
						$(_this.attr('data-target')).addClass('hidden');
						
						if(!form.product_type_1.eq(4).prop('checked') && !form.product_type_1.eq(5).prop('checked')){
							// 显示“结算方式”中的 2选项“代收不代付砍头息模式”、 4选项“非代收代付”。
							form.settlement_type.eq(1).parent().removeClass('hidden');
							form.settlement_type.eq(3).parent().removeClass('hidden');
						}
					}
					break;
				default:
					if(_this.prop('checked')){
						$(_this.attr('data-target')).removeClass('hidden');
					}else{
						$(_this.attr('data-target')).addClass('hidden');
					}
			}
			
			// 触发“开发商贴息率”字段的 change 事件
			form.wrapper_discount_product.trigger('change');
		});
		
		
		// “抵押物抵押情况”字段 show|hidden
		form.wrapper_mortgage_type.on({
			 'show': function(){
				 form.mortgage_type.prop('checked', false).trigger('change');
			 },
			 'hidden': function(){
				 form.mortgage_type.prop('checked', false).trigger('change');
			 }
		});
		
		
		// “抵押物抵押情况”值变化
		form.mortgage_type.on('change', function(e){
			var _this = $(this);
			if(_this.prop('checked')){
				$(_this.attr('data-target')).removeClass('hidden');
			}else{
				$(_this.attr('data-target')).addClass('hidden');
			}
			
			// 触发“开发商贴息率”字段的 change 事件
			form.wrapper_discount_product.trigger('change');
		});
		
		
		// “开发商贴息率”字段的 change 事件，子元素发生任意变化都会被触发。
		form.wrapper_discount_product.on('change', function(){
			console.log('开发商贴息率 change');
			var i = 0;		// 循环游标
			
			// 首先，设置“预付贴息款”中“是”选项的 data-check1 值为1，但不触发 check 事件
			form.discount.eq(1).attr('data-check1', 1);
			
			var selectedProductTypes = [],	// 选中的产品类型
				selectedProducts = [];		// 选中的产品
				
			// 选出被选中的产品类型
			form.product_types.each(function(){
				if($(this).prop('checked')){
					selectedProductTypes.push(this.value);
				}
			});
			
			// 选出被选中的产品
			for(i = 0; i < selectedProductTypes.length; i++){
				switch (+selectedProductTypes[i]) {
					case 1:		// 好房贷1.0
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							if(form.product_11.find(':checked').length > 0){
								selectedProducts.push(form.product_11);
							}else{
								selectedProducts.push(form.product_12);
							}
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							if(form.product_13.find(':checked').length > 0){
								selectedProducts.push(form.product_13);
							}else{
								selectedProducts.push(form.product_14);
							}
						}
						
						break;
					case 2:		// 好房贷3.0
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							selectedProducts.push(form.product_21);
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							selectedProducts.push(form.product_22);
						}
						
						break;
					case 3:		// 好房贷有抵押（每月还息到期还本）
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							selectedProducts.push(form.product_31);
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							selectedProducts.push(form.product_32);
						}
						
						break;
					case 4:		// 好房贷有抵押（每季还本）
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							selectedProducts.push(form.product_41);
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							selectedProducts.push(form.product_42);
						}
						
						break;
					case 5:		// 好房贷有抵押3年期
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							selectedProducts.push(form.product_51);
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							selectedProducts.push(form.product_52);
						}
						
						break;
					case 6:		// 好房贷有抵押5年期
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							selectedProducts.push(form.product_61);
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							selectedProducts.push(form.product_62);
						}
						
						break;
					case 7:		// 好房贷无抵押（每月还息到期还本）
						if(form.product_71.find(':checked').length > 0){
							selectedProducts.push(form.product_71);
						}else{
							selectedProducts.push(form.product_72);
						}
						
						break;
					case 8:		// 好房贷无抵押12期
						selectedProducts.push(form.product_81);
						break;
					case 9:		// 好房贷无抵押18期
						selectedProducts.push(form.product_91);
						break;
					case 10:	// 好房贷无抵押24期
						selectedProducts.push(form.product_101);
						break;
				}
			}
			
			// 如果没有产品被选中
			// 设置“预付贴息款”的“否”选项选中
			// 设置“预付贴息款”的“是”选项的 data-check1 值为0，触发 check、change 事件
			// 最后退出
			if(selectedProducts.length == 0){
				form.discount.eq(0).prop('checked', true);
				form.discount.eq(1).attr('data-check1', 0).trigger('check').trigger('change');
				return false;
			}
			
			// 判断各选中产品中的“年利率/12个月利率”与“好房报价”是否相等
			// 发现任意不相等项
			// 设置“预付贴息款”的“否”选项选中
			// 设置“预付贴息款”的“是”选项的 data-check1 值为0，触发 check、change 事件
			// 最后退出
			for(i = 0; i< selectedProducts.length; i++){
				if(!compareWithHfbj(selectedProducts[i])){
					form.discount.eq(0).prop('checked', true);
					form.discount.eq(1).attr('data-check1', 0).trigger('check').trigger('change');
					return false;
				}
			}
			
			// 如果所有选中产品中的“年利率/12个月利率”与“好房报价”相等，触发“预付贴息款”中“是"选项的 check 事件。
			form.discount.eq(1).trigger('check');
		});
		
		// “贴息基数比例”为“全部贴息”时，“是否收取服务费”才可选“是”，否则选中“否”
		form.discount_ratio.on('change', function(){
			var _this = $(this);
			var onOff = _this.val()==1 ? true : false;
			form.discount_ratio_val.attr('disabled',onOff);
			if(((_this.val() == 1) && _this.prop('checked')) || ((_this.val() == 0) && !_this.prop('checked'))){
				// 修改“预付贴息款”的“是”选项上的 data-check2 属性为 1，并触发 check 事件 
				form.discount.eq(1).attr('data-check2', 1).trigger('check');
			}else{
				form.discount.eq(0).prop('checked', true);
				form.discount.eq(1).attr('data-check2', 0).trigger('check').trigger('change');
			}
		});
		
		
		// “结算方式” 1选项或2选项被选中时，“预付贴息款”只能选中“否”;
		// “结算方式” 4选项被选中时，“服务费结算方式”只支持“轧差”
		form.settlement_type.on('change', function(){
			var _this = $(this);
			
			// 如果该选项未被选中，则退出
			if(!_this.prop('checked')){
				return false;
			}
			
			// “结算方式” 1选项或2选项被选中时，“预付贴息款”只能选中“否”
			switch (+this.value){
				case 1:
				case 2:
					form.discount.eq(0).prop('checked', true);
					form.discount.eq(1).attr('data-check3', 0).trigger('check').trigger('change');
					break;
				default:
					// 修改“预付贴息款”的“是”选项上的 data-check3 属性为 1，并触发 check 事件
					form.discount.eq(1).attr('data-check3', 1).trigger('check');
			}
			
			// “结算方式” 4选项被选中时，“服务费结算方式”只支持“轧差”
			switch (+this.value){
				case 4:
					form.service_fee_settlement_type.eq(0).prop('checked', true);
					form.service_fee_settlement_type.eq(1).prop('disabled', true);
					break;
				default:
					form.service_fee_settlement_type.eq(1).prop('disabled', false);
			}
		});
		
		
		// 根据“是否收取服务费”的值，控制显示“服务费结算方式”
		form.service_fee.on('click', function(){	
			if(form.service_fee.eq(1).prop('checked')){
				form.service_fee_settlement.removeClass('hidden');
			}else{
				form.service_fee_settlement.addClass('hidden');
			}
		});
		
		
		// “预付贴息款”的“是”选项的 check 事件
		form.discount.eq(1).on('check', function(){
			var _this = $(this);
			if((_this.attr('data-check1') == 1) && (_this.attr('data-check2') == 1) && (_this.attr('data-check3') == 1)){
				_this.prop('disabled', false);
				form.discount_val.prop('disabled', false);
			}else{
				_this.prop('disabled', true);
				form.discount_val.prop('disabled', true);
			}
		});
		
		
		// “预付贴息款”的“是”“否”切换，控制显示“贴息结算周期”
		form.discount.on('change', function(){
			var _this = $(this);
			if(((_this.val() == 1) && _this.prop('checked')) || ((_this.val() == 0) && !_this.prop('checked'))){	// 显示
				form.discount_count_cycle.closest('.form-group').removeClass('hidden');
			}else{
				form.discount_count_cycle.closest('.form-group').addClass('hidden');
			}
		});
		
		
		
		/* 第二部分：错误提示删除，所有的值验证和错误提示增加都在 getData 方法内 */
		
		// 所有文本域text、下拉选择框获得焦点后取消错误提示，所有单选按钮radio、复选框checkbox获取焦点后取消改组元素所有错误提示。
		$('#J_Form').on('focus', 'input, select', function(){
			if((this.type == 'text') || (this.tagName.toLowerCase() == 'select')){
				$(this).removeClass('hasError');
			}else{
				$(this).closest('.form-group').find('.hasError').removeClass('hasError');
			}
		});
		
		
		
		/* 第三部分：ajax 数据前后端交互 */
		
		// 保存数据
		$('#save').on('click', function(){
			var _this = $(this),
			    data = getData();
			
			if(data){
				$.ajax({
					url: url.save,
					type: 'POST',
					data: data,
					dataType: 'json',
					beforeSend: function(){
						_this.addClass('disabled');
					},
					success: function(res){
						if(res.hasError === false){
							alert('保存成功！');
							location.href = $('#goBack').attr('href');
						}else{
							alert(res.error);
						}
					},
					error: function(x,s,e){
						alert(e);
					},
					complete: function(){
						_this.removeClass('disabled');
					}
				});
			}
		});
		
		
		//终止方案：
		$('#endBtn').on('click',function(){
			var obj = {
				sReason:$('#comments').val(),
				sPlanNum:$('#sPlanNum').val()
			};
			if($.trim(obj.sReason).length <= 0 || $.trim(obj.sReason).length > 40){
				$('.uPassR').show();
				return false;
			}

			$.ajax({
				url:url.endd,
				data:obj,
				type:'post',
				success:function(data){
					if(data.hasError == false){
						 alert('操作成功！');
						//dialog hide
						$('#myModal').modal('hide');
						window.location.href= $('#backurl').attr('href');
					}else{
						alert(data.error);
					}
				},
				error:function(){ alert('网络有问题，么么哒！请稍后重试，么么哒！');}
			});

		});
	}
	
	
	
	/**
	 * 判断一个字符串是否是大于等于0，小于100的百分比数字字符串。
	 * @method isPercent
	 * @strNum {String} 一个字符串
	 * @return {Boolean} 如果是大于等于0，小于100的百分比数字字符串，返回true，否则返回false。
	 */
	function isPercent (strNum) {
		if((strNum.length == 0) || (isNaN(strNum)) || (strNum < 0) || (strNum > 100)){
			return false;
		}else{
			return true;
		}
	}
	
	

	/**
	 * 判断一个字符串是否是大于等于0，小于100的百分比数字字符串。
	 * @method compareWithHfbj
	 * @$product {Object} 一个产品的jQuery对象
	 * @return {Boolean} 如果该产品的“年利率/12个月利率”与“好房报价”相等，则返回true，否则返回fals。
	 */
	function compareWithHfbj ($product) {
		var $percent = $product.find('.percent'),
			len = $percent.length,
			val_hfbj = $percent.eq(len-1).val().trim(),
			val_12 = $percent.eq(len-2).val().trim();
			
		if(isPercent(val_hfbj) && (val_hfbj === val_12)){
			return true;
		}
		return false;
	}
	
	
	
	/**
	 * 验证并获取表单数据
	 * @mothod  getData
	 * @return {Object}|{Boolean} 如果验证通过，则返回包含数据的对象，否则，返回 false。
	 */
	function getData(){
		var data = {},
			valid = true,
			temp,			// 用于临时存储
			tempArr;		// 用于临时存储
			
		// 楼盘id、楼盘名、开发商名称
		data.loupan_id = form.loupan_id.val();
		data.loupan_name = form.loupan_name.val();
		data.developers_name = form.developers_name.val();
		
		// 贷款类型
		form.loan_type.each(function(){
			var _this = $(this);
			if(_this.prop('checked')){
				data.loan_type = _this.val();
			}
		});
			
		// 方案有效期
		data.begin_date = form.begin_date.val();
		if(data.begin_date === ''){
			form.begin_date.addClass('hasError');
			valid = false;
		}
		data.end_date = form.end_date.val();
		if(data.end_date === ''){
			form.end_date.addClass('hasError');
			valid = false;
		}
		
		// 银行账户名
		data.bank_account_name = form.bank_account_name.val().trim();
		if(data.bank_account_name === ''){
			form.bank_account_name.addClass('hasError');
			valid = false;
		}
		
		// 所在银行
		data.bank_id = form.bank_id.val();
		if(data.bank_id == 0){
			form.bank_id.addClass('hasError');
			valid = false;
		}
		
		// 银行名称
		data.bank_name = form.bank_id.find('option').eq(form.bank_id.prop('selectedIndex')).text();
		
		// 银行账号 
		data.bank_account = form.bank_account.val().trim();
		if(data.bank_account === ''){
			form.bank_account.addClass('hasError');
			valid = false;
		}
		
		// 产品类型、开发商贴息率
		data.products = {};
		var products = [];
		form.product_types.each(function(){
			var _this = $(this);
			if(_this.prop('checked')){
				products.push(_this.val());
			}
		});
		if(products.length == 0){
			if(data.loan_type == 1){
				form.product_types.eq(0).closest('.checkbox').addClass('hasError');
			}else{
				form.product_types.eq(6).closest('.checkbox').addClass('hasError');
			}
			valid = false;
		}else{
			for(var i = 0; i < products.length; i++){
				switch (+products[i]) {
					case 1: 
						data.products[1] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[1].no_mortgage = {};
							  
							if(form.product_11.find(':checked').length > 0){	// 不区分期限
								data.products[1].no_mortgage.one_stage = [];
								form.product_11.find('.percent').each(function(){
									var _this = $(this),
										val = _this.val().trim();
									data.products[1].no_mortgage.one_stage.push(val);
									
									if(!isPercent(val)){
										_this.addClass('hasError');
										valid = false;
									}
								});
							}else{		// 区分期限
								data.products[1].no_mortgage.multi_stage = [];
								form.product_12.find('.percent').each(function(){
									var _this = $(this),
										val = _this.val().trim();
									data.products[1].no_mortgage.multi_stage.push(val);
									
									if(!isPercent(val)){
										_this.addClass('hasError');
										valid = false;
									}
								});
							}
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[1].mortgage = {};
							  
							if(form.product_13.find(':checked').length > 0){	// 不区分期限
								data.products[1].mortgage.one_stage = [];
								form.product_13.find('.percent').each(function(){
									var _this = $(this),
										val = _this.val().trim();
									data.products[1].mortgage.one_stage.push(val);
									
									if(!isPercent(val)){
										_this.addClass('hasError');
										valid = false;
									}
								});
							}else{		// 区分期限
								data.products[1].mortgage.multi_stage = [];
								form.product_14.find('.percent').each(function(){
									var _this = $(this),
										val = _this.val().trim();
									data.products[1].mortgage.multi_stage.push(val);
									
									if(!isPercent(val)){
										_this.addClass('hasError');
										valid = false;
									}
								});
							}
						}
						
						break;
					case 2: 
						data.products[2] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[2].no_mortgage = {};
							data.products[2].no_mortgage.one_stage = []		// 不区分期限
							
							form.product_21.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[2].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[2].mortgage = {};
							data.products[2].mortgage.one_stage = [];		// 不区分期限
							
							form.product_22.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[2].mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 3: 
						data.products[3] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[3].no_mortgage = {};
							data.products[3].no_mortgage.one_stage = []		// 不区分期限
							
							form.product_31.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[3].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[3].mortgage = {};
							data.products[3].mortgage.one_stage = [];		// 不区分期限
							
							form.product_32.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[3].mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 4: 
						data.products[4] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[4].no_mortgage = {};
							data.products[4].no_mortgage.one_stage = []		// 不区分期限
							
							form.product_41.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[4].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[4].mortgage = {};
							data.products[4].mortgage.one_stage = [];		// 不区分期限
							
							form.product_42.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[4].mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 5: 
						data.products[5] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[5].no_mortgage = {};
							data.products[5].no_mortgage.one_stage = []		// 不区分期限
							
							form.product_51.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[5].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[5].mortgage = {};
							data.products[5].mortgage.one_stage = [];		// 不区分期限
							
							form.product_52.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[5].mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 6: 
						data.products[6] = {};
						
						if(form.mortgage_type.eq(0).prop('checked')){		// 未抵押
							data.products[6].no_mortgage = {};
							data.products[6].no_mortgage.one_stage = []		// 不区分期限
							
							form.product_61.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[6].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						if(form.mortgage_type.eq(1).prop('checked')){		// 有按揭
							data.products[6].mortgage = {};
							data.products[6].mortgage.one_stage = [];		// 不区分期限
							
							form.product_62.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[6].mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 7: 
						data.products[7] = {};
						data.products[7].no_mortgage = {};		// 无抵押
						
						if(form.product_71.find(':checked').length > 0){	// 不区分期限
							data.products[7].no_mortgage.one_stage = [];
							form.product_71.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[7].no_mortgage.one_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}else{		// 区分期限
							data.products[7].no_mortgage.multi_stage = [];
							form.product_72.find('.percent').each(function(){
								var _this = $(this),
									val = _this.val().trim();
								data.products[7].no_mortgage.multi_stage.push(val);
								
								if(!isPercent(val)){
									_this.addClass('hasError');
									valid = false;
								}
							});
						}
						
						break;
					case 8: 
						data.products[8] = {};
						data.products[8].no_mortgage = {};		// 无抵押
						data.products[8].no_mortgage.one_stage = [];		// 不区分期限
						
						form.product_81.find('.percent').each(function(){
							var _this = $(this),
								val = _this.val().trim();
							data.products[8].no_mortgage.one_stage.push(val);
							
							if(!isPercent(val)){
								_this.addClass('hasError');
								valid = false;
							}
						});
						
						break;
					case 9: 
						data.products[9] = {};
						data.products[9].no_mortgage = {};		// 无抵押
						data.products[9].no_mortgage.one_stage = [];		// 不区分期限
						
						form.product_91.find('.percent').each(function(){
							var _this = $(this),
								val = _this.val().trim();
							data.products[9].no_mortgage.one_stage.push(val);
							
							if(!isPercent(val)){
								_this.addClass('hasError');
								valid = false;
							}
						});
						
						break;
					case 10: 
						data.products[10] = {};
						data.products[10].no_mortgage = {};		// 无抵押
						data.products[10].no_mortgage.one_stage = [];		// 不区分期限
						
						form.product_101.find('.percent').each(function(){
							var _this = $(this),
								val = _this.val().trim();
							data.products[10].no_mortgage.one_stage.push(val);
							
							if(!isPercent(val)){
								_this.addClass('hasError');
								valid = false;
							}
						});
						
						break;
				}
			}
		}
		
		
		// 抵押方式
		if(data.loan_type == 1){
			data.mortgage_type = [];
			
			form.mortgage_type.each(function(){
				var _this = $(this);
				if(_this.prop('checked')){
					data.mortgage_type.push(_this.val());
				}
			});
			
			if(data.mortgage_type.length == 0){
				form.mortgage_type.parent().addClass('hasError');
				valid = false;
			}
		}
		
		// 贴息基数比例
		if(form.discount_ratio.eq(0).prop('checked')){
			data.discount_ratio = 1;
			data.discount_ratio_val = 100;
		}else{
			data.discount_ratio = 0;
			data.discount_ratio_val = form.discount_ratio_val.val().trim();
			if(!isPercent(data.discount_ratio_val)){
				form.discount_ratio_val.addClass('hasError');
				valid = false;
			}
		}
		
		// 结算方式
		form.settlement_type.each(function(){
			var _this = $(this);
			if(_this.prop('checked')){
				data.settlement_type = _this.val();
			}
		});
		
		// 是否收取服务费
		if(form.service_fee.eq(0).prop('checked')){
			data.service_fee = 0;
		}else{
			data.service_fee = 1;
			data.service_fee_val = form.service_fee_val.val().trim();
			if((data.service_fee_val.length == 0) || (isNaN(data.service_fee_val))){
				form.service_fee_val.addClass('hasError');
				valid = false;
			}
		}
		
		// 服务费结算方式
		if(data.service_fee){
			if(form.service_fee_settlement_type.eq(0).prop('checked')){
				data.service_fee_settlement_type = 1;
			}else{
				data.service_fee_settlement_type = 2;
			}
		}
		
		// 预付贴息款
		form.discount.each(function(){
			var _this = $(this);
			if(_this.prop('checked')){
				data.discount = _this.val();
			}
		});
		
		// 预付贴息款值
		if(data.discount == 1){
			data.discount_val = form.discount_val.val().trim();
			if((data.discount_val.length == 0) || (isNaN(data.discount_val))){
				form.discount_val.addClass('hasError');
				valid = false;
			}
		}
		
		//贴息计算周期
		if(data.discount == 1){
			data.discount_count_cycle = form.discount_count_cycle.val();
			if(data.discount_count_cycle == 0){
				form.discount_count_cycle.addClass('hasError');
				valid = false;
			}
		}
		
		// 纳税标识码
		data.tax_code = form.tax_code.val();
		if(data.tax_code.length == 0){
			form.tax_code.addClass('hasError');
			valid = false;
		}
		
		// 上传附件
		data.file = form.file.val();
		if(data.file == ''){
			form.uploadBtn.addClass('hasError');
			valid = false;
		}else{
			data.file = JSON.parse(data.file);
		}
		
		if(valid){
			return data;
		}
		return false;
	}
	
	
	
	
	/**
	 * 日期插件初始化
	 * @method  initDate
	 */
	function initDate(){
		$('[name=begin_date]').datepicker({
			dayNamesMin: ['日','一','二','三','四','五','六'],
			monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
			monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
			showMonthAfterYear:true,
			changeMonth:true,
			changeYear:true,
			dateFormat:'yy-mm-dd',
			duration:'fast',
			showAnim:'fadeIn',
			showButtonPanel: false,
			showOtherMonths: true,
			onClose: function( selectedDate ) {
				  $( "[name=end_date]" ).datepicker( "option", "minDate", selectedDate );
			}
		});
		
		$('[name=end_date]').datepicker({
			dayNamesMin: ['日','一','二','三','四','五','六'],
			monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
			monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
			showMonthAfterYear:true,
			changeMonth:true,
			changeYear:true,
			dateFormat:'yy-mm-dd',
			duration:'fast',
			showAnim:'fadeIn',
			showButtonPanel: false,
			showOtherMonths: true,
			onClose: function( selectedDate ) {
				$( "[name=begin_date]" ).datepicker( "option", "maxDate", selectedDate );
			}
		});
	}
	
	
	
	/**
	* 初始化上传文件按钮
	* @method initUploadBtn
	* @param {Object} $buttons 一个含有0个、1个或多个“上传”按钮Dom节点的jQuery对象。
	*/
	function initUploadBtn($buttons) {

		$buttons.each(function () {
			var btn = $(this),
				totalSize = 0,
				completeSize = 0,
				errorFiles = [],		// 用于存放已上传但服务器返回表示失败的文件的名称
				temp = 0;		// 用于临时存储数据
				
			new UploadImg({
				$el: btn,
				url: url.imgUploadUrl,
				flash_url: url.swfFlashUrl,
				file_types: "*.jpg; *.png; *.doc; *.docx; *.pdf; *.zip; *.rar;",
				file_queue_limit: 0,
				file_upload_limit: 1,
				file_dialog_start_handler: function () {
					this.stopUpload();		// 停止上传
					errorFiles = [];
					temp = 0;
				},
				file_queued_handler: function (file) {
					temp += file.size;
				},
				file_dialog_complete_handler: function (numFilesSelected, numFilesQueued, totalNumFilesQueued) {
					if(numFilesQueued != 0){
						// 有点问题，如果这一次选择文件之前有文件还在上传队列中，那这次选择完成后那些文件还在队列中
						
						totalSize = temp;
						completeSize = 0;
						form.progress.show();
						form.progressBar.css('width', 0);
						form.file.val('');		// 清空已有的 file 数据
						form.fileNames.text('');		// 清空文件名信息
					}
				},
				upload_progress_handler: function (file, complete, total) {
					temp = Math.floor((completeSize + complete) / totalSize * 100) + '%';
					form.progressBar.css('width', temp);
				},
				success: function (data, sourceFile) {
					form.uploadBtn.removeClass('hasError');		// 取消上传按钮的错误提示
					
					var data = data.Filedata,
						file = form.file.val(),
						fileNames = [];
					
					if(data.sKey){		// 服务器返回正确结果
						if(file == ''){
							file = [];
							file.push(data);
						}else{
							file = JSON.parse(file);
							file.push(data);
						}
					
						form.file.val(JSON.stringify(file));
						
						// 更新已上传文件名信息
						$.each(file, function(){
							fileNames.push(this.sFilename);
						});
						form.fileNames.text(fileNames.join('，'));
						
					}else{			// 服务器返回错误结果
						errorFiles.push(sourceFile.name);
					}
				},
				error: function (file, errorCode, message) { // 图片上传错误
					switch (errorCode) {
						case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
							alert("文件上传错误，确jpg、png、doc、docx、zip、rar格式！");
							if (window.console) console.log(message);
							break;
						case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
							alert('文件上传错误,服务器拒绝！');
							break;
						case "inputUploadError":
							alert(message);
							break;
						case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
							alert('上传文件数目超过限制！');
							break;
						default:
							alert("未知错误");
							console.log(errorCode, message);
					}
				},
				upload_complete_handler: function (file) {		// 用于支持批量上传，每个文件上传成功后检查队列中是否还有文件，如果有，则再上传一个文件。
					completeSize += file.size;		// 文件上传成功后，已上传量加上这个文件量
					try{
						if(this.getStats().files_queued > 0){
							this.startUpload();
						}else{
							temp = this.getStats().upload_errors + errorFiles.length;
							if(temp){
								if(form.file.val() === ''){
									form.uploadBtn.addClass('hasError');
									alert('全部文件上传失败！！！');
								}else{
									alert(temp + '个文件上传失败!');
								}
							}else{
								alert('全部文件上传成功！');
							}
						}
					}catch(e){
						console.log(e);
					}
				}
			});
		});
	}
	
});
