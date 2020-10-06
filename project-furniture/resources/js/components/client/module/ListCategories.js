import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ListCategory = () => {
    return (
        <section className="awe-section-2">
            <div className="section_category section_category_index">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_category_owl products products-view-grid owl-carousel not-dqowl owl-loaded owl-drag">
                                <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1140px' }}><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Sofa">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/036-sofa-1.png?v=1566955313523" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/036-sofa-1.png?v=1566955313523" alt="Sofa" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Sofa">Sofa</Link></h3>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Ghế">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/043-chair-2.png?v=1566955399463" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/043-chair-2.png?v=1566955399463" alt="Ghế" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Ghế">Ghế</Link></h3>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Trang trí">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/022-lamp.png?v=1566955463167" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/022-lamp.png?v=1566955463167" alt="Trang trí" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Trang trí">Trang trí</Link></h3>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Kệ sách">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/012-shelf.png?v=1566955502117" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/012-shelf.png?v=1566955502117" alt="Kệ sách" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Kệ sách">Kệ sách</Link></h3>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Bàn">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/006-table-1.png?v=1566955538897" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/006-table-1.png?v=1566955538897" alt="Bàn" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Bàn">Bàn</Link></h3>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{ width: '190px' }}><div className="item">
                                    <div className="section_category_item">
                                        <div className="item-border">
                                            <Link to="/danh-muc-san-pham" title="Tủ quần áo">
                                                <img src="https://bizweb.dktcdn.net/100/364/402/collections/050-closet.png?v=1566955561490" data-lazyload="https://bizweb.dktcdn.net/100/364/402/collections/050-closet.png?v=1566955561490" alt="Tủ quần áo" className="img-responsive center-block" />
                                            </Link>
                                            <h3><Link to="/danh-muc-san-pham" title="Tủ quần áo">Tủ quần áo</Link></h3>
                                        </div>
                                    </div>
                                </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev disabled"><i className="fa fa-angle-left" aria-hidden="true" /></div><div className="owl-next disabled"><i className="fa fa-angle-right" aria-hidden="true" /></div></div><div className="owl-dots disabled" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListCategory
