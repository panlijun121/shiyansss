import React from 'react';
import '../css/home.css';
import { Card } from 'antd';
import { NavLink } from "react-router-dom";


const { Meta } = Card;
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            list:''
        }
    }
    componentDidMount(){
        this.axios({
            url: this.api.theaters,
            method: 'get',
            params: {}
        }).then(res => {
            this.setState({
                list:res.data.subjects
            })
        })
    }
    render() {
        if(this.state.list){
        return (
            <div className="cont">
                <div className="cont_left">
                    <div className='con_theaters'>
                        <div className='con_title'>
                            <div className='con_titleright'>
                                <span>1/10</span>
                                <div>&lt;</div>
                                <div>&gt;</div>
                            </div>
                            <span>正在热映</span><NavLink to='/home'>全部正在热映》</NavLink><NavLink to='home'>即将上映》</NavLink>
                        </div>
                        <ul>
                            {
                            this.state.list.map(item => {
                                console.log(item)
                                return <li key={item.id}>
                                    <Card
                                        hoverable
                                        style={{ width: 115,height:250,margin:0}}
                                        cover={<img alt="example" src={item.images.small} />}
                                    >
                                        <Meta title={item.title} description="www.instagram.com" />
                                    </Card>
                                </li>
                            })
                            }
                        </ul>

                    </div>
                </div>
                <div className='cont_right'></div>
            </div>
        )}else{
            return ''
        }
    }
}
export default Home