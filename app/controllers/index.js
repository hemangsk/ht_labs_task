angular.module('ht')
.controller('IndexCtrl', ["$scope", "$http" , "$rootScope", "$sessionStorage", "$location",
	function ($scope, $http, $rootScope, $sessionStorage, $location) {
		$scope.population = {
			"state":["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
			"total":[379944,49386799,1382611,31169272,103804637,25540196,342853,242911,16753235,1457723,60383628,25353081,6856509,12548926,32966238,61130704,33387677,64429,72597565,112372972,2721756,2964007,1091014,1980602,41947358,1244464,27704236,68621012,607688,72138958,35200000,3671032,199581477,10116752,91347736],
			"male":[202330,24738068,720232,15954927,54185347,12827915,193178,150100,8976410,740711,31482282,13505130,3473892,6665561,16931688,31057742,16021290,33106,37612920,58361397,1369764,1492668,552339,1025707,21201678,610485,14634819,35620086,321661,36158871,17700000,1871867,104596415,5154178,46927389],
			"female":[177614,24648731,662379,15214345,49619290,12712281,149675,92811,7776825,717012,28901346,11847951,3382617,5883365,16034550,30072962,17366387,31323,34984645,54011575,1351992,1471339,538675,954895,20745680,633979,13069417,33000926,286027,35980087,17500000,1799165,94985062,4962574,44420347]
		};

		$scope.popdata = [];

		$(document).ready(function() {
			$('select').material_select();
		});

		$scope.selectedState = $scope.population.state[0];

		$scope.selectedStateApp = $scope.population.state[0];

		var crime_due_to_alcoholism_injured = {
		   "state":["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
		   "2006":["60","4660","25","650","1123","335","0","4","0","48","1883","267","376","197","290","4213","807","0","4298","3051","0","34","15","46","925","1","199","3307","117","474","NA","0","2118","67","314"],
		   "2007":["89","2817","12","413","1527","434","0","0","0","0","268","357","328","24","887","356","71","0","8645","3744","82","13","50","0","789","1","453","2909","84","310","NA","0","1846","31","839"],
		   "2008":["31","2283","30","438","1400","910","0","0","0","28","468","399","81","492","683","648","68","0","2025","3172","199","13","43","5","814","1","98","1325","78","308","NA","69","2753","25","2223"],
		   "2009":["33","4538","31","259","695","326","0","0","0","9","1251","299","90","62","637","1457","68","0","5594","4472","215","37","50","0","615","10","433","1284","0","2661","NA","0","2989","1","2148"],
		   "2010":["42","4207","11","535","697","1312","69","6","0","19","225","232","181","145","623","359","68","0","5698","2259","67","62","53","13","803","12","436","2395","75","2541","NA","0","1554","0","8868"],
		   "2011":["22","759","13","593","1059","309","0","1","69","20","158","281","69","91","974","728","71","0","4843","1725","186","134","14","13","1441","23","180","1407","7","3475","NA","19","2463","1","0"],
		   "2012":["10","2134","27","268","1190","233","43","6","67","14","246","268","108","39","684","798","74","2","6156","1638","0","30","70","11","1114","13","75","1067","7","3565","NA","7","3243","174","NA"],
		   "2013":["16","1778","41","366","1094","203","0","2","48","8","29","887","110","115","414","525","36","0","5592","1526","0","21","23","8","1050","7","72","1621","4","2957","NA","7","1490","31","0"],
		   "2014":[21,851,22,480,972,203,3,0,67,6,35,890,107,1025,365,2838,34,0,4223,1536,0,8,21,60,855,98,261,983,38,1153,912,13,904,445,0],
		   "2015":[23,620,28,402,991,203,17,8,47,1,274,891,81,1037,1132,244,36,0,4458,954,0,46,11,10,3363,7,62,638,43,804,38,12,1735,5,583]
		}

		var crime_due_to_alcoholism_killed = {
		   "state":["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
		   "2006":["0","1240","8","212","611","82","0","0","0","11","273","140","56","39","163","648","48","0","594","776","0","10","5","13","292","0","100","938","17","136","NA","0","1749","50","102"],
		   "2007":["0","865","4","142","885","97","0","0","0","0","48","171","111","5","387","33","5","0","993","1007","5","3","30","0","268","0","382","543","13","82","NA","0","1501","17","489"],
		   "2008":["2","619","15","414","839","222","0","1","0","0","64","181","9","48","296","156","11","0","277","896","6","3","7","5","333","0","101","353","19","88","NA","6","2021","22","668"],
		   "2009":["4","1668","9","129","422","64","0","0","0","0","170","131","28","9","273","212","8","2","681","896","15","11","6","0","335","0","323","311","0","538","NA","0","2127","3","932"],
		   "2010":["1","970","5","160","350","283","47","1","0","0","33","142","62","15","263","69","11","0","947","620","4","6","15","1","329","0","299","711","13","431","NA","0","1123","0","3065"],
		   "2011":["1","778","3","302","754","85","0","1","8","0","27","143","31","21","485","136","12","0","810","479","30","27","10","3","480","1","158","530","3","575","NA","7","4653","0","0"],
		   "2012":["NA","424","14","121","805","75","36","1","6","0","57","129","24","53","438","145","2","0","919","482","0","21","29","11","328","1","55","367","2","731","NA","3","2414","137","NA"],
		   "2013":["3","379","15","246","790","82","0","0","6","1","6","398","30","141","241","118","1","0","1012","479","0","8","7","3","301","0","111","696","1","718","NA","1","658","10","0"],
		   "2014":[2,193,7,244,890,93,0,0,7,1,18,480,18,97,288,511,10,0,915,487,0,12,6,25,258,21,277,449,4,416,314,5,569,351,0],
		   "2015":[0,117,10,249,867,78,4,6,6,0,121,478,9,99,906,62,11,0,705,341,0,21,9,0,427,0,91,344,7,142,19,5,1404,3,214]
		}

		var gender_based_violence = {
		   "state":["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
		   "urban":[19.4,42.4,28.3,15.9,40.2,35.4,-12.5,34.6,27.1,15.3,14.1,25.1,10.6,6.7,19.7,20.6,13.7,5.5,27.3,16.4,48.1,22,16.7,11.3,24.8,33.3,19.7,22,0.4,37.2,36.9,16.7,29.6,12.1,23.7],
		   "rural":[17.4,43.6,31.4,26.2,43.7,37.1,50.8,7.4,null,8.7,24.8,37.1,5.2,10.6,38.8,20.4,14.8,null,35.4,26.2,56.1,30.4,17.6,13.6,37.9,37.5,20.9,26.2,4.2,44.2,47.6,32.4,39.3,13.1,36.9],
		   "total":[18.3,43.2,30.6,24.5,43.2,36.7,33.2,26.6,26.8,12.9,20.1,32,5.9,9.4,34,20.5,14.3,6,33,21.4,53.1,28.7,17,12.7,35.2,34.5,20.5,25.1,2.6,40.6,43,27.9,36.7,12.7,32.8]
		}

		$scope.generate_app_chart = function () {
			var total = crime_due_to_alcoholism_killed["2015"];
			var index = (crime_due_to_alcoholism_killed.state).indexOf($scope.selectedStateApp);
			var sum = 0;

			angular.forEach(total, function(value, key){
				sum+=value;
			});


			var res = crime_due_to_alcoholism_killed["2015"][index];
			$scope.stategapcrime = Number((( res / sum ) * 100).toFixed(1)); 

			total = total.concat().sort(function(a, b){return b-a});
			$scope.stateposcrime = total.indexOf(res) + 1;
			console.log(total);
			console.log(res);
			var gbv = gender_based_violence["total"];
			var gbv_res = gender_based_violence["total"][index];
			$scope.stategapacc = gender_based_violence["total"][index];
			gbv = gbv.concat().sort(function(a, b){return b-a});
			console.log(gbv);
			console.log(gbv_res);
			$scope.stateposacc = gbv.indexOf(gbv_res) + 1;
		}

		$scope.generate_app_chart();

		$scope.generate_crime_chart = function () {
			var tmp = [];
			tmp.push(['Year', 'Killed', 'Injured'])
			var index = (crime_due_to_alcoholism_killed.state).indexOf($scope.selectedState);
			var keys = Object.keys(crime_due_to_alcoholism_killed)
			keys.pop(0)

			angular.forEach(keys, function(data, k){
				var one = parseInt(crime_due_to_alcoholism_killed[data][index]);
				var second = parseInt(crime_due_to_alcoholism_injured[data][index]);

				tmp.push([data, one, second]);
			});
			
			

			google.charts.load('current', {'packages':['corechart']});
	     	google.charts.setOnLoadCallback(drawCrimeChart);

	      	function drawCrimeChart() {
	        	var data = google.visualization.arrayToDataTable(tmp);

		        var options = {
		          title: 'Accidents caused due to Intake of Alcohol/Drugs and Exceeding Lawful Speed by Drivers in ' + $scope.selectedState ,
		          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
		          vAxis: {title:'Population Affected', minValue: 0}
		        };
		        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
		        chart.draw(data, options);
		        
		        
	      	}
		}
		$scope.generate_crime_chart();

		$scope.formatpos = function (arg) {
			if (arg == '1') {
				return '1st'
			} else if(arg == '2') {
				return '2nd'
			} else if (arg == '3') {
				return '3rd'
			} else {
				return arg + 'th'
			}
		}
	}]);