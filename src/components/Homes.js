import React from "react"
import "../assets/Homes.css"
import { Link } from "react-router-dom"
import { Pagination, BackTop } from 'antd'
class Homes extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            total: null,
            current: 1,
            pagesize: 5,
            pagelist: []
        }
    }
    componentDidMount() {
        let { current, pagesize } = this.state
        this.$axios.get("/asimov/trending/now")
            .then(res => {
                console.log(res.data)
                this.setState({
                    arr: res.data,
                    pagelist: res.data.slice((current - 1) * pagesize, current * pagesize),
                    total: res.data.length
                })
            })
    }
    onChange = (page) => {
        let { pagesize } = this.state
        this.setState({
            current: page,
            pagelist: this.state.arr.slice((page - 1) * pagesize, page * pagesize)
        });
    }
    render() {
        return (
            <div className="homes">
                <div className="essay">
                    {
                        this.state.pagelist.map(item => {
                            return (
                                <div key={item.object.data.id} className="essayItem">
                                    <div className="essayItemLeft">
                                        <div className="title">
                                            <h3><Link to={{ pathname: "/details/" + item.object.data.slug, state: { slug: item.object.data.slug } }}>{item.object.data.title}</Link></h3>
                                        </div>
                                        <div className="essayItemBody">
                                            {item.object.data.public_abbr}
                                        </div>
                                        <ul className="essayItemFoot">
                                            <li>
                                                <i className="iconfont">&#xe63b;</i><span>{(item.object.data.total_fp_amount / 10000).toFixed(1)}</span>
                                            </li>
                                            <li>
                                                <span>{item.object.data.user.nickname}</span>
                                            </li>
                                            <li>
                                                <i className="iconfont">&#xe63f;</i><span>{item.object.data.public_comments_count}</span>
                                            </li>
                                            <li>
                                                <i className="iconfont">&#xe61b;</i><span>{item.object.data.likes_count}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        item.object.data.list_image_url === "" ? null : <div className="essayItemRight">
                                            <img src={item.object.data.list_image_url} alt="" />
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                    <Pagination simple current={this.state.current} onChange={this.onChange} pageSize={this.state.pagesize} total={this.state.total} />
                </div>

                {/* 侧边栏 */}
                <div className="aside">
                    <ul className="asideNav">
                        <li>
                            <a href="#">
                                <img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="" />
                            </a>
                        </li>

                    </ul>
                    <div className="qrCode">
                        <a href="#">
                            <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
                            <div>
                                <span>下载简书手机App&gt;</span>
                                <p>随时随地发现和创作内容</p>
                            </div>
                        </a>
                    </div>
                    {/* 推荐作者 */}
                    <div className="writer">
                        <div className="title">
                            <h5>推荐作者</h5>
                            <span>换一批</span>
                        </div>
                        <ul className="writerList">
                            <li>
                                <img src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                <div>
                                    <span>卢璐说</span>
                                    <p>写了1235k字·31.1k喜欢</p>
                                </div>
                                <p>+关注</p>
                            </li>
                            <li>
                                <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                <div>
                                    <span>董科平日记</span>
                                    <p>写了135k字·3.1k喜欢</p>
                                </div>
                                <p>+关注</p>
                            </li>
                            <li>
                                <img src="https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                <div>
                                    <span>邓哲</span>
                                    <p>写了135k字·1.1k喜欢</p>
                                </div>
                                <p>+关注</p>
                            </li>
                            <button>查看更多 &gt;</button>
                        </ul>
                    </div>

                </div>
                    <BackTop />
            </div>
        )
    }
}

export default Homes