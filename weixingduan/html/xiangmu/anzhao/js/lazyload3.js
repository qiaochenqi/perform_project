var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				if (i == 1) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/pindao_0' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">意大利庄园特产:薰衣草香皂，有</br>助于睡眠去痘印</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_24.jpg"/><p class="my_p2">香香爱萝卜</p><img class="my_img2" src="../img/dw_0888.jpg"/><p class="my_p3">顺义  35km</p></div><div class="my_div3"><span class="my_p4">有机</span><span class="my_p5">绿色</span><span class="my_p6">原生态</span></div><div class="my_div4"><p class="my_p7">领券</p><p class="my_p8">包邮</p></div><div class="my_div5"><span class="my_span1">¥</span><span class="my_span2">13.</span><span class="my_span3">9</span><span class="my_span4">183人付款</span></div></div></a>';
					fragment.appendChild(li);
				}if(i == 2){
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/pindao_0' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">意大利庄园特产:薰衣草香皂</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_24.jpg"/><p class="my_p2">香香爱萝卜</p><img class="my_img2" src="../img/dw_0888.jpg"/><p class="my_p3">顺义  35km</p></div><div class="my_div3"><span class="my_p4">有机</span><span class="my_p5">绿色</span><span class="my_p6">原生态</span></div><div class="my_div4"><p class="my_p7">领券</p><p class="my_p8">包邮</p></div><div class="my_div5"><span class="my_span1">¥</span><span class="my_span2">13.</span><span class="my_span3">9</span><span class="my_span4">183人付款</span></div></div></a>';
					fragment.appendChild(li);
				} else{
					li = document.createElement('li');
					li.className = 'mui-table-view-cell mui-media';
					li.innerHTML = '<a class="mui-navigate-right"><img class="mui-media-object mui-pull-left" data-lazyload-id="0" src="../img/pindao_0' + (i % 3 + 1) + '.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><div class="my_div1"><p class="my_p1">意大利庄园特产:薰衣草香皂</p></div><div class="my_div2"><img class="my_img1" src="../img/huodong_24.jpg"/><p class="my_p2">香香爱萝卜</p><img class="my_img2" src="../img/dw_0888.jpg"/><p class="my_p3">顺义  35km</p></div><div class="my_div3"><span class="my_p4">有机</span><span class="my_p5">绿色</span><span class="my_p6">原生态</span></div><div class="my_div4"><p class="my_p7">领券</p><p class="my_p8">包邮</p></div><div class="my_div5"><span class="my_span1">¥</span><span class="my_span2">13.</span><span class="my_span3">9</span><span class="my_span4">183人付款</span></div></div></a>';
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