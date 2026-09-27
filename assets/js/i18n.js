/* ==========================================================================
   i18n — español (por defecto) e inglés.
   El HTML se sirve en español; este módulo sustituye los textos al cambiar.
   Claves en los atributos data-i18n, data-i18n-content y data-i18n-aria-label.
   ========================================================================== */
(function () {
	'use strict';

	var DEFAULT_LANG = 'es';
	var SUPPORTED = ['es', 'en'];

	var DICT = {
		es: {
			'meta.title': 'José Daniel Rodríguez — Integration & Full Stack Engineer',
			'meta.description': 'Ingeniero en Sistemas especializado en integraciones de sistemas y desarrollo full stack. Más de 10 años construyendo plataformas con PHP/Symfony, Node.js, Java y Angular.',

			'a11y.skip': 'Saltar al contenido',
			'a11y.primaryNav': 'Navegación principal',
			'a11y.language': 'Idioma',
			'a11y.theme': 'Cambiar tema',
			'a11y.menu': 'Abrir menú',
			'a11y.top': 'Volver arriba',

			'nav.experience': 'Experiencia',
			'nav.projects': 'Proyectos',
			'nav.stack': 'Stack',
			'nav.education': 'Formación',
			'nav.contact': 'Contacto',

			'hero.badge': 'Madrid, España · Guatemala',
			'hero.greeting': 'Hola, soy',
			'hero.role': 'Ingeniero en Sistemas',
			'hero.role2': 'Integration & Full Stack Engineer',
			'hero.lead': 'Llevo más de una década construyendo software que conecta sistemas entre sí: middleware e integraciones empresariales, APIs, ERPs y plataformas web de principio a fin. Hoy diseño integraciones en <strong>Telus Digital</strong> desde Madrid.',
			'hero.ctaProjects': 'Ver proyectos',
			'hero.ctaContact': 'Hablemos',

			'code.role': "'Integration & Full Stack'",
			'code.focus': "'middleware, APIs e integraciones'",

			'stats.years': 'años de experiencia profesional',
			'stats.companies': 'empresas en 3 países',
			'stats.tech': 'tecnologías en producción',
			'stats.languages': 'trabajo en ambos idiomas',

			'country.es': 'España',
			'country.gt': 'Guatemala',
			'country.us': 'EE. UU.',
			'chip.microservices': 'Microservicios',
			'chip.payments': 'Pasarela de pagos',

			'exp.eyebrow': 'Trayectoria',
			'exp.title': 'Experiencia profesional',
			'exp.sub': 'De desarrollador web en Guatemala a ingeniero de integraciones en Madrid.',
			'exp.current': 'Actual',

			'exp.job1.period': 'Jul 2025 — Actualidad',
			'exp.job1.role': 'Senior Integration Application Developer',
			'exp.job1.desc': 'Responsable de la integración entre sistemas a través de middleware, conectando plataformas corporativas y servicios de terceros para que la información fluya de forma fiable entre ellos.',

			'exp.job2.period': 'Abr 2022 — Ago 2025',
			'exp.job2.role': 'Full Stack Developer',
			'exp.job2.desc': 'Desarrollo y mantenimiento de módulos para varios proyectos de la plataforma publicitaria: backend en Symfony y Node.js, servicios en Java y automatización de builds y despliegues con Jenkins.',

			'exp.job3.period': 'Nov 2019 — Ene 2022',
			'exp.job3.role': 'Desarrollador Web',
			'exp.job3.desc': 'Creación y mantenimiento de nuevos módulos del ERP interno de la compañía, desarrollados en Java sobre una arquitectura de microservicios con Payara.',

			'exp.job4.period': 'Jul 2019 — Oct 2019',
			'exp.job4.role': 'Full Stack Developer — Encargado del área de desarrollo',
			'exp.job4.desc': 'A cargo del área de desarrollo: backend en Laravel y frontend en Angular, WordPress y HTML para los clientes de la agencia.',

			'exp.job5.period': 'Jul 2017 — Jul 2019',
			'exp.job5.role': 'Software Engineer — Encargado del área de desarrollo',
			'exp.job5.desc': 'Desarrollo backend, frontend y móvil. Backend en Laravel, interfaces en Angular y aplicaciones híbridas con Ionic.',

			'exp.job6.period': 'Feb 2016 — May 2017',
			'exp.job6.role': 'Desarrollador Backend y Frontend',
			'exp.job6.desc': 'Desarrollo backend y frontend de la plataforma SigefCloud, mi primera experiencia profesional trabajando para un equipo en el extranjero.',

			'proj.eyebrow': 'Portafolio',
			'proj.title': 'Proyectos',
			'proj.sub': 'Plataformas completas, de la base de datos a la interfaz.',
			'proj.featured': 'Proyecto destacado',
			'proj.visit': 'Visitar boletiva.com',
			'proj.demo': 'Ver demo',

			'proj.boletiva.tagline': 'Plataforma de venta de boletos para eventos en Guatemala',
			'proj.boletiva.desc': 'El proyecto de mayor alcance que he construido: un marketplace completo donde el público descubre y compra entradas para conciertos, carreras y torneos, y donde los promotores publican y administran sus propios eventos. Incluye pagos en línea en quetzales, control de inventario de boletos y un panel administrativo con trazabilidad de cada operación.',
			'proj.boletiva.f1': 'Marketplace de eventos con categorías de conciertos, carreras, torneos y cupones',
			'proj.boletiva.f2': 'Portal de promotores con verificación de documentos y aprobación administrativa',
			'proj.boletiva.f3': 'Reserva temporal de boletos con temporizador y liberación automática',
			'proj.boletiva.f4': 'Pagos con Visa, Mastercard, American Express y QPayPro',
			'proj.boletiva.f5': 'Autenticación en dos pasos y bitácora de auditoría',

			'proj.pos.title': 'Punto de venta',
			'proj.pos.desc': 'Sistema de punto de venta e inventario con catálogo de productos, facturación y reportes de caja.',
			'proj.rest.title': 'Control de restaurantes',
			'proj.rest.desc': 'Gestión de mesas, comandas y cocina en tiempo real, con seguimiento del estado de cada pedido.',
			'proj.eco.title': 'E-Commerce',
			'proj.eco.desc': 'Tienda en línea con catálogo, carrito de compras y panel de administración de productos y pedidos.',

			'stack.eyebrow': 'Herramientas',
			'stack.title': 'Stack técnico',
			'stack.sub': 'Tecnologías que he usado en proyectos reales, no solo en tutoriales.',
			'stack.backend': 'Backend',
			'stack.frontend': 'Frontend',
			'stack.data': 'Bases de datos',
			'stack.cloud': 'Cloud & DevOps',
			'stack.mobile': 'Móvil & IoT',
			'stack.quality': 'Calidad & integración',

			'edu.eyebrow': 'Aprendizaje',
			'edu.title': 'Formación y certificaciones',
			'edu.sub': 'Formación académica continua y cursos especializados.',
			'edu.academic': 'Formación académica',
			'edu.courses': 'Cursos y certificaciones',
			'edu.ongoing': 'En curso',
			'edu.umg': 'Universidad Mariano Gálvez',

			'edu.d1.period': '2026 — Actualidad',
			'edu.d1.title': 'Maestría en Estadística Aplicada',
			'edu.d1.org': 'Universidad de San Carlos de Guatemala',
			'edu.d2.title': 'Maestría en Administración de Negocios',
			'edu.d2.org': 'Universidad Mariano Gálvez de Guatemala <span class="edu-note">(cursada hasta el cuarto trimestre)</span>',
			'edu.d3.title': 'Ingeniería en Sistemas de Información',
			'edu.d3.org': 'Universidad Mariano Gálvez de Guatemala',
			'edu.d4.title': 'Bachillerato en Ciencias y Letras con orientación en Computación',
			'edu.d4.org': 'Colegio «La Ilustración» — Galardón a la Excelencia «De La Riva»',

			'edu.c6.title': 'Primeros pasos con Angular 2',
			'edu.c7.title': 'Oracle y otras bases de datos',
			'edu.c8.title': 'Fundamentos de las normas ISO 27001 y 19011',
			'edu.c8.org': 'Ministerio de Economía',
			'edu.c9.title': 'Taller de Redes',

			'contact.eyebrow': 'Contacto',
			'contact.title': 'Hablemos de tu proyecto',
			'contact.sub': '¿Necesitas integrar sistemas, levantar una plataforma o reforzar tu equipo? Escríbeme por el canal que prefieras.',
			'contact.email': 'Correo electrónico',
			'contact.whatsappValue': 'Mensaje directo',

			'footer.rights': 'Todos los derechos reservados.',
			'footer.made': 'Hecho con HTML, CSS y JavaScript. Sin frameworks.'
		},

		en: {
			'meta.title': 'José Daniel Rodríguez — Integration & Full Stack Engineer',
			'meta.description': 'Information Systems Engineer specialised in system integration and full stack development. Over 10 years building platforms with PHP/Symfony, Node.js, Java and Angular.',

			'a11y.skip': 'Skip to content',
			'a11y.primaryNav': 'Main navigation',
			'a11y.language': 'Language',
			'a11y.theme': 'Toggle theme',
			'a11y.menu': 'Open menu',
			'a11y.top': 'Back to top',

			'nav.experience': 'Experience',
			'nav.projects': 'Projects',
			'nav.stack': 'Stack',
			'nav.education': 'Education',
			'nav.contact': 'Contact',

			'hero.badge': 'Madrid, Spain · Guatemala',
			'hero.greeting': "Hi, I'm",
			'hero.role': 'Information Systems Engineer',
			'hero.role2': 'Integration & Full Stack Engineer',
			'hero.lead': 'For over a decade I have been building software that connects systems together: enterprise middleware and integrations, APIs, ERPs and end-to-end web platforms. Today I design integrations at <strong>Telus Digital</strong> from Madrid.',
			'hero.ctaProjects': 'View projects',
			'hero.ctaContact': "Let's talk",

			'code.role': "'Integration & Full Stack'",
			'code.focus': "'middleware, APIs and integrations'",

			'stats.years': 'years of professional experience',
			'stats.companies': 'companies across 3 countries',
			'stats.tech': 'technologies in production',
			'stats.languages': 'I work in both languages',

			'country.es': 'Spain',
			'country.gt': 'Guatemala',
			'country.us': 'USA',
			'chip.microservices': 'Microservices',
			'chip.payments': 'Payment gateway',

			'exp.eyebrow': 'Career',
			'exp.title': 'Professional experience',
			'exp.sub': 'From web developer in Guatemala to integration engineer in Madrid.',
			'exp.current': 'Current',

			'exp.job1.period': 'Jul 2025 — Present',
			'exp.job1.role': 'Senior Integration Application Developer',
			'exp.job1.desc': 'Responsible for system integration through middleware, connecting corporate platforms and third-party services so information flows reliably between them.',

			'exp.job2.period': 'Apr 2022 — Aug 2025',
			'exp.job2.role': 'Full Stack Developer',
			'exp.job2.desc': 'Built and maintained modules across several projects of the advertising platform: backend in Symfony and Node.js, services in Java, and build and deployment automation with Jenkins.',

			'exp.job3.period': 'Nov 2019 — Jan 2022',
			'exp.job3.role': 'Web Developer',
			'exp.job3.desc': "Created and maintained new modules for the company's internal ERP, developed in Java on a Payara microservices architecture.",

			'exp.job4.period': 'Jul 2019 — Oct 2019',
			'exp.job4.role': 'Full Stack Developer — Development area manager',
			'exp.job4.desc': "Led the development area: backend in Laravel and frontend in Angular, WordPress and HTML for the agency's clients.",

			'exp.job5.period': 'Jul 2017 — Jul 2019',
			'exp.job5.role': 'Software Engineer — Development area manager',
			'exp.job5.desc': 'Backend, frontend and mobile development. Backend in Laravel, interfaces in Angular and hybrid apps with Ionic.',

			'exp.job6.period': 'Feb 2016 — May 2017',
			'exp.job6.role': 'Backend and Frontend Developer',
			'exp.job6.desc': 'Backend and frontend development of the SigefCloud platform — my first professional role working for a team abroad.',

			'proj.eyebrow': 'Portfolio',
			'proj.title': 'Projects',
			'proj.sub': 'Complete platforms, from the database to the interface.',
			'proj.featured': 'Featured project',
			'proj.visit': 'Visit boletiva.com',
			'proj.demo': 'View demo',

			'proj.boletiva.tagline': 'Event ticketing platform for Guatemala',
			'proj.boletiva.desc': 'The largest project I have built: a full marketplace where the public discovers and buys tickets for concerts, races and tournaments, and where promoters publish and manage their own events. It includes online payments in quetzales, ticket inventory control and an admin panel with a full audit trail.',
			'proj.boletiva.f1': 'Event marketplace covering concerts, races, tournaments and coupons',
			'proj.boletiva.f2': 'Promoter portal with document verification and administrative approval',
			'proj.boletiva.f3': 'Temporary ticket holds with a countdown and automatic release',
			'proj.boletiva.f4': 'Payments with Visa, Mastercard, American Express and QPayPro',
			'proj.boletiva.f5': 'Two-factor authentication and audit logging',

			'proj.pos.title': 'Point of sale',
			'proj.pos.desc': 'Point of sale and inventory system with a product catalogue, invoicing and cash reports.',
			'proj.rest.title': 'Restaurant management',
			'proj.rest.desc': 'Real-time management of tables, orders and kitchen, tracking the status of every order.',
			'proj.eco.title': 'E-Commerce',
			'proj.eco.desc': 'Online store with catalogue, shopping cart and an admin panel for products and orders.',

			'stack.eyebrow': 'Toolbox',
			'stack.title': 'Tech stack',
			'stack.sub': 'Technologies I have used on real projects, not just tutorials.',
			'stack.backend': 'Backend',
			'stack.frontend': 'Frontend',
			'stack.data': 'Databases',
			'stack.cloud': 'Cloud & DevOps',
			'stack.mobile': 'Mobile & IoT',
			'stack.quality': 'Quality & integration',

			'edu.eyebrow': 'Learning',
			'edu.title': 'Education and certifications',
			'edu.sub': 'Ongoing academic training and specialised courses.',
			'edu.academic': 'Academic training',
			'edu.courses': 'Courses and certifications',
			'edu.ongoing': 'Ongoing',
			'edu.umg': 'Mariano Gálvez University',

			'edu.d1.period': '2026 — Present',
			'edu.d1.title': "Master's Degree in Applied Statistics",
			'edu.d1.org': 'University of San Carlos of Guatemala',
			'edu.d2.title': "Master's Degree in Business Administration",
			'edu.d2.org': 'Mariano Gálvez University of Guatemala <span class="edu-note">(completed through the fourth term)</span>',
			'edu.d3.title': 'Information Systems Engineering',
			'edu.d3.org': 'Mariano Gálvez University of Guatemala',
			'edu.d4.title': 'High School Degree in Science and Letters, Computing track',
			'edu.d4.org': '"La Ilustración" Private School — "De La Riva" Award for Excellence',

			'edu.c6.title': 'First steps with Angular 2',
			'edu.c7.title': 'Oracle and other databases',
			'edu.c8.title': 'Fundamentals of ISO 27001 and 19011 standards',
			'edu.c8.org': 'Ministry of Economy',
			'edu.c9.title': 'Networks Workshop',

			'contact.eyebrow': 'Contact',
			'contact.title': "Let's talk about your project",
			'contact.sub': 'Need to integrate systems, launch a platform or strengthen your team? Reach out on whichever channel you prefer.',
			'contact.email': 'Email',
			'contact.whatsappValue': 'Direct message',

			'footer.rights': 'All rights reserved.',
			'footer.made': 'Built with HTML, CSS and JavaScript. No frameworks.'
		}
	};

	function normalise(lang) {
		return SUPPORTED.indexOf(lang) !== -1 ? lang : DEFAULT_LANG;
	}

	function stored() {
		try {
			return localStorage.getItem('lang');
		} catch (e) {
			return null;
		}
	}

	function remember(lang) {
		try {
			localStorage.setItem('lang', lang);
		} catch (e) { /* modo privado: se ignora */ }
	}

	/** Sustituye el contenido de un nodo respetando el HTML permitido en el diccionario. */
	function write(node, value) {
		if (value.indexOf('<') !== -1) {
			node.innerHTML = value;
		} else {
			node.textContent = value;
		}
	}

	function apply(lang) {
		lang = normalise(lang);
		var dict = DICT[lang];

		document.documentElement.lang = lang;
		if (dict['meta.title']) document.title = dict['meta.title'];

		document.querySelectorAll('[data-i18n]').forEach(function (node) {
			var value = dict[node.dataset.i18n];
			if (value != null) write(node, value);
		});

		document.querySelectorAll('[data-i18n-content]').forEach(function (node) {
			var value = dict[node.dataset.i18nContent];
			if (value != null) node.setAttribute('content', value);
		});

		document.querySelectorAll('[data-i18n-aria-label]').forEach(function (node) {
			var value = dict[node.dataset.i18nAriaLabel];
			if (value != null) node.setAttribute('aria-label', value);
		});

		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
			var on = btn.dataset.lang === lang;
			btn.classList.toggle('is-active', on);
			btn.setAttribute('aria-pressed', on ? 'true' : 'false');
		});

		document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
	}

	function init() {
		var fromUrl = new URLSearchParams(location.search).get('lang');
		var lang = normalise(fromUrl || stored() || DEFAULT_LANG);

		// El HTML ya viene en español: solo se reescribe si hace falta otro idioma.
		if (lang !== DEFAULT_LANG) apply(lang);
		else apply(DEFAULT_LANG);

		document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var next = normalise(btn.dataset.lang);
				remember(next);
				apply(next);
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	window.i18n = { apply: apply, dict: DICT };
})();
