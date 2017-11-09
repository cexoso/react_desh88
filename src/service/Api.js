/**
 * Created by lorne on 2017/8/24.
 */
export default {
    race_list: 'u/0/recent_races',
    race_info: race_info,
    news_info: news_info,
    player_info: player_info,
    game_info: game_info,
    rank_info: rank_info,
    sub_races: sub_races,
    sub_race_info: sub_race_info,
    weixin_js_sign: 'weixin/js_sign',
    activities_info: activities_info,
    ticket_info: ticket_info,
    video_Info:video_Info,
    choiseTicket_Info:choiseTicket_Info,
    videoGroup_Info:videoGroup_Info,
    product_Detail:product_Detail

}

function sub_race_info(body) {
    const {raceId, subId} = body;
    return 'races/' + raceId + '/sub_races/' + subId;
}


function sub_races(body) {
    const {raceId} = body;
    return 'races/' + raceId + '/sub_races';

}

function race_info(body) {
    const {raceId} = body;
    return 'u/0/races/' + raceId;
}
function news_info(body) {
    const {newsId} = body;
    return 'news/infos/' + newsId;
}
function player_info(body) {
    const {playerId} = body;
    return 'players/' + playerId;
}
function game_info(body) {
    const {gameId} = body;
    return 'u/0/races/' + gameId;
}
function rank_info(body) {
    const {playerId} = body;
    return 'players/' + playerId + '/ranks';
}

function activities_info(body) {
    const {activitiesId} = body;
    return 'activities/' + activitiesId;
}
function ticket_info(body) {
    const {ticketId, raceId} = body;
    return 'races/' + raceId + '/tickets/' + ticketId;

}
function video_Info(body) {
    const {video_id} = body;
    return 'news/videos/' + video_id;
}
function choiseTicket_Info(body) {
    const {choiseTicket_id} = body;
    return 'races/' + choiseTicket_id+"/tickets";
}
function videoGroup_Info(body) {
    const {video_id} = body;
    return 'videos/group/' + video_id+"/sub_videos";
}

function product_Detail(body) {
    const {product_id} = body;
    return 'products/' + product_id;
}

