(function($) {
'use strict';

	var ModuleName = 'lbx_lnop';

	var Module = function ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	};

	Module.DEFAULTS = {
		//...
	};

	Module.isOutputMethod = function() {
		['func']
	};

	Module.prototype.func = function () {
		console.log('this is a prototype function!!!');
		return true;
	};

	Module.prototype.methods = function (str, opts) {
		if ( typeof str === 'string' && typeof opts === 'undefined' ) {
			this[str]();
		} else if ( typeof str === 'string' && (typeof opts === 'object' || typeof opts === 'string' || typeof opts === 'function' ) ) {
			this[str](opts);
		} else {
			console.log('unsupported options!');
		}
	};

	$.fn[ModuleName] = function ( method, options ) {
		if ( this.length === 1 && typeof method === 'string' && Module.OUTPUTSMETHODS.indexOf(method) !== -1 ) {
			var $this = $(this);
			var module = $this.data( ModuleName );
			return module.methods(method, options);
		} else {
			return this.each(function(){
				var $this = $(this);
				var module = $this.data( ModuleName );
				var opts = null;
				if ( !!module ) {
					module.methods(method, options);
				} else {
					opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
					module = new Module(this, opts);
					$this.data( ModuleName, module );
				}
			});
		}
	};

})(jQuery);