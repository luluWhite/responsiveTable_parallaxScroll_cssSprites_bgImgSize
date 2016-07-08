(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['tpsb.router', 'tpsb.ctrl'];
	var cons = ['tpsb.constant'];
	var serv = ['tpsb.sig.service', 'tpsb.service'];
	var dir = ['tpsb.dir', 'tpsb.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* tpsb Module
	*
	* The main module of this application...
	*/
	angular.module('tpsb', depedencyArr);

	angular.module('tpsb.router', ['ui.router']);
	angular.module('tpsb.constant', []);
	angular.module('tpsb.sig.service', []);
	angular.module('tpsb.service', []);
	angular.module('tpsb.ctrl', []);
	angular.module('tpsb.dir', ['tpsb.service', 'tpsb.sig.service']);
	angular.module('tpsb.cust.dir', ['tpsb.service', 'tpsb.sig.service']);

})();