import React from "react"
import {Link} from "react-router-dom"
import "../assets/Login.css"
import store from "../store.js"
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            checked:true,
            phone:'',
            password:''
        }
    }
    fn(){
        this.setState({
            checked:!this.state.checked
        })
    }
    changePhone(e){
        this.setState({
            phone:e.target.value
        })
    }
    changePass(e){
        this.setState({
            password:e.target.value
        })
    }
    login(){
        var obj = store.getState().userArr.find((item,index)=>{
            return item.phone===this.state.phone
        })
        if(obj===undefined){
            alert("手机号或邮箱不存在，请注册")
        }else
        if(obj.password!==this.state.password){
            alert("密码不正确请从新输入")
            this.setState({
                password:''
            })
        }else{
            store.dispatch({type:'addObj',obj:obj})
            this.props.history.push('/homes')
            alert("登录成功")
        }  
        
    }
    render(){
        return (
            <div className="logins">
                <div className="logos">
                    <Link to="/">
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                    </Link>
                </div>
                <div className="mains">
                    <div className="title">
                        <Link to="/login">登录</Link>
                        <i>·</i>
                        <Link to="/register">注册</Link>
                    </div>
                    <p className="user">
                        <i className="iconfont">&#xe642;</i> 
                        <input type="text" value={this.state.phone} onChange={(e)=>this.changePhone(e)} placeholder="手机号或邮箱" />
                    </p>
                    <p className="pass">
                        <i className="iconfont">&#xe61f;</i>
                        <input type="password" value={this.state.password} onChange={(e)=>this.changePass(e)}  placeholder="密码" />
                    </p>
                    <div className="passs">
                        <p className="remenberPass">
                            <input type="checkbox" checked={this.state.checked} onChange={this.fn.bind(this)} /><span>记住我</span>
                        </p>
                        <a href="#" className="forgetPass">登录遇到问题？</a>
                    </div>
                        <button className="submits" onClick={this.login.bind(this)}>登录</button>
                    <div className="otherLogin">
                        <h6>社交账号登录</h6>
                        <ul className="otherLoginList" >
                              <li>
                                  <a href='#'>
                                      <i className="iconfont sina">&#xe609;</i>
                                  </a>
                              </li>
                              <li>
                                  <a href='#'>
                                      <i className="iconfont weChat">&#xe63f;</i>
                                  </a>
                              </li>
                              <li>
                                  <a href='#'>
                                      <i className="iconfont qq">&#xe663;</i>
                                  </a>
                              </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default Login