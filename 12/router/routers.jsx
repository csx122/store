import BuyCar from '../view/buyCar'
import Rank from '../view/rank'
import Remmon from '../view/remmon'
import Detail from '../view/detail'

import Order from '../view/buyCar/order'
import Content from '../view/buyCar/content'

const routers=[
    {
        path:'/buyCar',
        component:BuyCar,
        children:[
            {
                path:'/buyCar/order',
                component:Order
            },
            {
                path:'/buyCar/content',
                component:Content
            }
        ]
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/remmon',
        component:Remmon
    },
]
export default routers