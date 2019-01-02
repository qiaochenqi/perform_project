var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 2; i < count; i++) {
				if (i % 2 == 0) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right my_a1"><img class="mui-media-object mui-pull-left my_img2" data-lazyload="../img/huodong_1.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body my_div2_1"><p class="mui-ellipsis my_p1">[意大利农庄]篝火节篝火节篝火节篝</br>火节篝火节篝火节</p><img class="my_img3" src="../img/huodong_24.jpg"/><p class="my_p2">320人</p><img class="my_img4" src="../img/huodong_27.jpg"/><p class="my_p3">09:09</p><img class="my_img5" src="../img/dw_0888.jpg"/><p class="my_p4">35km</p></div></a>'
					fragment.appendChild(li);
				}if(i%3 == 0){
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right my_a1"><img class="mui-media-object mui-pull-left my_img2" data-lazyload="../img/huodong_2.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body my_div2_1"><p class="mui-ellipsis my_p1">[意大利农庄]篝火节</p><img class="my_img3" src="../img/huodong_24.jpg"/><p class="my_p2">320人</p><img class="my_img4" src="../img/huodong_27.jpg"/><p class="my_p3">09:09</p><img class="my_img5" src="../img/dw_0888.jpg"/><p class="my_p4">35km</p></div></a>'
					fragment.appendChild(li);
				} else{
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right my_a1"><img class="mui-media-object mui-pull-left my_img2" data-lazyload="../img/huodong_3.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body my_div2_1"><p class="mui-ellipsis my_p1">[蘑菇农庄]奇异花朵节奇异花朵节奇</br>异花朵节</p><img class="my_img3" src="../img/huodong_24.jpg"/><p class="my_p2">320人</p><img class="my_img4" src="../img/huodong_27.jpg"/><p class="my_p3">09:09</p><img class="my_img5" src="../img/dw_0888.jpg"/><p class="my_p4">35km</p></div></a>'
					fragment.appendChild(li);
				}
				
			}
			return fragment;
		};
		(function($) {
			var list = document.getElementById("list1");
			list.appendChild(createFragment(10));
			$(document).imageLazyload({
				placeholder: '../img/60x60.gif'
			});
		})(mui);