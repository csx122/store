import React from "react";
import routers from './routers'
import {Switch,Route,Redirect} from 'react-router-dom'

class RouterMap extends React.Component{
    render(){
        const {prop} = this.props;
        const newRouter=prop?prop:routers;
        const defaultRouter=<Route key ={0} exact path='/' component={()=>{
            return <Redirect to='/buyCar'></Redirect>
        }}></Route>
        return <Switch>
            {
                newRouter.map((item,index)=>{
                    const Comp=item.component;
                    return <Route key={index} path={item.path} component={(apiRouter)=>{
                       return  item.children?<Comp prop={item.children} {...apiRouter}/>:<Comp {...apiRouter}/>
                    }}></Route>
                })
                //.concat(defaultRouter)
            }
        </Switch>
    }
}
export default RouterMap
