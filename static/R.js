!function () {
	window.R = {
		modules: {		// 所加载的模块
			a: {
				export: {		// 模块提供的接口
					attr: '',
					method: function () {}
				},
				id：'',		// 模块名称
				uri：'',	// 模块文件地址
				dependencies: [],	// 所依赖的模块
				subscribers: [],	// 引用此模块的模块
				available: true		// 模块是否已加载
			}
		},

		require：function (path) {		// 模块加载函数
			addScriptTag(path);
		},

		define：function (dependencies, fn) {		// 模块定义函数
			R.modules[thisModuleName] = {
				exports: {},
				dependencies: dependencies,
				subscribers: [],
				available: false
			};

			R.subscribe(dependencies, R.modules[thisModuleName], fn);		// 订阅各个模块
		},

		subscribe: function(dependencies, module, fn) {		// 在每个依赖模块上注册此模块
			for (var m in dependencies) {
				m.subscribers.push(module);
			}

			R.initModule(module, fn);		// 初始化模块
		},

		initModule: function (module, fn) {
			if (module.dependencies.every(function(m){
				return m.available;
			})) {
				var export = fn.call(this, require, thisModule, thisModule.export);

				if (export) {
					module.export = export;
				}

				module.available = true;		// 模块加载完毕

				R.notifySubscribers(module);	// 加载各注册模块
			}
		},

		notifySubscribers: function (module) {		// 加载各注册模块
			for (var m in module.subscribers) {
				R.initModule(m);
			}
		}		
	};

	window.require = window.R.require;
	window.define = window.R.define;

}();

