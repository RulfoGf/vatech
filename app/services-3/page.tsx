'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Services3() {
	const [isOpen, setOpen] = useState(false)

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner box-linear-single-banner">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Service Page</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Service Page</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/*Home 8 Section 3 */}
				<section className="box-section overflow-hidden box-services-page-3">
					<div className="container" data-aos="fade-up">
						<div className="row mt-4">
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Supply Chain Automation</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Business Process Optimization</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Market Research and Analysis</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Cloud Migration Services</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Business Process Optimization</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-4 hover-up">
									<div className="card-service-4-inner">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/strategic.png" alt="Vatech" /></Link>
										</div>
										<div className="card-info">
											<h4 className="heading-ag-xl dark-950 mb-3">Market Research and Analysis</h4>
											<p className="paragraph-rubik-r dark-950-70 mb-5">Comprehensive market analysis to cutting edge digital transformation strategies, we empower businesses to thrive in today's dynamic marketplace. Our commitment to excellence.</p>
											<Link href="#" className="btn btn-border-small">
												Start a Project
												<svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={10} cy="10.5" r="9.5" stroke="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47863M13.1073 7.47863C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47863L4.66849 15.0437L13.1073 7.47863Z" fill="currentColor" />
													<path d="M12.9644 12.9787C12.6814 12.663 12.5165 11.9605 12.4227 11.3309C12.3004 10.5196 12.3019 9.71482 12.4567 8.96287C12.5728 8.3991 12.7712 7.77997 13.1073 7.47862M13.1073 7.47862C12.7712 7.77997 12.1338 7.9101 11.5611 7.96383C10.7963 8.03542 9.99613 7.94928 9.20373 7.74026C8.58772 7.57802 7.90659 7.33678 7.62433 7.02192M13.1073 7.47862L4.66849 15.0437" stroke="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Services 3 Section 2 */}
				<section className="position-relative overflow-hidden box-videos-services-3">
					<div className="box-videos-services-3-inner">
						<div className="box-video">
							<span className="text-stroke-300"> VIDEO </span>
							<a onClick={() => setOpen(true)} className="popup-video"><img src="/assets/imgs/pages/services/play.svg" alt="Vatech" /></a>
						</div>
						<div className="box-info-video-bottom">
							<p className="sub-heading-ag-xl-m mb-3 color-white">Professionality</p>
							<div className="line-rounded" />
							<p className="sub-heading-ag-xl-m mb-3 color-white">Clients Services</p>
							<div className="line-rounded" />
						</div>
					</div>
				</section>
				{/*Home 8 Section 8 */}
				<section className="position-relative overflow-hidden box-section box-project-7">
					<div className="box-project-inner">
						<div className="container" data-aos="fade-up">
							<div className="text-center" data-aos="fade-up">
								<p className="title-line-both primary-500 line-primary-1000">Latest Blog</p>
								<h3 className="heading-ag-3xl dark-950">
									Our Latest Trending<br className="d-none d-lg-block" />
									Blogs &amp; News
								</h3>
							</div>
							<div className="row position-relative mt-5" data-aos="fade-up">
								<div className="col-lg-4">
									<div className="card-blog card-blog-8">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/blog.png" alt="Vatech" /></Link>
											<span className="card-date">24 January</span>
										</div>
										<div className="card-info">
											<div className="card-info-inner">
												<div className="card-meta">
													<span className="comment">Comments</span>
													<span className="by-user">By Admin</span>
												</div>
												<div className="card-title">
													<Link href="#" className="link-title">Navigating the Future: Insights from Our Consulting Experts</Link>
													<Link href="#" className="link-readmore">Read More
														<span>
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="card-blog card-blog-8">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/blog2.png" alt="Vatech" /></Link>
											<span className="card-date">24 January</span>
										</div>
										<div className="card-info">
											<div className="card-info-inner">
												<div className="card-meta">
													<span className="comment">Comments</span>
													<span className="by-user">By Admin</span>
												</div>
												<div className="card-title">
													<Link href="#" className="link-title">Navigating the Future: Insights from Our Consulting Experts</Link>
													<Link href="#" className="link-readmore">Read More
														<span>
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="card-blog card-blog-8">
										<div className="card-image">
											<Link href="#"><img src="/assets/imgs/pages/home8/blog3.png" alt="Vatech" /></Link>
											<span className="card-date">24 January</span>
										</div>
										<div className="card-info">
											<div className="card-info-inner">
												<div className="card-meta">
													<span className="comment">Comments</span>
													<span className="by-user">By Admin</span>
												</div>
												<div className="card-title">
													<Link href="#" className="link-title">Navigating the Future: Insights from Our Consulting Experts</Link>
													<Link href="#" className="link-readmore">Read More
														<span>
															<svg width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M10 10C10 9.47 10.4581 8.67857 10.9219 8.01429C11.5181 7.15714 12.2306 6.40929 13.0475 5.83857C13.66 5.41071 14.4025 5 15 5M15 5C14.4025 5 13.6594 4.58929 13.0475 4.16143C12.2306 3.59 11.5181 2.84214 10.9219 1.98643C10.4581 1.32143 10 0.528572 10 3.7749e-07M15 5L2.18557e-07 5" stroke="currentColor" strokeWidth="1.5" />
															</svg>
														</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center">
								<Link href="#" className="btn btn-linear-02-md"> Explore More </Link>
							</div>
						</div>
					</div>
				</section>

				<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
			</Layout >
		</>
	)
}