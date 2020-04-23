import React,{Component} from "react"
import "../assets/Top.css"
import {Link}  from "react-router-dom"
import store from "../store.js"

class Top extends Component{
  constructor(){
    super()
    this.state={
      isShow:true,
      obj:null
    }
    store.subscribe(()=>{
      this.setState({
        obj:store.getState().obj
      })
    })
  }
  changeTop(){
    this.setState({
      isShow:false
    })
  } 
    render(){
        return (
            <div className="top">
                 <div className="topLeft">
                     <h2>简书</h2>
                     <ul className="topSearch">
                       <li><input placeholder="搜索"></input><span className="iconfont">&#xe612;</span></li>
                       <li><em>下载App</em></li>
                       <li><Link to="/">首页</Link></li>
                     </ul>
                 </div>
                 <div className="topRight">
                    <div className="writes">
                        <p><i className="iconfont">&#xe600;</i><span>写文章</span></p>
                      </div>
                    {
                      this.state.obj===null? 
                        <div>
                          <div className="rigister">
                          <Link to="/register" onClick={this.changeTop.bind(this)}>注册</Link>
                          </div>
                          <div className="login">
                          <Link to="/login">登录</Link>
                          </div>
                        </div>:<div className="user">欢迎<span>{this.state.obj.username}</span>登录</div>
                    }
                    <div className="erweima">
                       <i className="iconfont">&#xe675;</i>
                       <span>beta</span>
                    </div>
                    <div className="aA">
                      <span>Aa</span>
                    </div>               
                 </div>
            </div>
        )
    }
}

export default Top