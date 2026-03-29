import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ProjectDetail() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* prettier-ignore */}
                {/* Blog Sidebar Section 1 */}
                <section className="box-faq-single-banner box-blog-single-banner">
                    <div className="box-faq-single-banner-inner">
                        <div className="container">
                            <h1 className="display-ag-2xl color-white">Project Detail</h1>
                            <div className="box-breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="#">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <span>Project Detail</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Project Detail Section 1 */}
                <section className="box-section box-project-detail">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-7 mb-4">
                                <img src="/assets/imgs/pages/project/detail.png" alt="Vatech" />
                            </div>
                            <div className="col-lg-5 mb-4 position-relative">
                                <div className="right-project-detail">
                                    <h2>A lifetime Insurance</h2>
                                    <p className="paragraph-rubik-r neutral-2400">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, virra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliq</p>
                                    <p className="paragraph-rubik-r neutral-2400">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non,</p>
                                    <div className="box-info-project mt-4">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="paragraph-rubik-r">Client</p>
                                                <p className="sub-heading-ag-md mb-5">Sandi leo rakiul</p>
                                                <p className="paragraph-rubik-r">Amount</p>
                                                <p className="sub-heading-ag-md">45,000$</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="paragraph-rubik-r">Category</p>
                                                <p className="sub-heading-ag-md mb-5">Monthly,Insecure</p>
                                                <p className="paragraph-rubik-r">Date</p>
                                                <p className="sub-heading-ag-md">November 19, 2026</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-detail">
                            <p>Sliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, aoreet augue mattis ferment ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non,</p>
                            <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosto, posuere lobortis non, viverra laoreet augue mis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis.</p>
                            <h4>Our Project Structure Fully Responsive</h4>
                            <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobor, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justo,</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
