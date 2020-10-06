import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import QuickView from './QuickView';

const ProductDealLeft = () => {

    // quick view
    const [showInfo, setShowInfo] = useState(false);
    const quickView = () => {
        setShowInfo(true);
    }

    return (
        <div className="col-lg-4 col-md-4 hidden-sm  fix-padding-left">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="item_product_sidebar border item_product_main_relative">
                        <div className="item">
                            <div className="product-loop-1 product-loop-big product-base">
                                <div className="product-thumbnail">
                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Luxury">
                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" alt="Ghế Luxury" />
                                    </Link>
                                    <div className="hot_label">hot</div>
                                    {/* Tag countdown */}
                                    {/* End Tag countdown */}
                                    <div className="product-action clearfix hidden-xs">
                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15624050" encType="multipart/form-data">
                                            <div className="group_action">
                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-luxury" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                </Link>
                                                <input className="hidden" type="hidden" name="variantId" defaultValue={27167013} />
                                                <button className="btn btn-cart btn btn-circle left-to" title="Tùy chọn" type="button">
                                                    <i className="fa fa-cogs" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="wrap_time"><div className="time" data-time="9/28/2020 10:30:00"><span>3<p>Ngày</p></span><span>22<p>Giờ</p></span><span>35<p>Phút</p></span><span>25<p>Giây</p></span></div></div>
                                <div className="product-info product-info-bases a-center">
                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Luxury">Ghế Luxury</Link></h3>
                                    <div className="product-brand margin-bottom-10">
                                        <Link to="/search?query=vendor:Luxury" title="Luxury">Luxury</Link>
                                    </div>
                                    <div className="product-hideoff">
                                        <div className="product-hide">
                                            <div className="price-box clearfix">
                                                <div className="special-price">
                                                    <span className="price product-price">570.000₫</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showInfo ? <QuickView dataQuickView={showInfo} handleQuick={setShowInfo} /> : ''}
        </div>
    )
}

export default ProductDealLeft
