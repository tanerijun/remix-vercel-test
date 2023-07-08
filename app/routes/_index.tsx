import { json } from "@remix-run/node"
import type { HeadersFunction, V2_MetaFunction } from "@remix-run/node"
// import { LIGHT_NOVELS } from "@consumet/extensions"
import { Link, useLoaderData } from "@remix-run/react"

export const meta: V2_MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export async function loader() {
	// Create a new instance of the Libgen provider
	// const readlightnovels = new LIGHT_NOVELS.ReadLightNovels()
	// Search for a book. In this case, "Pride and Prejudice"
	// let data = await readlightnovels.search("Classroom of the Elite")

	// let info = await readlightnovels.fetchLightNovelInfo("high-school-dxd")

	// let content = await readlightnovels.fetchChapterContent("high-school-dxd/volume-1-chapter-1")
	// console.log(content)

	await new Promise((r) => setTimeout(r, 3000))

	return json(
		{ message: `Random number: ${Math.floor(Math.random() * 10)}` },
		{ headers: { "Cache-Control": "public, max-age=10, s-maxage=60" } }
	)
}

export default function Index() {
	const data = useLoaderData<typeof loader>()

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<p>{data.message}</p>
			{/* <img src={data.results[0].image} alt="sample" /> */}
			<Link to="/about">About Page</Link>
		</div>
	)
}

// export const headers: HeadersFunction = ({ loaderHeaders }) => ({
// 	"Cache-Control": loaderHeaders.get("Cache-Control") ?? "no-cache",
// })
