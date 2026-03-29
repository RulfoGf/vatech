"use client";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function AboutUs2() {
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
                {/*Home 7 Section 3 */}
                <section className="box-section overflow-hidden box-section box-about-us-7 box-about-us-2">
                    <div className="container" data-aos="fade-up">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-about-7" data-aos="fade-up">
                                    <div className="image-left">
                                        <div className="card-number abs-bottom">
                                            <div className="card-icon">
                                                <svg width={27} height={18} viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.1225 13.7381C18.4605 13.502 17.3801 13.486 16.9012 13.3071C16.5325 13.2112 16.1843 13.0489 15.8738 12.8282C15.7432 12.2781 15.6867 11.713 15.7057 11.1479C15.9519 10.9117 16.1514 10.6313 16.2938 10.3213C16.4367 9.78923 16.5314 9.24544 16.5769 8.69644C16.5769 8.69644 16.9668 8.86447 17.1205 8.08231C17.2507 7.4102 17.4986 7.05483 17.4339 6.55831C17.3692 6.06179 17.0911 6.18025 17.0911 6.18025C17.3927 5.48524 17.5107 4.72442 17.4339 3.97071C17.4293 3.48562 17.3249 3.00666 17.1273 2.56365C16.9296 2.12063 16.6429 1.72303 16.285 1.3956C15.927 1.06816 15.5055 0.817896 15.0467 0.660372C14.5879 0.502848 14.1016 0.441438 13.618 0.479964C13.1343 0.441414 12.6479 0.502501 12.1888 0.659446C11.7297 0.816391 11.3077 1.06586 10.9488 1.39242C10.59 1.71897 10.302 2.11568 10.1026 2.558C9.90315 3.00032 9.79661 3.47885 9.78953 3.96398C9.71347 4.71705 9.82907 5.47713 10.1256 6.17353C10.1256 6.17353 9.84833 6.05507 9.7828 6.55159C9.71727 7.0481 9.96091 7.40852 10.0945 8.08062C10.2482 8.86615 10.6381 8.69476 10.6381 8.69476C10.684 9.24369 10.7788 9.78745 10.9212 10.3196C11.0636 10.6296 11.2631 10.91 11.5093 11.1463C11.5283 11.7113 11.4718 12.2764 11.3412 12.8265C11.0315 13.0474 10.683 13.2079 10.3138 13.2995C9.84161 13.4827 8.76037 13.5062 8.09246 13.7423C7.28715 14.0441 6.5949 14.5876 6.11059 15.2982C5.62628 16.0089 5.37362 16.852 5.38724 17.7119H21.8219C21.838 16.8517 21.5871 16.0077 21.1037 15.296C20.6203 14.5843 19.9281 14.04 19.1225 13.7381Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M6.77348 10.8605C7.46749 10.8511 8.14719 10.6618 8.7461 10.311C7.83036 8.92315 8.32604 7.30422 8.13785 5.79198C8.12859 5.44791 8.04815 5.10949 7.9016 4.79805C7.75504 4.48661 7.54556 4.2089 7.28635 3.98245C7.02714 3.756 6.72382 3.5857 6.39552 3.48229C6.06722 3.37889 5.72106 3.34462 5.37886 3.38165H5.35534C5.01515 3.34933 4.67196 3.38709 4.34694 3.4926C4.02192 3.5981 3.72198 3.76911 3.46564 3.99507C3.20929 4.22102 3.00199 4.49712 2.85652 4.80633C2.71105 5.11553 2.63051 5.45127 2.61987 5.79282C2.43084 7.29918 2.95592 9.10126 2.0175 10.3119C2.61827 10.6569 3.30363 10.8269 3.99601 10.8025C4.03186 11.1342 4.01199 11.4696 3.9372 11.7947C3.73387 11.9641 3.48914 12.0763 3.22813 12.1198C2.71038 12.2319 2.19956 12.3738 1.69825 12.545C1.29659 12.7549 0.959925 13.0706 0.724644 13.4579C0.489362 13.8452 0.364407 14.2895 0.363281 14.7427H5.1075C5.53872 13.9723 6.1995 13.3556 6.99779 12.9785C7.46041 12.7846 7.9556 12.6803 8.4571 12.671C8.4571 12.671 8.68141 12.3164 7.94294 12.1803C7.55045 12.0942 7.16968 11.9613 6.80876 11.7846C6.69619 11.6586 6.77348 10.8605 6.77348 10.8605Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M20.4765 10.8605C19.7825 10.8511 19.1028 10.6618 18.5039 10.311C19.4196 8.92315 18.924 7.30422 19.1122 5.79198C19.1214 5.44791 19.2019 5.10949 19.3484 4.79805C19.495 4.48661 19.7045 4.2089 19.9637 3.98245C20.2229 3.756 20.5262 3.5857 20.8545 3.48229C21.1828 3.37889 21.5289 3.34462 21.8711 3.38165H21.8947C22.2349 3.34933 22.578 3.38709 22.9031 3.4926C23.2281 3.5981 23.528 3.76911 23.7844 3.99507C24.0407 4.22102 24.248 4.49712 24.3935 4.80633C24.539 5.11553 24.6195 5.45127 24.6301 5.79282C24.8192 7.29918 24.2941 9.10126 25.2325 10.3119C24.6317 10.6569 23.9464 10.8269 23.254 10.8025C23.2181 11.1342 23.238 11.4696 23.3128 11.7947C23.5161 11.9641 23.7609 12.0763 24.0219 12.1198C24.5396 12.2319 25.0504 12.3738 25.5518 12.545C25.9534 12.7549 26.2901 13.0706 26.5254 13.4579C26.7606 13.8452 26.8856 14.2895 26.8867 14.7427H22.1425C21.7113 13.9723 21.0505 13.3556 20.2522 12.9785C19.7896 12.7846 19.2944 12.6803 18.7929 12.671C18.7929 12.671 18.5686 12.3164 19.3071 12.1803C19.6996 12.0942 20.0803 11.9613 20.4412 11.7846C20.5538 11.6586 20.4765 10.8605 20.4765 10.8605Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="card-info">
                                                <h6>
                                                    <CountUp className="odometer" enableScrollSpy={true} end={5000} />
                                                    <span className="d-inline-block align-middle">+</span>
                                                </h6>
                                                <p>Satisfied Clients</p>
                                            </div>
                                        </div>
                                        <div className="box-image-about-big">
                                            <img src="/assets/imgs/pages/home7/icon3.png" className="icon-3" alt="Vatech" />
                                            <img src="/assets/imgs/pages/home7/about.png" alt="Vatech" />
                                        </div>
                                    </div>
                                    <div className="image-right">
                                        <div className="box-image-about-big">
                                            <img src="/assets/imgs/pages/home7/icon2.png" className="icon-2" alt="Vatech" />
                                            <img src="/assets/imgs/pages/home7/about2.png" alt="Vatech" />
                                        </div>
                                        <div className="card-experience">
                                            <h3 className="heading-ag-3xl">
                                                <CountUp className="odometer" enableScrollSpy={true} end={10} />
                                                <span className="d-inline-block align-middle">+</span>
                                            </h3>
                                            <p className="sub-heading-ag-sm">years of experiences</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30" data-aos="fade-up">
                                <div className="banner-small-title-black line-primary-1000">About us</div>
                                <h2 className="heading-ag-3xl dark-950 mb-3">
                                    Crafting Success Stories
                                    <br className="d-none d-lg-block" />
                                    One Client Time
                                </h2>
                                <p className="mb-20 paragraph-rubik-r neutral-1700">Business consulting involves providing expert advice and designers guidance tom businesses to help them improve their operations</p>
                                <ul className="list-tick">
                                    <li>
                                        <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.54297 12.2031C8.15625 12.5898 7.55859 12.5898 7.17188 12.2031L4.92188 9.95312C4.53516 9.56641 4.53516 8.96875 4.92188 8.58203C5.30859 8.19531 5.90625 8.19531 6.29297 8.58203L7.875 10.1289L11.6719 6.33203C12.0586 5.94531 12.6562 5.94531 13.043 6.33203C13.4297 6.71875 13.4297 7.31641 13.043 7.70312L8.54297 12.2031ZM18 9.25C18 14.2422 13.957 18.25 9 18.25C4.00781 18.25 0 14.2422 0 9.25C0 4.29297 4.00781 0.25 9 0.25C13.957 0.25 18 4.29297 18 9.25ZM9 1.9375C4.95703 1.9375 1.6875 5.24219 1.6875 9.25C1.6875 13.293 4.95703 16.5625 9 16.5625C13.0078 16.5625 16.3125 13.293 16.3125 9.25C16.3125 5.24219 13.0078 1.9375 9 1.9375Z" fill="currentColor" />
                                        </svg>
                                        How to Get Any Startup Idea
                                    </li>
                                    <li>
                                        <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.54297 12.2031C8.15625 12.5898 7.55859 12.5898 7.17188 12.2031L4.92188 9.95312C4.53516 9.56641 4.53516 8.96875 4.92188 8.58203C5.30859 8.19531 5.90625 8.19531 6.29297 8.58203L7.875 10.1289L11.6719 6.33203C12.0586 5.94531 12.6562 5.94531 13.043 6.33203C13.4297 6.71875 13.4297 7.31641 13.043 7.70312L8.54297 12.2031ZM18 9.25C18 14.2422 13.957 18.25 9 18.25C4.00781 18.25 0 14.2422 0 9.25C0 4.29297 4.00781 0.25 9 0.25C13.957 0.25 18 4.29297 18 9.25ZM9 1.9375C4.95703 1.9375 1.6875 5.24219 1.6875 9.25C1.6875 13.293 4.95703 16.5625 9 16.5625C13.0078 16.5625 16.3125 13.293 16.3125 9.25C16.3125 5.24219 13.0078 1.9375 9 1.9375Z" fill="currentColor" />
                                        </svg>
                                        3 Ways to Improve Your Conver
                                    </li>
                                </ul>
                                <Link href="#" className="btn btn-primary-1000 mb-3">
                                    Discover More
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="box-section overflow-hidden box-number-black">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card-number-2">
                                    <p className="paragraph-rubik-r color-white">Winning award</p>
                                    <h4 className="heading-ag-3xl stroke-text-single">200+</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-number-2">
                                    <p className="paragraph-rubik-r color-white">Happy Clients</p>
                                    <h4 className="heading-ag-3xl stroke-text-single">220+</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-number-2">
                                    <p className="paragraph-rubik-r color-white">Team Members</p>
                                    <h4 className="heading-ag-3xl stroke-text-single">100+</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-number-2">
                                    <p className="paragraph-rubik-r color-white">Complete project</p>
                                    <h4 className="heading-ag-3xl stroke-text-single">200+</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="box-section overflow-hidden ">
                    <div className="container" data-aos="fade-up">
                        <div className="row align-items-end">
                            <div className="col-lg-7 mb-30">
                                <div className="banner-small-title-black">Latest project</div>
                                <h2 className="heading-ag-3xl dark-950">
                                    Empowering Connections
                                    <br className="d-none d-lg-block" />
                                    Empowering Growth
                                </h2>
                            </div>
                            <div className="col-lg-5 mb-30">
                                <p className="mb-20 paragraph-rubik-r">We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card-project-3 card-project-6">
                                    <div className="card-image">
                                        <img src="/assets/imgs/pages/home13/project.png" alt="Vatech" />
                                    </div>
                                    <div className="card-info">
                                        <Link href="#">
                                            <h4 className="heading-ag-lg">Your Journey Our Expertise</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-image-projects">
                                    <div className="image-project-1 mb-4">
                                        <img src="/assets/imgs/pages/home13/project2.png" className="w-100" alt="Vatech" />
                                    </div>
                                    <div className="image-project-2 mb-4">
                                        <img src="/assets/imgs/pages/home13/project3.png" className="w-100" alt="Vatech" />
                                    </div>
                                    <div className="image-project-3 mb-4">
                                        <img src="/assets/imgs/pages/home13/project4.png" className="w-100" alt="Vatech" />
                                    </div>
                                    <div className="image-project-4 mb-4">
                                        <img src="/assets/imgs/pages/home13/project5.png" className="w-100" alt="Vatech" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-logos-partner box-logos-partner-5-col">
                            <div className="item-partner">
                                <img src="/assets/imgs/pages/home13/doo.svg" alt="Vatech" />
                            </div>
                            <div className="item-partner text-center">
                                <img src="/assets/imgs/pages/home13/inst.svg" alt="Vatech" />
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
                        </div>
                    </div>
                </section>
                {/*Home 7 Section 8 */}
                <section className="position-relative overflow-hidden box-section box-project-7">
                    <div className="box-project-inner">
                        <div className="container" data-aos="fade-up">
                            <div className="text-center">
                                <p className="title-line-both primary-1000 line-primary-1000">all blogs</p>
                                <h3 className="heading-3xl">
                                    Inspiring Confidence corporate
                                    <br className="d-none d-lg-block" />
                                    Delivering Solutions
                                </h3>
                            </div>
                            <div className="box-list-blogs">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card-blog-11">
                                            <div className="card-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/about/news.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="card-info">
                                                <div className="text-start mb-2">
                                                    <span className="post-date sub-heading-ag-sm d-inline-block">
                                                        <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M3.5625 1.99609H6.9375V1.05859C6.9375 0.753906 7.17188 0.496094 7.5 0.496094C7.80469 0.496094 8.0625 0.753906 8.0625 1.05859V1.99609H9C9.82031 1.99609 10.5 2.67578 10.5 3.49609V10.9961C10.5 11.8398 9.82031 12.4961 9 12.4961H1.5C0.65625 12.4961 0 11.8398 0 10.9961V3.49609C0 2.67578 0.65625 1.99609 1.5 1.99609H2.4375V1.05859C2.4375 0.753906 2.67188 0.496094 3 0.496094C3.30469 0.496094 3.5625 0.753906 3.5625 1.05859V1.99609ZM1.125 6.30859H3V4.99609H1.125V6.30859ZM1.125 7.43359V8.93359H3V7.43359H1.125ZM4.125 7.43359V8.93359H6.375V7.43359H4.125ZM7.5 7.43359V8.93359H9.375V7.43359H7.5ZM9.375 4.99609H7.5V6.30859H9.375V4.99609ZM9.375 10.0586H7.5V11.3711H9C9.1875 11.3711 9.375 11.207 9.375 10.9961V10.0586ZM6.375 10.0586H4.125V11.3711H6.375V10.0586ZM3 10.0586H1.125V10.9961C1.125 11.207 1.28906 11.3711 1.5 11.3711H3V10.0586ZM6.375 4.99609H4.125V6.30859H6.375V4.99609Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        October 19, 2026
                                                    </span>
                                                </div>
                                                <Link href="/news-details" className="heading-md">
                                                    Securing your business securing your reputation
                                                </Link>
                                                <Link href="/news-details" className="link-more button-ag-bold">
                                                    Learn More
                                                    <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.6875 7.71484L8.6875 12.7148C8.5 12.9023 8.25 12.9961 8 12.9961C7.71875 12.9961 7.46875 12.9023 7.28125 12.7148C6.875 12.3398 6.875 11.6836 7.28125 11.3086L10.5625 7.99609H1C0.4375 7.99609 0 7.55859 0 6.99609C0 6.46484 0.4375 5.99609 1 5.99609H10.5625L7.28125 2.71484C6.875 2.33984 6.875 1.68359 7.28125 1.30859C7.65625 0.902344 8.3125 0.902344 8.6875 1.30859L13.6875 6.30859C14.0938 6.68359 14.0938 7.33984 13.6875 7.71484Z" fill="currentColor" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card-blog-11">
                                            <div className="card-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/about/news2.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="card-info">
                                                <div className="text-start mb-2">
                                                    <span className="post-date sub-heading-ag-sm d-inline-block">
                                                        <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M3.5625 1.99609H6.9375V1.05859C6.9375 0.753906 7.17188 0.496094 7.5 0.496094C7.80469 0.496094 8.0625 0.753906 8.0625 1.05859V1.99609H9C9.82031 1.99609 10.5 2.67578 10.5 3.49609V10.9961C10.5 11.8398 9.82031 12.4961 9 12.4961H1.5C0.65625 12.4961 0 11.8398 0 10.9961V3.49609C0 2.67578 0.65625 1.99609 1.5 1.99609H2.4375V1.05859C2.4375 0.753906 2.67188 0.496094 3 0.496094C3.30469 0.496094 3.5625 0.753906 3.5625 1.05859V1.99609ZM1.125 6.30859H3V4.99609H1.125V6.30859ZM1.125 7.43359V8.93359H3V7.43359H1.125ZM4.125 7.43359V8.93359H6.375V7.43359H4.125ZM7.5 7.43359V8.93359H9.375V7.43359H7.5ZM9.375 4.99609H7.5V6.30859H9.375V4.99609ZM9.375 10.0586H7.5V11.3711H9C9.1875 11.3711 9.375 11.207 9.375 10.9961V10.0586ZM6.375 10.0586H4.125V11.3711H6.375V10.0586ZM3 10.0586H1.125V10.9961C1.125 11.207 1.28906 11.3711 1.5 11.3711H3V10.0586ZM6.375 4.99609H4.125V6.30859H6.375V4.99609Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        October 19, 2026
                                                    </span>
                                                </div>
                                                <Link href="/news-details" className="heading-md">
                                                    IT Solutions That Drive Innovation in Your Business
                                                </Link>
                                                <Link href="/news-details" className="link-more button-ag-bold">
                                                    Learn More
                                                    <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.6875 7.71484L8.6875 12.7148C8.5 12.9023 8.25 12.9961 8 12.9961C7.71875 12.9961 7.46875 12.9023 7.28125 12.7148C6.875 12.3398 6.875 11.6836 7.28125 11.3086L10.5625 7.99609H1C0.4375 7.99609 0 7.55859 0 6.99609C0 6.46484 0.4375 5.99609 1 5.99609H10.5625L7.28125 2.71484C6.875 2.33984 6.875 1.68359 7.28125 1.30859C7.65625 0.902344 8.3125 0.902344 8.6875 1.30859L13.6875 6.30859C14.0938 6.68359 14.0938 7.33984 13.6875 7.71484Z" fill="currentColor" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="card-blog-11">
                                            <div className="card-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/about/news3.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="card-info">
                                                <div className="text-start mb-2">
                                                    <span className="post-date sub-heading-ag-sm d-inline-block">
                                                        <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M3.5625 1.99609H6.9375V1.05859C6.9375 0.753906 7.17188 0.496094 7.5 0.496094C7.80469 0.496094 8.0625 0.753906 8.0625 1.05859V1.99609H9C9.82031 1.99609 10.5 2.67578 10.5 3.49609V10.9961C10.5 11.8398 9.82031 12.4961 9 12.4961H1.5C0.65625 12.4961 0 11.8398 0 10.9961V3.49609C0 2.67578 0.65625 1.99609 1.5 1.99609H2.4375V1.05859C2.4375 0.753906 2.67188 0.496094 3 0.496094C3.30469 0.496094 3.5625 0.753906 3.5625 1.05859V1.99609ZM1.125 6.30859H3V4.99609H1.125V6.30859ZM1.125 7.43359V8.93359H3V7.43359H1.125ZM4.125 7.43359V8.93359H6.375V7.43359H4.125ZM7.5 7.43359V8.93359H9.375V7.43359H7.5ZM9.375 4.99609H7.5V6.30859H9.375V4.99609ZM9.375 10.0586H7.5V11.3711H9C9.1875 11.3711 9.375 11.207 9.375 10.9961V10.0586ZM6.375 10.0586H4.125V11.3711H6.375V10.0586ZM3 10.0586H1.125V10.9961C1.125 11.207 1.28906 11.3711 1.5 11.3711H3V10.0586ZM6.375 4.99609H4.125V6.30859H6.375V4.99609Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        October 19, 2026
                                                    </span>
                                                </div>
                                                <Link href="/news-details" className="heading-md">
                                                    Protect Your Digital Assets: A Guide to Cybersecurity
                                                </Link>
                                                <Link href="/news-details" className="link-more button-ag-bold">
                                                    Learn More
                                                    <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.6875 7.71484L8.6875 12.7148C8.5 12.9023 8.25 12.9961 8 12.9961C7.71875 12.9961 7.46875 12.9023 7.28125 12.7148C6.875 12.3398 6.875 11.6836 7.28125 11.3086L10.5625 7.99609H1C0.4375 7.99609 0 7.55859 0 6.99609C0 6.46484 0.4375 5.99609 1 5.99609H10.5625L7.28125 2.71484C6.875 2.33984 6.875 1.68359 7.28125 1.30859C7.65625 0.902344 8.3125 0.902344 8.6875 1.30859L13.6875 6.30859C14.0938 6.68359 14.0938 7.33984 13.6875 7.71484Z" fill="currentColor" />
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
