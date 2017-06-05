//  /api/ad
import {get} from '../index';
export function getAd() {
    return get('/api/ad');
}
export function getAd2() {
    return get('/api/ad2');
}
//获取列表数据
export function getFace(city,page){
    return get('/api/face/'+city+'/'+page);
}

export function getBibu(city,page) {
    return get('/api/bibu/'+city+'/'+page);
}
export function getXZ(city,page) {
    return get('/api/xz/'+city+'/'+page);
}
export function getOther(city,page) {
    return get('/api/other/'+city+'/'+page);
}
export function getNav() {
    return get('/api/nav');
}