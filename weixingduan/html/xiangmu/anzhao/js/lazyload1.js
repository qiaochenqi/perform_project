var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				if (i%2 == 0) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="../img/ssjg_' + (i % 4 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><p class="my_p3">意大利社员汇庄园</p><img class="my_img1" src="../img/dw_0888.jpg"/><p class="my_p2">顺义  35km</p><p class="mui-ellipsis">我已经变的很美好，你会来看我吗？</br>请来看看吧。</p><p class="my_p4"><p class="my_p5">骑马</p><p class="my_p6">探索</p><p class="my_p6">表演</p></p></div></a>';
					fragment.appendChild(li);
				}if(i%3 == 0){
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="../img/ssjg_' + (i % 4 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><p class="my_p3">意大利庄园</p><img class="my_img1" src="../img/dw_0888.jpg"/><p class="my_p2">顺义  35km</p><p class="mui-ellipsis">我已经变的很美好，你会来看我吗？</br>请来看看吧。</p><p class="my_p4"><p class="my_p5">红酒</p><p class="my_p6">探索</p><p class="my_p6">表演</p></p></div></a>';
					fragment.appendChild(li);
				}else{
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload="../img/ssjg_' + (i % 4 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><p class="my_p3">意大利酒庄</p><img class="my_img1" src="../img/dw_0888.jpg"/><p class="my_p2">顺义  35km</p><p class="mui-ellipsis">我已经变的很美好，你会来看我吗？</br>请来看看吧。</p><p class="my_p4"><p class="my_p5">红酒</p><p class="my_p6">探索</p><p class="my_p6">表演</p></p></div></a>';
					fragment.appendChild(li);
				}
				
			}
			return fragment;
			console.log(i);
		};
		(function($) {
			var list = document.getElementById("list");
			list.appendChild(createFragment(10));
			$(document).imageLazyload({
				placeholder: '../img/60x60.gif'
			});
		})(mui);