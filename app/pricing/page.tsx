
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Pricing Plan</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Pricing Plan</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Pricing Section 1 */}
				<section className="position-relative overflow-hidden box-pricing-plan">
					<div className="container" data-aos="fade-up">
						<div className="box-list-pricing">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Starter</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>20.29</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">243.48</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }}>/Month</p>
												<p className="paragraph-ag-base package-item dark-950 yearly">/Year</p>
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li className="not-ticked">Saas Metrics</li>
												<li className="not-ticked">Team Collaboration</li>
												<li className="not-ticked">All Consultancy Program</li>
												<li>Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Standard</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>120.29</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">1,443.48</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }}>/Month</p>
												<p className="paragraph-ag-base package-item dark-950 yearly">/Year</p>
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li>Saas Metrics</li>
												<li className="not-ticked">Team Collaboration</li>
												<li className="not-ticked">All Consultancy Program</li>
												<li className="not-ticked">Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Business</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>220.29</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">2,643.48</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }}>/Month</p>
												<p className="paragraph-ag-base package-item dark-950 yearly">/Year</p>
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li className="not-ticked">Saas Metrics</li>
												<li>Team Collaboration</li>
												<li className="not-ticked">All Consultancy Program</li>
												<li>Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Enterprise</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>500.29</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">243.48</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }}>/Month</p>
												<p className="paragraph-ag-base package-item dark-950 yearly">/Year</p>
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li>Saas Metrics</li>
												<li>Team Collaboration</li>
												<li className="not-ticked">All Consultancy Program</li>
												<li className="not-ticked">Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Premium</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>999.29</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">1,443.48</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }}>/Month</p>
												<p className="paragraph-ag-base package-item dark-950 yearly">/Year</p>
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li>Saas Metrics</li>
												<li>Team Collaboration</li>
												<li className="not-ticked">All Consultancy Program</li>
												<li className="not-ticked">Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-pricing-4">
										<div className="top-pricing">
											<div className="pricing-name mb-2">
												<h6 className="sub-heading-ag-xl-m dark-950">Ultimate</h6>
											</div>
											<div className="pricing-price">
												<h2 className="heading-ag-xl package-item monthly primary-home" style={{ display: 'block' }}>Contact us</h2>
												<h2 className="heading-ag-xl package-item yearly primary-home">Contact us</h2>
												<p className="paragraph-ag-base package-item dark-950 monthly" style={{ display: 'block' }} />
												<p className="paragraph-ag-base package-item dark-950 yearly" />
											</div>
										</div>
										<div className="bottom-pricing">
											<ul className="list-ticked mb-40">
												<li>10 Users</li>
												<li>Saas Metrics</li>
												<li>Team Collaboration</li>
												<li>All Consultancy Program</li>
												<li>Export File</li>
											</ul>
											<div className="card-button text-center">
												<Link href="#" className="btn btn-border-950">GET STARTED</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Home 7 Section 6 */}
				<section className="box-section overflow-hidden box-best-team">
					<div className="container" data-aos="fade-up">
						<div className="row align-items-end">
							<div className="col-lg-7 mb-30" data-aos="fade-up">
								<div className="banner-small-title-black line-primary-1000">Best team</div>
								<h2 className="heading-ag-3xl dark-950">
									Empowering Connections <br className="d-none d-lg-block" />
									Empowering Growth
								</h2>
							</div>
							<div className="col-lg-5 mb-30" data-aos="fade-up">
								<p className="mb-20 paragraph-rubik-r neutral-1700">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
							</div>
						</div>
						<div className="row mt-4" data-aos="fade-up">
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-best-team">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home7/team.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-info-left">
											<Link href="#" className="heading-md">Robert Fox</Link>
											<p className="paragraph-rubik-r">UI-Designer</p>
										</div>
										<div className="card-info-right">
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8618 8.46864L19.1472 0H17.4208L11.0949 7.3532L6.04244 0H0.215027L7.85533 11.1193L0.215027 20H1.94152L8.6218 12.2348L13.9576 20H19.785L11.8614 8.46864H11.8618ZM9.49714 11.2173L8.72301 10.1101L2.5636 1.29967H5.21539L10.1861 8.40994L10.9602 9.51718L17.4216 18.7594H14.7698L9.49714 11.2177V11.2173Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.0306 3.57506H11.9876V0.00217461H8.43122C8.13454 -0.0101698 4.51804 -0.0792983 3.58069 3.49523C3.56711 3.53268 3.26755 4.38279 3.26755 6.3686L0.015625 6.37847V10.1258L3.27167 10.1164V20.0005H8.24523V10.125H11.5371V6.36777H8.24523V5.18559C8.24523 4.45069 8.55508 3.57506 10.0306 3.57506ZM10.7141 7.19032V9.30163H7.42227V19.1772H4.09463V9.29093L0.838586 9.30039V7.19896L4.10327 7.1895L4.09463 6.77102C4.05184 4.66754 4.3518 3.78286 4.36538 3.74047C5.17435 0.661778 8.26334 0.816494 8.39583 0.824724L11.1647 0.825547V2.75251H10.0306C8.1078 2.75251 7.42268 4.00917 7.42268 5.18518V7.19032H10.7141Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.5861 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5861 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5861 18.8275H5.41382C3.07511 18.8275 1.1725 16.9249 1.1725 14.5863V5.41382C1.1725 3.07511 3.07511 1.1725 5.41382 1.1725H14.5863C16.9249 1.1725 18.8275 3.07511 18.8275 5.41382V14.5863Z" fill="currentColor" />
													<path d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z" fill="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-best-team">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home7/team2.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-info-left">
											<Link href="#" className="heading-md">Robert Fox</Link>
											<p className="paragraph-rubik-r">UI-Designer</p>
										</div>
										<div className="card-info-right">
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8618 8.46864L19.1472 0H17.4208L11.0949 7.3532L6.04244 0H0.215027L7.85533 11.1193L0.215027 20H1.94152L8.6218 12.2348L13.9576 20H19.785L11.8614 8.46864H11.8618ZM9.49714 11.2173L8.72301 10.1101L2.5636 1.29967H5.21539L10.1861 8.40994L10.9602 9.51718L17.4216 18.7594H14.7698L9.49714 11.2177V11.2173Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.0306 3.57506H11.9876V0.00217461H8.43122C8.13454 -0.0101698 4.51804 -0.0792983 3.58069 3.49523C3.56711 3.53268 3.26755 4.38279 3.26755 6.3686L0.015625 6.37847V10.1258L3.27167 10.1164V20.0005H8.24523V10.125H11.5371V6.36777H8.24523V5.18559C8.24523 4.45069 8.55508 3.57506 10.0306 3.57506ZM10.7141 7.19032V9.30163H7.42227V19.1772H4.09463V9.29093L0.838586 9.30039V7.19896L4.10327 7.1895L4.09463 6.77102C4.05184 4.66754 4.3518 3.78286 4.36538 3.74047C5.17435 0.661778 8.26334 0.816494 8.39583 0.824724L11.1647 0.825547V2.75251H10.0306C8.1078 2.75251 7.42268 4.00917 7.42268 5.18518V7.19032H10.7141Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.5861 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5861 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5861 18.8275H5.41382C3.07511 18.8275 1.1725 16.9249 1.1725 14.5863V5.41382C1.1725 3.07511 3.07511 1.1725 5.41382 1.1725H14.5863C16.9249 1.1725 18.8275 3.07511 18.8275 5.41382V14.5863Z" fill="currentColor" />
													<path d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z" fill="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-best-team">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home7/team3.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-info-left">
											<Link href="#" className="heading-md">Robert Fox</Link>
											<p className="paragraph-rubik-r">UI-Designer</p>
										</div>
										<div className="card-info-right">
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M11.8618 8.46864L19.1472 0H17.4208L11.0949 7.3532L6.04244 0H0.215027L7.85533 11.1193L0.215027 20H1.94152L8.6218 12.2348L13.9576 20H19.785L11.8614 8.46864H11.8618ZM9.49714 11.2173L8.72301 10.1101L2.5636 1.29967H5.21539L10.1861 8.40994L10.9602 9.51718L17.4216 18.7594H14.7698L9.49714 11.2177V11.2173Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10.0306 3.57506H11.9876V0.00217461H8.43122C8.13454 -0.0101698 4.51804 -0.0792983 3.58069 3.49523C3.56711 3.53268 3.26755 4.38279 3.26755 6.3686L0.015625 6.37847V10.1258L3.27167 10.1164V20.0005H8.24523V10.125H11.5371V6.36777H8.24523V5.18559C8.24523 4.45069 8.55508 3.57506 10.0306 3.57506ZM10.7141 7.19032V9.30163H7.42227V19.1772H4.09463V9.29093L0.838586 9.30039V7.19896L4.10327 7.1895L4.09463 6.77102C4.05184 4.66754 4.3518 3.78286 4.36538 3.74047C5.17435 0.661778 8.26334 0.816494 8.39583 0.824724L11.1647 0.825547V2.75251H10.0306C8.1078 2.75251 7.42268 4.00917 7.42268 5.18518V7.19032H10.7141Z" fill="currentColor" />
												</svg>
											</Link>
											<Link href="#" className="icon-social">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.5861 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5861 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5861 18.8275H5.41382C3.07511 18.8275 1.1725 16.9249 1.1725 14.5863V5.41382C1.1725 3.07511 3.07511 1.1725 5.41382 1.1725H14.5863C16.9249 1.1725 18.8275 3.07511 18.8275 5.41382V14.5863Z" fill="currentColor" />
													<path d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z" fill="currentColor" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-logos-partner">
							<div className="item-partner">
								<img src="/assets/imgs/pages/home7/coinbase.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-center">
								<img src="/assets/imgs/pages/home7/invision.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-center">
								<img src="/assets/imgs/pages/home7/hellosign.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-end">
								<img src="/assets/imgs/pages/home7/dribbble.svg" alt="Vatech" />
							</div>
							<div className="item-partner">
								<img src="/assets/imgs/pages/home7/treehouse.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-center">
								<img src="/assets/imgs/pages/home7/instagram.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-center">
								<img src="/assets/imgs/pages/home7/doordash.svg" alt="Vatech" />
							</div>
							<div className="item-partner text-end">
								<img src="/assets/imgs/pages/home7/basecamp.svg" alt="Vatech" />
							</div>
						</div>
					</div>
				</section>
				{/*Home 7 Section 8 */}
				<section className="position-relative overflow-hidden box-section box-all-blog-red">
					<div className="box-project-inner">
						<div className="container" data-aos="fade-up">
							<div className="text-center">
								<p className="title-line-both primary-home line-primary-home">all Blogs</p>
								<h3 className="heading-3xl">
									Inspiring Confidence corporate<br className="d-none d-lg-block" />
									Delivering Solutions
								</h3>
							</div>
							<div className="box-list-blogs">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="card-blog-7">
											<div className="card-image">
												<Link href="/news-details"><img src="/assets/imgs/pages/pricing/news.png" alt="Vatech" /></Link>
											</div>
											<div className="card-info">
												<div className="text-end mb-2">
													<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
												</div>
												<Link href="/news-details" className="heading-md">Securing your business securing your reputation</Link>
												<Link href="/news-details" className="link-more button-ag-bold">
													Discover More
													<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="card-blog-7">
											<div className="card-image">
												<Link href="/news-details"><img src="/assets/imgs/pages/pricing/news2.png" alt="Vatech" /></Link>
											</div>
											<div className="card-info">
												<div className="text-end mb-2">
													<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
												</div>
												<Link href="/news-details" className="heading-md">Building a Robust IT Ecosystem for Your Enterprise</Link>
												<Link href="/news-details" className="link-more button-ag-bold">
													Discover More
													<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="card-blog-7">
											<div className="card-image">
												<Link href="/news-details"><img src="/assets/imgs/pages/pricing/news3.png" alt="Vatech" /></Link>
											</div>
											<div className="card-info">
												<div className="text-end mb-2">
													<span className="post-date sub-heading-ag-sm d-inline-block">Oct 19</span>
												</div>
												<Link href="/news-details" className="heading-md">From Risk to Resilience: Strengthening IT Security</Link>
												<Link href="/news-details" className="link-more button-ag-bold">
													Discover More
													<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
													</svg>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


			</Layout >
		</>
	)
}