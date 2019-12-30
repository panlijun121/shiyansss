import React from 'react';
import '../css/nav.css';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import Router from '../router/index';
import One from '../router/one'

const { Search } = Input;
class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='header_nav'>
                        <ul>
                            <li><NavLink to='/home'>豆瓣</NavLink></li>
                            <li><NavLink to='/home'>读书</NavLink></li>
                            <li><NavLink to='/home'>电影</NavLink></li>
                            <li><NavLink to='/home'>音乐</NavLink></li>
                            <li><NavLink to='/home'>同城</NavLink></li>
                            <li><NavLink to='/home'>小组</NavLink></li>
                            <li><NavLink to='/home'>阅读</NavLink></li>
                            <li><NavLink to='/home'>FM</NavLink></li>
                            <li><NavLink to='/home'>时间</NavLink></li>
                            <li><NavLink to='/home'>豆品</NavLink></li>
                            <li><NavLink to='/home'>更多</NavLink></li>
                        </ul>
                        <div>
                            <span><NavLink to='/home'>登录注册</NavLink></span>
                            <span><NavLink to='/home'>下载豆瓣客户端</NavLink></span>
                        </div>
                    </div></div>
                <div className='header_bottom'>
                    <div className="box">
                        <div>
                            <NavLink className='log' to='/home'>豆瓣电影</NavLink>
                            <Search
                                placeholder="搜索电影、电视剧、综艺、影人"
                                onSearch={value => console.log(value)}
                                style={{ width: 500, height: 30 }}
                            />
                        </div>
                    <div className='Logo'>豆瓣</div>
                    </div>
                </div>
                <div className='box2'>
                    <ul>
                        <li><NavLink to='/home'>影讯&购票</NavLink></li>
                        <li><NavLink to='/home'>选电影</NavLink></li>
                        <li><NavLink to='/home'>电视剧</NavLink></li>
                        <li><NavLink to='/home'>排行榜</NavLink></li>
                        <li><NavLink to='/home'>分类</NavLink></li>
                        <li><NavLink to='/home'>影评</NavLink></li>
                        <li><NavLink to='/home'>2019年度榜单</NavLink></li>
                        <li><NavLink to='/home'>2018书影音报告</NavLink></li>
                    </ul>
                </div>
                <Router routes={One}></Router>
            </div>
        )
    }
}
export default Nav