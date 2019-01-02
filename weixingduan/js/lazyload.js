var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media';
				li.innerHTML = '<a class="mui-navigate-right" href="html/5.html"><img class="mui-pull-left" data-lazyload="images/' + (i % 2 + 1) + '.png?version=' + Math.random() * 1000 + '"><div class="mui-media-body"><p class="my_p02">意大利社员汇庄园<span>顺义  35km</span></p><p class="my_p03">我已经变的很美好，你会来看我吗？请 </p><p class="my_p03">来看看吧。</p><p class="my_p01"><span>骑马</span><span>探索</span><span>表演</span></p></div></a>';
				
				
				fragment.appendChild(li);
			}
			return fragment;
		};
		(function($) {
			var list = document.getElementById("list");
			list.appendChild(createFragment(5));
			$(document).imageLazyload({
				placeholder: 'images/60x60.jpg'
			});
		})(mui);