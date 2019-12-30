import Home from '../components/home';
import Detail from '../components/detail';

let One=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'*',
        redirect:'/home'
    }
]
export default One