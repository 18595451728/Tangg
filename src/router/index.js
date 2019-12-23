import Vue from 'vue'
import Router from 'vue-router'
import storage from 'good-storage'
import Home from '@/pages/home/Home'
import Yuyue from '@/pages/yuyue/Yuyue'
import Yydetail from '@/pages/yydetail/Yydetail'
import Jzrxx from '@/pages/jzrxx/Jzrxx'
import Tjjzrxx from '@/pages/tjjzrxx/Tjjzrxx'
import Addjzrxx from '@/pages/addjzrxx/Addjzrxx'
import Zfxx from '@/pages/zfxx/Zfxx'
import Zfsucc from '@/pages/zfsucc/Zfsucc'
import Generalxq from '@/pages/generalxq/Generalxq'
import Generalxx from '@/pages/generalxx/Generalxx'
import Bookagain from '@/pages/bookagain/Bookagain'
import Morejzrxx from '@/pages/morejzrxx/Morejzrxx'
import Mine from '@/pages/mine/Mine'
import Bookhistory from '@/pages/bookhistory/Bookhistory'
import Patient from '@/pages/patient/Patient'
import Medicalres from '@/pages/medicalres/Medicalres'
import Medicalxq from '@/pages/medicalxq/Medicalxq'
import Allproduct from '@/pages/allproduct/Allproduct'
import ProductDetail from '@/pages/productdetail/ProductDetail'
import Shopcart from '@/pages/shopcart/Shopcart'
import Evaluate from '@/pages/evaluate/Evaluate'
import ConfirmOrder from '@/pages/confirmorder/ConfirmOrder'
import Order from '@/pages/order/Order'
import Orderdetail from '@/pages/orderdetail/Orderdetail'
import Refund from '@/pages/refund/Refund'
import Writeform from '@/pages/writeform/Writeform'
import Choosetype from '@/pages/choosetype/Choosetype'
import Servicedetail from '@/pages/servicedetail/Servicedetail'
import Logistics from '@/pages/logistics/Logistics'
import Collection from '@/pages/collection/Collection'
import Addresslist from '@/pages/addresslist/Addresslist'
import Editaddress from '@/pages/editaddress/Editaddress'
import Coupon from '@/pages/coupon/Coupon'
import Message from '@/pages/message/Message'
import Setting from '@/pages/setting/Setting'
import Archives from '@/pages/archives/Archives'
import Packet from '@/pages/packet/Packet'
import Profit from '@/pages/profit/Profit'
import Integral from '@/pages/integral/Integral'
import Personaldata from '@/pages/personaldata/Personaldata'
import Membership from '@/pages/membership/Membership'
import Store from '@/pages/store/Store'

import detailPosters from '@/pages/pro_detail_Posters/detailPosters' // 海报分享
import cityPartner from '@/pages/city_partner/cityPartner' // 申请城市合伙人
import cityPartnerSuccess from '@/pages/city_partner_success/cityPartnerSuccess' // 申请城市合伙人成功
import cityPartnerTeam from '@/pages/city_partner_team/cityPartnerTeam' // 我的团队
import userRecharge from '@/pages/user_recharge/recharge' // 用户充值
import userWithdraw from '@/pages/user_withdraw/withdraw' // 用户提现

Vue.use(Router)

 let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/detailPosters',
            name: 'detailPosters',
            component: detailPosters
        },
        {
            path: '/cityPartner',
            name: 'cityPartner',
            component: cityPartner
        },
        {
            path: '/cityPartnerSuccess',
            name: 'cityPartnerSuccess',
            component: cityPartnerSuccess
        },
        {
            path: '/cityPartnerTeam',
            name: 'cityPartnerTeam',
            component: cityPartnerTeam
        },
        {
            path: '/userRecharge',
            name: 'userRecharge',
            component: userRecharge
        },
        {
            path: '/userWithdraw',
            name: 'userWithdraw',
            component: userWithdraw
        },

        {
            path: '/yuyue',
            name: 'Yuyue',
            component: Yuyue
        },
        {
            path: '/yuyue/detail',
            name: 'Yydetail',
            component: Yydetail
        },
        {
            path: '/yuyue/jzrxx',
            name: 'Jzrxx',
            component: Jzrxx,
            meta:{
                needLogin:!0
            }
        },
        {
            path: '/mine/tjjzrxx',
            name: 'Tjjzrxx',
            component: Tjjzrxx
        },
        {
            path: '/yuyue/addjzrxx',
            name: 'Addjzrxx',
            component: Addjzrxx
        },
        {
            path: '/yuyue/zfxx',
            name: 'Zfxx',
            component: Zfxx
        },
        {
            path: '/yuyue/zfsucc',
            name: 'Zfsucc',
            component: Zfsucc
        },
        {
            path: '/generalxq',
            name: 'Generalxq',
            component: Generalxq
        },
        {
            path: '/generalxx',
            name: 'Generalxx',
            component: Generalxx,
            meta:{
                needLogin:!0
            }
        },{
            path: '/Bookagain',
            name: 'Bookagain',
            component: Bookagain
        },
        {
            path: '/morejzrxx',
            name: 'Morejzrxx',
            component: Morejzrxx
        },
        {
            path: '/Mine',
            name: 'Mine',
            component: Mine,
            meta:{
                needLogin:!0
            }
        },
        {
            path: '/Bookhistory',
            name: 'Bookhistory',
            component: Bookhistory
        },
        {
            path: '/Patient',
            name: 'Patient',
            component: Patient
        }, {
            path: '/medicalres',
            name: 'Medicalres',
            component: Medicalres
        },
        {
            path: '/medicalxq',
            name: 'Medicalxq',
            component: Medicalxq
        },
        {
            path: '/Allproduct',
            name: 'Allproduct',
            component: Allproduct
        },
        {
            path: '/ProductDetail',
            name: 'ProductDetail',
            component: ProductDetail
        },
        {
            path: '/Shopcart',
            name: 'Shopcart',
            component: Shopcart
        },
        {
            path: '/Evaluate',
            name: 'Evaluate',
            component: Evaluate
        },
        {
            path: '/ConfirmOrder',
            name: 'ConfirmOrder',
            component: ConfirmOrder
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order
        },
        {
            path: '/Orderdetail',
            name: 'Orderdetail',
            component: Orderdetail
        },
        {
            path: '/Refund',
            name: 'Refund',
            component: Refund
        },
        {
            path: '/Writeform',
            name: 'Writeform',
            component: Writeform
        },
        {
            path: '/Choosetype',
            name: 'Choosetype',
            component: Choosetype
        },
        {
            path: '/Servicedetail',
            name: 'Servicedetail',
            component: Servicedetail
        },
        {
            path: '/Logistics',
            name: 'Logistics',
            component: Logistics
        },
        {
            path: '/Collection',
            name: 'Collection',
            component: Collection
        },
        {
            path: '/Addresslist',
            name: 'Addresslist',
            component: Addresslist
        },
        {
            path: '/Editaddress',
            name: 'Editaddress',
            component: Editaddress
        },
        {
            path: '/Coupon',
            name: 'Coupon',
            component: Coupon
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message
        },
        {
            path: '/Setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/Archives',
            name: 'Archives',
            component: Archives
        },
        {
            path: '/Packet',
            name: 'Packet',
            component: Packet
        },
        {
            path: '/Profit',
            name: 'Profit',
            component: Profit
        },
        {
            path: '/Integral',
            name: 'Integral',
            component: Integral
        },
        {
            path: '/Personaldata',
            name: 'Personaldata',
            component: Personaldata
        },
        {
            path: '/Membership',
            name: 'Membership',
            component: Membership
        },
        {
            path: '/Store',
            name: 'Store',
            component: Store
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = '唐冠健康'
    console.log(to,storage)
    if(to.meta.needLogin){
        console.log(to.fullPath)
        if(to.fullPath.indexOf('?')<0){

        }else{
            var token = storage.session.get('token') || to.fullPath.indexOf('token')>0
        }

        if(token){
            next()
        }else{
                // var url = 'http://tangguan.123bingo.cn/dist/#'+to.fullPath;
                var url = 'http://localhost:8080/#'+to.fullPath;
                var h5_url = window.btoa(url);
                window.location.href = 'http://tangguan.123bingo.cn/api/WxLogin/login?h5_url='+h5_url;
        }
    }else{
        next()
    }
})

export default router
