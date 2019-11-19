import React from 'react'
import { Row, Col, Input, Carousel ,Icon} from 'antd'
import { Link } from 'react-router-dom'

import img1 from '../imgs/轮播图1.jpg'
import img5 from '../imgs/eat.jpg'

var InitialCss = require('../InitialPage/initial.css')


export default class HomePage extends React.Component {

    render() {

        return (
            <div>
                <div className={InitialCss.space}></div>
                <div className={InitialCss.first}>
                    <Row type="flex" justify="space-around">
                        <Col span={3}></Col>
                        <Col span={2}>
                            <p className={InitialCss.title}>名字</p>
                        </Col>
                        <Col span={7}>
                            <Input.Search placeholder="请输入想要搜索的内容"
                                onSearch={value => console.log(value)}
                                style={{ width: 250 }} />
                        </Col>
                        <Col span={1}>
                            <Link to="/" className={InitialCss.link}>首页</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="/" className={InitialCss.link}>我们的服务</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="/" className={InitialCss.link}>新闻动态</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="/" className={InitialCss.link}>联系我们</Link>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>
                <div className={InitialCss.second}>
                    <Carousel autoplay className={InitialCss.picture}>
                        <div>
                            <image src={img1} width={1535} height={380}></image>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className={InitialCss.third}>
                    <Row type="flex" justify="space-around">
                        <Col span={2}></Col>
                        <Col span={5}>
                            <div className={InitialCss.one}>
                                <Icon type="home" style={{fontSize:'40px'}} className={InitialCss.one1}></Icon>
                                <p>我的首页</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={InitialCss.one}>
                                <Icon type="user" style={{fontSize:'40px'}} className={InitialCss.one1}></Icon>
                                <p>个人中心</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={InitialCss.one}>
                                <Icon type="sketch" style={{fontSize:'40px'}} className={InitialCss.one1}></Icon>
                                <p>会员中心</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={InitialCss.one}>
                                <Icon type="phone" style={{fontSize:'40px'}} className={InitialCss.one1}></Icon>
                                <p>在线客服</p>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <div className={InitialCss.fourth}>
                    <Row>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        )
    }
}