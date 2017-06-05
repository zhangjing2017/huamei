import React,{Component} from 'react';
import {getAd2} from '../../../fetch/home';
import './index.less';
export default class Ad2 extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        let images=[
            {src:require('../../../../app/assets/images/23.jpg')},
            {src:require('../../../../app/assets/images/24.jpg')},
            {src:require('../../../../app/assets/images/25.jpg')},
            {src:require('../../../../app/assets/images/13.png')}
        ];
        return (
            <div className="ad2">
                <div className="ad-left">
                    <img src={images[0].src}/>
                    <img src={images[1].src}/>
                    <img src={images[2].src}/>
                </div>
                <div className="ad-right">
                    <img src={images[3].src}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        getAd2().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}

