import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// layouts
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutClient from '../pages/layouts/LayoutClient';
// ===========================================    ADMIN      ================================================== //
// dashboard
import Dashboard from '../pages/views/admin';
// quan li san pham
import ShowProducts from '../pages/views/admin/products/';
// ===========================================    CLIENT     ================================================== //
// trang chu
import Home from '../pages/views/client';
// thong tin
import Infomation from '../pages/views/client/infomation/Infomation';
// lien he
import Contact from '../pages/views/client/infomation/Contact';
// tin tuc
import NewsAll from '../pages/views/client/news/NewsAll';
// chi tiet tin tuc
import News from '../pages/views/client/news/News';
// san pham 
import ProductAll from '../pages/views/client/products/ProductAll';
// danh muc san pham
import Category from '../pages/views/client/products/Category';
// chi tiet san pham
import Product from '../pages/views/client/products/Product';
const Routers = () => {
    return (
        <div className="router">
            <Router>
                <Switch>
                    <Route path='/admin/:path?' exact>
                        <LayoutAdmin>
                            <Switch>
                                <Route path='/admin' exact>
                                    <Dashboard />
                                </Route>
                                <Route path='/admin/danh-sach-san-pham'>
                                    <ShowProducts />
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutClient>
                            <Switch>
                                <Route path='/' exact>
                                    <Home />
                                </Route>
                                <Route path='/gioi-thieu'>
                                    <Infomation />
                                </Route>
                                <Route path='/lien-he'>
                                    <Contact />
                                </Route>
                                <Route path='/tin-tuc'>
                                    <NewsAll />
                                </Route>
                                <Route path='/san-pham'>
                                    <ProductAll />
                                </Route>
                                <Route path='/chi-tiet-tin-tuc'>
                                    <News />
                                </Route>
                                <Route path='/danh-muc-san-pham'>
                                    <Category />
                                </Route>
                                <Route path='/chi-tiet-san-pham'>
                                    <Product />
                                </Route>
                            </Switch>
                        </LayoutClient>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Routers;
if (document.getElementById('root')) {
    ReactDOM.render(<Routers />, document.getElementById('root'));
}