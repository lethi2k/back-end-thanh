import React from 'react';
import Breadcrumb from '../../../../components/client/module/Breadcrumb';

const Contact = () => {
    return (
        <div className='contact'>
            <Breadcrumb />
            <div className="page_contact">
                <div className="container">
                    <div className="row">
                        <div className="select_maps col-md-4 col-sm-12 col-xs-12">
                            <div className="aa mid_fot_h contact_r">
                                <ul className="contact padding-0">
                                    <li className="li_footer_h">
                                        <span className="txt_content_child">
                                            <i className="fas fa-map-marker-alt" />
                      30 Phạm Văn Đồng, Hà Nội
                    </span>
                                    </li>
                                    <li className="li_footer_h">
                                        <i className="fas fa-mobile-alt" />
                                        0359329688
                                    </li>
                                    <li className="li_footer_h">
                                        <i className="far fa-envelope" />
                                        seateam2512@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="page-login page_cotact">
                                <h1 className="title-head-contact a-left"><span>Liên hệ</span></h1>
                                <div id="pagelogins">
                                    <form acceptCharset="utf-8" action="/contact" id="contact" method="post">
                                        <input name="FormType" type="hidden" />
                                        <input name="utf8" type="hidden" /><input type="hidden" id="Token-3d5a7490f7c64627bb5f67c906a07104" name="Token" />
                                        <div className="form-signup clearfix">
                                            <div className="row group_contact">
                                                <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <input placeholder="Họ và tên" type="text" className="form-control  form-control-lg" required name="contact[Name]" />
                                                </fieldset>
                                                <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <input placeholder="Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required id="email1" className="form-control form-control-lg" name="contact[email]" />
                                                </fieldset>
                                                <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <textarea placeholder="Nội dung" name="contact[body]" id="comment" className="form-control content-area form-control-lg" rows={5} required />
                                                </fieldset>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <button type="submit" className="btn btn-primary margin-top-20">Gửi liên hệ</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="select_maps col-md-8 col-sm-12 col-xs-12">
                            <div className="section_mapss margin-bottom-50">
                                <div className="box-maps">
                                    <div className="iFrameMap">
                                        <div className="google-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7360495079615!2d105.77898991547816!3d21.04324478599046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ccb17ed9fd%3A0xb32c98fabf367915!2zMzAgUGjhuqFtIFbEg24gxJDhu5NuZywgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1564454990702!5m2!1svi!2s" allowFullScreen />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
