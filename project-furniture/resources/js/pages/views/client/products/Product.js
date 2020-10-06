import React, { Component, useState, useEffect } from 'react';
import Breadcrumb from '../../../../components/client/module/Breadcrumb';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="product-product">
            <Breadcrumb />
            <section className="product margin-top-5 f-left w_100" itemScope itemType="https://schema.org/Product">
                <meta itemProp="url" content="//sea-furniture.mysapo.net/sofa-giuong-aurora" />
                <meta itemProp="name" content="Sofa giường AURORA" />
                <meta itemProp="image" content="//bizweb.dktcdn.net/thumb/grande/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" />
                <div className="container">
                    <div className="row">
                        <div className="details-product">
                            <div className="product-detail-left product-images col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="col_large_default large-image">
                                    <Link to="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" data-rel="prettyPhoto[product-gallery]">
                                        <div style={{ height: '555px', width: '555px' }} className="zoomWrapper"><div style={{ height: '555px', width: '555px' }} className="zoomWrapper"><img className="checkurl img-responsive" id="img_01" src="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" alt="Sofa giường AURORA" style={{ position: 'absolute' }} /></div></div>
                                    </Link>
                                    <div className="hidden">
                                        <div className="item">
                                            <Link to="https://bizweb.dktcdn.net/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" data-image="https://bizweb.dktcdn.net/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" data-zoom-image="https://bizweb.dktcdn.net/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" data-rel="prettyPhoto[product-gallery]">
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="gallery_02" className="owl-carousel owl-theme thumbnail-product thumb_product_details not-dqowl owl-loaded owl-drag" data-loop="false" data-lg-items={3} data-md-items={3} data-sm-items={3} data-xs-items={3} data-xxs-items={3}>
                                    <div className="owl-stage-outer owl-height" style={{ height: '90px' }}><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '221px' }}><div className="owl-item active" style={{ width: '90.5px', marginRight: '20px' }}><div className="item">
                                        <Link to="javascript:void(0)" data-image="https://bizweb.dktcdn.net/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600">
                                            <img data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" src="//bizweb.dktcdn.net/thumb/small/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" data-lazyload="//bizweb.dktcdn.net/thumb/small/100/364/402/products/aurora-nghieng-light-grey-3d8bccf563ad4415aaabe620924f3fd6-master.png?v=1566942968600" alt="Sofa giường AURORA" />
                                        </Link>
                                    </div></div><div className="owl-item active" style={{ width: '90.5px', marginRight: '20px' }}><div className="item">
                                        <Link to="javascript:void(0)" data-image="https://bizweb.dktcdn.net/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" data-zoom-image="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550">
                                            <img data-img="//bizweb.dktcdn.net/thumb/1024x1024/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" src="//bizweb.dktcdn.net/thumb/small/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" data-lazyload="//bizweb.dktcdn.net/thumb/small/100/364/402/products/aurora-nghieng-dark-grey-a646ffae75764bb9a4b1237eca1c1267-master.png?v=1566942969550" alt="Sofa giường AURORA" />
                                        </Link>
                                    </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev disabled">prev</div><div className="owl-next disabled">next</div></div><div className="owl-dots disabled" /></div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 details-pro">
                                <h1 className="title-product">Sofa giường AURORA</h1>
                                <div className="fw w_100" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                    <div className="group-status">
                                        <span className="first_status"><span className="status_name">AURORA</span></span>
                                    </div>
                                    <div className="reviews_details_product">
                                        <div className="bizweb-product-reviews-badge" data-id={15623230}><div className="bizweb-product-reviews-star" data-score={0} data-number={5} title="Not rated yet!" style={{ color: 'rgb(255, 190, 0)' }}><i data-alt={1} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={2} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={3} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={4} className="star-off-png" title="Not rated yet!" />&nbsp;<i data-alt={5} className="star-off-png" title="Not rated yet!" /><input name="score" type="hidden" readOnly /></div><div><img src="https://productreviews.sapoapps.vn//assets/images/user.png" width={18} height={17} /></div></div>
                                    </div>
                                    <div className="price-box">
                                        <div className="special-price"><span className="price product-price">3.100.000₫</span>
                                            <meta itemProp="price" content={3100000} />
                                            <meta itemProp="priceCurrency" content="VND" />
                                        </div> {/* Giá */}
                                    </div>
                                </div>
                                <div className="product-summary product_description margin-bottom-0">
                                    <div className="rte description ">
                                        Thông tin sản phẩm đang được cập nhật.
                  </div>
                                </div>
                                <div className="form-product col-sm-12">
                                    <form encType="multipart/form-data" id="add-to-cart-form" action="/cart/add" method="post" className="form-inline margin-bottom-0">
                                        <div className="box-variant clearfix ">
                                            <input type="hidden" name="variantId" defaultValue={27165486} />
                                        </div>
                                        <div className="form-group form_button_details ">
                                            <div className="form_product_content f-left w_100 ">
                                                <div className="soluong show">
                                                    <div className="label_sl margin-bottom-5">Số lượng</div>
                                                    <div className="custom input_number_product soluong1 show">
                                                        <button className="btn_num num_1 button button_qty" type="button">-</button>
                                                        <input type="text" id="qtym" name="quantity" defaultValue={1} maxLength={2} className="form-control prd_quantity" />
                                                        <button className="btn_num num_2 button button_qty" type="button">+</button>
                                                    </div>
                                                </div>
                                                <div className="count_btn_style">
                                                    <div className="button_actions clearfix">
                                                        <button type="submit" className="button_gradient btn btn_add_cart btn-cart add_to_cart btn_base">
                                                            <span className="btn-image">
                                                            </span>
                                                            <span className="btn-content">Thêm vào giỏ hàng</span>
                                                        </button>
                                                    </div>
                                                    <div className="iwi">
                                                        <Link title="Yêu thích" className=" iWishAdd iwishAddWrapper" to="javascript:;" data-customer-id={0} data-product={15623230} data-variant={27165486} />
                                                        <Link title="Bỏ yêu thích" className=" iWishAdded iwishAddWrapper iWishHidden" to="javascript:;" data-customer-id={0} data-product={15623230} data-variant={27165486} />
                                                    </div>
                                                </div>
                                                <div className="call_phone_buy f-left w_100">
                                                    <div>
                                                        <span>Gọi đặt mua: <Link to="tel:0359329688">
                                                            0359329688
                              </Link> (Miễn phí, 8-21h cả T7,CN)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container margin-top-40">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab_h">
                                {/* Nav tabs */}
                                <div className="product-tab e-tabs">
                                    <ul className="tabs tabs-title clearfix">
                                        <li className="tab-link current" data-tab="tab-1">
                                            <h3><span>Mô tả</span></h3>
                                        </li>
                                        <li className="tab-link" data-tab="tab-2">
                                            <h3><span>Thông tin</span></h3>
                                        </li>
                                        <li className="tab-link" data-tab="tab-3">
                                            <h3><span>Đánh giá</span></h3>
                                        </li>
                                    </ul>
                                    <div id="tab-1" className="tab-content current">
                                        <div className="rte">
                                            <p><strong>Màu sắc:</strong>&nbsp;Xám nhạt/ xám đậm</p>
                                            <p><strong>Kích thước:</strong>&nbsp;D170 cm</p>
                                            <p><strong>Chất liệu:</strong>&nbsp;Vải China, Khung gỗ thông Canada</p>
                                        </div>
                                    </div>
                                    <div id="tab-2" className="tab-content">
                                        <div className="rte">
                                            Các nội dung Hướng dẫn mua hàng viết ở đây
                    </div>
                                    </div>
                                    <div id="tab-3" className="tab-content">
                                        <div className="rte">
                                            <div id="bizweb-product-reviews" className="bizweb-product-reviews" data-id={15623230}><div><div className="title-bl">
                                                <h4>Đánh giá sản phẩm</h4>
                                            </div>
                                                <div id="bizweb-product-reviews-sub">
                                                    <span className="product-reviews-summary-actions">
                                                        <input type="button" id="btnnewreview" defaultValue="Viết đánh giá" />
                                                    </span>
                                                    <div className="bizweb-product-reviews-form" id="bpr-form_15623230" style={{ display: 'none' }}>
                                                        <form method="post" action="https://productreviews.sapoapps.vn/reviews/create" id="bizweb-product-reviews-frm" name="bizweb-product-reviews-frm">
                                                            <input type="hidden" name="productId" id="review_product_id" defaultValue={15623230} />
                                                            <h4>Đánh giá sản phẩm</h4>
                                                            <fieldset className="bpr-form-rating">
                                                                <div id="dvRating" />
                                                                <input type="hidden" name="rating" id="review_rate" defaultValue={0} />
                                                                <span className="bpr-form-message-error" />
                                                            </fieldset>
                                                            <fieldset className="bpr-form-contact">
                                                                <div className="bpr-form-contact-name require">
                                                                    <input type="text" maxLength={128} id="review_author" name="author" defaultValue placeholder="Nhập tên của bạn" />
                                                                    <span className="bpr-form-message-error" />
                                                                </div>
                                                                <div className="bpr-form-contact-email require">
                                                                    <input type="text" maxLength={128} id="review_email" name="email" defaultValue placeholder="nguyenvan@gmail.com" />
                                                                    <span className="bpr-form-message-error" />
                                                                </div>
                                                            </fieldset>
                                                            <fieldset className="bpr-form-review">
                                                                <div className="bpr-form-review-title">
                                                                    <input type="text" maxLength={512} id="review_title" name="title" defaultValue placeholder="Tiêu đề" />
                                                                    <span className="bpr-form-message-error" />
                                                                </div>
                                                                <div className="bpr-form-review-body">
                                                                    <textarea maxLength={1500} id="review_body" name="body" rows={5} placeholder="Nội dung" defaultValue={""} />
                                                                    <span className="bpr-form-message-error" />
                                                                </div>
                                                            </fieldset>
                                                            <fieldset className="bpr-form-review-error">
                                                                <p className="error" />
                                                            </fieldset>
                                                            <fieldset className="bpr-form-actions">
                                                                <input type="button" defaultValue="Gửi" className="bpr-button-submit" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                    <div style={{ display: 'none' }} id="bpr-thanks" className="bizweb-product-reviews-form">
                                                        <b>Cảm ơn bạn đã đánh giá sản phẩm!</b>
                                                    </div>
                                                    <div id="bpr-list" className="bizweb-product-reviews-list" />
                                                    <div id="bpr-more-reviews" />
                                                </div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 related-product margin-bottom-30">
                            <div className="section_prd_feature">
                                <div className="module-header">
                                    <div className="heading1 title_product_base heading_hotdeal">
                                        <div className="title_icon"><div className="title_space" /></div>
                                        <h2>
                                            <Link to="/san-pham-hot" title="Sản phẩm liên quan">Sản phẩm liên quan</Link>
                                        </h2>
                                    </div>
                                </div>
                                <div className="module-content products product_related products-view-grid-bb owl-carousel owl-theme products-view-grid not-dot2 owl-loaded owl-drag" data-dot="false" data-nav="false" data-lg-items={5} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30}>
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1404px' }}><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/ghe-woody" title="Ghế Woody">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/g-2-master.jpg?v=1566961002770" alt="Ghế Woody" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623967" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/ghe-woody" data-handle="ghe-woody" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
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
                                                    <h3 className="product-name"><Link to="/ghe-woody" title="Ghế Woody">Ghế Woody</Link></h3>
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
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/tu-giay-hobu" title="Tủ giày Hobu">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-2021fed95b944be3873d99cbd3dd93ff-master.jpg?v=1566960549770" alt="Tủ giày Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623934" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/tu-giay-hobu" data-handle="tu-giay-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166735} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/tu-giay-hobu" title="Tủ giày Hobu">Tủ giày Hobu</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">3.100.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/ke-day-hobu" title="Kệ đẩy Hobu">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/hobu-d-1-da4001c724d64bbba3caa56ed2be6a6e-master.png?v=1566960379253" alt="Kệ đẩy Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623919" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/ke-day-hobu" data-handle="ke-day-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166710} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/ke-day-hobu" title="Kệ đẩy Hobu">Kệ đẩy Hobu</Link></h3>
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
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/dong-ho-miso" title="Đồng hồ Miso">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/miso-master.png?v=1566958832407" alt="Đồng hồ Miso" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623791" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/dong-ho-miso" data-handle="dong-ho-miso" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166464} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/dong-ho-miso" title="Đồng hồ Miso">Đồng hồ Miso</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">1.000.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/dong-ho-tabu" title="Đồng hồ Tabu">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/tabu-master.png?v=1566958621893" alt="Đồng hồ Tabu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623776" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/dong-ho-tabu" data-handle="dong-ho-tabu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166449} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/dong-ho-tabu" title="Đồng hồ Tabu">Đồng hồ Tabu</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">350.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{ width: '204px', marginRight: '30px' }}><div className="item saler_item">
                                        <div className="owl_item_product product-col-1">
                                            <div className="product-loop-1 product-loop-2 product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/sofa-don-alice" title="Sofa đơn ALICE">
                                                        <img src="https://res.cloudinary.com/anlqn/image/upload/v1601356711/sea-furniture/products/fzsr8ry9co3u0fqoxrdd.png" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/4-0717adb7481649d18ceade5adc9c6d4a-master.png?v=1566943025980" alt="Sofa đơn ALICE" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623233" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/sofa-don-alice" data-handle="sofa-don-alice" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27165489} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/sofa-don-alice" title="Sofa đơn ALICE">Sofa đơn ALICE</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">800.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
