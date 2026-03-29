'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup7 } from '@/util/swiperOptions'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TeamDetail() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner box-blog-single-banner">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Team Detail</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Team Detail</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Team Section 2 */}
				<section className="box-section box-contact-section-2">
					<div className="container" data-aos="fade-up">
						<div className="row mt-4">
							<div className="col-lg-5 col-md-4 mb-4">
								<img src="/assets/imgs/pages/team/team.png" className="w-100" alt="Vatech" />
							</div>
							<div className="col-lg-7 col-md-8 mb-4">
								<h1 className="heading-ag-3xl mb-3">Robert Fox</h1>
								<h3 className="neutral-2900 mb-4">Business Consultant</h3>
								<div className="paragraph-rubik-r">
									<span className="me-4 mb-4 d-inline-block"> <strong>Website:</strong> yourwebsite.com </span>
									<span className="me-4 mb-4 d-inline-block"> <strong>Phone:</strong> 44-20-7328-4499 </span>
									<span className="me-4 mb-4 d-inline-block"> <strong>Email:</strong> custom@gmail.com </span>
									<span className="me-4 mb-4 d-inline-block"> <strong>Address:</strong> 423B, Road Wordwide Country, USA </span>
								</div>
								<div className="team-socials">
									<Link href="#">
										<svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.17383 9.3125L8.58398 6.58789H5.97656V4.83008C5.97656 4.43945 6.09375 4.10742 6.32812 3.83398C6.54297 3.54102 6.94336 3.38477 7.5293 3.36523H8.70117V1.05078C8.68164 1.05078 8.45703 1.02148 8.02734 0.962891C7.61719 0.904297 7.13867 0.875 6.5918 0.875C5.51758 0.875 4.6582 1.1875 4.01367 1.8125C3.38867 2.4375 3.06641 3.3457 3.04688 4.53711V6.58789H0.673828V9.3125H3.04688V15.875H5.97656V9.3125H8.17383Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="#">
										<svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.90696 6.35148L14.371 0H13.0762L8.33177 5.5149L4.54243 0H0.171875L5.9021 8.3395L0.171875 15H1.46675L6.47696 9.17608L10.4788 15H14.8493L8.90664 6.35148H8.90696ZM7.13346 8.41297L6.55287 7.58255L1.93331 0.974755H3.92215L7.65019 6.30746L8.23078 7.13788L13.0768 14.0696H11.0879L7.13346 8.41329V8.41297Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="#">
										<svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.92969 14H0.205078V5.24023H2.92969V14ZM1.58203 4.03906C1.13281 4.01953 0.761719 3.86328 0.46875 3.57031C0.175781 3.27734 0.0195313 2.90625 0 2.45703C0.0390625 1.83203 0.302734 1.37305 0.791016 1.08008C1.2793 0.806641 1.80664 0.806641 2.37305 1.08008C2.88086 1.39258 3.14453 1.85156 3.16406 2.45703C3.14453 2.90625 2.98828 3.27734 2.69531 3.57031C2.40234 3.86328 2.03125 4.01953 1.58203 4.03906ZM13.125 14H10.4004V9.72266C10.4395 9.19531 10.3809 8.6875 10.2246 8.19922C10.0684 7.71094 9.6582 7.44727 8.99414 7.4082C8.31055 7.42773 7.86133 7.66211 7.64648 8.11133C7.43164 8.56055 7.33398 9.07812 7.35352 9.66406V14H4.62891V5.24023H7.26562V6.44141H7.29492C7.4707 6.07031 7.77344 5.74805 8.20312 5.47461C8.65234 5.18164 9.20898 5.02539 9.87305 5.00586C11.2012 5.04492 12.0898 5.44531 12.5391 6.20703C12.9688 6.98828 13.1641 7.98438 13.125 9.19531V14Z" fill="currentColor" />
										</svg>
									</Link>
									<Link href="#">
										<svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.5625 4.00586C5.60547 4.02539 4.81445 4.35742 4.18945 5.00195C3.54492 5.62695 3.21289 6.41797 3.19336 7.375C3.21289 8.33203 3.54492 9.12305 4.18945 9.74805C4.81445 10.3926 5.60547 10.7246 6.5625 10.7441C7.51953 10.7246 8.31055 10.3926 8.93555 9.74805C9.58008 9.12305 9.91211 8.33203 9.93164 7.375C9.91211 6.41797 9.58008 5.62695 8.93555 5.00195C8.31055 4.35742 7.51953 4.02539 6.5625 4.00586ZM6.5625 9.57227C5.9375 9.55273 5.41992 9.33789 5.00977 8.92773C4.59961 8.51758 4.38477 8 4.36523 7.375C4.38477 6.75 4.59961 6.23242 5.00977 5.82227C5.41992 5.41211 5.9375 5.19727 6.5625 5.17773C7.1875 5.19727 7.70508 5.41211 8.11523 5.82227C8.52539 6.23242 8.74023 6.75 8.75977 7.375C8.74023 8 8.52539 8.51758 8.11523 8.92773C7.70508 9.33789 7.1875 9.55273 6.5625 9.57227ZM10.8691 3.85938C10.8105 4.34766 10.5469 4.61133 10.0781 4.65039C9.58984 4.61133 9.32617 4.34766 9.28711 3.85938C9.28711 3.64453 9.36523 3.45898 9.52148 3.30273C9.6582 3.16602 9.84375 3.09766 10.0781 3.09766C10.293 3.09766 10.4785 3.16602 10.6348 3.30273C10.7715 3.45898 10.8496 3.64453 10.8691 3.85938ZM13.0957 4.67969C13.0957 3.60547 12.7344 2.6875 12.0117 1.92578C11.25 1.20312 10.3418 0.841797 9.28711 0.841797C8.89648 0.822266 8.33984 0.8125 7.61719 0.8125C6.91406 0.8125 6.21094 0.8125 5.50781 0.8125C4.78516 0.8125 4.23828 0.822266 3.86719 0.841797C2.8125 0.841797 1.89453 1.20312 1.11328 1.92578C0.390625 2.6875 0.0390625 3.5957 0.0585938 4.65039C0.0195312 5.04102 0 5.59766 0 6.32031C0 7.02344 0 7.72656 0 8.42969C0 9.13281 0.0195312 9.67969 0.0585938 10.0703C0.0390625 11.1445 0.390625 12.0625 1.11328 12.8242C1.875 13.5469 2.79297 13.8984 3.86719 13.8789C4.23828 13.8984 4.78516 13.918 5.50781 13.9375C6.21094 13.9375 6.91406 13.9375 7.61719 13.9375C8.33984 13.918 8.89648 13.8984 9.28711 13.8789C10.3418 13.8984 11.25 13.5469 12.0117 12.8242C12.7344 12.0625 13.0957 11.1445 13.0957 10.0703C13.1152 9.67969 13.125 9.13281 13.125 8.42969C13.125 7.72656 13.125 7.02344 13.125 6.32031C13.125 5.59766 13.1152 5.04102 13.0957 4.65039V4.67969ZM11.6895 11.2422C11.4355 11.8281 11.0156 12.248 10.4297 12.502C10.0391 12.6387 9.51172 12.7168 8.84766 12.7363C8.18359 12.7559 7.57813 12.7656 7.03125 12.7656C6.85547 12.7656 6.69922 12.7656 6.5625 12.7656C6.42578 12.7656 6.26953 12.7656 6.09375 12.7656C5.54688 12.7656 4.94141 12.7559 4.27734 12.7363C3.63281 12.7168 3.10547 12.6387 2.69531 12.502C2.10938 12.248 1.68945 11.8281 1.43555 11.2422C1.29883 10.832 1.2207 10.3047 1.20117 9.66016C1.18164 8.99609 1.17188 8.39062 1.17188 7.84375C1.17188 7.66797 1.17188 7.51172 1.17188 7.375C1.17188 7.23828 1.17188 7.08203 1.17188 6.90625C1.17188 6.35938 1.18164 5.75391 1.20117 5.08984C1.2207 4.42578 1.29883 3.89844 1.43555 3.50781C1.68945 2.92188 2.10938 2.50195 2.69531 2.24805C3.10547 2.11133 3.63281 2.0332 4.27734 2.01367C4.94141 1.97461 5.54688 1.96484 6.09375 1.98438C6.26953 1.98438 6.42578 1.98438 6.5625 1.98438C6.69922 1.98438 6.85547 1.98438 7.03125 1.98438C7.57813 1.98438 8.18359 1.99414 8.84766 2.01367C9.51172 2.0332 10.0391 2.11133 10.4297 2.24805C11.0156 2.50195 11.4355 2.92188 11.6895 3.50781C11.8262 3.89844 11.9043 4.42578 11.9238 5.08984C11.9629 5.75391 11.9727 6.35938 11.9531 6.90625C11.9531 7.08203 11.9531 7.23828 11.9531 7.375C11.9531 7.51172 11.9531 7.66797 11.9531 7.84375C11.9727 8.39062 11.9629 8.99609 11.9238 9.66016C11.9043 10.3242 11.8262 10.8516 11.6895 11.2422Z" fill="currentColor" />
										</svg>
									</Link>
								</div>
								<div className="content-detail-team">
									<p>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. a Vesti at on bulum nec odio aea the dumm the ipsumm ipsum that dolocons rsus mal suada and the fadolorit the consectetur elit and fadolorit consectetur elit.</p>
									<p>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. a Vesti at on bulum nec odio aea the dumm the ipsumm ipsum that dolocons rsus mal.</p>
									<div className="box-progress box-progress-primary box-progress-team">
										<div className="item-progress">
											<h6 className="sub-heading-ag-xl dark-950 mb-2">Contracting</h6>
											<div className="progress">
												<div className="progress-bar" style={{ width: '92%' }}>
													<span className="percent paragraph-rubik-r">92%</span>
												</div>
											</div>
										</div>
										<div className="item-progress">
											<h6 className="sub-heading-ag-xl dark-950 mb-2">Building</h6>
											<div className="progress">
												<div className="progress-bar" style={{ width: '78%' }}>
													<span className="percent paragraph-rubik-r">78%</span>
												</div>
											</div>
										</div>
										<div className="item-progress">
											<h6 className="sub-heading-ag-xl dark-950 mb-2">Industry</h6>
											<div className="progress">
												<div className="progress-bar" style={{ width: '89%' }}>
													<span className="percent paragraph-rubik-r">89%</span>
												</div>
											</div>
										</div>
									</div>
									<div className="form-message">
										<h3 className="heading-ag-md dark-950 mb-30">
											Feel Free to Write Our Industry<br />
											Experts Here!
										</h3>
										<form action="#">
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<input type="text" className="form-control user" placeholder="Your name" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<input type="text" className="form-control email" placeholder="Your email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<input type="text" className="form-control phone" placeholder="Phone number" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<input type="text" className="form-control note" placeholder="Subject" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<textarea  className="form-control message" placeholder="Write message" rows={5} />
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<button type="submit" className="btn btn-linear-03">Send a message</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Blog Section 3 */}
				<section className="box-section box-contact-section-2">
					<div className="container-slide">
						<div className="box-swiper">
							<Swiper {...sliderGroup7} className="swiper-container slider-group-7">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo2.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo3.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo4.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo5.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo6.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo7.svg" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/imgs/pages/blog/logo.svg" />
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>


			</Layout >
		</>
	)
}