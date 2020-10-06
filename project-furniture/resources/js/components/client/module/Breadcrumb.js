import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb_background margin-bottom-40">
            <div className="title_full">
                <div className="container a-center">
                    <p className="title_page">Giới thiệu</p>
                </div>
            </div>
            <section className="bread-crumb">
                <span className="crumb-border" />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 a-center">
                            <ul className="breadcrumb">
                                <li className="home">
                                    <Link to="/"><span>Trang chủ</span></Link>
                                    <span className="mr_lr">&nbsp;<i className="fa fa-angle-right">/</i>&nbsp;</span>
                                </li>
                                <li><strong><span>Giới thiệu</span></strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Breadcrumb
