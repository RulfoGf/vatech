'use client'
import CountUp from 'react-countup'
import Layout from "@/components/layout/Layout"
import { sliderGroup2 } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function AboutUs() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner @@class">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">About Us</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>About Us</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/*Home 5 Section 2 */}
				<section className="position-relative overflow-hidden box-section box-about-us-5">
					<div className="container" data-aos="fade-up">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-4">
								<img src="/assets/imgs/pages/home5/img-about.png" alt="Vatech" />
							</div>
							<div className="col-lg-6 mb-4">
								<div className="banner-small-title-black line-primary-home">About Us</div>
								<h2 className="heading-3xl mb-30">Crafting Success Stories One Client Time</h2>
								<p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry wasoi imn Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply isnnwan dummy text of the printing and typesetting industry.</p>
								<p className="mb-4">Been the industry's standard dummyLorem Ipsum is simply isnn dummy text of thegh printing and typesetting industry.</p>
								<div className="mb-5" />
								<Link href="#" className="btn btn-primary-home">
									Discover More
									<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
								</Link>
							</div>
						</div>
					</div>
				</section>
				{/*Home 5 Section 4 */}
				<section className="position-relative overflow-hidden box-section box-meet-experts">
					<div className="container" data-aos="fade-up">
						<div className="row align-items-end">
							<div className="col-lg-7 mb-30" data-aos="fade-up">
								<div className="banner-small-title-black line-primary-home">meet experts</div>
								<h2 className="heading-ag-3xl dark-950">
									Empowering Connections<br className="d-none d-lg-block" />
									Empowering Growth
								</h2>
							</div>
							<div className="col-lg-5 mb-30" data-aos="fade-up">
								<p className="paragraph-rubik-r">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
							</div>
						</div>
						<div className="row align-items-center mt-60">
							<div className="col-lg-4 col-md-6">
								<div className="card-expert">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home5/expert.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-socials">
											<Link href="#" className="item-social">
												<svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.1875 0.8125C12.6855 0.8125 13.125 1.25195 13.125 1.7793V13C13.125 13.5273 12.6855 13.9375 12.1875 13.9375H0.908203C0.410156 13.9375 0 13.5273 0 13V1.7793C0 1.25195 0.410156 0.8125 0.908203 0.8125H12.1875ZM3.95508 12.0625V5.82227H2.02148V12.0625H3.95508ZM2.98828 4.94336C3.60352 4.94336 4.10156 4.44531 4.10156 3.83008C4.10156 3.21484 3.60352 2.6875 2.98828 2.6875C2.34375 2.6875 1.8457 3.21484 1.8457 3.83008C1.8457 4.44531 2.34375 4.94336 2.98828 4.94336ZM11.25 12.0625V8.63477C11.25 6.96484 10.8691 5.64648 8.90625 5.64648C7.96875 5.64648 7.32422 6.17383 7.06055 6.67188H7.03125V5.82227H5.18555V12.0625H7.11914V8.98633C7.11914 8.16602 7.26562 7.375 8.29102 7.375C9.28711 7.375 9.28711 8.3125 9.28711 9.01562V12.0625H11.25Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.17383 9.3125H5.97656V15.875H3.04688V9.3125H0.644531V6.61719H3.04688V4.53711C3.04688 2.19336 4.45312 0.875 6.5918 0.875C7.61719 0.875 8.70117 1.08008 8.70117 1.08008V3.39453H7.5C6.32812 3.39453 5.97656 4.09766 5.97656 4.85938V6.61719H8.58398L8.17383 9.3125Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.4473 4.32812C13.4473 4.47461 13.4473 4.5918 13.4473 4.73828C13.4473 8.81055 10.3711 13.4688 4.7168 13.4688C2.95898 13.4688 1.34766 12.9707 0 12.0918C0.234375 12.1211 0.46875 12.1504 0.732422 12.1504C2.16797 12.1504 3.48633 11.6523 4.54102 10.832C3.19336 10.8027 2.05078 9.92383 1.66992 8.69336C1.875 8.72266 2.05078 8.75195 2.25586 8.75195C2.51953 8.75195 2.8125 8.69336 3.04688 8.63477C1.64062 8.3418 0.585938 7.11133 0.585938 5.61719V5.58789C0.996094 5.82227 1.49414 5.93945 1.99219 5.96875C1.14258 5.41211 0.615234 4.47461 0.615234 3.41992C0.615234 2.83398 0.761719 2.30664 1.02539 1.86719C2.54883 3.71289 4.83398 4.94336 7.38281 5.08984C7.32422 4.85547 7.29492 4.62109 7.29492 4.38672C7.29492 2.6875 8.67188 1.31055 10.3711 1.31055C11.25 1.31055 12.041 1.66211 12.627 2.27734C13.3008 2.13086 13.9746 1.86719 14.5605 1.51562C14.3262 2.24805 13.8574 2.83398 13.2129 3.21484C13.8281 3.15625 14.4434 2.98047 14.9707 2.74609C14.5605 3.36133 14.0332 3.88867 13.4473 4.32812Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5625 4.00586C9.4082 4.00586 10.9316 5.5293 10.9316 7.375C10.9316 9.25 9.4082 10.7441 7.5625 10.7441C5.6875 10.7441 4.19336 9.25 4.19336 7.375C4.19336 5.5293 5.6875 4.00586 7.5625 4.00586ZM7.5625 9.57227C8.76367 9.57227 9.73047 8.60547 9.73047 7.375C9.73047 6.17383 8.76367 5.20703 7.5625 5.20703C6.33203 5.20703 5.36523 6.17383 5.36523 7.375C5.36523 8.60547 6.36133 9.57227 7.5625 9.57227ZM11.8398 3.88867C11.8398 3.44922 11.4883 3.09766 11.0488 3.09766C10.6094 3.09766 10.2578 3.44922 10.2578 3.88867C10.2578 4.32812 10.6094 4.67969 11.0488 4.67969C11.4883 4.67969 11.8398 4.32812 11.8398 3.88867ZM14.0664 4.67969C14.125 5.76367 14.125 9.01562 14.0664 10.0996C14.0078 11.1543 13.7734 12.0625 13.0117 12.8535C12.25 13.6152 11.3125 13.8496 10.2578 13.9082C9.17383 13.9668 5.92188 13.9668 4.83789 13.9082C3.7832 13.8496 2.875 13.6152 2.08398 12.8535C1.32227 12.0625 1.08789 11.1543 1.0293 10.0996C0.970703 9.01562 0.970703 5.76367 1.0293 4.67969C1.08789 3.625 1.32227 2.6875 2.08398 1.92578C2.875 1.16406 3.7832 0.929688 4.83789 0.871094C5.92188 0.8125 9.17383 0.8125 10.2578 0.871094C11.3125 0.929688 12.25 1.16406 13.0117 1.92578C13.7734 2.6875 14.0078 3.625 14.0664 4.67969ZM12.6602 11.2422C13.0117 10.3926 12.9238 8.3418 12.9238 7.375C12.9238 6.4375 13.0117 4.38672 12.6602 3.50781C12.4258 2.95117 11.9863 2.48242 11.4297 2.27734C10.5508 1.92578 8.5 2.01367 7.5625 2.01367C6.5957 2.01367 4.54492 1.92578 3.69531 2.27734C3.10938 2.51172 2.66992 2.95117 2.43555 3.50781C2.08398 4.38672 2.17188 6.4375 2.17188 7.375C2.17188 8.3418 2.08398 10.3926 2.43555 11.2422C2.66992 11.8281 3.10938 12.2676 3.69531 12.502C4.54492 12.8535 6.5957 12.7656 7.5625 12.7656C8.5 12.7656 10.5508 12.8535 11.4297 12.502C11.9863 12.2676 12.4551 11.8281 12.6602 11.2422Z" fill="white" />
												</svg>
											</Link>
										</div>
										<div className="card-text-info">
											<Link href="#" className="sub-heading-ag-xl neutral-1200">Robert Fox</Link>
											<p className="paragraph-rubik-r grey-800">UI-Designer</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-expert">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home5/expert2.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-socials">
											<Link href="#" className="item-social">
												<svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.1875 0.8125C12.6855 0.8125 13.125 1.25195 13.125 1.7793V13C13.125 13.5273 12.6855 13.9375 12.1875 13.9375H0.908203C0.410156 13.9375 0 13.5273 0 13V1.7793C0 1.25195 0.410156 0.8125 0.908203 0.8125H12.1875ZM3.95508 12.0625V5.82227H2.02148V12.0625H3.95508ZM2.98828 4.94336C3.60352 4.94336 4.10156 4.44531 4.10156 3.83008C4.10156 3.21484 3.60352 2.6875 2.98828 2.6875C2.34375 2.6875 1.8457 3.21484 1.8457 3.83008C1.8457 4.44531 2.34375 4.94336 2.98828 4.94336ZM11.25 12.0625V8.63477C11.25 6.96484 10.8691 5.64648 8.90625 5.64648C7.96875 5.64648 7.32422 6.17383 7.06055 6.67188H7.03125V5.82227H5.18555V12.0625H7.11914V8.98633C7.11914 8.16602 7.26562 7.375 8.29102 7.375C9.28711 7.375 9.28711 8.3125 9.28711 9.01562V12.0625H11.25Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.17383 9.3125H5.97656V15.875H3.04688V9.3125H0.644531V6.61719H3.04688V4.53711C3.04688 2.19336 4.45312 0.875 6.5918 0.875C7.61719 0.875 8.70117 1.08008 8.70117 1.08008V3.39453H7.5C6.32812 3.39453 5.97656 4.09766 5.97656 4.85938V6.61719H8.58398L8.17383 9.3125Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.4473 4.32812C13.4473 4.47461 13.4473 4.5918 13.4473 4.73828C13.4473 8.81055 10.3711 13.4688 4.7168 13.4688C2.95898 13.4688 1.34766 12.9707 0 12.0918C0.234375 12.1211 0.46875 12.1504 0.732422 12.1504C2.16797 12.1504 3.48633 11.6523 4.54102 10.832C3.19336 10.8027 2.05078 9.92383 1.66992 8.69336C1.875 8.72266 2.05078 8.75195 2.25586 8.75195C2.51953 8.75195 2.8125 8.69336 3.04688 8.63477C1.64062 8.3418 0.585938 7.11133 0.585938 5.61719V5.58789C0.996094 5.82227 1.49414 5.93945 1.99219 5.96875C1.14258 5.41211 0.615234 4.47461 0.615234 3.41992C0.615234 2.83398 0.761719 2.30664 1.02539 1.86719C2.54883 3.71289 4.83398 4.94336 7.38281 5.08984C7.32422 4.85547 7.29492 4.62109 7.29492 4.38672C7.29492 2.6875 8.67188 1.31055 10.3711 1.31055C11.25 1.31055 12.041 1.66211 12.627 2.27734C13.3008 2.13086 13.9746 1.86719 14.5605 1.51562C14.3262 2.24805 13.8574 2.83398 13.2129 3.21484C13.8281 3.15625 14.4434 2.98047 14.9707 2.74609C14.5605 3.36133 14.0332 3.88867 13.4473 4.32812Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5625 4.00586C9.4082 4.00586 10.9316 5.5293 10.9316 7.375C10.9316 9.25 9.4082 10.7441 7.5625 10.7441C5.6875 10.7441 4.19336 9.25 4.19336 7.375C4.19336 5.5293 5.6875 4.00586 7.5625 4.00586ZM7.5625 9.57227C8.76367 9.57227 9.73047 8.60547 9.73047 7.375C9.73047 6.17383 8.76367 5.20703 7.5625 5.20703C6.33203 5.20703 5.36523 6.17383 5.36523 7.375C5.36523 8.60547 6.36133 9.57227 7.5625 9.57227ZM11.8398 3.88867C11.8398 3.44922 11.4883 3.09766 11.0488 3.09766C10.6094 3.09766 10.2578 3.44922 10.2578 3.88867C10.2578 4.32812 10.6094 4.67969 11.0488 4.67969C11.4883 4.67969 11.8398 4.32812 11.8398 3.88867ZM14.0664 4.67969C14.125 5.76367 14.125 9.01562 14.0664 10.0996C14.0078 11.1543 13.7734 12.0625 13.0117 12.8535C12.25 13.6152 11.3125 13.8496 10.2578 13.9082C9.17383 13.9668 5.92188 13.9668 4.83789 13.9082C3.7832 13.8496 2.875 13.6152 2.08398 12.8535C1.32227 12.0625 1.08789 11.1543 1.0293 10.0996C0.970703 9.01562 0.970703 5.76367 1.0293 4.67969C1.08789 3.625 1.32227 2.6875 2.08398 1.92578C2.875 1.16406 3.7832 0.929688 4.83789 0.871094C5.92188 0.8125 9.17383 0.8125 10.2578 0.871094C11.3125 0.929688 12.25 1.16406 13.0117 1.92578C13.7734 2.6875 14.0078 3.625 14.0664 4.67969ZM12.6602 11.2422C13.0117 10.3926 12.9238 8.3418 12.9238 7.375C12.9238 6.4375 13.0117 4.38672 12.6602 3.50781C12.4258 2.95117 11.9863 2.48242 11.4297 2.27734C10.5508 1.92578 8.5 2.01367 7.5625 2.01367C6.5957 2.01367 4.54492 1.92578 3.69531 2.27734C3.10938 2.51172 2.66992 2.95117 2.43555 3.50781C2.08398 4.38672 2.17188 6.4375 2.17188 7.375C2.17188 8.3418 2.08398 10.3926 2.43555 11.2422C2.66992 11.8281 3.10938 12.2676 3.69531 12.502C4.54492 12.8535 6.5957 12.7656 7.5625 12.7656C8.5 12.7656 10.5508 12.8535 11.4297 12.502C11.9863 12.2676 12.4551 11.8281 12.6602 11.2422Z" fill="white" />
												</svg>
											</Link>
										</div>
										<div className="card-text-info">
											<Link href="#" className="sub-heading-ag-xl neutral-1200">Albert Flores</Link>
											<p className="paragraph-rubik-r grey-800">UI-Designer</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card-expert">
									<div className="card-image">
										<Link href="#"><img src="/assets/imgs/pages/home5/expert3.png" alt="Vatech" /></Link>
									</div>
									<div className="card-info">
										<div className="card-socials">
											<Link href="#" className="item-social">
												<svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.1875 0.8125C12.6855 0.8125 13.125 1.25195 13.125 1.7793V13C13.125 13.5273 12.6855 13.9375 12.1875 13.9375H0.908203C0.410156 13.9375 0 13.5273 0 13V1.7793C0 1.25195 0.410156 0.8125 0.908203 0.8125H12.1875ZM3.95508 12.0625V5.82227H2.02148V12.0625H3.95508ZM2.98828 4.94336C3.60352 4.94336 4.10156 4.44531 4.10156 3.83008C4.10156 3.21484 3.60352 2.6875 2.98828 2.6875C2.34375 2.6875 1.8457 3.21484 1.8457 3.83008C1.8457 4.44531 2.34375 4.94336 2.98828 4.94336ZM11.25 12.0625V8.63477C11.25 6.96484 10.8691 5.64648 8.90625 5.64648C7.96875 5.64648 7.32422 6.17383 7.06055 6.67188H7.03125V5.82227H5.18555V12.0625H7.11914V8.98633C7.11914 8.16602 7.26562 7.375 8.29102 7.375C9.28711 7.375 9.28711 8.3125 9.28711 9.01562V12.0625H11.25Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.17383 9.3125H5.97656V15.875H3.04688V9.3125H0.644531V6.61719H3.04688V4.53711C3.04688 2.19336 4.45312 0.875 6.5918 0.875C7.61719 0.875 8.70117 1.08008 8.70117 1.08008V3.39453H7.5C6.32812 3.39453 5.97656 4.09766 5.97656 4.85938V6.61719H8.58398L8.17383 9.3125Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M13.4473 4.32812C13.4473 4.47461 13.4473 4.5918 13.4473 4.73828C13.4473 8.81055 10.3711 13.4688 4.7168 13.4688C2.95898 13.4688 1.34766 12.9707 0 12.0918C0.234375 12.1211 0.46875 12.1504 0.732422 12.1504C2.16797 12.1504 3.48633 11.6523 4.54102 10.832C3.19336 10.8027 2.05078 9.92383 1.66992 8.69336C1.875 8.72266 2.05078 8.75195 2.25586 8.75195C2.51953 8.75195 2.8125 8.69336 3.04688 8.63477C1.64062 8.3418 0.585938 7.11133 0.585938 5.61719V5.58789C0.996094 5.82227 1.49414 5.93945 1.99219 5.96875C1.14258 5.41211 0.615234 4.47461 0.615234 3.41992C0.615234 2.83398 0.761719 2.30664 1.02539 1.86719C2.54883 3.71289 4.83398 4.94336 7.38281 5.08984C7.32422 4.85547 7.29492 4.62109 7.29492 4.38672C7.29492 2.6875 8.67188 1.31055 10.3711 1.31055C11.25 1.31055 12.041 1.66211 12.627 2.27734C13.3008 2.13086 13.9746 1.86719 14.5605 1.51562C14.3262 2.24805 13.8574 2.83398 13.2129 3.21484C13.8281 3.15625 14.4434 2.98047 14.9707 2.74609C14.5605 3.36133 14.0332 3.88867 13.4473 4.32812Z" fill="white" />
												</svg>
											</Link>
											<Link href="#" className="item-social">
												<svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.5625 4.00586C9.4082 4.00586 10.9316 5.5293 10.9316 7.375C10.9316 9.25 9.4082 10.7441 7.5625 10.7441C5.6875 10.7441 4.19336 9.25 4.19336 7.375C4.19336 5.5293 5.6875 4.00586 7.5625 4.00586ZM7.5625 9.57227C8.76367 9.57227 9.73047 8.60547 9.73047 7.375C9.73047 6.17383 8.76367 5.20703 7.5625 5.20703C6.33203 5.20703 5.36523 6.17383 5.36523 7.375C5.36523 8.60547 6.36133 9.57227 7.5625 9.57227ZM11.8398 3.88867C11.8398 3.44922 11.4883 3.09766 11.0488 3.09766C10.6094 3.09766 10.2578 3.44922 10.2578 3.88867C10.2578 4.32812 10.6094 4.67969 11.0488 4.67969C11.4883 4.67969 11.8398 4.32812 11.8398 3.88867ZM14.0664 4.67969C14.125 5.76367 14.125 9.01562 14.0664 10.0996C14.0078 11.1543 13.7734 12.0625 13.0117 12.8535C12.25 13.6152 11.3125 13.8496 10.2578 13.9082C9.17383 13.9668 5.92188 13.9668 4.83789 13.9082C3.7832 13.8496 2.875 13.6152 2.08398 12.8535C1.32227 12.0625 1.08789 11.1543 1.0293 10.0996C0.970703 9.01562 0.970703 5.76367 1.0293 4.67969C1.08789 3.625 1.32227 2.6875 2.08398 1.92578C2.875 1.16406 3.7832 0.929688 4.83789 0.871094C5.92188 0.8125 9.17383 0.8125 10.2578 0.871094C11.3125 0.929688 12.25 1.16406 13.0117 1.92578C13.7734 2.6875 14.0078 3.625 14.0664 4.67969ZM12.6602 11.2422C13.0117 10.3926 12.9238 8.3418 12.9238 7.375C12.9238 6.4375 13.0117 4.38672 12.6602 3.50781C12.4258 2.95117 11.9863 2.48242 11.4297 2.27734C10.5508 1.92578 8.5 2.01367 7.5625 2.01367C6.5957 2.01367 4.54492 1.92578 3.69531 2.27734C3.10938 2.51172 2.66992 2.95117 2.43555 3.50781C2.08398 4.38672 2.17188 6.4375 2.17188 7.375C2.17188 8.3418 2.08398 10.3926 2.43555 11.2422C2.66992 11.8281 3.10938 12.2676 3.69531 12.502C4.54492 12.8535 6.5957 12.7656 7.5625 12.7656C8.5 12.7656 10.5508 12.8535 11.4297 12.502C11.9863 12.2676 12.4551 11.8281 12.6602 11.2422Z" fill="white" />
												</svg>
											</Link>
										</div>
										<div className="card-text-info">
											<Link href="#" className="sub-heading-ag-xl neutral-1200">Marvin McKinney</Link>
											<p className="paragraph-rubik-r grey-800">UI-Designer</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Home 5 Section 6 */}
				<section className="box-section box-clients-5">
					<div className="bg-number" data-aos="fade-up" />
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
									<h3 className="heading-ag-3xl"><CountUp className="odometer" enableScrollSpy={true} end={10} /><span className="d-inline-block align-middle">+</span></h3>
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
						<div className="client-logos">
							<div className="item-logo">
								<img src="/assets/imgs/pages/home5/doo.svg" alt="Vatech" />
							</div>
							<div className="item-logo">
								<img src="/assets/imgs/pages/home5/instagram.svg" alt="Vatech" />
							</div>
							<div className="item-logo">
								<img src="/assets/imgs/pages/home5/invision.svg" alt="Vatech" />
							</div>
							<div className="item-logo">
								<img src="/assets/imgs/pages/home5/hellosign.svg" alt="Vatech" />
							</div>
							<div className="item-logo">
								<img src="/assets/imgs/pages/home5/chri.svg" alt="Vatech" />
							</div>
						</div>
						<div className="box-testimonials-lists mt-5">
							<div className="box-swiper">
								<Swiper {...sliderGroup2} className="swiper-container slider-group-2">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-testimonials-5">
												<div className="card-testimonials-inner">
													<div className="rating">
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													</div>
													<div className="card-author">
														<div className="author-image">
															<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
														</div>
													</div>
													<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
													<div className="card-author-info">
														<div className="author-info">
															<div>
																<h5 className="sub-heading-ag-sm">Albert Flores</h5>
																<p className="paragraph-rubik-r">Nursing Assistant</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonials-5">
												<div className="card-testimonials-inner">
													<div className="rating">
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													</div>
													<div className="card-author">
														<div className="author-image">
															<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
														</div>
													</div>
													<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
													<div className="card-author-info">
														<div className="author-info">
															<div>
																<h5 className="sub-heading-ag-sm">Jenny Wilson</h5>
																<p className="paragraph-rubik-r">Web Designer</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonials-5">
												<div className="card-testimonials-inner">
													<div className="rating">
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
														<img src="/assets/imgs/pages/home5/star.svg" alt="Vatech" />
													</div>
													<div className="card-author">
														<div className="author-image">
															<img src="/assets/imgs/pages/home5/author.png" alt="Vatech" />
														</div>
													</div>
													<div className="comment-text">Financial planners help people to gain knowledge about how toio dei invest and save their money in the most efficient way ever Manynmi people all across the country use them</div>
													<div className="card-author-info">
														<div className="author-info">
															<div>
																<h5 className="sub-heading-ag-sm">Esther Howard</h5>
																<p className="paragraph-rubik-r">Businessman</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
								<div className="swiper-pagination swiper-pagination-style-2 swiper-pagination-style-3" />
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