import React, { Component, useState } from 'react'
import Breadcrumb from '../../../../components/client/module/Breadcrumb';
import ListCategories from '../../../../components/client/module/ListCategories';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import QuickView from '../../../../components/client/module/QuickView';
import Filter from '../../../../components/client/module/Filter';

const ProductAll = () => {

    // quick view
    const [showInfo, setShowInfo] = useState(false);
    const quickView = () => {
        setShowInfo(true);
    }

    return (
        <div className="product-all">
            <Breadcrumb />
            <div className="container">
                <div className="row">
                    <div className="bg_collection collection_new">
                        <ListCategories />
                        <Filter />
                        <div className="main_container collection col-md-12 col-lg-9 col-md-12 padding-col-left-0">
                            <div className="category-products products f-left w_100">
                                <div className="sortPagiBar">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="box-heading relative">
                                                <h1 className="title-head margin-top-0">Tất cả sản phẩm</h1>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 text-xs-left text-sm-right">
                                            <div className="bg-white clearfix">
                                                <div id="sort-by">
                                                    <label className="left hidden-xs">Sắp xếp theo: </label>
                                                    <ul>
                                                        <li><span className="val">Mặc định</span>
                                                            <ul className="ul_2">
                                                                <li><Link to="javascript:;">Mặc định</Link></li>
                                                                <li><Link to="javascript:;">A → Z</Link></li>
                                                                <li><Link to="javascript:;">Z → A</Link></li>
                                                                <li><Link to="javascript:;">Giá tăng dần</Link></li>
                                                                <li><Link to="javascript:;">Giá giảm dần</Link></li>
                                                                <li><Link to="javascript:;">Hàng mới nhất</Link></li>
                                                                <li><Link to="javascript:;">Hàng cũ nhất</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="products-view products-view-grid">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Tủ giày Hobu">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-2021fed95b944be3873d99cbd3dd93ff-master.jpg?v=1566960549770" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-2021fed95b944be3873d99cbd3dd93ff-master.jpg?v=1566960549770" alt="Tủ giày Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623934" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="tu-giay-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
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
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Tủ giày Hobu">Tủ giày Hobu</Link></h3>
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ đẩy Hobu">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/hobu-d-1-da4001c724d64bbba3caa56ed2be6a6e-master.png?v=1566960379253" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/hobu-d-1-da4001c724d64bbba3caa56ed2be6a6e-master.png?v=1566960379253" alt="Kệ đẩy Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623919" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ke-day-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
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
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ đẩy Hobu">Kệ đẩy Hobu</Link></h3>
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
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ treo Poplar">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-trang-8a897fc42fea4bcdbe3b5cb829f3b883-master.jpg?v=1566960321110" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-trang-8a897fc42fea4bcdbe3b5cb829f3b883-master.jpg?v=1566960321110" alt="Kệ treo Poplar" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623914" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="ke-treo-poplar" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166697} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ treo Poplar">Kệ treo Poplar</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">500.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Tranh ảnh">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/img-5508-72a51c73445544af9dfa25fd2a38e56c-master.jpg?v=1566958949537" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/img-5508-72a51c73445544af9dfa25fd2a38e56c-master.jpg?v=1566958949537" alt="Tranh ảnh" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623807" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="tranh-anh" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166512} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Tranh ảnh">Tranh ảnh</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">2.000.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Đồng hồ Miso limited">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/sun-1-1a59cc92352c4428b72773c291f838b1-master.png?v=1566958876783" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/sun-1-1a59cc92352c4428b72773c291f838b1-master.png?v=1566958876783" alt="Đồng hồ Miso limited" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623797" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="dong-ho-miso-limited" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166477} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Đồng hồ Miso limited">Đồng hồ Miso limited</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">1.200.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Đồng hồ Miso">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/miso-master.png?v=1566958832407" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/miso-master.png?v=1566958832407" alt="Đồng hồ Miso" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623791" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="#" onClick={() => quickView()} data-handle="dong-ho-miso" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
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
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Đồng hồ Miso">Đồng hồ Miso</Link></h3>
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
                                    </div>
                                    <div className="text-right">
                                        <nav className="clearfix nav_pagi f-left w_100">
                                            <ul className="pagination clearfix">
                                                <li className="page-item disabled"><Link className="page-link" to="#"><i className="fas fa-caret-left" /></Link></li>
                                                <li className="active page-item disabled"><Link className="page-link" to="javascript:;">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="javascript:;">2</Link></li>
                                                <li className="page-item hidden-xs"><Link className="page-link" to="javascript:;"><i className="fas fa-caret-right" />
                                                </Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showInfo ? <QuickView dataQuickView={showInfo} handleQuick={setShowInfo} /> : ''}
        </div>
    )
}

export default ProductAll
