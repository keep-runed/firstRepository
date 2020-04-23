import React from "react"

import {Route,BrowserRouter, Switch, Redirect} from "react-router-dom"

import {GlobalIcon} from  "./assets/font/iconfont.js"
import "./assets/Router.css"

import Top from "./components/Top"
import routes from "./routes"

const BasicRoute = ()=>{
   return (
       <BrowserRouter>
           <div>
               <GlobalIcon></GlobalIcon>       
               <Top></Top>
               <div className="main">
               <Switch>
                   {
                       routes.map((item,index)=>{
                           if(item.path==='*'){
                               return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                           }else{
                              return <Route key={index} path={item.path} component={item.component}></Route>
                           }
                       })
                   }
               </Switch>
               
               </div>
           </div>
       </BrowserRouter>
   )
}

export default BasicRoute