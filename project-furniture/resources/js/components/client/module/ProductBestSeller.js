import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import QuickView from './QuickView';

const ProductBestSeller = () => {

    // quick view
    const [showInfo, setShowInfo] = useState(false);
    const quickView = () => {
        setShowInfo(true);
    }

    return (
        <section className="awe-section-7">
            <div className="section_pro_new section_base">
                <div className="container">
                    <div className="row row-noGutter-2">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="heading1">
                                <h2 className="title-head" title="Sản phẩm mới về"><Link to="san-pham-noi-bat">Sản phẩm mới về</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="content_sec clearfix">
                                <div className="prd_sec">
                                    <div className="owl_product_item_content owl-carousel not-dot2 owl-loaded owl-drag" data-dot="false" data-nav="false" data-lg-items={5} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30}>
                                        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '1404px' }}><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Luxury">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" alt="Ghế Luxury" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15624050" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-luxury" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input className="hidden" type="hidden" name="variantId" defaultValue={27167013} />
                                                                    <button className="btn btn-cart btn btn-circle left-to btn_tuychon" title="Tùy chọn" type="button">
                                                                        <i className="fa fa-cogs" aria-hidden="true" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Luxury">Ghế Luxury</Link></h3>
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
                                        </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Woody Pinky">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/ghe-hong-cheo-30f7d63900384e489ee1e06c11186f3d-master.jpg?v=1566961050973" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/ghe-hong-cheo-30f7d63900384e489ee1e06c11186f3d-master.jpg?v=1566961050973" alt="Ghế Woody Pinky" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623971" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-woody-pinky" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input type="hidden" name="variantId" defaultValue={27166782} />
                                                                    <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                        <i className="fas fa-dolly" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Woody Pinky">Ghế Woody Pinky</Link></h3>
                                                        <div className="product-hideoff">
                                                            <div className="product-hide">
                                                                <div className="price-box clearfix">
                                                                    <div className="special-price">
                                                                        <span className="price product-price">1.250.000₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Woody">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/g-2-master.jpg?v=1566961002770" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/g-2-master.jpg?v=1566961002770" alt="Ghế Woody" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623967" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-woody" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input type="hidden" name="variantId" defaultValue={27166778} />
                                                                    <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                        <i className="fas fa-dolly" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Woody">Ghế Woody</Link></h3>
                                                        <div className="product-hideoff">
                                                            <div className="product-hide">
                                                                <div className="price-box clearfix">
                                                                    <div className="special-price">
                                                                        <span className="price product-price">900.000₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Euro 02">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/profile-ghebee-den-xeo-56ae996c8c7b4fb0826bc671eb5742d9-master.png?v=1566960921607" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/profile-ghebee-den-xeo-56ae996c8c7b4fb0826bc671eb5742d9-master.png?v=1566960921607" alt="Ghế Euro 02" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623961" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-euro-02" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input type="hidden" name="variantId" defaultValue={27166770} />
                                                                    <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                        <i className="fas fa-dolly" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Euro 02">Ghế Euro 02</Link></h3>
                                                        <div className="product-hideoff">
                                                            <div className="product-hide">
                                                                <div className="price-box clearfix">
                                                                    <div className="special-price">
                                                                        <span className="price product-price">750.000₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Euro">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-e75ada50bdb54ea99d0db5af778c40bb-master.jpg?v=1566960755693" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-e75ada50bdb54ea99d0db5af778c40bb-master.jpg?v=1566960755693" alt="Ghế Euro" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623949" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ghe-euro" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input type="hidden" name="variantId" defaultValue={27166755} />
                                                                    <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                        <i className="fas fa-dolly" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Euro">Ghế Euro</Link></h3>
                                                        <div className="product-hideoff">
                                                            <div className="product-hide">
                                                                <div className="price-box clearfix">
                                                                    <div className="special-price">
                                                                        <span className="price product-price">960.000₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                            <div className="owl_item_product product-col">
                                                <div className="product-loop-1 product-loop-2 product-base">
                                                    <div className="product-thumbnail">
                                                        <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ TV Hobu">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/tv-d-1-master.png?v=1566960438187" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/tv-d-1-master.png?v=1566960438187" alt="Kệ TV Hobu" />
                                                        </Link>
                                                        <div className="product-action clearfix hidden-xs">
                                                            <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623924" encType="multipart/form-data">
                                                                <div className="group_action">
                                                                    <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ke-tv-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                        <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                    </Link>
                                                                    <input type="hidden" name="variantId" defaultValue={27166722} />
                                                                    <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                        <i className="fas fa-dolly" />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="product-info a-left">
                                                        <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ TV Hobu">Kệ TV Hobu</Link></h3>
                                                        <div className="product-hideoff">
                                                            <div className="product-hide">
                                                                <div className="price-box clearfix">
                                                                    <div className="special-price">
                                                                        <span className="price product-price">400.000₫</span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showInfo ? <QuickView dataQuickView={showInfo} handleQuick={setShowInfo} /> : ''}
        </section>
    )
}

export default ProductBestSeller
