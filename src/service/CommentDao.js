/**
 * Created by lorne on 2017/12/18
 * Function:
 * Desc:
 */


import Api from './Api';
import {get, post, setDpLang, del, setAccessToken} from './HttpUtil';
import {strNotNull} from './utils'

/*删除评论接口*/
export function delDeleteComment(body, resolve, reject) {
    del(Api.delete_comment, body, ret => {
        resolve(ret.data)
    }, reject)
}

/*资讯视频评论接口*/
export function postComment(body, resolve, reject) {
    post(Api.topic_comments, body, ret => {
        resolve(ret.data)
    }, reject)
}


//个人动态
export function getPersonDynamic(body, resolve, reject) {
    get(Api.personDynamic_info(body), ret => {
        resolve(ret.data);
    }, reject)
}

//获取视频评论列表信息
export function getVideoCommentsInfo(body, resolve, reject) {
    get(Api.video_comment_info(body), ret => {
        resolve(ret.data);
    }, reject)
}

//获取视频点赞列表信息
export function postVideoLikesInfo(body, resolve, reject) {
    post(Api.video_likes_info(body), {}, ret => {
        resolve(ret.data);
    }, reject)
}

//获取资讯评论列表信息
export function getCommentsInfo(body, resolve, reject) {
    get(Api.info_comment_info(body), ret => {
        resolve(ret.data);
    }, reject)
}

//获取资讯点赞列表信息
export function postNewLikesInfo(body, resolve, reject) {
    post(Api.new_likes_info(body), {}, ret => {
        resolve(ret.data);
    }, reject)
}
