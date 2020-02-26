export default function(args) {
	let meta = [
		{
			hid: 'twitter:card',
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			hid: 'twitter:site',
			name: 'twitter:site',
			content: '@andreiio',
		},
	];

	if (args.title) {
		meta.push(
			{
				hid: 'og:title',
				property: 'og:title',
				content: args.title,
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: args.title,
			}
		);
	}

	if (args.description) {
		meta.push(
			{
				hid: 'description',
				name: 'description',
				content: args.description,
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: args.description,
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: args.description,
			}
		);
	}

	let image =
		process.env.BASE_URL + (args.image || require('~/assets/social.png'));

	meta.push(
		{
			hid: 'og:image',
			property: 'og:image',
			content: image,
		},
		{
			hid: 'twitter:image',
			name: 'twitter:image',
			content: image,
		}
	);

	return { meta: meta };
}
