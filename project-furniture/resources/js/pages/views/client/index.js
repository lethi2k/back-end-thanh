import React from 'react';
import SlideShow from '../../../components/client/module/SlideShow';
import ListCategory from '../../../components/client/module/ListCategories';
import BannerWidth from '../../../components/client/banner/BannerWidth';
import BannerFullWidth from '../../../components/client/banner/BannerFullWidth';
import ListNews from '../../../components/client/module/ListNews';
import ProductDealLeft from '../../../components/client/module/ProductDealLeft';
import ProductDealRight from '../../../components/client/module/ProductDealRight';
import ProductLatest from '../../../components/client/module/ProductLatest';
import ProductBestSeller from '../../../components/client/module/ProductBestSeller';

const Home = () => {
    return (
        <div className="home">
            <SlideShow />
            <ListCategory />
            <section className="awe-section-3">
                <div className="section_col_1 section_base section_base_left">
                    <div className="container">
                        <div className="row">
                            <div className="clearfix">
                                <div className="col-md-12">
                                    <div className="content_sec clearfix ">
                                        <ProductDealLeft />
                                        <ProductLatest />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="awe-section-4">
                <div className="section_2banner">
                    <div className="container">
                        <div className="row">
                            <BannerWidth />
                            <BannerWidth />
                        </div>
                    </div>
                </div>
            </section>
            <section className="awe-section-3">
                <div className="section_col_1 section_base section_base_left">
                    <div className="container">
                        <div className="row">
                            <div className="clearfix">
                                <div className="col-md-12">
                                    <div className="content_sec clearfix ">
                                        <ProductLatest />
                                        <ProductDealRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BannerFullWidth />
            <ProductBestSeller />
            <ListNews />
        </div>
    )
}

export default Home
