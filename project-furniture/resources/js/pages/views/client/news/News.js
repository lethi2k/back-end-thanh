import React, { Component, useState, useEffect } from 'react';
import Breadcrumb from '../../../../components/client/module/Breadcrumb';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="news-news">
            <Breadcrumb />
            <div className="container article-wraper" itemScope itemType="https://schema.org/Article">
                <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                    <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                        <img className="hidden" src="//bizweb.dktcdn.net/100/364/402/themes/733752/assets/logo.png?1594608135913" alt="Sea Furniture" />
                        <meta itemProp="url" content="https://bizweb.dktcdn.net/100/364/402/themes/733752/assets/logo.png?1594608135913" />
                        <meta itemProp="width" content={400} />
                        <meta itemProp="height" content={60} />
                    </div>
                    <meta itemProp="name" content="Sea Furniture" />
                </div>
                <div className="row">
                    <section className="right-content margin-top-10 col-md-12 col-sm-12 col-xs-12">
                        <article className="article-main content_all">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="article-details">
                                        <h1 className="article-title"><span>Bảo quản đồ gỗ khi độ ẩm không khí cao</span></h1>
                                        <div className="date"><i className="far fa-clock" />
                                            <div className="news_home_content_short_time">
                                                28/08/2019
                      </div>
                                        </div>
                                        <div className="article-content">
                                            <div className="rte">
                                                <p>Đồ nội thất bằng gỗ chất lượng cao là một sự đầu tư tuyệt vời để trang trí ngôi nhà của bạn bởi vì độ bền của chúng. Đồ gỗ có thời hạn sử dụng rất lâu, có thể đươc dùng truyền từ đời này sang đời khác.</p>
                                                <p>Tất nhiên để kéo dài tuổi thọ của sản phẩm, quan trọng là bạn phải thực hiện các bước cơ bản để bảo vệ đồ gỗ ở nhà. Đặc biệt là trong những thời điểm độ ẩm trong môi trường tăng cao từ tháng 4 đến tháng 8 hằng năm. Nếu không có phương pháp bảo quản, khi thời tiết quá ẩm sẽ khiến đồ nội thất làm bằng gỗ xuất hiện các giọt nước li ti trên bề mặt. Lúc này, lớp bề mặt phía ngoài sẽ có chỗ bị mất màu, thậm chí nghiệm trọng sẽ sinh mốc và biến dạng.</p>
                                                <p>Trước khi đồ gỗ có hiện tượng tụ nước thành các hạt li ti hoặc nấm mốc, có thể xử lý bằng cách, bên trong đồ gỗ đặt các chất chống ẩm. Trong cuộc sống thường ngày, rất nhiều vật xung quanh ta đều có tác dụng như một chất chống ẩm thiên nhiên. Tìm ngay trong nhà bạn các thứ có khả năng chống ẩm tuyệt vời cho tủ gỗ đó là:</p>
                                                <p>Lá trà: Đặt lá trà vào trong một túi vải xô hoặc dùng báo gói lại, đặt tản ra các góc của tủ đựng tài liệu, như vậy không chỉ có thể hút ẩm, khử mùi mà còn không có tác dụng phụ.<br />
                          Bã cà phê: Bã cà phê có tác dụng kép vừa hút ẩm vừa khử mùi ẩm mốc. Cà phê sau khi dùng xong, lấy bã phơi khô đặt trong túi vải xô hoặc tất cũ, buộc chặt là đã trở thành một túi chống ẩm hiệu quả mà cực đơn giản rồi.<br />
                          Vôi: Có thể đặt đá vôi trong một chiếc hộp không đậy nắp, đặt ở góc tủ, lúc thời tiết ẩm ướt, tác dụng hút ẩm của vôi sẽ phát huy vô cùng hiệu quả.<br />
                          Than hoạt tính: Than hoạt tính có tác dụng hút ẩm khử mùi rất tốt, nhưng nên chú ý đặt trong hộp hoặc gói trong báo để tránh làm bẩn giấy tờ.<br />
                          Báo: Có thể phủ một lớp báo dưới đáy tủ, thậm chí dán báo ở mặt trong của tủ cũng được, bởi vì báo không chỉ có thể hút ẩm, chống mốc mà còn mùi của mực còn có thể xua đuổi côn trùng.<br />
                          2. Bề mặt bên ngoài đồ nội thất cần được lau sạch bụi và làm khô. Nếu nó không sạch, nó có thể bị biến màu hoặc hư hỏng, hoặc có mùi hôi. Bạn hãy lau khô nhẹ nhàng qua các đồ dùng bằng các loại vải mềm, sau đó bôi một lớp dầu hạch đào (dầu quả óc chó) lên bề mặt. Bạn có thể kiếm mua dầu hạch đào trên các trang thương mại điện tử &nbsp;với giá dao động khoảng 75.000đ/100ml.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12">
                                    <div className="social-sharing tag-share">
                                        <div className="social-media" data-permalink="https://sea-furniture.mysapo.net/bao-quan-do-go-khi-do-am-khong-khi-cao">
                                            <label style={{ display: 'inline-block' }}>Chia sẻ: </label>
                                            <a target="_blank" href="//www.facebook.com/sharer.php?u=https://sea-furniture.mysapo.net/bao-quan-do-go-khi-do-am-khong-khi-cao" className="share-facebook" title="Chia sẻ lên Facebook">
                                                <i className="fab fa-facebook-square" />
                                            </a>
                                            <a target="_blank" href="//plus.google.com/share?url=https://sea-furniture.mysapo.net/bao-quan-do-go-khi-do-am-khong-khi-cao" className="share-google" title={+1}>
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                            <a target="_blank" href="//twitter.com/share?text=Bảoquảnđồgỗkhiđộẩmkhôngkhícao&url=https://sea-furniture.mysapo.net/bao-quan-do-go-khi-do-am-khong-khi-cao" className="share-twitter" title="Chia sẻ lên Twitter">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* BÌNH LUẬN TIN TỨC */}
                                <div className="row row-noGutter">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <form acceptCharset="utf-8" action="/posts/bao-quan-do-go-khi-do-am-khong-khi-cao/comments" id="article_comments" method="post">
                                            <input name="FormType" type="hidden" defaultValue="article_comments" />
                                            <input name="utf8" type="hidden" defaultValue="true" />
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-coment">
                                                    <div className="row">
                                                        <div className="margin-top-0 margin-bottom-30">
                                                            <h5 className="title-form-coment">Gửi ý kiến của bạn cho chúng tôi</h5>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <fieldset className="form-group">
                                                                    <input placeholder="Họ và tên:" type="text" className="form-control form-control-lg" defaultValue id="full-name" name="Author" required />
                                                                </fieldset>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <fieldset className="form-group">
                                                                    <input placeholder="Email:" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" type="email" className="form-control form-control-lg" defaultValue name="Email" required />
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                        <fieldset className="form-group col-xs-12 col-sm-12 col-md-12">
                                                            <textarea placeholder="Viết bình luận:" className="form-control form-control-lg" id="comment" name="Body" rows={6} required defaultValue={""} />
                                                        </fieldset>
                                                        <div className="margin-bottom-fix margin-bottom-50-article clearfix">
                                                            <button type="submit" className="btn btn-primary btn-comment button_gradient">Gửi bình luận</button>
                                                        </div>
                                                    </div>
                                                </div> {/* End form mail */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* END BÌNH LUẬN TIN TỨC */}
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default News
