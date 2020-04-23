import React from "react"
import "../assets/Details.css"
import { BackTop,Spin  } from "antd"

class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            obj: null,
            recommenedArr: [],
            loading:false,
            slug:null,
            step:2,
            pages:2
        }
    }
    componentDidMount() {
        this.fn1(this.props.location.state.slug)
    }
    fn1(val) {
        var slug = val
        this.$axios.get('/asimov/p/' + slug)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        obj: res.data,
                        slug:res.data.user.slug
                    })
                    this.fn3(this.state.slug)
                }
            })
    }
    fn3(slug){
        let {pages,step} = this.state
        this.$axios.get("/asimov/users/slug/" + slug + "/public_notes?order_by=top")
                        .then(res => {
                            this.setState({
                                recommenedArr: res.data.slice(0,pages+step),
                            })
                        })
    }
    fn(slug) {
        this.props.history.push({ pathname: "/details/" + slug, state: { slug: slug } })
    }
    changeSpin(){
        this.setState({
            loading:!this.state.loading
        })
    }
    mores(){
       
        setTimeout(()=>{
            this.setState({
                loading:!this.state.loading,
                step:this.state.step+2
            })
            this.fn3(this.state.slug)
        },1000)
           
    }
    render() {
        return (
            <div>
                {this.state.obj === null ? null : <div className="details">
                    <div>
                        <div className="essayContent">
                            <div className="essayTtile">
                                <h3>{this.state.obj.public_title}</h3>
                            </div>
                            {/* 作者信息 */}
                            <div className="detailsWriter">
                                <img src={this.state.obj.user.avatar} alt="" />
                                <div>
                                    <p>{this.state.obj.user.nickname}
                                        {this.state.obj.user.badges.map((item, index) => {
                                            return <img className="badges" key={index} src={item.image_url} />
                                        })}
                                        <span>关注</span></p>
                                    <span><i className="iconfont">&#xe63b;</i>{(this.state.obj.total_fp_amount / 10000).toFixed(1)}</span>
                                    <em>{this.state.obj.first_shared_at.split("T")[0]} {this.state.obj.first_shared_at.split("T")[1].substring(0, 8)}</em>
                                    <em>字数 {this.state.obj.wordage}</em>
                                    <em>阅读 {this.state.obj.user.likes_count}</em>
                                </div>
                            </div>
                            {/* 文章段落*/}
                            <div className="essaySection" dangerouslySetInnerHTML={{ __html: this.state.obj.free_content }} >
                            </div>
                            <div className="essayFoot">
                                <ul className="essayGood">
                                    <li>
                                        <i className="iconfont">&#xe603;</i>
                                    </li>
                                    <li>{this.state.obj.likes_count}人点赞 &gt;</li>
                                    <li>
                                        <i className="iconfont">&#xe63a;</i>
                                    </li>
                                </ul>
                                <div className="essayMore">
                                    <span><i className="iconfont">&#xe636;</i>沐夕书苑</span>
                                    <span className="mores">···</span>
                                    <ul className="essayOther">
                                        <li>
                                            分享文章
                                 </li>
                                        <li>
                                            收入专题
                                 </li>
                                        <li>
                                            收藏文章
                                 </li>
                                        <li>
                                            举报文章
                                 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 点赞支持 */}
                        <div className="giveLike">
                            <div className="giveLikeTop">
                                <span>"小礼物走一走，来简书关注我"</span>
                                <p>赞赏支持</p>
                                <em>共一人赞赏</em>
                            </div>
                            <div className="giveLikeBottom">
                                <img src={this.state.obj.user.avatar} alt="" />
                                <div>
                                    <p><em>{this.state.obj.user.nickname}</em>
                                        {this.state.obj.user.badges.map((item, index) => {
                                            return <img className="badges" key={index} src={item.image_url} />
                                        })}
                                        {this.state.obj.user.intro}
                                    </p>
                                    <p>
                                        <span>总资产238 (约17.98元)</span>
                                        <span>共写了{(this.state.obj.user.wordage / 100000).toFixed(1)}W字</span>
                                        <span>获得{this.state.obj.user.likes_count}个赞</span>
                                        <span> 共802个粉丝</span>
                                    </p>
                                </div>
                                <span>关注</span>
                            </div>
                        </div>
                        <div className="writeComment">
                            <div className="commenter">
                                <img src="" alt="" />
                            </div>
                            <div className="commentContent">
                                <textarea placeholder="写下你的评论..." >

                                </textarea>
                            </div>
                        </div>
                        {/* 精彩评论 */}
                        <div className="comments">
                            <div className="commentsTitle">
                                <h4>精彩评论 <span>{this.state.obj.featured_comments_count}</span></h4>
                            </div>
                            <div className="commentItem">
                                <img src="https://cdn2.jianshu.io/assets/default_avatar/1-04bbeead395d74921af6a4e8214b4f61.jpg" alt="" />
                                <div className="commenter">
                                    <h6>安喆寄瑾凉</h6>
                                    <p>39楼 04.06 18:58</p>
                                    <div className="commentContent">
                                        太赞了，很棒嘛，我之前也是在简书兼职写作想赚点钱，后来关注了
                                        微信公众 号：【炼火学院】 ，上面分享各种网赚教程 自媒体教程
                                        短 视频教程 等 各种项目内部绝密培训课程，学到了不少东西！
                            </div>
                                    <p className="commentItemFoot">
                                        <i className="iconfont">&#xe603;</i><span>22</span>
                                        <i className="iconfont">&#xe625;</i><span>回复</span>
                                    </p>
                                </div>
                                {/* 评论回复 */}
                                <div className="commentRelay">
                                    <div className="commentRelayHead">
                                        <img src="https://upload.jianshu.io/users/upload_avatars/22707325/49d2719d-65fa-41f0-978d-ff94b5fa8aee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="" />
                                        <div>
                                            <h6>按时发挥</h6>
                                            <p>04.08 19:26</p>
                                        </div>
                                        <div className="commentRelayCon">
                                            兼职/缺项目的看过来👇🏻
                                            实力平台，男女可做
                                            稳定副业，可长期做，不是棋牌，也不是什么养狗养猫养龙项目，割韭菜你会去？更不是区块链趣步，链信这种，绝对合法合规，强大背景，实力平台，做的好五险一金，保底工资
                                            相信我一次，一定不会错，
                             </div>
                                        <p className="commentRelayFoot">
                                            <i className="iconfont">&#xe625;</i><span>回复</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* 全部评论 */}
                        <div className="comments">
                            <div className="commentsTitle">
                                <h4>全部评论 <span>{this.state.obj.public_comment_count}</span><em>只看作者</em></h4>

                            </div>
                            <div className="commentItem">
                                <img src="https://cdn2.jianshu.io/assets/default_avatar/1-04bbeead395d74921af6a4e8214b4f61.jpg" alt="" />
                                <div className="commenter">
                                    <h6>安喆寄瑾凉</h6>
                                    <p>39楼 04.06 18:58</p>
                                    <div className="commentContent">
                                        太赞了，很棒嘛，我之前也是在简书兼职写作想赚点钱，后来关注了
                                        微信公众 号：【炼火学院】 ，上面分享各种网赚教程 自媒体教程
                                        短 视频教程 等 各种项目内部绝密培训课程，学到了不少东西！
                            </div>
                                    <p className="commentItemFoot">
                                        <i className="iconfont">&#xe603;</i><span>赞</span>
                                        <i className="iconfont">&#xe625;</i><span>回复</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 侧边栏 */}
                    <div className="detailsAside">
                        {/* 广告 */}
                        <div className="advertising">
                            <img src="https://oimagea7.ydstatic.com/image?id=-1710829416729871650&product=adpublish&w=520&h=347" alt="" />
                        </div>
                        {/* 作者信息 */}
                        <div className="detailsWriter">
                            <img src={this.state.obj.user.avatar} alt="" />
                            <div>
                                <p>{this.state.obj.user.nickname}
                                    {this.state.obj.user.badges.map((item, index) => {
                                        return <img className="badges" key={index} src={item.image_url} />
                                    })}
                                    <span>关注</span></p>
                                <span>总资产238 (约17.98元)</span>
                            </div>
                        </div>
                        {/* list */}
                        <ul className="asideList">
                            <li>
                                <span>书单分享：提高工作效率看这六本书真是太太太有用了～</span>
                                <p>阅读 337</p>
                            </li>
                            <li>
                                <span>25岁做什么可以在5年后受益？</span>
                                <p>阅读 37</p>
                            </li>
                            <li>
                                <span>励志分享|很丧的时候就看看这十句话吧</span>
                                <p>阅读 257</p>
                            </li>
                        </ul>
                        {/* 推荐阅读 */}
                        <div className="reading">
                            <h6>推荐阅读</h6>
                            <ul className="asideList">
                                {this.state.recommenedArr.length <= 0 ? null :
                                    this.state.recommenedArr.map(item => {
                                        return (
                                            <li key={item.object.data.slug}>
                                                <span onClick={this.fn.bind(this, item.object.data.slug)}>{item.object.data.title}</span>
                                                <p>阅读  {item.object.data.views_count} </p>
                                            </li>
                                        )
                                    })
                                }
                                <Spin  tip="加载中..."  onClick={this.changeSpin.bind(this)} spinning={this.state.loading}>
                                    <button className="changeSpin" onClick={this.mores.bind(this)}>查看更多</button>
                                </Spin>
                            </ul>
                        </div>
                    </div>
                    {/* 返回顶部 */}
                    <BackTop visibilityHeight={500} />
                    {/* 左侧定位 */}
                    <ul className="leftFixed">
                        <li>
                            <p><i className="iconfont">&#xe603;</i></p>
                            <span>{this.state.obj.likes_count}赞</span>
                        </li>
                        <li>
                            <p><i className="iconfont">&#xe66e;</i></p>
                            <span>5赏</span>
                        </li>
                    </ul>
                </div>
                }
            </div>
        )
    }
}

export default Details