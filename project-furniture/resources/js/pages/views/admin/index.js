import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Dashboard = () => {
    return (
           <div className="content-wrapper" style={{minHeight: '616px'}}>
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard</h1>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>Sản phẩm</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to="/admin/danh-sach-san-pham" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
    )
}

export default Dashboard
