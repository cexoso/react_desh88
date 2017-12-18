/**
 * Created by lorne on 2017/12/18
 * Function:
 * Desc:
 */

import Api from './Api';
import {get, post, setDpLang, del, setAccessToken} from './HttpUtil';
import {strNotNull} from './utils'

/*资讯视频评论接口*/
export function postComment(body, resolve, reject) {
    post(Api.topic_comments, body, ret => {
        resolve(ret.data)
    }, reject)
}