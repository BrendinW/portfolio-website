import './list.css'

// Test comment

const pages = [
	{ title: 'About Me', href: 'temp', id: 1 },
	{ title: 'Portfolio', href: 'temp', id: 2 },
	{ title: 'Hobby Stuff', href: 'temp', id: 3 },
];

export default function Pages() {
	const listPages = pages.map(page =>
		<li className='menu-option' key={page.id}>
			<a href={page.href}>
				{page.title}
			</a>
		</li>
	)

	return (
		<div>
			<ul>
				{listPages}
			</ul>
		</div>
	);
}