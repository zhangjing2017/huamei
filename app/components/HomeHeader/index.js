import React,{Component} from 'react';
//主页头部组件
import './index.less';
import {Link} from 'react-router-dom';
let image=require('../../assets/images/9.png');
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link to="/city">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxia2"></i>
                </div>
                </Link>
                <div className="logo">
                    <img src={image} alt=""/>
                </div>

            </div>
        )
    }
}

