
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NotFound() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-12">
					<div className="container">
						<div className="text-center">
							<img src="/assets/imgs/pages/404/404.png" alt="Vatech" className="mb-30" />
							<h3 className="heading-inter-44 secondery-500 mb-4">Oops! Page Not Found.</h3>
							<Link href="#" className="btn btn-primary-home btn-inter">Back to Home Page</Link>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}