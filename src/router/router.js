import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index';
import sendBlog from '../components/blog/sendBlog';
import blogList from '../components/blog/blogList';
import showBlog from '../components/blog/showBlog';
import blogManagerment from '../components/blogManagerment/managerment';
import deleteBlog from '../components/blogManagerment/deleteBlog';
import userEdit from '../components/user/userEdit';
import userList from '../components/user/userList';
import userLogin from '../components/user/login';
import OpenWrtConfig from '../components/openwrtPage/OpenWrtConfig';
import tagEdit from "../components/blogManagerment/tag/tagEdit";
import tagList from "../components/blogManagerment/tag/tagList";
import linksEdit from "../components/blogManagerment/links/linksEdit";
import linksList from "../components/blogManagerment/links/linksList";



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: index
    }, {
        path: '/userLogin',
        name: 'userLogin',
        component: userLogin,
    }, {
        path: '/showBlog/:id',
        name: 'showBlog',
        component: showBlog
    }, {
        path: '/blogList',
        name: 'blogList',
        component: blogList
    }, {
        path: '/tag/:id',
        name: 'findTag',
        props: true,
        component: blogList,
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
            path: '/blogManagerment/editBlog/:id',
            name: 'editBlog',
            props: true,
            component: sendBlog,
        }, {
            path: '/blogManagerment/userCreate',
            name: 'userEdit',
            component: userEdit,
        }, {
            path: '/blogManagerment/userEdit/:id',
            props: true,
            name: 'userId',
            component: userEdit,
        }, {
            path: '/blogManagerment/userList',
            name: 'userList',
            component: userList,
        }, {
            path: '/OpenWrtConfig',
            name: 'OpenWrtConfig',
            component: OpenWrtConfig
        }, {
            path: '/blogManagerment/tagEdit/:id',
            name: 'tagEdit',
            component: tagEdit,
            props: true
        }, {
            path: '/blogManagerment/tagCreat',
            name: 'tagCreat',
            component: tagEdit,
            props: true
        }, {
            path: '/blogManagerment/tagList',
            name: 'tagList',
            component: tagList
        }, {
            path: '/blogManagerment/linksEdit/:id',
            name: 'linksEdit',
            component: linksEdit,
            props: true
        }, {
            path: '/blogManagerment/linksCreate',
            name: 'linksCreate',
            component: linksEdit,
            props: true
        }, {
            path: '/blogManagerment/linksList',
            name: 'linksList',
            component: linksList
        }]
    }, {
        path: '*',
        component: index
    }]


})