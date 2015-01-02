(function() {
    'use strict';

    function ReportSvc($q) {


		return {
			reports: [
		      {
		        id: '1',
		        name: 'Mt. Hood',
		        date: 1417560710000,
		        description: 'U18 expense report',
		        amount: 857.87,
		        status: 'Approved',
		        allocated: true,
		        totals: [
		        	{
		        		category: 'Accomodation',
		        		icon: 'local_hotel',
		        		amount: 1284.34
		        	},
		        	{
		        		category: 'Fuel',
		        		icon: 'local_gas_station',
		        		amount: 456.29
		        	},
		        	{
		        		category: 'Meals',
		        		icon: 'local_restaurant',
		        		amount: 873.90
		        	}
		        ],
		        expenses : [
		        	{
		        		id: '1',
		        		merchant: 'Petro Canada',
		        		amount: 78.90,
		        		gst: 0.00,
		        		total: 78.90,
		        		category: 'Fuel'
		        	},
		        	{
		        		id: '2',
		        		merchant: 'Days Inn',
		        		amount: 878.90,
		        		gst: 0.00,
		        		total: 878.90,
		        		category: 'Accomodation'
		        	},
		        	{
		        		id: '3',
		        		merchant: 'SuperValue',
		        		amount: 378.90,
		        		gst: 0.00,
		        		total: 378.90,
		        		category: 'Meals'
		        	},
		        	{
		        		id: '4',
		        		merchant: 'Loveland Ski & Snow',
		        		amount: 1678.90,
		        		gst: 0.00,
		        		total: 1678.90,
		        		category: 'Lane Space'
		        	},
		        	]
		      },
		      {
		        id: '2',
		       	name: 'Colorado',
		        date: 1417560509000,
		        description: 'U18 expense report',
		        amount: 375.00,
		        status: 'Submitted',
		        allocated: true
		      },
		      {
		        id: '3',
		        name: 'Norquay',
		        date: 1418307614000,
		        description: 'U18 expense report',
		        amount: 14088.76,
		        status: 'Pending',
		        allocated: false
		      },
		      {
		        id: '4',
		        name: 'October',
		        date: 1415024414000,
		        description: 'U18 expense report',
		        amount: 188.76,
		        status: 'Pending',
		        allocated: false
		      },
		      {
		        id: '5',
		        name: 'September',
		       	date: 1412346014000,
		        description: 'U18 expense report',
		        amount: 314.76,
		        status: 'Pending',
		        allocated	: true
		      }
    		],
		    getReports: function() {
		      return this.reports;
		    },
		    getReport: function(reportId) {
		      var dfd = $q.defer();
		      this.reports.forEach(function(report) {
		        if (report.id === reportId) dfd.resolve(report);
		      });
		      return dfd.promise;
		    }

		  };
    }

    angular
    .module('roadtrip')
    .factory('ReportSvc', ReportSvc);

    ReportSvc.$inject = ['$q'];


})();
