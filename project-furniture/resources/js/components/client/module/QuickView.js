import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const QuickView = (props) => {
    console.log(props);
    const close = () => {
        props.handleQuick(false);
    }
    return (
        <div id="quick-view-product" className="quickview-product in">
            <div className="quickview-overlay fancybox-overlay fancybox-overlay-fixed" />
            <div className="quick-view-product">
                <div className="block-quickview primary_block row details-product">
                    <div className="product-left-column col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="clearfix image-block">
                            <span className="view_full_size">
                                <Link className="img-product a_flex_logo" to="#">
                                    <img id="product-featured-image-quickview" className="img-responsive product-featured-image-quickview" src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/quata-t-1-master.png" alt="quickview" />
                                </Link>
                            </span>
                            <div className="loading-imgquickview" style={{ display: 'none' }} />
                        </div>
                        <div className="more-view-wrapper clearfix">
                            <div className="thumbs_quickview" id="thumbs_list_quickview">
                                <ul className="product-photo-thumbs quickview-more-views-owlslider" id="thumblist_quickview" />
                            </div>
                        </div>
                    </div>
                    <div className="product-center-column product-info product-item col-xs-6 col-sm-6 col-md-6 col-lg-6 details-pro" id="product-15623783">
                        <h3 className="qwp-name title-product"><Link className="text2line" to="/dong-ho-tabu-001" title="Đồng hồ Tabu 001">Đồng hồ Tabu 001</Link></h3>
                        <div className="head-qv group-status">
                            <div className="vend-qv">
                                <div className="left_vend">
                                    <div className="vend-qv">
                                        <div className="left_vend">
                                            <span className="vendor_"><span>Thương hiệu: </span>Tabu</span>
                                            <span className="line">|</span>
                        Tình trạng: <span className="soluong1">Còn hàng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews_qv reviews_details_product first_status">
                            <div className="bizweb-product-reviews-badge" data-id={15623783}><div className="bizweb-product-reviews-star" data-score={0} data-number={5} title="Not rated yet!" style={{ color: 'rgb(255, 190, 0)' }}><i data-alt={1} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={2} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={3} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={4} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={5} className="star-off-png" title="Not rated yet!" /><input name="score" type="hidden" readOnly /></div><div><img src="https://productreviews.sapoapps.vn//assets/images/user.png" width={18} height={17} /></div></div>
                        </div>
                        <div className="prices price-box">
                            <span className="price product-price">600.000₫</span>
                            <del className="old-price" />
                        </div>
                        <div className="product-description product-summary">
                            <div className="rte">Thông tin sản phẩm đang cập nhật</div>
                        </div>
                        <form action="/cart/add" method="post" encType="multipart/form-data" className="quick_option variants form-ajaxtocart form-product" id="product-actions-15623783">
                            <span className="price-product-detail hidden" style={{ opacity: 0 }}>
                                <span />
                            </span>
                            <div className="quantity_wanted_p">
                                <div className="soluong_qv form-group form_product_content">
                                    <div className="input_qty_qv_ soluong">
                                        <span className="header_qv label_sl">Số lượng: </span>
                                        <div className="input_qty_qvs input_number_product custom-btn-number">
                                            <button className="btn_num num_1 button button_qty">-</button>
                                            <input type="text" name="quantity" defaultValue={1} maxLength={2} className="form-control prd_quantity" />
                                            <button className="btn_num num_2 button button_qty" >+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="button_actions clearfix">
                                    <button type="submit" className="button_gradient btn_cool btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail">
                                        <span className="btn-content">Thêm vào giỏ hàng</span>
                                    </button>
                                </div>
                            </div>
                            <input type="hidden" name="id" defaultValue={15623783} /><input type="hidden" name="variantId" defaultValue={27166456} /></form>
                        <div className="call_phone_buy f-left w_100">
                            <div>
                                <span>Gọi đặt mua: <Link to="tel:0359329688">
                                    0359329688
                    </Link> (Miễn phí, 8-21h cả T7,CN)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link title="Close" onClick={() => close()} className="quickview-close close-window" to="#"><i className="fas fa-times" /></Link>
            </div>
            <div id="quickview-modal" style={{ display: 'none' }}>
                <div className="block-quickview primary_block row details-product">
                    <div className="product-left-column col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="clearfix image-block">
                            <span className="view_full_size">
                                <Link className="img-product a_flex_logo" to="#">
                                    <img id="product-featured-image-quickview" className="img-responsive product-featured-image-quickview" src="//bizweb.dktcdn.net/100/364/402/themes/733752/assets/logo.png?1594608135913" alt="quickview" />
                                </Link>
                            </span>
                            <div className="loading-imgquickview" style={{ display: 'none' }} />
                        </div>
                        <div className="more-view-wrapper clearfix">
                            <div className="thumbs_quickview" id="thumbs_list_quickview">
                                <ul className="product-photo-thumbs quickview-more-views-owlslider" id="thumblist_quickview" />
                            </div>
                        </div>
                    </div>
                    <div className="product-center-column product-info product-item col-xs-6 col-sm-6 col-md-6 col-lg-6 details-pro">
                        <h3 className="qwp-name title-product">abc</h3>
                        <div className="head-qv group-status">
                            <div className="vend-qv">
                                <div className="left_vend">
                                    <div className="vend-qv">
                                        <div className="left_vend">
                                            <span className="vendor_" />
                                            <span className="line">|</span>
                        Tình trạng: <span className="soluong1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews_qv reviews_details_product first_status">
                            <div className="bizweb-product-reviews-badge" data-id><div className="bizweb-product-reviews-star" data-score={0} data-number={5} title="Not rated yet!" style={{ color: 'rgb(255, 190, 0)' }}><i data-alt={1} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={2} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={3} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={4} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={5} className="star-off-png" title="Not rated yet!" /><input name="score" type="hidden" readOnly /></div><div><img src="https://productreviews.sapoapps.vn//assets/images/user.png" width={18} height={17} /></div></div>
                        </div>
                        <div className="prices price-box">
                            <span className="price product-price" />
                            <del className="old-price" />
                        </div>
                        <div className="product-description product-summary">
                            <div className="rte">
                            </div>
                        </div>
                        <form action="/cart/add" method="post" encType="multipart/form-data" className="quick_option variants form-ajaxtocart form-product">
                            <span className="price-product-detail hidden" style={{ opacity: 0 }}>
                                <span />
                            </span>
                            <select name="variantId" className="hidden" style={{ display: 'none' }} />
                            <div className="quantity_wanted_p">
                                <div className="soluong_qv form-group form_product_content">
                                    <div className="input_qty_qv_ soluong">
                                        <span className="header_qv label_sl">Số lượng: </span>
                                        <div className="input_qty_qvs input_number_product custom-btn-number">
                                            <button className="btn_num num_1 button button_qty">-</button>
                                            <input type="text" name="quantity" defaultValue={1} maxLength={2} className="form-control prd_quantity" />
                                            <button className="btn_num num_2 button button_qty">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="button_actions clearfix">
                                    <button type="submit" className="button_gradient btn_cool btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail">
                                        <span className="btn-content">Thêm vào giỏ hàng</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="call_phone_buy f-left w_100">
                            <div>
                                <span>Gọi đặt mua: <Link to="tel:0359329688">
                                    0359329688
                    </Link> (Miễn phí, 8-21h cả T7,CN)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link title="Close" className="quickview-close close-window" to="#" onClick={() => close()}><i className="fas fa-times" /></Link>
            </div>
        </div>
    )
}

export default QuickView
