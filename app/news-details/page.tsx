"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderGroup7 } from "@/util/swiperOptions";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function NewsDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* prettier-ignore */}
                {/* Blog Sidebar Section 1 */}
                <section className="box-faq-single-banner box-blog-single-banner">
                    <div className="box-faq-single-banner-inner">
                        <div className="container">
                            <h1 className="display-ag-2xl color-white">Blog With Sidebar</h1>
                            <div className="box-breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="#">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <span>Blog With Sidebar</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Section 2 */}
                <section className="box-section box-contact-section-2">
                    <div className="container" data-aos="fade-up">
                        <div className="blog-main-content">
                            <div className="blog-content-left">
                                <div className="blog-detail">
                                    <img src="/assets/imgs/pages/blog/detail.png" alt="Vatech" />
                                    <p>Architecture design involves many different aspect, such as spatial planning, materials selection, construction techniques, and environmental considerations. Architects must consider the practical requirements of a building, such as its intended use, structural integrity, and safety, as well as its aesthetic qualities, such as form, color, and texture.</p>
                                    <h6>Now let’s set another scene — one that’s a bit less overwhelming.</h6>
                                    <p>A workday as organized as the second one is actually possible. &amp; there’s one major thing that’ll get you from chaos to smooth sailing in your design workflow: project management. Here are seven ways to stay organized and on top of your projects.</p>
                                    <p>Thanks to our friends at Height for sponsoring this blog post!</p>
                                    <p>In addition to designing buildings, architects may also be involved in urban planning, landscape architecture, and interior design. They may work in a variety of settings, including architectural firms, construction companies, government agencies, and academic institutions. Architects are professionals who specialize in designing buildings and other physical structures. They work with clients to understand their needs and preferences, and then use their expertise to create a design.</p>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <img src="/assets/imgs/pages/blog/detail2.jpg" alt="Vatech" />
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="heading-ag-lg">Tip #1: Record the process for repeat tasks.</h3>
                                            <p>A workday as organized as the second one is actually possible. &amp; there’s one major thing that’ll get you from chaos to smooth sailing in your design workflow: project management. Here are seven ways to stay organized.</p>
                                        </div>
                                    </div>
                                    <p>In addition to designing buildings, architects may also be involved in urban planning, architecture, and interior design. They may work in a variety of settings, including architectural firms, construction companies, government agencies, and academic institutions. Architects are professionals who specialize in designing buildings and other physical structures. They work with clients to understand their needs and preferences, and then use their expertise to create a design.</p>
                                </div>
                                <div className="box-pagination d-flex align-items-center justify-content-between">
                                    <div className="page-left">
                                        <Link href="#">
                                            <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width={29} height={29} rx="14.5" fill="white" stroke="#E4E4E4" />
                                                <path d="M12.0469 19.0156L8.10938 15.0781C8.02734 14.9961 8 14.8867 8 14.75C8 14.6406 8.02734 14.5312 8.10938 14.4492L12.0469 10.5117C12.2109 10.3477 12.5117 10.3477 12.6758 10.5117C12.8398 10.6758 12.8398 10.9766 12.6758 11.1406L9.47656 14.3125H21.5625C21.7812 14.3125 22 14.5312 22 14.75C22 14.9961 21.7812 15.1875 21.5625 15.1875H9.47656L12.6758 18.3867C12.8398 18.5508 12.8398 18.8516 12.6758 19.0156C12.5117 19.1797 12.2109 19.1797 12.0469 19.0156Z" fill="#222222" />
                                            </svg>
                                            Prev Post
                                        </Link>
                                    </div>
                                    <div className="page-right">
                                        <Link href="#">
                                            Next Post
                                            <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width={29} height={29} rx="14.5" fill="white" stroke="#E4E4E4" />
                                                <path d="M17.9258 10.5117L21.8633 14.4492C21.9453 14.5312 22 14.6406 22 14.75C22 14.832 21.9453 14.9688 21.8633 15.0508L17.9258 18.9883C17.7617 19.1523 17.4609 19.1523 17.2969 18.9883C17.1328 18.8242 17.1328 18.5508 17.2969 18.3594L20.4961 15.1875H8.4375C8.19141 15.1875 8 14.9688 8 14.75C8 14.5312 8.19141 14.3125 8.4375 14.3125H20.4961L17.2969 11.1406C17.1328 10.9766 17.1328 10.6758 17.2969 10.5117C17.4609 10.3477 17.7617 10.3477 17.9258 10.5117Z" fill="#222222" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="box-feedbacks">
                                    <h4 className="paragraph-rubik-md-b mb-4">
                                        User Feedbacks <span className="gray-1500">(06)</span>
                                    </h4>
                                    <ul className="list-feedbacks">
                                        <li>
                                            <div className="item-feedback">
                                                <div className="image-feedback">
                                                    <img src="/assets/imgs/pages/blog/author.png" alt="Vatech" />
                                                </div>
                                                <div className="info-feedback">
                                                    <div className="name-user">
                                                        Tromas H. Hendson <span>June 9, 2026</span>
                                                    </div>
                                                    <div className="paragraph-rubik-r-sm neutral-2300 comment-text">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</div>
                                                    <Link href="#" className="reply">
                                                        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.5" y="0.5" width={29} height={29} rx="14.5" fill="white" stroke="#E4E4E4" />
                                                            <path d="M22 18.6875V19.5625C22 19.8086 21.7812 20 21.5625 20C21.3164 20 21.125 19.8086 21.125 19.5625V18.7148C21.125 16.5547 19.3477 14.8047 17.1875 14.8047H9.64062L13.9609 18.4141C14.1523 18.5781 14.1523 18.8516 14.0156 19.043C13.9336 19.0703 13.7969 19.125 13.6875 19.125C13.5781 19.125 13.4688 19.0977 13.3867 19.043L8.13672 14.6953C8.05469 14.5859 8 14.4492 8 14.3125C8 14.1758 8.05469 14.0391 8.13672 13.957L13.3867 9.60938C13.5781 9.47266 13.8516 9.47266 14.0156 9.66406C14.1523 9.85547 14.1523 10.1289 13.9609 10.293L9.64062 13.875H17.1875C19.8398 13.875 22 16.0352 22 18.6875Z" fill="currentColor" />
                                                        </svg>
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <ul className="list-feedbacks">
                                                <li>
                                                    <div className="item-feedback">
                                                        <div className="image-feedback">
                                                            <img src="/assets/imgs/pages/blog/author2.png" alt="Vatech" />
                                                        </div>
                                                        <div className="info-feedback">
                                                            <div className="name-user">
                                                                Rosalina D. <span>June 10, 2026</span>
                                                            </div>
                                                            <div className="paragraph-rubik-r-sm neutral-2300 comment-text">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</div>
                                                            <Link href="#" className="reply">
                                                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect x="0.5" y="0.5" width={29} height={29} rx="14.5" fill="white" stroke="#E4E4E4" />
                                                                    <path d="M22 18.6875V19.5625C22 19.8086 21.7812 20 21.5625 20C21.3164 20 21.125 19.8086 21.125 19.5625V18.7148C21.125 16.5547 19.3477 14.8047 17.1875 14.8047H9.64062L13.9609 18.4141C14.1523 18.5781 14.1523 18.8516 14.0156 19.043C13.9336 19.0703 13.7969 19.125 13.6875 19.125C13.5781 19.125 13.4688 19.0977 13.3867 19.043L8.13672 14.6953C8.05469 14.5859 8 14.4492 8 14.3125C8 14.1758 8.05469 14.0391 8.13672 13.957L13.3867 9.60938C13.5781 9.47266 13.8516 9.47266 14.0156 9.66406C14.1523 9.85547 14.1523 10.1289 13.9609 10.293L9.64062 13.875H17.1875C19.8398 13.875 22 16.0352 22 18.6875Z" fill="currentColor" />
                                                                </svg>
                                                                Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-feedbacks">
                                        <li>
                                            <div className="item-feedback">
                                                <div className="image-feedback">
                                                    <img src="/assets/imgs/pages/blog/author3.png" alt="Vatech" />
                                                </div>
                                                <div className="info-feedback">
                                                    <div className="name-user">
                                                        Miranda H. Halim <span>June 9, 2026</span>
                                                    </div>
                                                    <div className="paragraph-rubik-r-sm neutral-2300 comment-text">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</div>
                                                    <Link href="#" className="reply">
                                                        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.5" y="0.5" width={29} height={29} rx="14.5" fill="white" stroke="#E4E4E4" />
                                                            <path d="M22 18.6875V19.5625C22 19.8086 21.7812 20 21.5625 20C21.3164 20 21.125 19.8086 21.125 19.5625V18.7148C21.125 16.5547 19.3477 14.8047 17.1875 14.8047H9.64062L13.9609 18.4141C14.1523 18.5781 14.1523 18.8516 14.0156 19.043C13.9336 19.0703 13.7969 19.125 13.6875 19.125C13.5781 19.125 13.4688 19.0977 13.3867 19.043L8.13672 14.6953C8.05469 14.5859 8 14.4492 8 14.3125C8 14.1758 8.05469 14.0391 8.13672 13.957L13.3867 9.60938C13.5781 9.47266 13.8516 9.47266 14.0156 9.66406C14.1523 9.85547 14.1523 10.1289 13.9609 10.293L9.64062 13.875H17.1875C19.8398 13.875 22 16.0352 22 18.6875Z" fill="currentColor" />
                                                        </svg>
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-form-feedback">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="title-form-left mb-4">
                                            <h4 className="paragraph-rubik-md-b">Add Feedback &amp; Reviews</h4>
                                        </div>
                                        <div className="title-form-right mb-4">
                                            <img src="/assets/imgs/pages/blog/star.png" alt="Vatech" />
                                        </div>
                                    </div>
                                    <div className="form-feedback">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Your name" rows={5} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button className="btn btn-black-rounded" type="submit">
                                                            Submit Comment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content-right">
                                <div className="sidebar-border border-10 bdr-5 p-4 mb-4">
                                    <div className="form-search-sidebar">
                                        <form action="#" method="get">
                                            <input type="text" className="form-control" placeholder="Enter your keywords..." />
                                            <button type="submit" className="btn btn-search">
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5781 16.8594C19.1055 17.4219 19.1055 18.3008 18.5781 18.8633C18.0156 19.3906 17.1367 19.3906 16.5742 18.8633L12.3906 14.6445C10.9492 15.5938 9.19141 16.0859 7.29297 15.8398C4.05859 15.3828 1.45703 12.7461 1.03516 9.54688C0.4375 4.76562 4.48047 0.722656 9.26172 1.32031C12.4609 1.74219 15.0977 4.34375 15.5547 7.57812C15.8008 9.47656 15.3086 11.2344 14.3594 12.6406L18.5781 16.8594ZM3.77734 8.5625C3.77734 11.0586 5.78125 13.0625 8.27734 13.0625C10.7383 13.0625 12.7773 11.0586 12.7773 8.5625C12.7773 6.10156 10.7383 4.0625 8.27734 4.0625C5.78125 4.0625 3.77734 6.10156 3.77734 8.5625Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-border border-10 bdr-5 p-4 mb-4">
                                    <h4 className="sub-heading-ag-xl mb-2">Recent post</h4>
                                    <ul className="recent-news-list-md">
                                        <li>
                                            <div className="news-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/blog/recent.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="news-info">
                                                <div className="news-postdate">
                                                    <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <span className="paragraph-rubik-r-sm">August 17, 2026</span>
                                                </div>
                                                <Link href="/news-details" className="sub-heading-ag-lg news-link">
                                                    A quick solutions for daily problem
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="news-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/blog/recent2.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="news-info">
                                                <div className="news-postdate">
                                                    <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <span className="paragraph-rubik-r-sm">August 17, 2026</span>
                                                </div>
                                                <Link href="/news-details" className="sub-heading-ag-lg news-link">
                                                    Podcasting operational change any...
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="news-image">
                                                <Link href="/news-details">
                                                    <img src="/assets/imgs/pages/blog/recent3.png" alt="Vatech" />
                                                </Link>
                                            </div>
                                            <div className="news-info">
                                                <div className="news-postdate">
                                                    <svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <span className="paragraph-rubik-r-sm">August 17, 2026</span>
                                                </div>
                                                <Link href="/news-details" className="sub-heading-ag-lg news-link">
                                                    Capitalize on low Idea hanging fruit
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-border border-10 bdr-5 p-4 mb-4">
                                    <h4 className="sub-heading-ag-xl mb-2">Categories</h4>
                                    <div className="content-sidebar">
                                        <ul>
                                            <li>
                                                <Link href="/news-grid-sidebar">
                                                    &gt; Agency News <span>(10)</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news-grid-sidebar">
                                                    &gt; Digital Marketing <span>(18)</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news-grid-sidebar">
                                                    &gt; Information Technology <span>(15)</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news-grid-sidebar">
                                                    &gt; New Ideas <span>(13)</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news-grid-sidebar">
                                                    &gt; Marketing &amp; Branding <span>(12)</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-border border-10 bdr-5 p-4 mb-4">
                                    <h4 className="sub-heading-ag-xl mb-3">Tags</h4>
                                    <div className="content-sidebar">
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Design
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Development
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Graphic
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            UI/UX
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Apps
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Web
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Agency
                                        </Link>
                                        <Link href="/news-grid-sidebar" className="btn btn-tag me-2 mb-2">
                                            Digital
                                        </Link>
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
            </Layout>
        </>
    );
}
