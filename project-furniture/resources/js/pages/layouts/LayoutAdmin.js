import React from 'react';

// import css
import '../../assets/admin/css/adminlte.min.css';
import '../../assets/admin/css/style.css';
import '../../assets/admin/plugins/fontawesome-free/css/all.min.css';
import '../../assets/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../assets/admin/plugins/jqvmap/jqvmap.min.css';
import '../../assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../../assets/admin/plugins/daterangepicker/daterangepicker.css';
import '../../assets/admin/plugins/summernote/summernote-bs4.css';

// import components
import Sidebar from '../../components/admin/sidebar/sidebar';
import Header from '../../components/admin/header/Header';
import Footer from '../../components/admin/footer/Footer';

const LayoutAdmin = ({ children }) => {
    return (
        <div className="admin-page">
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                   <Header /> 
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    )
}

export default LayoutAdmin
