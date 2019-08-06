import index from '../components/index';
import sendBlog from '../components/blog/sendBlog';
import blogList from '../components/blog/blogList';
import showBlog from '../components/blog/showBlog';
import blogManagerment from '../components/blogManagerment/managerment';
import deleteBlog from '../components/blogManagerment/deleteBlog';


export const routes = [{
        path: '/',
        component: index
    }, {
        path: '/sendBlog',
        component: sendBlog
    }, {
        path: '/showBlog/:id',
        component: showBlog
    }, {
        path: '/blogList',
        component: blogList
    }, {
        path: '/blogManagerment',
        component: blogManagerment,
        redirect: '/blogManagerment/deleteBlog',
        children: [{
            path: '/blogManagerment/deleteBlog',
            name: 'deleteBlog',
            component: deleteBlog,
        }]
    },
    {
        path: '*',
        redirect: '/'
    }
]