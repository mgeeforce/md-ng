'use strict';

angular.module('roadtrip')
  .controller('MainCtrl', [
  	'$scope',
  	'$location',
  	'$mdSidenav',
  	'$timeout',
  	'$rootScope',
  	'menu',  
  	function ($scope, $location, $mdSidenav, $timeout, $rootScope, menu) {

	  $scope.menu = menu;

	  var mainContentArea = document.querySelector("[role='main']");

	  $rootScope.$on('$locationChangeSuccess', openPage);

	  $scope.closeMenu = function() {
	    $timeout(function() { $mdSidenav('left').close(); });
	  };
	  $scope.openMenu = function() {
	    $timeout(function() { $mdSidenav('left').open(); });
	  };

	  $scope.path = function() {
	    return $location.path();
	  };

	  $scope.goHome = function($event) {
	    menu.selectPage(null, null);
	    $location.path( '/' );
	  };

	  function openPage() {
	    $scope.closeMenu();
	    mainContentArea.focus();
	  };
}])

  .filter('humanizeDoc', function() {
  return function(doc) {
    if (!doc) return;
    if (doc.type === 'directive') {
      return doc.name.replace(/([A-Z])/g, function($1) {
        return '-'+$1.toLowerCase();
      });
    }
    return doc.label || doc.name;
  };
})
;

angular.module('roadtrip')
.directive('iconFill', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var object = angular.element(element[0].children[0]);
      if(angular.isDefined(attr.iconFill)) {
        object.load(function () {
          var svg = angular.element(this.getSVGDocument().documentElement);
          svg.attr('fill', attr.iconFill);
        });
      }
    }
  };
});

angular.module('roadtrip')
.factory('menu', ['$location', '$rootScope', function($location, $rootScope) {

	var sections = [{
		name: 'Roadtrips',
		url: '/roadtrips',
		pages: [{
			name: 'All',
			id: 'allRoadtrips',
			url: '/home/roadtrips',
			icon: '',
			fill: '#aaa'
		},{
			name: 'Draft',
			id: 'draftRoadtrips',
			url: '/roadtrips/draft',
			icon: 'assets/images/ic_draft_18px.svg',
			fill: '#aaa'
		},{
			name: 'Submitted',
			id: 'submittedRoadtrips',
			url: '/home/roadtrips/submitted',
			icon: 'assets/images/Submitted.svg',
			fill: '#aaa'
		},{
			name: 'Approved',
			id: 'approvedRoadtrips',
			url: '/roadtrips/approved'
		}]
	},{		
		name: 'Expenses',
		url: '/expenses',
		pages: [{
			name: 'All',
			id: 'allExpenses',
			url: '/expenses'
		},{
			name: 'Unreported',
			id: 'unreportedExpenses',
			url: '/expenses/unreported'
		},{
			name: 'Reimbursable',
			id: 'reimbursableExpenses',
			url: '/expenses/reimbursable'
		},{
			name: 'Unallocated',
			id: 'unallocatedExpenses',
			url: '/expenses/unallocated'
		},{
			name: 'Allocated',
			id: 'allocatedExpenses',
			url: '/expenses/allocated'
		}]
	},{
		name: 'Receipts',
		url: '/receipts',
		pages: [{
			name: 'Unattached',
			id: 'unattachedReceipts',
			url: '/receipts/unattached'
		}]
	},{
		name: 'Team',
		url: '/team',
		pages: [{
			name: 'Team',
			id: 'team',
			url: '/team'
		},{
			name: 'Athletes',
			id: 'athletes',
			url: '/team/athletes'
		}]
	}];

	var self;

	$rootScope.$on('$locationChangeSuccess', onLocationChange);

	return self = {
	    sections: sections,

	    selectSection: function(section) {
	      self.openedSection = section;
	    },
	    toggleSelectSection: function(section) {
	      self.openedSection = (self.openedSection === section ? null : section);
	    },
	    isSectionSelected: function(section) {
	      return self.openedSection === section;
	    },

	    selectPage: function(section, page) {
	      page && page.url && $location.path(page.url);
	      self.currentSection = section;
	      console.log(self.currentSection.name);
	      self.currentPage = page;
	    },
	    isPageSelected: function(section, page) {
	      return self.currentPage === page;
	    }
	  };	

	function onLocationChange() {
		console.log("in onLocationChange");
	    var activated = false;
	    var path = $location.path();
	    console.log(path);
	    sections.forEach(function(section) {
	      section.pages.forEach(function(page) {
	        if (path === page.url) {
	          self.selectSection(section);
	          self.selectPage(section, page);
	          activated = true;
	        }
	      });
	    });
	    if (!activated) {
	      self.selectSection(sections[3]);
	    }
	  };

}]);  
