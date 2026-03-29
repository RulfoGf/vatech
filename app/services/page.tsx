'use client'
import Layout from "@/components/layout/Layout"
import { sliderGroup2 } from '@/util/swiperOptions'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Services() {
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
				<section className="box-faq-single-banner box-blue-single-banner">
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
				{/* Service - Section 1 */}
				<section className="box-section box-services-page">
					<div className="container" data-aos="fade-up">
						<div className="row mt-5">
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M84.6104 58.1397L72.9541 51.421L84.6104 44.6866C84.9054 44.5147 85.1503 44.2684 85.3204 43.9723C85.4906 43.6762 85.5801 43.3406 85.5801 42.9991C85.5801 42.6576 85.4906 42.3221 85.3204 42.026C85.1503 41.7299 84.9054 41.4836 84.6104 41.3116L72.9697 34.5772L84.5479 27.8897C84.8753 27.7205 85.1467 27.46 85.3291 27.1397C85.4585 26.9182 85.5429 26.6733 85.5775 26.419C85.6122 26.1648 85.5964 25.9063 85.5311 25.6581C85.4658 25.41 85.3523 25.1772 85.197 24.9729C85.0417 24.7687 84.8476 24.5971 84.626 24.4679L44.001 1.03037C43.7031 0.861946 43.3667 0.773438 43.0244 0.773438C42.6822 0.773438 42.3458 0.861946 42.0479 1.03037L1.42287 24.4679C1.12414 24.6388 0.875871 24.8856 0.703202 25.1833C0.530533 25.481 0.439595 25.819 0.439595 26.1632C0.439595 26.5073 0.530533 26.8454 0.703202 27.1431C0.875871 27.4408 1.12414 27.6876 1.42287 27.8585L13.0635 34.5772L1.40724 41.3116C1.11218 41.4836 0.867359 41.7299 0.697202 42.026C0.527045 42.3221 0.4375 42.6576 0.4375 42.9991C0.4375 43.3406 0.527045 43.6762 0.697202 43.9723C0.867359 44.2684 1.11218 44.5147 1.40724 44.6866L13.0635 51.421L1.42287 58.1397C1.12414 58.3106 0.875871 58.5574 0.703202 58.8551C0.530533 59.1528 0.439595 59.4909 0.439595 59.835C0.439595 60.1792 0.530533 60.5173 0.703202 60.815C0.875871 61.1127 1.12414 61.3595 1.42287 61.5304L42.0479 84.9679C42.3414 85.1217 42.6697 85.1971 43.001 85.1866C43.3465 85.1839 43.6854 85.0924 43.9854 84.921L84.6104 61.4835C84.9052 61.3094 85.1495 61.0615 85.3192 60.7642C85.4889 60.4669 85.5782 60.1305 85.5782 59.7882C85.5782 59.4458 85.4889 59.1094 85.3192 58.8121C85.1495 58.5148 84.9052 58.2669 84.6104 58.0929V58.1397ZM43.001 4.96787L79.7197 26.1554L43.001 47.3585L6.28224 26.1554L43.001 4.96787ZM16.9541 36.8429L41.9541 51.3116C42.2478 51.4845 42.5821 51.5761 42.9229 51.5772C43.2683 51.5745 43.6073 51.483 43.9072 51.3116L68.9072 36.8429L79.7197 42.9991L43.001 64.2022L6.28224 42.9991L16.9541 36.8429ZM43.001 81.0304L6.28224 59.8429L16.9541 53.5929L41.9541 68.0616C42.2476 68.2348 42.5821 68.3261 42.9229 68.3261C43.2636 68.3261 43.5981 68.2348 43.8916 68.0616L68.9697 53.5929L79.6416 59.8429L43.001 81.0304Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">UI/UX DESIGNING</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M98.785 52.8019L74.8592 39.7882C74.2772 39.4716 73.5749 39.4716 72.9926 39.7882L63.0209 46.8931L50.0002 52.2943L38.8674 48L27.0077 39.7882C26.4256 39.4716 25.7233 39.4716 25.1411 39.7882L1.21528 52.8019C0.568988 53.1546 0.190668 53.8334 0.195356 54.5294V80.5449C0.195356 81.2605 0.586762 81.9187 1.21528 82.2605L25.1364 95.2716C25.7237 95.5939 26.4442 95.5835 27.0123 95.2716L50.0002 82.7681L72.9879 95.2716C73.5709 95.5916 74.2918 95.5857 74.8639 95.2716L98.785 82.2605C99.4135 81.9187 99.8049 81.2605 99.8049 80.5449V54.5292C99.8096 53.8369 99.4293 53.1523 98.785 52.8019ZM24.1213 90.2728L4.1018 79.3837V57.4601L24.1213 65.8976V90.2728ZM26.0745 62.482L6.64711 54.2939L26.0745 43.7273L37.4352 48L45.5018 54.2941L26.0745 62.482ZM48.0471 79.3839L28.0276 90.2728V65.8978L48.0471 57.4603V79.3839ZM71.9729 90.2728L51.9534 79.3837V57.4601L71.9729 65.8976V90.2728ZM73.926 62.482L54.4987 54.2939L63.4768 47.4791L73.926 43.7273L93.3534 54.2941L73.926 62.482ZM95.8987 79.3837L75.8791 90.2726V65.8976L95.8987 57.4601V79.3837Z" fill="currentColor" />
											<path d="M74.8631 13.7394L50.9374 0.725732C50.3553 0.409131 49.653 0.409131 49.0707 0.725732L25.145 13.7394C24.5 14.0912 24.1204 14.7734 24.125 15.4669V41.4824C24.125 42.198 24.5164 42.8562 25.145 43.198C50.6862 57.0839 49.1217 56.2789 49.4944 56.3796C50.0098 56.5193 50.5299 56.4353 50.942 56.2091L74.8631 43.198C75.4916 42.8562 75.883 42.198 75.883 41.4824V15.4667C75.8877 14.7791 75.51 14.0906 74.8631 13.7394ZM48.051 51.2103L28.0315 40.3214V18.3976L48.051 26.8351V51.2103ZM50.0041 23.4195L30.5768 15.2314L50.0041 4.66479L69.4315 15.2316L50.0041 23.4195ZM71.9768 40.3212L51.9573 51.2103V26.8353L71.9768 18.3978V40.3212Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">PRODUCT DESIGN</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M89.0909 0C83.0745 0 78.1818 4.89273 78.1818 10.9091C78.1818 12.7909 78.66 14.5618 79.5018 16.1091L61.6309 33.98C59.1673 32.0618 56.0836 30.9091 52.7273 30.9091C49.3709 30.9091 46.2873 32.0618 43.8218 33.9782L29.8782 20.0345C30.5182 18.9527 30.9091 17.7091 30.9091 16.3636C30.9091 12.3527 27.6473 9.09091 23.6364 9.09091C19.6255 9.09091 16.3636 12.3527 16.3636 16.3636C16.3636 20.3745 19.6255 23.6364 23.6364 23.6364C24.9818 23.6364 26.2255 23.2455 27.3073 22.6055L41.2509 36.5491C39.3345 39.0145 38.1818 42.0982 38.1818 45.4545C38.1818 48.8109 39.3345 51.8945 41.2509 54.3582L18.2255 77.3855C16.2873 75.6273 13.7255 74.5455 10.9091 74.5455C4.89273 74.5455 0 79.4382 0 85.4546C0 91.4709 4.89273 96.3636 10.9091 96.3636C16.9255 96.3636 21.8182 91.4709 21.8182 85.4546C21.8182 83.5727 21.34 81.8018 20.4982 80.2545L43.8236 56.9291C45.8345 58.4927 48.26 59.54 50.9109 59.8727V78.3455C45.76 79.2145 41.82 83.6945 41.82 89.0909C41.82 95.1073 46.7127 100 52.7291 100C58.7455 100 63.6382 95.1073 63.6382 89.0909C63.6382 83.6964 59.6982 79.2164 54.5473 78.3455V59.8727C57.1982 59.54 59.6236 58.4927 61.6345 56.9291L75.5782 70.8727C74.9364 71.9564 74.5455 73.2 74.5455 74.5455C74.5455 78.5564 77.8073 81.8182 81.8182 81.8182C85.8291 81.8182 89.0909 78.5564 89.0909 74.5455C89.0909 70.5345 85.8291 67.2727 81.8182 67.2727C80.4727 67.2727 79.2291 67.6636 78.1473 68.3036L64.2036 54.36C66.12 51.8945 67.2727 48.8109 67.2727 45.4545C67.2727 42.0982 66.12 39.0145 64.2036 36.5509L81.7764 18.9782C83.7127 20.7364 86.2746 21.8182 89.0909 21.8182C95.1073 21.8182 100 16.9255 100 10.9091C100 4.89273 95.1073 0 89.0909 0ZM20 16.3636C20 14.3582 21.6309 12.7273 23.6364 12.7273C25.6418 12.7273 27.2727 14.3582 27.2727 16.3636C27.2727 18.3691 25.6418 20 23.6364 20C21.6309 20 20 18.3691 20 16.3636ZM10.9091 92.7273C6.89818 92.7273 3.63636 89.4655 3.63636 85.4546C3.63636 81.4436 6.89818 78.1818 10.9091 78.1818C14.92 78.1818 18.1818 81.4436 18.1818 85.4546C18.1818 89.4655 14.92 92.7273 10.9091 92.7273ZM60 89.0909C60 93.1018 56.7382 96.3636 52.7273 96.3636C48.7164 96.3636 45.4545 93.1018 45.4545 89.0909C45.4545 85.08 48.7164 81.8182 52.7273 81.8182C56.7382 81.8182 60 85.08 60 89.0909ZM52.7273 56.3636C46.7109 56.3636 41.8182 51.4709 41.8182 45.4545C41.8182 39.4382 46.7109 34.5455 52.7273 34.5455C58.7436 34.5455 63.6364 39.4382 63.6364 45.4545C63.6364 51.4709 58.7436 56.3636 52.7273 56.3636ZM85.4546 74.5455C85.4546 76.5509 83.8236 78.1818 81.8182 78.1818C79.8127 78.1818 78.1818 76.5509 78.1818 74.5455C78.1818 72.54 79.8127 70.9091 81.8182 70.9091C83.8236 70.9091 85.4546 72.54 85.4546 74.5455ZM89.0909 18.1818C85.08 18.1818 81.8182 14.92 81.8182 10.9091C81.8182 6.89818 85.08 3.63636 89.0909 3.63636C93.1018 3.63636 96.3636 6.89818 96.3636 10.9091C96.3636 14.92 93.1018 18.1818 89.0909 18.1818Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">DIGITAL MARKETING</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M98.785 52.8019L74.8592 39.7882C74.2772 39.4716 73.5749 39.4716 72.9926 39.7882L63.0209 46.8931L50.0002 52.2943L38.8674 48L27.0077 39.7882C26.4256 39.4716 25.7233 39.4716 25.1411 39.7882L1.21528 52.8019C0.568988 53.1546 0.190668 53.8334 0.195356 54.5294V80.5449C0.195356 81.2605 0.586762 81.9187 1.21528 82.2605L25.1364 95.2716C25.7237 95.5939 26.4442 95.5835 27.0123 95.2716L50.0002 82.7681L72.9879 95.2716C73.5709 95.5916 74.2918 95.5857 74.8639 95.2716L98.785 82.2605C99.4135 81.9187 99.8049 81.2605 99.8049 80.5449V54.5292C99.8096 53.8369 99.4293 53.1523 98.785 52.8019ZM24.1213 90.2728L4.1018 79.3837V57.4601L24.1213 65.8976V90.2728ZM26.0745 62.482L6.64711 54.2939L26.0745 43.7273L37.4352 48L45.5018 54.2941L26.0745 62.482ZM48.0471 79.3839L28.0276 90.2728V65.8978L48.0471 57.4603V79.3839ZM71.9729 90.2728L51.9534 79.3837V57.4601L71.9729 65.8976V90.2728ZM73.926 62.482L54.4987 54.2939L63.4768 47.4791L73.926 43.7273L93.3534 54.2941L73.926 62.482ZM95.8987 79.3837L75.8791 90.2726V65.8976L95.8987 57.4601V79.3837Z" fill="currentColor" />
											<path d="M74.8631 13.7394L50.9374 0.725732C50.3553 0.409131 49.653 0.409131 49.0707 0.725732L25.145 13.7394C24.5 14.0912 24.1204 14.7734 24.125 15.4669V41.4824C24.125 42.198 24.5164 42.8562 25.145 43.198C50.6862 57.0839 49.1217 56.2789 49.4944 56.3796C50.0098 56.5193 50.5299 56.4353 50.942 56.2091L74.8631 43.198C75.4916 42.8562 75.883 42.198 75.883 41.4824V15.4667C75.8877 14.7791 75.51 14.0906 74.8631 13.7394ZM48.051 51.2103L28.0315 40.3214V18.3976L48.051 26.8351V51.2103ZM50.0041 23.4195L30.5768 15.2314L50.0041 4.66479L69.4315 15.2316L50.0041 23.4195ZM71.9768 40.3212L51.9573 51.2103V26.8353L71.9768 18.3978V40.3212Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">SOFTWARE DEVELOP</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M89.0909 0C83.0745 0 78.1818 4.89273 78.1818 10.9091C78.1818 12.7909 78.66 14.5618 79.5018 16.1091L61.6309 33.98C59.1673 32.0618 56.0836 30.9091 52.7273 30.9091C49.3709 30.9091 46.2873 32.0618 43.8218 33.9782L29.8782 20.0345C30.5182 18.9527 30.9091 17.7091 30.9091 16.3636C30.9091 12.3527 27.6473 9.09091 23.6364 9.09091C19.6255 9.09091 16.3636 12.3527 16.3636 16.3636C16.3636 20.3745 19.6255 23.6364 23.6364 23.6364C24.9818 23.6364 26.2255 23.2455 27.3073 22.6055L41.2509 36.5491C39.3345 39.0145 38.1818 42.0982 38.1818 45.4545C38.1818 48.8109 39.3345 51.8945 41.2509 54.3582L18.2255 77.3855C16.2873 75.6273 13.7255 74.5455 10.9091 74.5455C4.89273 74.5455 0 79.4382 0 85.4546C0 91.4709 4.89273 96.3636 10.9091 96.3636C16.9255 96.3636 21.8182 91.4709 21.8182 85.4546C21.8182 83.5727 21.34 81.8018 20.4982 80.2545L43.8236 56.9291C45.8345 58.4927 48.26 59.54 50.9109 59.8727V78.3455C45.76 79.2145 41.82 83.6945 41.82 89.0909C41.82 95.1073 46.7127 100 52.7291 100C58.7455 100 63.6382 95.1073 63.6382 89.0909C63.6382 83.6964 59.6982 79.2164 54.5473 78.3455V59.8727C57.1982 59.54 59.6236 58.4927 61.6345 56.9291L75.5782 70.8727C74.9364 71.9564 74.5455 73.2 74.5455 74.5455C74.5455 78.5564 77.8073 81.8182 81.8182 81.8182C85.8291 81.8182 89.0909 78.5564 89.0909 74.5455C89.0909 70.5345 85.8291 67.2727 81.8182 67.2727C80.4727 67.2727 79.2291 67.6636 78.1473 68.3036L64.2036 54.36C66.12 51.8945 67.2727 48.8109 67.2727 45.4545C67.2727 42.0982 66.12 39.0145 64.2036 36.5509L81.7764 18.9782C83.7127 20.7364 86.2746 21.8182 89.0909 21.8182C95.1073 21.8182 100 16.9255 100 10.9091C100 4.89273 95.1073 0 89.0909 0ZM20 16.3636C20 14.3582 21.6309 12.7273 23.6364 12.7273C25.6418 12.7273 27.2727 14.3582 27.2727 16.3636C27.2727 18.3691 25.6418 20 23.6364 20C21.6309 20 20 18.3691 20 16.3636ZM10.9091 92.7273C6.89818 92.7273 3.63636 89.4655 3.63636 85.4546C3.63636 81.4436 6.89818 78.1818 10.9091 78.1818C14.92 78.1818 18.1818 81.4436 18.1818 85.4546C18.1818 89.4655 14.92 92.7273 10.9091 92.7273ZM60 89.0909C60 93.1018 56.7382 96.3636 52.7273 96.3636C48.7164 96.3636 45.4545 93.1018 45.4545 89.0909C45.4545 85.08 48.7164 81.8182 52.7273 81.8182C56.7382 81.8182 60 85.08 60 89.0909ZM52.7273 56.3636C46.7109 56.3636 41.8182 51.4709 41.8182 45.4545C41.8182 39.4382 46.7109 34.5455 52.7273 34.5455C58.7436 34.5455 63.6364 39.4382 63.6364 45.4545C63.6364 51.4709 58.7436 56.3636 52.7273 56.3636ZM85.4546 74.5455C85.4546 76.5509 83.8236 78.1818 81.8182 78.1818C79.8127 78.1818 78.1818 76.5509 78.1818 74.5455C78.1818 72.54 79.8127 70.9091 81.8182 70.9091C83.8236 70.9091 85.4546 72.54 85.4546 74.5455ZM89.0909 18.1818C85.08 18.1818 81.8182 14.92 81.8182 10.9091C81.8182 6.89818 85.08 3.63636 89.0909 3.63636C93.1018 3.63636 96.3636 6.89818 96.3636 10.9091C96.3636 14.92 93.1018 18.1818 89.0909 18.1818Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">ANALYSIS MARKETING</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-4">
								<div className="card-service-6">
									<div className="card-image">
										<svg width={66} height={66} viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M84.6104 58.1397L72.9541 51.421L84.6104 44.6866C84.9054 44.5147 85.1503 44.2684 85.3204 43.9723C85.4906 43.6762 85.5801 43.3406 85.5801 42.9991C85.5801 42.6576 85.4906 42.3221 85.3204 42.026C85.1503 41.7299 84.9054 41.4836 84.6104 41.3116L72.9697 34.5772L84.5479 27.8897C84.8753 27.7205 85.1467 27.46 85.3291 27.1397C85.4585 26.9182 85.5429 26.6733 85.5775 26.419C85.6122 26.1648 85.5964 25.9063 85.5311 25.6581C85.4658 25.41 85.3523 25.1772 85.197 24.9729C85.0417 24.7687 84.8476 24.5971 84.626 24.4679L44.001 1.03037C43.7031 0.861946 43.3667 0.773438 43.0244 0.773438C42.6822 0.773438 42.3458 0.861946 42.0479 1.03037L1.42287 24.4679C1.12414 24.6388 0.875871 24.8856 0.703202 25.1833C0.530533 25.481 0.439595 25.819 0.439595 26.1632C0.439595 26.5073 0.530533 26.8454 0.703202 27.1431C0.875871 27.4408 1.12414 27.6876 1.42287 27.8585L13.0635 34.5772L1.40724 41.3116C1.11218 41.4836 0.867359 41.7299 0.697202 42.026C0.527045 42.3221 0.4375 42.6576 0.4375 42.9991C0.4375 43.3406 0.527045 43.6762 0.697202 43.9723C0.867359 44.2684 1.11218 44.5147 1.40724 44.6866L13.0635 51.421L1.42287 58.1397C1.12414 58.3106 0.875871 58.5574 0.703202 58.8551C0.530533 59.1528 0.439595 59.4909 0.439595 59.835C0.439595 60.1792 0.530533 60.5173 0.703202 60.815C0.875871 61.1127 1.12414 61.3595 1.42287 61.5304L42.0479 84.9679C42.3414 85.1217 42.6697 85.1971 43.001 85.1866C43.3465 85.1839 43.6854 85.0924 43.9854 84.921L84.6104 61.4835C84.9052 61.3094 85.1495 61.0615 85.3192 60.7642C85.4889 60.4669 85.5782 60.1305 85.5782 59.7882C85.5782 59.4458 85.4889 59.1094 85.3192 58.8121C85.1495 58.5148 84.9052 58.2669 84.6104 58.0929V58.1397ZM43.001 4.96787L79.7197 26.1554L43.001 47.3585L6.28224 26.1554L43.001 4.96787ZM16.9541 36.8429L41.9541 51.3116C42.2478 51.4845 42.5821 51.5761 42.9229 51.5772C43.2683 51.5745 43.6073 51.483 43.9072 51.3116L68.9072 36.8429L79.7197 42.9991L43.001 64.2022L6.28224 42.9991L16.9541 36.8429ZM43.001 81.0304L6.28224 59.8429L16.9541 53.5929L41.9541 68.0616C42.2476 68.2348 42.5821 68.3261 42.9229 68.3261C43.2636 68.3261 43.5981 68.2348 43.8916 68.0616L68.9697 53.5929L79.6416 59.8429L43.001 81.0304Z" fill="currentColor" />
										</svg>
									</div>
									<div className="card-info">
										<h3 className="heading-ag-xl dark-950">PROGRAM ANALYSIS</h3>
										<p className="paragraph-rubik-r dark-950-70">nulla pariatu Ut enim ad minima veniam, quis nostrum veniam</p>
										<Link href="#" className="readmore sub-heading-ag-md">Read More
											<svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Home 11 Section 7 */}
				<section className="position-relative overflow-hidden box-section box-new-models">
					<div className="container">
						<div className="block-new-models wow img-custom-anim-left">
							<div className="new-models-left">
								<h2 className="display-ag-5xl color-white">Our New Models Consulting Services Programs <span className="heading-3xl-regular text-uppercase">Enrolled your Next Project</span></h2>
							</div>
							<div className="new-models-right">
								<Link href="#" className="btn btn-primary-square bdrd-10">Get started</Link>
							</div>
						</div>
					</div>
				</section>
				{/* Faq Section 2 */}
				<section className="position-relative overflow-hidden box-section box-faq-single-2 faq-blue">
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
				{/*Home 11 Section 9 */}
				<section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-11">
					<div className="box-latest-blog-11-inner">
						<div className="container">
							<div className="row position-relative align-items-end">
								<div className="col-lg-7 mb-4 text-center text-lg-start">
									<p className="sub-heading-ag-sm text-uppercase secondery-300 mb-3">
										Testimonial
										<svg className="ms-2" width={61} height={8} viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="currentColor" />
										</svg>
									</p>
									<h3 className="heading-3xl secondery-500">
										Our Latest Trending<br className="d-none d-lg-block" />
										Blogs &amp; News
									</h3>
								</div>
								<div className="col-lg-5 mb-4 text-center text-lg-start">
									<p className="paragraph-rubik-r dark-950">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Ut enim ad minima veniam</p>
								</div>
							</div>
							<div className="box-testimonials-lists mt-5">
								<div className="box-swiper position-relative mt-60 pb-3">
									<Swiper {...sliderGroup2} className="swiper-container slider-group-2">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="card-blog card-blog-2 card-blog-10">
													<div className="card-image">
														<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news2.png" alt="Vatech" /></Link>
														<span className="card-date">Business Consulting</span>
													</div>
													<div className="card-info">
														<div className="card-meta">
															<span className="comment">Comments</span>
															<span className="by-user">By Admin</span>
														</div>
														<div className="card-title">
															<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency Blog</Link>
															<Link href="#" className="btn btn-border-950">Read More
																<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-blog card-blog-2 card-blog-10">
													<div className="card-image">
														<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news.png" alt="Vatech" /></Link>
														<span className="card-date">Insurance Consulting</span>
													</div>
													<div className="card-info">
														<div className="card-meta">
															<span className="comment">Comments</span>
															<span className="by-user">By Admin</span>
														</div>
														<div className="card-title">
															<Link href="#" className="link-title heading-ag-lg">Breaking Down Complex Issues in Our Consulting Agency Blog</Link>
															<Link href="#" className="btn btn-border-950">Read More
																<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-blog card-blog-2 card-blog-10">
													<div className="card-image">
														<Link href="#"><img className="wow img-custom-anim-top" src="/assets/imgs/pages/home11/news2.png" alt="Vatech" /></Link>
														<span className="card-date">Business Consulting</span>
													</div>
													<div className="card-info">
														<div className="card-meta">
															<span className="comment">Comments</span>
															<span className="by-user">By Admin</span>
														</div>
														<div className="card-title">
															<Link href="#" className="link-title heading-ag-lg">Exclusive Updates and Analysis in Our Consulting Agency Blog</Link>
															<Link href="#" className="btn btn-border-950">Read More
																<svg width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M16 13.9922C16 13.2502 16.733 12.1422 17.475 11.2122C18.429 10.0122 19.569 8.96519 20.876 8.16619C21.856 7.56719 23.044 6.99219 24 6.99219M24 6.99219C23.044 6.99219 21.855 6.41719 20.876 5.81819C19.569 5.01819 18.429 3.97119 17.475 2.77319C16.733 1.84219 16 0.732187 16 -0.00781285M24 6.99219L3.0598e-07 6.99219" stroke="currentColor" strokeWidth={2} />
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
								<div className="swiper-pagination swiper-pagination-style-2" />
							</div>
						</div>
					</div>
				</section>
				<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />

			</Layout >
		</>
	)
}