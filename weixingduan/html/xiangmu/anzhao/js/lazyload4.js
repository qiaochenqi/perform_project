var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				if (i == 1) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/huodong_' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">[意大利农庄]篝火节</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_27.jpg"><p class="my_p2">09月09日</p><img class="my_img2" src="../img/dw_0888.jpg"><p class="my_p3">顺义  35km</p></div><div class="my_div5"><span class="my_span1">报名人数：302人</span></div></div></a>';
					fragment.appendChild(li);
				}if(i == 2){
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/huodong_' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">[意大利农庄]烤肉大聚会</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_27.jpg"><p class="my_p2">09月09日</p><img class="my_img2" src="../img/dw_0888.jpg"><p class="my_p3">顺义  35km</p></div><div class="my_div5"><span class="my_span1">报名人数：302人</span></div></div></a>';
					fragment.appendChild(li);
				} else{
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/huodong_' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">[蘑菇农庄]奇异花朵节</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_27.jpg"><p class="my_p2">09月09日</p><img class="my_img2" src="../img/dw_0888.jpg"><p class="my_p3">顺义  35km</p></div><div class="my_div5"><span class="my_span1">报名人数：302人</span></div></div></a>';
					fragment.appendChild(li);
				}
				
			}
			return fragment;
		};
		(function($) {
			var list = document.getElementById("list");
			list.appendChild(createFragment(100));
			$(document).imageLazyload({
				placeholder: '../img/60x60.gif'
			});
		})(mui);