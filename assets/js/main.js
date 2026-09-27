/* ==========================================================================
   Interacción: tema, menú, scroll spy, animaciones de entrada y contadores.
   Sin dependencias externas.
   ========================================================================== */
(function () {
	'use strict';

	var root = document.documentElement;
	var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

	/* ---------- Tema claro / oscuro ---------- */
	function initTheme() {
		var toggle = document.getElementById('themeToggle');
		if (!toggle) return;

		toggle.addEventListener('click', function () {
			var next = root.dataset.theme === 'light' ? 'dark' : 'light';
			root.dataset.theme = next;
			try {
				localStorage.setItem('theme', next);
			} catch (e) { /* modo privado: se ignora */ }

			var meta = document.querySelector('meta[name="theme-color"]');
			if (meta) meta.setAttribute('content', next === 'light' ? '#f6f8fc' : '#070b14');
		});
	}

	/* ---------- Menú en móvil ---------- */
	function initNav() {
		var toggle = document.getElementById('navToggle');
		var nav = document.getElementById('primaryNav');
		if (!toggle || !nav) return;

		function close() {
			nav.classList.remove('is-open');
			toggle.setAttribute('aria-expanded', 'false');
		}

		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});

		nav.addEventListener('click', function (e) {
			if (e.target.closest('a')) close();
		});

		document.addEventListener('click', function (e) {
			if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
		});

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') close();
		});
	}

	/* ---------- Cabecera fija y botón de volver arriba ---------- */
	function initScrollChrome() {
		var header = document.getElementById('siteHeader');
		var toTop = document.getElementById('toTop');
		var ticking = false;

		function update() {
			var y = window.scrollY;
			if (header) header.classList.toggle('is-stuck', y > 12);
			if (toTop) toTop.classList.toggle('is-visible', y > 600);
			ticking = false;
		}

		window.addEventListener('scroll', function () {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		}, { passive: true });

		update();
	}

	/* ---------- Enlace activo según la sección visible ---------- */
	function initScrollSpy() {
		var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
		if (!links.length || !('IntersectionObserver' in window)) return;

		var map = {};
		var sections = [];

		links.forEach(function (link) {
			var section = document.querySelector(link.getAttribute('href'));
			if (section) {
				map[section.id] = link;
				sections.push(section);
			}
		});

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				links.forEach(function (l) { l.classList.remove('is-active'); });
				var link = map[entry.target.id];
				if (link) link.classList.add('is-active');
			});
		}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

		sections.forEach(function (s) { observer.observe(s); });
	}

	/* ---------- Animación de entrada, escalonada por grupo ---------- */
	function initReveal() {
		var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
		if (!items.length) return;

		if (reduceMotion) {
			items.forEach(function (el) { el.classList.add('is-revealed'); });
			return;
		}

		// Los elementos hermanos entran con un pequeño desfase entre ellos.
		var seen = new Map();
		items.forEach(function (el) {
			var parent = el.parentElement;
			var index = seen.get(parent) || 0;
			seen.set(parent, index + 1);
			el.style.setProperty('--reveal-delay', Math.min(index, 6) * 70 + 'ms');
		});

		// Barrido por posición en lugar de IntersectionObserver: si se salta de golpe
		// por la página (ancla, Fin, restaurar scroll), nada se queda sin mostrar.
		var pending = items.slice();
		var ticking = false;

		function sweep() {
			ticking = false;
			var limit = window.innerHeight * 0.92;

			pending = pending.filter(function (el) {
				if (el.getBoundingClientRect().top >= limit) return true;
				el.classList.add('is-revealed');
				return false;
			});

			if (!pending.length) {
				window.removeEventListener('scroll', request);
				window.removeEventListener('resize', request);
			}
		}

		function request() {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(sweep);
			}
		}

		window.addEventListener('scroll', request, { passive: true });
		window.addEventListener('resize', request);
		sweep();
	}

	/* ---------- Contadores de las métricas ---------- */
	function initCounters() {
		var nums = Array.prototype.slice.call(document.querySelectorAll('.stat-num[data-count]'));
		if (!nums.length) return;

		if (reduceMotion || !('IntersectionObserver' in window)) return;

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;

				var el = entry.target;
				observer.unobserve(el);

				var target = parseInt(el.dataset.count, 10);
				var suffix = el.dataset.suffix || '';
				var duration = 1100;
				var start = null;

				function step(now) {
					if (start === null) start = now;
					var p = Math.min((now - start) / duration, 1);
					var eased = 1 - Math.pow(1 - p, 3);
					el.textContent = Math.round(target * eased) + suffix;
					if (p < 1) requestAnimationFrame(step);
				}

				el.textContent = '0' + suffix;
				requestAnimationFrame(step);
			});
		}, { threshold: 0.5 });

		nums.forEach(function (el) { observer.observe(el); });
	}

	/* ---------- Año del pie ---------- */
	function initYear() {
		var el = document.getElementById('year');
		if (el) el.textContent = new Date().getFullYear();
	}

	function init() {
		initTheme();
		initNav();
		initScrollChrome();
		initScrollSpy();
		initReveal();
		initCounters();
		initYear();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
