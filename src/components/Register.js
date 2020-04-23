import React from "react"
import {Link} from "react-router-dom"
import "../assets/Register.css"
import store from "../store.js"
class Register extends React.Component {
    constructor(){
        super()
        this.state={
                username:'',
                phone:'',
                password:''
        }
    }
    register(){
        var usernameRegex = /^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/;
        var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
        var passRegex = /^1(3|4|5|6|7|8|9)\d{9}$/;
     
        if(!usernameRegex.test(this.state.username)){
            alert('用户名不合法，用户名由: 4-16位字母,数字,汉字,下划线组成')
        }else 
        if(!passRegex.test(this.state.phone)){
            alert('请输入正确的11位手机号')
        }else
        if(!pPattern.test(this.state.password)){
            alert('密码由：最少6位，包括至少1个大写字母，1个小写字母，1个数字组成')
        }else{
            var user ={
                username:this.state.username,
                phone:this.state.phone,
                password:this.state.password
            }
            store.dispatch({type:'add',user:user})
            this.props.history.push("/login")
        }   
    }
    changeUser(e){ 
        this.setState({
                username:e.target.value
        })
    }
    changePhone(e){ 
        this.setState({
                phone:e.target.value,
        })
    }
    changePass(e){ 
        this.setState({
                password:e.target.value
        })
    }
    getUser(e){
        var arr = store.getState().userArr
        var flag = arr.some(item=>{
            return item.username === e.target.value
        })
        if(flag){
            alert('用户名已经存在，请重新输入')
        }
    }
    getPhone(e){
        var arr = store.getState().userArr
        var flag = arr.some(item=>{
            return item.phone === e.target.value
        })
        if(flag){
            alert('手机号已存在，请重新输入')
        }
    }
    render() {
        return (
            <div className="registers">
                <div className="logos">
                    <Link to="/">
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="" />
                    </Link>
                </div>
                <div className="mains">
                    <div className="title">
                        <Link to="/login">登录</Link>
                        <i>·</i>
                        <Link to="/register">注册</Link>
                    </div>
                    <p className="names">
                           <i className="iconfont">&#xe642;</i>
                           <input type="text" value={this.state.username} onChange={(e)=>this.changeUser(e)} onBlur={e=>this.getUser(e)} placeholder="你的昵称" />
                    </p>
                    <p className="user">
                           <i className="iconfont">&#xe786;</i>
                           <input type="text"  value={this.state.phone} onChange={(e)=>this.changePhone(e)} onBlur={e=>this.getPhone(e)} placeholder="手机号" />
                    </p>
                    <p className="pass">
                        <i className="iconfont">&#xe61f;</i>
                        <input type="password"  value={this.state.password} onChange={(e)=>this.changePass(e)}  placeholder="设置密码" />
                    </p>
                    <button className="submits" onClick={this.register.bind(this)}>注册</button>
                    <div className="otherLogin">
                        <h6>社交账号登录</h6>
                        <ul className="otherLoginList" >
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
export default Register