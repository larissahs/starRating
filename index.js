	document.addEventListener('submit', function (event) {
			if (!event.target.matches('.rating')) return;
			event.preventDefault();
			var selected = document.activeElement;
			if (!selected) return;
			var selectedIndex = parseInt(selected.getAttribute('data-star'), 10);
			var stars = Array.from(event.target.querySelectorAll('.star'));

			stars.forEach(function (star, index) {
				if (index < selectedIndex) {

					star.classList.add('selected');
				} else {
					star.classList.remove('selected');
				}
			});
			var previousRating = event.target.querySelector('.star[aria-pressed="true"]');
			if (previousRating) {
				previousRating.removeAttribute('aria-pressed');
			}
			selected.setAttribute('aria-pressed', true);
		}, false);
		var highlight = function (event) {
			var star = event.target.closest('.star');
			var form = event.target.closest('.rating');
			if (!star || !form) return;
			var selectedIndex = parseInt(star.getAttribute('data-star'), 10);
			var stars = Array.from(form.querySelectorAll('.star'));
			stars.forEach(function (star, index) {
				if (index < selectedIndex) {
					star.classList.add('selected');
				} else {
					star.classList.remove('selected');
				}
			});
		};
		document.addEventListener('mouseover', highlight, false);
		document.addEventListener('focus', highlight, true);
		var resetSelected = function (event) {
			if (!event.target.closest) return;
			var form = event.target.closest('.rating');
			if (!form) return;
			var stars = Array.from(form.querySelectorAll('.star'));
			var selected = form.querySelector('.star[aria-pressed="true"]');
			var selectedIndex = selected ? parseInt(selected.getAttribute('data-star'), 10) : 0;
			stars.forEach(function (star, index) {
				if (index < selectedIndex) {
					star.classList.add('selected');
				} else {
					star.classList.remove('selected');
				}
			});
		};
		document.addEventListener('mouseleave', resetSelected, true);
		document.addEventListener('blur', resetSelected, true);
