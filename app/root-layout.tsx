import { Link } from "@remix-run/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
			<Link to="/">Index</Link>
			<Link to="/about">About</Link>
			<Link to="/hello">Hello</Link>
		</div>
	)
}
