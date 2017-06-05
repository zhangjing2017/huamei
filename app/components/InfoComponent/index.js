import React,{Component} from 'react';
import Star from "../Star/index";
import './index.less';
export default class InfoComponent extends Component{
    render(){
        let{img,star,desc,title,subTitle,price}=this.props.data;
        return (
            <div className="info-component">
            <div className="info-list">
                <img src={img} alt=""/>
            </div>
            <div className="info-detail">
                    <h3>{title}</h3>
                    <div className="info-star">
                        {/*Star组件要接收一个点亮的星星数*/}
                        <span>￥{price}</span>
                    </div>
                    <p>{subTitle}</p>
                </div>
                <br/>
                <hr/>
                {/*将内容转换成html插入到页面中*/}
            <div className="cz" dangerouslySetInnerHTML={{__html:desc}}></div>

            </div>
        )
    }
}
