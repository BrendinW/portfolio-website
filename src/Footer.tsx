import './list.css'

const links = [
  { name: 'GitHub', 
      href: 'https://github.com/BrendinW', 
      title: 'The code for my projects',
      id: 1},
  { name: 'Email', 
      href: 'mailto:brendin100@gmail.com', 
      title: 'Please message me. I\'m so lonely...',
      id: 2 },
];

export default function Footer() {
  const listLinks = links.map(link =>
    <li key={link.id}>
      <a href={link.href} title={link.title}>
        {link.name}
      </a>
    </li>
  );

  return (
    <footer>
      <ul>
        {listLinks}
      </ul>
      <address>
        Placeholder St, Austin, TX, USA
      </address>
    </footer>
  )
}