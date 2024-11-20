import './list.css'

const pages = [
	{ title: 'Home', href: 'temp', id: 1 },
	{ title: 'Technical Projects', href: 'temp', id: 2 },
];

export default function NavBar() {
	const listPages = pages.map(page =>
		<li>
			<a href={page.href}>
				{page.title}
			</a>
		</li>
	)

	return (
		<nav>
			<ul>
				{listPages}
			</ul>
		</nav>
	);
}