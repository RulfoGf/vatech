'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { sliderGroup7 } from '@/util/swiperOptions'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceDetail3() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>

				{/* prettier-ignore */}
				{/* Blog Sidebar Section 1 */}
				<section className="box-faq-single-banner box-linear-single-banner">
					<div className="box-faq-single-banner-inner">
						<div className="container">
							<h1 className="display-ag-2xl color-white">Services Details</h1>
							<div className="box-breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="#">Home</Link>
									</li>
									<li className="breadcrumb-item">
										<span>Services Details</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="box-section overflow-hidden section-service-detail-linear">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-8">
								<div className="service-detail-2 service-detail-3">
									<img src="/assets/imgs/pages/services/img3.png" alt="Vatech" />
									<h5>Modified roofing beautiful wooden house with big windows</h5>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somes form, by injected humour, or randomised words which don't look even slightlcy believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
									<div className="row">
										<div className="col-lg-6">
											<div className="box-image-cover">
												<div className="image-cover-1">
													<img src="/assets/imgs/pages/services/img4.png" alt="Vatech" />
												</div>
												<div className="image-cover-2">
													<img src="/assets/imgs/pages/services/img5.png" alt="Vatech" />
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<h2 className="text-25-poppins theme-heading-2 mb-4">Our Service Process</h2>
											<div className="card-finance card-finance-2">
												<div className="card-icon">
													<img src="/assets/imgs/pages/services/icon-finance.png" alt="Vatech" />
												</div>
												<div className="card-info">
													<h4 className="sub-heading-ag-xl">Creative Analysis</h4>
													<p className="paragraph-rubik-r">Creative analysis is important. It is common for marketers</p>
												</div>
											</div>
											<div className="card-finance card-finance-2">
												<div className="card-icon">
													<img src="/assets/imgs/pages/services/icon-finance-2.png" alt="Vatech" />
												</div>
												<div className="card-info">
													<h4 className="sub-heading-ag-xl">Design &amp; Scratches</h4>
													<p className="paragraph-rubik-r">Creative analysis is important. It is common for marketers</p>
												</div>
											</div>
											<div className="card-finance card-finance-2">
												<div className="card-icon">
													<img src="/assets/imgs/pages/services/icon-finance-3.png" alt="Vatech" />
												</div>
												<div className="card-info">
													<h4 className="sub-heading-ag-xl">Development &amp; Delivery</h4>
													<p className="paragraph-rubik-r">Creative analysis is important. It is common for marketers</p>
												</div>
											</div>
										</div>
									</div>
									<h4>We Hope You Find What You are Looking for</h4>
									<p>There are many variations of passages of Lorem Ipsum available, but the majorty have suffered alteration in as some form by injected humour, or randomised words which don't look even slightly believable. If you are going a to use as passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
									<div className="row">
										<div className="col-lg-6">
											<h3>Our Service Benefits</h3>
											<p>There are many variations of passages of Lorem by injected humour, or randomised words whic Lorem Ipsum.</p>
											<ul>
												<li>In id diam nec nisi congue tincidunt</li>
												<li>Vestibulum tincidunt arcu vel nisl</li>
												<li>Provide the best roof services</li>
												<li>Sed tristique lorem non tesque</li>
											</ul>
										</div>
										<div className="col-lg-6">
											<div className="box-image-cover-2">
												<div className="image-cover-2-1">
													<img src="/assets/imgs/pages/services/img6.png" alt="Vatech" />
												</div>
												<div className="image-cover-2-2">
													<img src="/assets/imgs/pages/services/img7.png" alt="Vatech" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="block-menu-left mb-30">
									<h4 className="sub-heading-ag-xl title-line-bottom mb-20">Our All Service</h4>
									<ul>
										<li>
											<Link href="#">
												<span>business Analysis</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
										<li>
											<Link href="#">
												<span>Tax Strategy</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
										<li>
											<Link href="#">
												<span>Financial Advisory</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
										<li>
											<Link href="#">
												<span>business Growth</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
										<li>
											<Link href="#">
												<span>Innovation Idea</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
										<li>
											<Link href="#">
												<span>Market Research</span>
												<svg width={21} height={12} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20.2742 6.67971H0.724078C0.323572 6.67971 0 6.37442 0 5.99653C0 5.61864 0.323572 5.31335 0.724078 5.31335H18.5251L14.1308 1.16728C13.848 0.900413 13.848 0.467019 14.1308 0.200151C14.4137 -0.0667171 14.873 -0.0667171 15.1558 0.200151L20.7878 5.51403C20.996 5.71045 21.0571 6.00293 20.9439 6.25913C20.8308 6.51319 20.5661 6.67971 20.2742 6.67971Z" fill="currentColor" />
													<path d="M14.6354 12C14.4499 12 14.2643 11.9338 14.124 11.7993C13.8412 11.5324 13.8412 11.0991 14.124 10.8322L19.7628 5.5119C20.0456 5.24503 20.505 5.24503 20.7878 5.5119C21.0706 5.77877 21.0706 6.21216 20.7878 6.47903L15.1491 11.7993C15.0065 11.9338 14.821 12 14.6354 12Z" fill="currentColor" />
												</svg>
											</Link>
										</li>
									</ul>
								</div>
								<div className="sidebar-brochure">
									<h4 className="sub-heading-ag-xl title-line-bottom color-white">Get a Free Quote</h4>
									<div className="form-quote mt-4">
										<form className="form" action="#">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Your Name" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="E-mail Address" />
											</div>
											<div className="form-group">
												<textarea className="form-control" rows={4} placeholder="Type Your Message" />
											</div>
											<div className="form-group">
												<button type="submit" className="btn btn-primary-home-rounded">Contact Us</button>
											</div>
										</form>
									</div>
								</div>
								<div className="block-menu-left mb-30">
									<h4 className="sub-heading-ag-xl title-line-bottom mb-20">Our Brochures Download</h4>
									<div className="box-download-brochures-2-col">
										<div className="item-brochure-download">
											<div className="item-brochure-download-inner">
												<div className="item-icon">
													<svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={25} cy={25} r={25} fill="white" />
														<path d="M21.781 16.9C22.6896 14.6742 24.2109 13.1428 26.4672 12.3873C31.5823 10.672 36.8301 14.8989 36.2175 20.2488C36.1869 20.555 36.1665 20.8103 36.4319 21.0757C38.1165 22.8012 38.5964 24.8329 37.7285 27.0791C36.8709 29.3048 35.1455 30.4789 32.7768 30.6525C31.7967 30.7239 30.8063 30.6831 29.816 30.6729C29.2034 30.6627 28.8155 30.2951 28.8052 29.754C28.795 29.2027 29.1626 28.8249 29.7854 28.8147C30.6736 28.7943 31.5517 28.8147 32.4399 28.8045C33.9407 28.7841 35.1046 28.1307 35.8091 26.8034C36.4727 25.5476 36.4013 24.2714 35.6458 23.0666C35.4314 22.7297 35.1557 22.3928 34.829 22.1682C34.2368 21.7598 34.1041 21.2799 34.247 20.5857C34.8392 17.8291 33.2261 15.052 30.5511 14.1638C27.4269 13.1224 24.0986 15.001 23.3533 18.2272C23.3328 18.3089 23.3226 18.4008 23.3022 18.4825C23.0776 19.3503 22.414 19.5545 21.6686 19.0644C21.3011 18.8194 20.8519 18.605 20.4231 18.5642C19.4736 18.4825 18.6772 19.2278 18.5445 20.2079C18.422 21.0962 18.2586 21.2493 17.3601 21.3514C15.4509 21.5556 14.1339 22.8012 13.8888 24.6491C13.6336 26.6298 15.1344 28.5799 17.1355 28.7432C18.3913 28.8453 19.6471 28.7841 20.9131 28.8045C21.3521 28.8045 21.8014 28.7943 22.2404 28.8147C22.8121 28.8453 23.2001 29.2231 23.2103 29.7336C23.2205 30.2543 22.8019 30.6729 22.2098 30.6831C21.0561 30.7035 19.8922 30.7137 18.7385 30.6831C17.9217 30.6627 17.0947 30.6729 16.3085 30.4993C13.7765 29.9276 12.0103 27.6712 12 25.1086C11.9898 22.5153 13.7153 20.2692 16.2269 19.6464C16.6046 19.5545 16.8088 19.4013 16.9518 19.0134C17.5848 17.2981 19.4838 16.3282 21.2603 16.7672C21.4134 16.8081 21.5768 16.8489 21.781 16.9Z" fill="url(#paint0_linear_4249_18795)" />
														<path d="M25.072 34.9408C25.072 34.6141 25.072 34.4304 25.072 34.2466C25.072 30.0504 25.072 25.844 25.072 21.6478C25.072 21.4334 25.0822 21.1986 25.1536 20.9944C25.3068 20.5554 25.6641 20.3512 26.1133 20.4022C26.5626 20.4533 26.8587 20.7289 26.9199 21.1986C26.9403 21.3823 26.9403 21.5763 26.9403 21.7601C26.9403 25.9257 26.9403 30.0912 26.9403 34.2568C26.9403 34.4406 26.9403 34.6141 26.9403 34.9102C27.1547 34.7162 27.2773 34.6141 27.3896 34.4916C28.2472 33.6442 29.0946 32.7764 29.9522 31.9392C30.3912 31.5104 30.9221 31.49 31.3101 31.8779C31.6981 32.2557 31.7083 32.807 31.2795 33.2358C29.7582 34.7673 28.237 36.2987 26.6953 37.82C26.2461 38.2692 25.756 38.259 25.2966 37.8098C23.7753 36.2987 22.2643 34.7877 20.7532 33.2665C20.3244 32.8376 20.304 32.2863 20.6818 31.8984C21.0697 31.49 21.6211 31.5002 22.0805 31.9494C23.0504 32.9091 24.0101 33.879 25.072 34.9408Z" fill="url(#paint1_linear_4249_18795)" />
														<defs>
															<linearGradient id="paint0_linear_4249_18795" x1="38.1488" y1="21.3519" x2={12} y2="21.3519" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
															<linearGradient id="paint1_linear_4249_18795" x1="31.5995" y1="29.2738" x2="20.4141" y2="29.2738" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
														</defs>
													</svg>
												</div>
												<div className="item-info">
													<Link href="#">Service Details.pdf<br />65 KB</Link>
												</div>
											</div>
										</div>
										<div className="item-brochure-download">
											<div className="item-brochure-download-inner">
												<div className="item-icon">
													<svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
														<circle cx={25} cy={25} r={25} fill="white" />
														<path d="M15.0466 24.2533C15.0466 23.3221 15.0466 22.4216 15.0466 21.5211C15.0466 19.321 15.0363 17.121 15.0466 14.9209C15.0568 13.253 16.3052 12.0045 17.9629 12.0045C21.3705 11.9943 24.778 12.0045 28.1958 12.0045C29.0247 12.0045 29.7307 12.2911 30.314 12.8743C31.4294 13.9795 32.5345 15.0949 33.6397 16.2C34.2229 16.7833 34.4992 17.4996 34.4992 18.3182C34.4992 20.109 34.4992 21.8997 34.4992 23.6905C34.4992 23.8747 34.4992 24.0589 34.4992 24.2635C34.663 24.2942 34.796 24.3249 34.9188 24.3454C35.8807 24.5398 36.5151 25.2561 36.5253 26.2487C36.5458 28.3976 36.5458 30.5465 36.5253 32.6954C36.5151 33.8005 35.7886 34.4964 34.489 34.6499C34.489 34.8852 34.4992 35.141 34.489 35.3866C34.4378 36.9318 33.2099 38.1802 31.6647 38.1904C27.0804 38.2109 22.4961 38.2109 17.9118 38.1904C16.3359 38.1904 15.0977 36.942 15.0568 35.3662C15.0466 35.1308 15.0568 34.8955 15.0568 34.6703C13.5321 34.394 13 33.7596 13 32.2554C13 30.4135 13 28.5715 13 26.7296C13 25.164 13.4605 24.591 15.0466 24.2533ZM16.5815 24.2533C22.0663 24.2533 27.5 24.2533 32.9131 24.2533C32.9131 22.2681 32.9131 20.3136 32.9131 18.3387C31.941 18.3387 30.9996 18.3489 30.0684 18.3387C29.0451 18.3182 28.3698 17.6736 28.3084 16.6605C28.2777 16.1898 28.2981 15.7088 28.2981 15.2279C28.2981 14.6753 28.2981 14.1227 28.2981 13.5804C28.1651 13.5599 28.1139 13.5395 28.0628 13.5395C24.7064 13.5395 21.35 13.5292 17.9834 13.5395C17.1341 13.5395 16.5815 14.1125 16.5815 14.9618C16.5713 16.2205 16.5815 17.4894 16.5815 18.748C16.5815 20.5694 16.5815 22.3909 16.5815 24.2533ZM24.7064 33.0842C27.899 33.0842 31.0815 33.0842 34.2741 33.0842C34.9085 33.0842 34.9904 33.0024 34.9904 32.3782C34.9904 30.4339 34.9904 28.4897 34.9904 26.5454C34.9904 25.9417 34.8881 25.8291 34.2741 25.8291C27.9297 25.8291 21.5956 25.8291 15.2512 25.8291C14.6475 25.8291 14.5349 25.9417 14.5349 26.5454C14.5349 28.4692 14.5349 30.393 14.5349 32.327C14.5349 33.0126 14.6066 33.0842 15.3024 33.0842C18.4336 33.0842 21.5751 33.0842 24.7064 33.0842ZM16.602 34.6396C16.4996 36.1643 16.9601 36.6555 18.4132 36.6555C22.6905 36.6555 26.9678 36.6555 31.2554 36.6555C32.5652 36.6555 33.128 35.9597 32.8722 34.6396C27.4693 34.6396 22.0561 34.6396 16.602 34.6396ZM29.8331 14.6651C29.8331 15.3098 29.8228 15.893 29.8433 16.4661C29.8433 16.5786 29.9865 16.7833 30.0582 16.7833C30.6824 16.814 31.3168 16.7935 31.9308 16.7935C31.235 16.0875 30.5698 15.4121 29.8331 14.6651Z" fill="url(#paint0_linear_4249_18805)" />
														<path d="M22.1986 29.5128C22.1986 29.8914 22.219 30.2598 22.1986 30.6384C22.1474 31.6617 21.5948 32.2552 20.5818 32.3371C20.0087 32.3882 19.4255 32.3678 18.8422 32.3575C18.5045 32.3473 18.3203 32.1734 18.3203 31.805C18.3305 30.2496 18.3305 28.7044 18.3203 27.149C18.3203 26.7806 18.5045 26.6169 18.8524 26.6067C19.4459 26.6067 20.0497 26.5862 20.6432 26.6271C21.5641 26.6988 22.1167 27.282 22.1883 28.2235C22.219 28.6533 22.1883 29.083 22.1986 29.5128C22.1883 29.5128 22.1883 29.5128 22.1986 29.5128ZM19.579 31.2933C19.8143 31.2933 19.9985 31.2933 20.1827 31.2933C20.6841 31.3036 20.9502 31.058 20.9604 30.5566C20.9706 29.8403 20.9809 29.1342 20.9604 28.4179C20.9399 27.8858 20.725 27.6914 20.2032 27.6709C20.0087 27.6607 19.8041 27.6709 19.5892 27.6709C19.579 28.8886 19.579 30.0552 19.579 31.2933Z" fill="url(#paint1_linear_4249_18805)" />
														<path d="M26.8256 29.626C26.7949 30.0557 26.7846 30.5776 26.713 31.0995C26.6414 31.6521 26.3139 32.1023 25.7818 32.2046C25.1985 32.3172 24.5641 32.3479 23.9911 32.2251C23.2748 32.0819 22.9576 31.4781 22.9371 30.772C22.9064 29.9227 22.9064 29.0632 22.9371 28.2138C22.978 27.2212 23.6329 26.6482 24.6869 26.6073C25.8944 26.5561 26.6004 27.0268 26.7437 28.0399C26.8153 28.5413 26.7949 29.0325 26.8256 29.626ZM24.1548 29.4725C24.1548 29.8818 24.1446 30.2911 24.165 30.7004C24.1855 31.0995 24.4106 31.3246 24.8097 31.3349C25.1985 31.3451 25.4953 31.1711 25.5158 30.7618C25.5465 29.933 25.5465 29.0939 25.5158 28.265C25.5055 27.8557 25.219 27.6613 24.8302 27.6715C24.4004 27.6817 24.1753 27.9171 24.1548 28.3469C24.1446 28.7255 24.1548 29.0939 24.1548 29.4725Z" fill="url(#paint2_linear_4249_18805)" />
														<path d="M27.5215 29.5035C27.5215 29.2272 27.5215 28.9611 27.5215 28.6848C27.5317 26.9248 28.9438 26.055 30.5299 26.8429C31.0416 27.0987 31.3485 27.4978 31.3792 28.0811C31.3997 28.4188 31.3281 28.7053 30.9188 28.7462C30.5606 28.7769 30.2127 28.7667 30.1411 28.3062C30.0797 27.8457 29.7932 27.6513 29.3634 27.6922C28.8927 27.7332 28.7494 28.0606 28.7494 28.4802C28.7494 29.176 28.7494 29.8821 28.7494 30.5779C28.7494 31.0077 28.9131 31.3044 29.3838 31.3454C29.8239 31.3761 30.0285 31.1612 30.1206 30.7416C30.2229 30.2505 30.4685 30.1174 30.9699 30.2198C31.4202 30.3119 31.3792 30.6495 31.3485 30.977C31.2974 31.4886 31.0416 31.8775 30.5913 32.1231C29.8852 32.5017 29.1485 32.5222 28.4219 32.2152C27.8284 31.9594 27.5624 31.4579 27.5215 30.844C27.4908 30.404 27.5215 29.9537 27.5215 29.5137C27.5215 29.5035 27.5215 29.5035 27.5215 29.5035Z" fill="url(#paint3_linear_4249_18805)" />
														<defs>
															<linearGradient id="paint0_linear_4249_18805" x1="36.5373" y1="25.1038" x2={13} y2="25.1038" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
															<linearGradient id="paint1_linear_4249_18805" x1="22.2071" y1="29.4862" x2="18.3203" y2="29.4862" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
															<linearGradient id="paint2_linear_4249_18805" x1="26.825" y1="29.454" x2="22.9141" y2="29.454" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
															<linearGradient id="paint3_linear_4249_18805" x1="31.3818" y1="29.4896" x2="27.5078" y2="29.4896" gradientUnits="userSpaceOnUse">
																<stop stopColor="#BD16D8" />
																<stop offset="0.0001" stopColor="#9E3DDE" />
																<stop offset="0.9998" stopColor="#4AA4F0" />
																<stop offset="0.9999" stopColor="#15E6FB" />
																<stop offset={1} stopColor="#00FFFF" />
															</linearGradient>
														</defs>
													</svg>
												</div>
												<div className="item-info">
													<Link href="#">Service Details.pdf<br />65 KB</Link>
												</div>
											</div>
										</div>
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