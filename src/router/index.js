import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Admin from '../components/admin/admin'
import Index from '../components/index'
import ReadNews from '../components/readNew'
import Publish from '../components/admin/publish'
import Manage from '../components/admin/manage'
import Draf from '../components/admin/draf'
import Edit from '../components/admin/edit'
import admin_welcome from '../components/admin/admin_welcome'
import store from '../store/index'

const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
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
            children: [
                {
                    path: '',
                    component: admin_welcome,

                },{
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
                }

            ],
            beforeEnter:(to,from,next)=>{
                if(store.state.username==null){
                    router.push("/")
                    next(false)
                }else{
                    next()
                }
            }
        }


    ]
})
router.afterEach( () => {
    window.scrollTo(0,0)
})

export default router