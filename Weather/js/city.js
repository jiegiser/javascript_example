			(function($, doc) {
				$.init();
				$.ready(function() {
					//-----------------------------------------
					//					//级联示例
					var cityPicker3 = new $.PopPicker({
						layer: 3
					});
					cityPicker3.setData(cityData3);
					var showCityPickerButton = doc.getElementById('cityButton');
					showCityPickerButton.addEventListener('tap', function(event) {
						cityPicker3.show(function(items) {
							city =(items[2] || {}).text;
							getWeather()
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
				});
			})(mui, document);