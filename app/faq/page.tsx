'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'
export default function Faq() {
	const [isOpen, setOpen] = useState(false)

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">FAQ's</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>FAQ's</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Faq Section 2 */}
				<section className="position-relative overflow-hidden box-section box-faq-single-2 @@class">
					<div className="box-project-inner">
						<div className="container" data-aos="fade-up">
							<div className="text-center">
								<p className="title-line-both secondery-600 line-primary-1000">Common Faq</p>
								<h3 className="heading-3xl secondery-600">
									Inspiring Confidence corporate<br className="d-none d-lg-block" />
									Delivering Solutions
								</h3>
							</div>
							<div className="row mt-5">
								<div className="col-md-6">
									<div className="block-faqs">
										<div className="accordion" id="accordionFAQ">
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
													<button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														<p>How can I contact customer support ?</p>
													</button>
												</h5>
												<div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
													<button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														<p>Are your services customizable ?</p>
													</button>
												</h5>
												<div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(3)} id="headingThree">
													<button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														<p>What are your business hours ?</p>
													</button>
												</h5>
												<div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(4)} id="headingFour">
													<button className={isAccordion == 4 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														<p>Are your services customizable ?</p>
													</button>
												</h5>
												<div className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
											<div className="accordion-item wow fadeInUp">
												<h5 className="accordion-header" onClick={() => handleAccordion(5)} id="headingFive">
													<button className={isAccordion == 5 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
														<p>What are your business hours ?</p>
													</button>
												</h5>
												<div className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
													<div className="accordion-body">It is a long established fact that a reader will be distr acted bioiiy the rea dablea content of a page when looking at its layout Thoiie point of using.It is a long this established fact that a reader</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="box-video-center ps-3">
										<img src="/assets/imgs/pages/faq/faq.png" alt="Vatech" />
										<a onClick={() => setOpen(true)} className="btn btn-play popup-video">
											<svg width={24} height={28} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21.957 11.3164C22.7773 11.8438 23.3047 12.7812 23.3047 13.7188C23.3047 14.7148 22.7773 15.6523 21.957 16.1211L5.08203 26.4336C4.20312 26.9609 3.08984 27.0195 2.21094 26.4922C1.33203 26.0234 0.804688 25.0859 0.804688 24.0312V3.40625C0.804688 2.41016 1.33203 1.47266 2.21094 1.00391C3.08984 0.476562 4.20312 0.476562 5.08203 1.0625L21.957 11.3164Z" fill="currentColor" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* FAQ Section 2 */}
				<section className="box-section box-clients-5 box-clients-6">
					<div className="bg-number" />
					<div className="container" data-aos="fade-up">
						<div className="box-numbers">
							<div className="item-number">
								<div className="item-number-image">
									<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
								</div>
								<div className="item-numner-info">
									<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
									<p className="sub-heading-ag-lg">Clients Review</p>
								</div>
							</div>
							<div className="item-number">
								<div className="item-number-image">
									<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
								</div>
								<div className="item-numner-info">
									<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
									<p className="sub-heading-ag-lg">Team member</p>
								</div>
							</div>
							<div className="item-number">
								<div className="item-number-image">
									<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
								</div>
								<div className="item-numner-info">
									<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={20} /><span className="d-inline-block align-middle">+</span></h3>
									<p className="sub-heading-ag-lg">Winning award</p>
								</div>
							</div>
							<div className="item-number">
								<div className="item-number-image">
									<img src="/assets/imgs/pages/home5/client.png" alt="Vatech" />
								</div>
								<div className="item-numner-info">
									<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={20} /><span className="d-inline-block align-middle">+</span></h3>
									<p className="sub-heading-ag-lg">project Done</p>
								</div>
							</div>
						</div>
						<div className="block-form-contact">
							<div className="row">
								<div className="col-lg-7">
									<div className="box-form-contact">
										<div className="banner-small-title-black line-primary-home mb-2">Message</div>
										<h2 className="heading-ag-3xl dark-950 mb-5">
											your business to growth<br className="d-none d-lg-block" />
											please touch ?
										</h2>
										<div className="form-contact">
											<form className="form" action="#">
												<div className="row">
													<div className="col-lg-6">
														<div className="form-group">
															<input type="text" className="form-control user" placeholder="Name Here" />
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<input type="text" className="form-control phone" placeholder="Contact Here" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input type="text" className="form-control email" placeholder="Email Address Here" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<textarea className="form-control" rows={5} placeholder="Message Here" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input type="submit" className="btn btn-submit" defaultValue="Contact us" />
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />

			</Layout >
		</>
	)
}