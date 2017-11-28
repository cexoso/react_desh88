/**
 * Created by lorne on 2017/8/24.
 */
import Api from './Api';
import {get, post, setDpLang} from './HttpUtil';
import {strNotNull} from './utils'

var lang = 'zh';

export function setLang(lan) {
    setDpLang(strNotNull(lan) ? lan : lang);

}

export function getLang() {
    return lang;
}

export function getWeiXinSign(payload, resolve, reject) {
    post(Api.weixin_js_sign, payload, ret => {
        resolve(ret.data);
    }, reject)
}

export function getLogisticsInfo(body, resolve, reject){
    get(Api.logistics_info(body), ret => {
        resolve(ret.data);
    },reject)
}

export function getSubInfo(body, resolve, reject) {
    get(Api.sub_race_info(body), ret => {
        resolve(ret.data);
    }, reject)
}

export function getSubRace(body, resolve, reject) {
    get(Api.sub_races(body), ret => {
        resolve(ret.data);
    }, reject)
}

export function getRaceList(resolve, reject) {
    get(Api.race_list, (ret) => {
        resolve(ret.data);
    }, reject);
}

export function getRaceInfo(body, resolve, reject) {
    get(Api.race_info(body), (ret) => {
        resolve(ret.data);
    }, reject);
}

export function getNewsInfo(body, resolve, reject) {
    get(Api.news_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getPlayerInfo(body, resolve, reject) {
    get(Api.player_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getGameInfo(body, resolve, reject) {
    get(Api.game_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getRankInfo(body, resolve, reject) {
    get(Api.rank_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getActivitiesInfo(body, resolve, reject) {
    get(Api.activities_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getTicketInfo(body, resolve, reject) {
    get(Api.ticket_info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getVideoInfo(body, resolve, reject) {
    get(Api.video_Info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getChoiseTicketInfo(body, resolve, reject) {
    get(Api.choiseTicket_Info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getVideoGroup(body, resolve, reject) {
    get(Api.videoGroup_Info(body), ret => {
        resolve(ret.data);
    }, reject);
}
export function getProductDetail(body, resolve, reject) {
    get(Api.product_Detail(body), ret => {
        resolve(ret.data);
    }, reject);
}



