import React,{Component} from 'react';
import {getAd} from '../../../fetch/home';
import './index.less';

export default class Ad extends Component{
    constructor(){
        super();
        this.state={
            //data:[]
        }
    }
    render(){
        let images=[
            {src:require('../../../../app/assets/images/19.jpg')},
            {src:require('../../../../app/assets/images/20.jpg')},
            {src:require('../../../../app/assets/images/21.jpg')},
            {src:require('../../../../app/assets/images/12.png')}
        ];
        return (
            <div className="ad">
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
        getAd().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}

