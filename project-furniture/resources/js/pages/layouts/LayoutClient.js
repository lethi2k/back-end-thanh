import React from 'react';

// import css
import '../../assets/client/css/bpr-products-module.css';
import '../../assets/client/css/ekko-lightbox.min.css';
import '../../assets/client/css/jquery-ui.min.css';
import '../../assets/client/css/lightbox.css';
import '../../assets/client/css/module.css';
import '../../assets/client/css/plugin.css';
import '../../assets/client/css/responsive.css';
import '../../assets/client/css/style.css';
import '../../assets/client/css/base.css';

// import components
import Header from '../../components/client/common/Header';
import Footer from '../../components/client/common/Footer';

const LayoutClient = ({ children }) => {
    return (
        <div className="layout-client">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutClient
