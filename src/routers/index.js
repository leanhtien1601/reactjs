import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
//Views
import About from '../pages/views/Main/About'
// import Home from '../pages/views/Main/Home'
import AddProduct from '../components/Admin/AddProduct';
import DetailProduct from '../components/Admin/DetailProduct';
import Product from '../components/Main/Product/index';
import Detail from '../pages/views/Main/Detail';
import Home from '../pages/views/Main/Home/index';
import Category from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/AddCategory';
import DetailCategory from '../pages/views/Admin/DetailCategory';
import AddPost from '../pages/views/Admin/AddPost';
import Posts from '../pages/views/Admin/Posts';
import PostsMain from '../pages/views/Main/PostsMain';
import DetailPost from '../pages/views/Main/DetailPost';
import ShowProduct from '../pages/views/Main/ShowProduct';
import EditPost from '../pages/views/Admin/EditPost';




const Routers = ({ products, onRemove, onAdd,
    onUpdate, category, onAddCate,
    onRemoveCate, onUpdateCate, onAddPost
    , posts, onRemovePost, checkShow,
    onUpdatePost}) => {
 
    const onHandleRemove = (id) => {
        onRemove(id);
    }
    const onHandAdd = (products) => {
        onAdd(products);
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product);
    }
    //category
    const onHandleAddCate = (category) => {
        onAddCate(category);
    }
    const removeCate = (id) => {
        onRemoveCate(id);
    }
    const onHandUpdateCate = (id, cate) => {
        onUpdateCate(id, cate);
    }
    //posts
    const onHanleAddPost = (posts) => {
        onAddPost(posts);
    }
    const removePost = (id) => {
        onRemovePost(id);
    }
    const onCheckShow = (id) => {
        checkShow(id)
    }
    const onHandUpdatePost =(id,post)=>{
        onUpdatePost(id,post)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact render={(props) =>
                                <Dashboard {...props} products={products} category={Category} posts={posts} />}>
                            </Route>
                            <Route path='/admin/products' exact render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} category={category} />
                            }>
                            </Route>

                            <Route path='/admin/product/add' render={(props) =>
                                <AddProduct  {...props} onAdd={onHandAdd} category={category} />}>
                            </Route>
                            <Route path='/admin/product/id/:id' exact render={(props) =>
                                <DetailProduct  {...props} products={products} onUpdate={onHandleUpdate} category={category} />
                            }>
                            </Route>
                            {/* category */}
                            <Route path='/admin/category' exact render={(props) =>
                                <Category  {...props} category={category} onRemoveCate={removeCate} products={products} />}>
                            </Route>
                            <Route path='/admin/category/add' render={(props) =>
                                <AddCategory  {...props} onAddCate={onHandleAddCate} />}>
                            </Route>
                            <Route path='/admin/category/id/:id' render={(props) =>
                                <DetailCategory {...props} category={category} onUpdateCate={onHandUpdateCate} />}>
                            </Route>
                            {/* posts */}
                            <Route path="/admin/post/add" render={(props) =>
                                <AddPost {...props} onAddPost={onHanleAddPost} />}>
                            </Route>
                            <Route path="/admin/post" render={(props) =>
                                <Posts {...props} posts={posts} onRemovePost={removePost} />}>
                            </Route>
                            <Route path="/admin/posts/id/:id" render={(props) =>
                                <EditPost {...props} onUpdatePost={onHandUpdatePost} posts={posts}/>}>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/:path?/:path?/:path?/:path?" exact>
                    <LayoutMain>
                        <Switch>
                            <Route path='/' exact>
                                <Home />
                            </Route>
                            <Route path='/product'  >
                                <Product products={products} category={category} />
                            </Route>
                            <Route path="/product_:id">
                                <Detail products={products} />
                            </Route>
                            <Route path="/about" >
                                <About />
                            </Route>
                            <Route path="/posts" >
                                <PostsMain posts={posts} />
                            </Route>
                            <Route path="/posts_:id" >
                                <DetailPost posts={posts} />
                            </Route>
                            <Route path="/category_:id" >
                                <ShowProduct category={category} products={products} checkShow={onCheckShow} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}
Routers.propTypes = {
}
export default Routers
