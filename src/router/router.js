import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index';
import sendBlog from '../components/blog/sendBlog';
import blogList from '../components/blog/blogList';
import showBlog from '../components/blog/showBlog';
import blogManagerment from '../components/blogManagerment/managerment';
import deleteBlog from '../components/blogManagerment/deleteBlog';
import user from '../components/user/userEdit';
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: index
    }, {
        path: '/showBlog/:id',
        name: 'showBlog',
        component: showBlog
    }, {
        path: '/blogList',
        name: 'blogList',
        component: blogList
    }, {
        path: '/blogManagerment',
        name: 'blogManagerment',
        component: blogManagerment,
        redirect: '/blogManagerment/deleteBlog',
        children: [{
            path: '/blogManagerment/deleteBlog',
            name: 'deleteBlog',
            component: deleteBlog,
        }, {
            path: '/blogManagerment/sendBlog',
            name: 'sendBlog',
            component: sendBlog,
        }, {
            path: '/blogManagerment/user',
            name: 'user',
            component: user,
        }]
    }]

})