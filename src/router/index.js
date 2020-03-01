import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Admin from '../components/admin/admin'
import Index from '../components/index/index'
import IndexIndex from '../components/index/indexIndex'
import indexSearch from '../components/index/search'
import ReadNews from '../components/readNew'
import Publish from '../components/admin/publish'
import Manage from '../components/admin/manage'
import UserManage from '../components/admin/userManage'
import Myself from '../components/admin/myself'
import Draf from '../components/admin/draf'
import Edit from '../components/admin/edit'
import store from '../store/index'

const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            children: [{
                    path: '',
                    component: IndexIndex
                },
                {
                    path: 'search',
                    component: indexSearch
                }
            ]
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/readNews',
            name: 'readNews',
            component: ReadNews
        }, {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
            children: [{
                    path: '',
                    component: Manage,

                }, {
                    path: 'publish',
                    component: Publish,

                }, {
                    path: 'manage',
                    component: Manage
                }, {
                    path: 'draf',
                    component: Draf
                },
                {
                    path: 'edit',
                    component: Edit,
                },
                {
                    path: 'userMange',
                    component: UserManage,
                },
                {
                    path: 'myself',
                    component: Myself,
                }

            ],
            beforeEnter: (to, from, next) => {
                if (store.state.userInfo == null) {
                    router.push("/")
                    next(false)
                } else {
                    next()
                }
            }
        }


    ]
})
router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router