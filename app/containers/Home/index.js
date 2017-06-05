import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index';
import Slider from '../../components/Slider/index';
import Ad from './subpage/Ad';
import {connect} from 'react-redux';
import Face from './subpage/Face';
import Bibu from "./subpage/Bibu";
import Xz from "./subpage/Xz";
import Ad2 from "./subpage/Ad2";
import Other from "./subpage/Other";
import Nav from "./subpage/Nav";
let images=[
    {src:require('../../../app/assets/images/10.png')},
    {src:require('../../../app/assets/images/11.png')},
    {src:require('../../../app/assets/images/10.png')},
    ];
class Home extends Component{
    render(){
        return (
            <div>
               <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider images={images}/>
                <Nav/>
                <Ad/>
                <Ad2/>
                <Face cityName={this.props.userInfo.cityName}/>
                <Bibu/>
                <Xz/>
                <Other/>
            </div>
        )
    }
}
//取出redux中的城市传递给HomeHeader组件
export default connect(
    state=>{
        return {userInfo:state.userInfo};//取出redux  state中userInfo的数据，赋予给变量userInfo
    }
)(Home)
