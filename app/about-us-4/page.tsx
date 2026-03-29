"use client";
import CircleText from "@/components/elements/CircleText";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function AboutUs4() {
    const [isAccordion, setIsAccordion] = useState(1);

    const handleAccordion = (key: any) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* prettier-ignore */}
                {/* Blog Sidebar Section 1 */}
                <section className="box-faq-single-banner box-blog-single-banner">
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
                {/*Home 8 Section 2 */}
                <section className="position-relative overflow-hidden box-about-us-8 style-green-about-3">
                    <div className="container" data-aos="fade-up">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                                <div className="box-image-about-8">
                                    <img src="/assets/imgs/pages/home8/img-about.png" alt="Vatech" />
                                    <div className="image-circle">
                                        <div className="position-relative bg-dark-950 border-linear-01 icon_220 icon-shape rounded-circle">
                                            <svg width={62} height={61} viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M49.1017 38.1349C47.8531 36.7421 47.1256 33.6429 46.7116 30.8653C46.1722 27.286 46.1787 23.7353 46.8616 20.4179C47.3739 17.9306 48.2491 15.1992 49.7321 13.8697M49.7321 13.8697C48.2491 15.1992 45.4371 15.7733 42.9104 16.0103C39.5367 16.3262 36.0064 15.9462 32.5105 15.024C29.7928 14.3082 26.7878 13.244 25.5425 11.8549M49.7321 13.8697L12.5021 47.2452" stroke="#0055FF" strokeWidth="3.5" />
                                            </svg>
                                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                                <CircleText text="Best - Consulting - Agency -" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="banner-small-title-black sub-heading-ag-sm color-white line-gradient-01">About us</div>
                                <h1 className="heading-ag-3xl color-white mb-20">Tangible Outcomes: Discover Our Consulting Approach</h1>
                                <p className="paragraph-rubik-r color-white desc-banner mb-60">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor alteraciones en alguna manera, ya sea porque</p>
                                <div className="box-progress box-progress-gradient box-progress-gradient-2">
                                    <div className="item-progress mb-70">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "80%" }} />
                                        </div>
                                    </div>
                                    <div className="item-progress mb-30">
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "90%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link href="#" className="btn btn-linear-03">
                                        About more
                                        <img src="/assets/imgs/pages/home8/arrow-right.png" alt="Vatech" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Home 12 Section 9 */}
                <section className="position-relative box-section box-faqs-12 style-green">
                    <div className="container" data-aos="fade-up">
                        <div className="row position-relative">
                            <div className="col-lg-6 mb-4">
                                <div className="position-relative d-inline-block w-100">
                                    <div className="image-faq-1">
                                        <img className="wow img-custom-anim-left" src="/assets/imgs/pages/home12/faq2.png" alt="Vatech" />
                                    </div>
                                    <div className="image-faq-2">
                                        <img className="wow img-custom-anim-right" src="/assets/imgs/pages/home12/faq.png" alt="Vatech" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Some Faq</p>
                                <h3 className="heading-3xl secondery-500 mb-40">
                                    Construction at your service A<br className="d-none d-lg-block" />
                                    passion precision pride
                                </h3>
                                <div className="block-faqs">
                                    <div className="accordion" id="accordionFAQ">
                                        <div className="accordion-item wow fadeInUp">
                                            <h5 className="accordion-header" onClick={() => handleAccordion(1)} id="headingOne">
                                                <button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <p>What the Cost of Services Help desk or Support?</p>
                                                </button>
                                            </h5>
                                            <div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                                <div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp">
                                            <h5 className="accordion-header" onClick={() => handleAccordion(2)} id="headingTwo">
                                                <button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <p>What Do you Services For Digital Agency?</p>
                                                </button>
                                            </h5>
                                            <div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                                <div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp">
                                            <h5 className="accordion-header" onClick={() => handleAccordion(3)} id="headingThree">
                                                <button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button collapsed text-heading-5"} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <p>What types of Scale Help Desk?</p>
                                                </button>
                                            </h5>
                                            <div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                                <div className="accordion-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About us 3 Section 1 */}
                <section className="box-section overflow-hidden box-best-team style-no-bg p-0">
                    <div className="container" data-aos="fade-up">
                        <div className="row align-items-end">
                            <div className="col-lg-7 mb-30">
                                <div className="banner-small-title-black line-primary-1000">Best team</div>
                                <h2 className="heading-ag-3xl dark-950">
                                    Empowering Connections <br className="d-none d-lg-block" />
                                    Empowering Growth
                                </h2>
                            </div>
                            <div className="col-lg-5 mb-30">
                                <p className="mb-20 paragraph-rubik-r neutral-1700">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card-best-team">
                                    <div className="card-image">
                                        <Link href="#">
                                            <img src="/assets/imgs/pages/home7/team.png" alt="Vatech" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-info-left">
                                            <Link href="#" className="heading-md">
                                                Robert Fox
                                            </Link>
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
                                                    <path
                                                        d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card-best-team">
                                    <div className="card-image">
                                        <Link href="#">
                                            <img src="/assets/imgs/pages/home7/team2.png" alt="Vatech" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-info-left">
                                            <Link href="#" className="heading-md">
                                                Robert Fox
                                            </Link>
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
                                                    <path
                                                        d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card-best-team">
                                    <div className="card-image">
                                        <Link href="#">
                                            <img src="/assets/imgs/pages/home7/team3.png" alt="Vatech" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-info-left">
                                            <Link href="#" className="heading-md">
                                                Robert Fox
                                            </Link>
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
                                                    <path
                                                        d="M9.99983 4.53199C6.98441 4.53199 4.53125 6.98511 4.53125 10.0006C4.53125 13.016 6.98437 15.4692 9.99983 15.4692C13.0153 15.4692 15.4684 13.016 15.4684 10.0006C15.4684 6.98511 13.0153 4.53199 9.99983 4.53199ZM9.99983 14.2967C7.63109 14.2967 5.70375 12.3695 5.70375 10.0006C5.70375 7.63183 7.63109 5.70449 9.99983 5.70449C12.3688 5.70449 14.2959 7.63183 14.2959 10.0006C14.2959 12.3695 12.3688 14.2967 9.99983 14.2967ZM15.5992 2.58984C14.7081 2.58984 13.9833 3.3148 13.9833 4.20574C13.9833 5.09687 14.7081 5.82179 15.5992 5.82179C16.4903 5.82179 17.2152 5.09687 17.2152 4.20578C17.2152 3.31469 16.4903 2.58984 15.5992 2.58984ZM15.5992 4.64918C15.3547 4.64918 15.1558 4.45019 15.1558 4.20574C15.1558 3.96117 15.3547 3.76234 15.5992 3.76234C15.8438 3.76234 16.0428 3.96117 16.0428 4.20574C16.0428 4.45019 15.8438 4.64918 15.5992 4.64918Z"
                                                        fill="currentColor"
                                                    />
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
                {/*Home 11 Section 9 */}
                <section className="position-relative overflow-hidden box-latest-blog-3 box-latest-blog-12">
                    <div className="container" data-aos="fade-up">
                        <div className="text-center">
                            <p className="sub-heading-ag-sm dark-950 text-uppercase text-line-up-down black letter-space-4 mb-3">Some Faq</p>
                            <h3 className="heading-3xl secondery-500">
                                Explore Our Latest Trending
                                <br className="d-none d-lg-block" />
                                Blogs &amp; News
                            </h3>
                        </div>
                        <div className="box-news-lists mt-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-blog card-blog-12">
                                        <div className="card-image">
                                            <Link href="#">
                                                <img src="/assets/imgs/pages/home12/news.png" alt="Vatech" />
                                            </Link>
                                            <span className="card-date">
                                                <span className="heading-ag-3xl">22</span>
                                                <span className="paragraph-rubik-r">FEB,2026</span>
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <div className="card-title">
                                                <Link href="#" className="link-title heading-ag-lg">
                                                    Our Commitment ,user friendly interfaces, and a focus
                                                </Link>
                                                <Link href="#" className="link-readmore">
                                                    Read More
                                                    <svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-blog card-blog-12">
                                        <div className="card-image">
                                            <Link href="#">
                                                <img src="/assets/imgs/pages/home12/news2.png" alt="Vatech" />
                                            </Link>
                                            <span className="card-date">
                                                <span className="heading-ag-3xl">22</span>
                                                <span className="paragraph-rubik-r">FEB,2026</span>
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <div className="card-title">
                                                <Link href="#" className="link-title heading-ag-lg">
                                                    Navigating Insights from Our Consulting Experts
                                                </Link>
                                                <Link href="#" className="link-readmore">
                                                    Read More
                                                    <svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-blog card-blog-12">
                                        <div className="card-image">
                                            <Link href="#">
                                                <img src="/assets/imgs/pages/home12/news3.png" alt="Vatech" />
                                            </Link>
                                            <span className="card-date">
                                                <span className="heading-ag-3xl">22</span>
                                                <span className="paragraph-rubik-r">FEB,2026</span>
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <div className="card-title">
                                                <Link href="#" className="link-title heading-ag-lg">
                                                    Exclusive Updates and Analysis in Our Consulting Agency
                                                </Link>
                                                <Link href="#" className="link-readmore">
                                                    Read More
                                                    <svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 12C10 11.364 10.4581 10.4143 10.9219 9.61714C11.5181 8.58857 12.2306 7.69114 13.0475 7.00629C13.66 6.49286 14.4025 6 15 6M15 6C14.4025 6 13.6594 5.50714 13.0475 4.99371C12.2306 4.308 11.5181 3.41057 10.9219 2.38371C10.4581 1.58571 10 0.634286 10 7.35117e-07M15 6L-7.51011e-07 6" stroke="currentColor" strokeWidth="1.5" />
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
            </Layout>
        </>
    );
}
