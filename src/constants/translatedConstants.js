import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	python,
	gcp,
	github,
	usjp,
	boc,
	usv,
	pcc,
	icieos
} from "../assets";

export const getTranslatedConstants = (t) => {
	const services = [
		{
			title: t('services.backend'),
			icon: backend,
		},
		{
			title: t('services.frontend'),
			icon: creator,
		},
		{
			title: t('services.mobile'),
			icon: mobile,
		},
		{
			title: t('services.devops'),
			icon: web,
		}
	];

	const technologies = [
		{
			name: t('technologies.javascript'),
			icon: javascript,
		},
		{
			name: t('technologies.typescript'),
			icon: typescript,
		},
		{
			name: t('technologies.react'),
			icon: reactjs,
		},
		{
			name: t('technologies.tailwind'),
			icon: tailwind,
		},
		{
			name: t('technologies.nodejs'),
			icon: nodejs,
		},
		{
			name: t('technologies.mongodb'),
			icon: mongodb,
		},
		{
			name: t('technologies.threejs'),
			icon: threejs,
		},
		{
			name: t('technologies.git'),
			icon: git,
		},
		{
			name: t('technologies.figma'),
			icon: figma,
		},
		{
			name: t('technologies.docker'),
			icon: docker,
		},
		{
			name: t('technologies.python'),
			icon: python,
		},
		{
			name: t('technologies.gcp'),
			icon: gcp,
		}
	];

	const shorted_technologies = [
		{
			name: t('technologies.nodejs'),
			icon: nodejs,
		},
		{
			name: t('technologies.mongodb'),
			icon: mongodb,
		},
		{
			name: t('technologies.python'),
			icon: python,
		},
		{
			name: t('technologies.gcp'),
			icon: gcp,
		}
	];

	const experiences = [
		{
			title: t('experience.intern.title'),
			company_name: t('experience.intern.company'),
			icon: icieos,
			iconBg: "#E6DEDD",
			date: t('experience.intern.date'),
			points: [
				t('experience.intern.points.0'),
			]
		},
		{
			title: t('experience.undergraduate.title'),
			company_name: t('experience.undergraduate.company'),
			icon: usjp,
			iconBg: "#383E56",
			date: t('experience.undergraduate.date'),
			points: [
				t('experience.undergraduate.points.0'),
			],
		},
		{
			title: t('experience.openSource.title'),
			company_name: t('experience.openSource.company'),
			icon: github,
			iconBg: "#383E56",
			date: t('experience.openSource.date'),
			points: [
				t('experience.openSource.points.0'),
				t('experience.openSource.points.1'),
				t('experience.openSource.points.2')
			],
		},
		{
			title: t('experience.trainee.title'),
			company_name: t('experience.trainee.company'),
			icon: boc,
			iconBg: "#383E56",
			date: t('experience.trainee.date'),
			points: [
				t('experience.trainee.points.0'),
			],
		},
		{
			title: t('experience.student1.title'),
			company_name: t('experience.student1.company'),
			icon: usv,
			iconBg: "#383E56",
			date: t('experience.student1.date'),
			points: [
				t('experience.student1.points.0'),
			],
		},
		{
			title: t('experience.student2.title'),
			company_name: t('experience.student2.company'),
			icon: pcc,
			iconBg: "#383E56", // light - E6DEDD
			date: t('experience.student2.date'),
			points: [
				t('experience.student2.points.0'),
			],
		},
	];

	const projects = [
	
		{
			"title": t('projects.horizon.title'),
			"desc": t('projects.horizon.desc'),
			"href": "https://github.com/pinkhousedev/Horizon",
			"texture": "/computer/horizon.mp4",
			"logo": "https://skillicons.dev/icons?i=react",
			"logoStyle": {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			"spotlight": "projects/lights/blue.png",
			"tags": ["FinTech", "SaaS", "Banking", "Transactions"],
			"techs_url": "https://skillicons.dev/icons?i=nextjs,ts,appwrite,tailwind"
		},
		{
			title: t('projects.readme.title'),
			desc: t('projects.readme.desc'),
			href: 'https://github.com/pinkhousedev/My-Contributors',
			texture: '/computer/contributors.mp4',
			logo: 'https://skillicons.dev/icons?i=ts',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/blue.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=md,nextjs,react,tailwind'
		},
		{
			title: t('projects.powerOutage.title'),
			desc: t('projects.powerOutage.desc'),
			href: 'https://github.com/pinkhousedev/Power-Outage',
			texture: '/computer/power-cut.mp4',
			logo: 'https://skillicons.dev/icons?i=js',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/green.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=react,bootstrap,jquery'
		},
		{
			title: t('projects.iphone.title'),
			desc: t('projects.iphone.desc'),
			href: 'https://github.com/pinkhousedev/Apple',
			texture: '/computer/iphone.mp4',
			logo: 'https://skillicons.dev/icons?i=react',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/blue.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=js,threejs,tailwindcss'
		},
		{
			title: t('projects.movieLand.title'),
			desc: t('projects.movieLand.desc'),
			href: 'https://github.com/pinkhousedev/Movie-Land',
			texture: '/computer/movie-land.mp4',
			logo: 'https://skillicons.dev/icons?i=react',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/blue.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=css,postman'
		},
		{
			title: t('projects.hutch.title'),
			desc: t('projects.hutch.desc'),
			href: 'https://www.figma.com/proto/qgyxGcCEGKqGGx03i0ZG3b/Hutch-Redesigned?node-id=1-3&t=t5yWMrudLZuSTrML-1',
			texture: '/computer/hutch-redesign.mp4',
			logo: 'https://skillicons.dev/icons?i=figma',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/pink.png',
			tags: [],
			techs_url: ''
		},
		{
			title: t('projects.flag.title'),
			desc: t('projects.flag.desc'),
			href: 'https://github.com/pinkhousedev/Flag-Animation',
			texture: '/computer/flag-animation.mp4',
			logo: 'https://skillicons.dev/icons?i=css',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/pink.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=html'
		},
		{
			title: t('projects.netflix.title'),
			desc: t('projects.netflix.desc'),
			href: 'https://github.com/pinkhousedev/Netflix-UI',
			texture: '/computer/netflix-ui.mp4',
			logo: 'https://skillicons.dev/icons?i=css',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/pink.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=html'
		},
		{
			title: t('projects.audi.title'),
			desc: t('projects.audi.desc'),
			href: 'https://github.com/pinkhousedev/Audi-UI',
			texture: '/computer/audi-ui.mp4',
			logo: 'https://skillicons.dev/icons?i=css',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/blue.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=html'
		},
		{
			title: t('projects.spotify.title'),
			desc: t('projects.spotify.desc'),
			href: 'https://github.com/pinkhousedev/Spotify-UI',
			texture: '/computer/spotify-ui.mp4',
			logo: 'https://skillicons.dev/icons?i=css',
			logoStyle: {
				backgroundColor: '#13202F',
				border: '0.2px solid #17293E',
				boxShadow: '0px 0px 60px 0px #2F6DB54D',
			},
			spotlight: 'projects/lights/green.png',
			tags: [],
			techs_url: 'https://skillicons.dev/icons?i=html'
		}
	];

	return { services, technologies, experiences, projects, shorted_technologies };
};
