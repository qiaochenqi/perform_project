var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i = 0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media mui-col-xs-6';
				li.innerHTML = '<a class="aa_01"><img class="mui-media-object" data-lazyload="../image/img0' + (i % 4 + 1)'.jpg?version=' + Math.random() * 1000 + '"><div class="mui-media-body">意大利庄园特产薰衣草香皂<p class="p_1">¥<span class="span_01">13.</span>9</p></div></a>';
				fragment.appendChild(li);
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