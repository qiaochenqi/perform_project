var createFragment = function(count) {
			var fragment = document.createDocumentFragment();
			var li;
			for (var i =0; i < count; i++) {
				li = document.createElement('li');
				li.className = 'mui-table-view-cell mui-media';
				li.innerHTML = '<a class="mui-navigate-right" id="cj01"><img class="mui-media-object mui-pull-left" data-lazyload="../images/ms0' + (i % 8 + 1) + '.png?version=' + Math.random() * 1000 + '"><p class="lip">意大利庄园特产薰衣草香皂</p><p>&yen<span class="dz">13.</span><span >9</span></p></a><a class="mui-navigate-right"  href="../html/1679html.html"><img class="mui-media-object mui-pull-left" data-lazyload="../images/mm00' + (i % 8 + 1) + '.png?version=' + Math.random() * 1000 + '"><p class="lip">意大利庄园特产薰衣草香皂</p><p>&yen<span class="dz">13.</span><span >9</span></p></a>';
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
		