'use strict';

// Configuring the Articles module
angular.module('uploads').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Uploads', 'uploads', 'dropdown', '/uploads(/create)?');
		Menus.addSubMenuItem('topbar', 'uploads', '上传', 'uploads');
		Menus.addSubMenuItem('topbar', 'uploads', '批量上传商户信息', 'uploads/create');

//        Menus.addMenuItem('topbar', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
//        Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
//        Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);