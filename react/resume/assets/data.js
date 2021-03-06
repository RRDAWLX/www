var data = {
	"basicInfo" : {
		"texts": [{
				"name": "姓名",
				"value": "王龙祥",
				"icon": "icon-user"
			},
			{
				"name": "出生年月",
				"value": "1991年7月",
				"icon": "icon-calendar"
			},
			{
				"name": "户籍",
				"value": "浙江东阳",
				"icon": "icon-map-marker"
			},
			{
				"name": "目前所在地",
				"value": "上海",
				"icon": "icon-map-marker"
			},
			{
				"name": "手机",
				"value": "13584043791",
				"icon": "icon-mobile-phone icon-large"
			},
			{
				"name": "邮箱",
				"value": "815311850@qq.com",
				"icon": "icon-envelope"
			},
			{
				"name": "学历",
				"value": "武汉大学  本科  电子商务  2009.09——2013.06",
				"icon": "icon-book"
			}
		],
		"imgsrc": './img/idphoto.jpg'
	},

	experiences: [
		{
			company: {
				name: '平安好房（上海）电子商务有限公司',
				period: '2015.03——至今'
			},
			duty: '工作主要包括平安好房管理系统的迭代开发维护、 新闻资讯管理系统新建与迭代开发维护、 前端资源发布独立化、 管理系统迁移 Laravel 框架和 Blade 模板引擎应用、新房频道改版、小区频道新建、好房 App 安卓版中小区 H5 页面开发、“手机找好房” App 引导下载页和一些专题活动页的开发。',
			projects: [
				{
					name: '新闻频道管理系统',
					content: '新闻资讯频道内容管理系统，支持新闻列表管理（单条新闻操作和批量操作），“新闻”、“海外新闻”新增、编辑、预览、草稿保存、发布、删除、筛选，新闻顶级分类、子分类新增、编辑、删除、排序，各栏目版块新闻推荐管理。包含大量的前后端数据交互。',
					duty: '本人负责与 PHP 后端及产品经理共同商讨产品设计方案，与后端商讨实现方案，负责所有的前端功能实现和前后端数据交互工作。'
				},
				{
					name: '“手机找好房” App 引导下载页 http://about.pinganfang.com/app/index.html',
					content: '平安好房 App 引导下载页，纯前端页面，使用了 transform、 transition、 animation 等 CSS3 新特性，兼容 PC 端和 Pad 设备，渐进增强，支持页面按钮点击切换、鼠标滚轮切换、键盘切换、触屏滑动切换，支持顺序切换、乱序切换，支持定时切换，切换带有视差效果。',
					duty: '本人负责与产品经理及设计师共同商讨产品设计方案，并负责产品所有功能实现。'
				},
				{
					name: '平安好房管理系统管理系统迁移 Laravel 框架和 Blade 模板应用',
					content: '平安好房管理系统迁移至新的 PHP 框架 Laravel，并使用 Blade 模板引擎，前端负责用 Blade 重写所有模板页，并填充所有页面数据，和 PHP 后端统一 ajax 接口规范、字段名规范，重写 JS 中所有 ajax 接口及相关方法。',
					duty: '本人为该项目的前端主要负责人，统筹前端的迁移工作，负责平安好房管理系统中新房、租房、二手房、海外房产、新闻、 App 管理系统的迁移，并协助同事迁移小区、好房拓管理系统。同时还负责开发管理系统的 head、 header、footer、 pagination 等公用子视图和制定管理系统迁移新框架后的开发流程。'
				}
			]
		},
		{
			company: {
				name: '江苏广播电视总台（集团）',
				period: '2013.07——2015.02'
			},
			duty: '负责江苏网络电视台财经频道 2013 年 8 月第一版开发、 2014 年 3 月改版以及日常维护。负责一些新闻、活动专题页开发。',
			projects: []
		}
	],

	skills: [
		'HTML(5) 、 CSS(3) 、 JavaScript、 jQuery、 Zepto：能够纯手写动画特效丰富、兼容性和性能良好的 PC 端和移动端页面，根据不同浏览器渐进增强，掌握 HTML5 和 CSS3 常用新特性，原生 JS 和 jQuery 能力都较好，有丰富的前后端协同开发经验。',
		'Bootstrap：熟练掌握 Bootstrap 框架，能够用 Bootstrap 快速开发。',
		'React.js：基于react.js的Web版简历，http://rrdawlx.site/react/resume/resume.html，或者http://qxw1590700146.my3w.com/react/resume/resume.html。',
		'Gulp.js：掌握 Gulp 的 task、 src、 dest、 watch 接口使用，能够搭建自动化项目。',
		'Require.js：能够用 require.js 进行模块化开发。',
		'Git：能够熟练使用 Git 进行项目协作开发。',
		'PHP：能够获取请求数据，连接数据库，操作数据，数据输出，响应请求；有使用 Blade 模板引擎经验。',
		'SQL：创建数据库、数据表，增、删、改、查数据等基本操作都掌握。',
		'Java + Android： 大学期间学习过多年 Java，学习过 Android 开发，对 Android 平台有一定了解，简单研究过 Hybrid 开发。'
	]
};
