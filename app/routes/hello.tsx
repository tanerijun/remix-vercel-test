import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export async function loader() {
	await new Promise((r) => setTimeout(r, 3000))

	return json(
		{ message: `Random number: ${Math.floor(Math.random() * 10)}` },
		{ headers: { "Cache-Control": "s-maxage=60" } }
	)
}

export default function Hello() {
	const data = useLoaderData<typeof loader>()

	return (
		<div>
			<h1>Hello page</h1>
			<p>{data.message}</p>
		</div>
	)
}
