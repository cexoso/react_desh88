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
    video_Info: video_Info,
    choiseTicket_Info: choiseTicket_Info,
    videoGroup_Info: videoGroup_Info,
    product_Detail: product_Detail,
    logistics_info: logistics_info,
    info_comment_info: info_comment_info,
    new_likes_info: new_likes_info,
    video_comment_info: video_comment_info,
    video_likes_info: video_likes_info,
    personDynamic_info: personDynamic_info,
    topic_comments: 'topic/comments',
    delete_comment:delete_comment,
    crowd_detail:crowd_detail

}

function crowd_detail(body) {
    const {id} = body;
    return `crowdfundings/${id}`;
}
function delete_comment(body) {
    const {id} = body;
    return `topic/comments/${id}`;
}

function sub_race_info(body) {
    const {raceId, subId} = body;
    return 'topic/' + raceId + '/sub_races/' + subId;
}


function personDynamic_info(dynamic) {
    const {user_id, page, page_size} = dynamic;
    return 'users/' + user_id + '/dynamics?page=' + page + '&page_size=' + page_size;

}

function video_comment_info(comments) {
    const {video_id, page, page_size} = comments;
    return 'topic/videos/' + video_id + '/comments?page=' + page + '&page_size=' + page_size;

}

function video_likes_info(likes) {
    const {video_id} = likes;
    return 'topic/videos/' + video_id + '/likes';

}


function info_comment_info(comments) {
    const {id, topic_type, page, page_size} = comments;
    return `topic/${topic_type}/${id}/comments?page=${page}&page_size=${page_size}`

}

function new_likes_info(likes) {
    const {info_id} = likes;
    return 'topic/infos/' + info_id + '/likes';

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
    return 'races/' + choiseTicket_id + "/tickets";
}

function videoGroup_Info(body) {
    const {video_id} = body;
    return 'videos/group/' + video_id + "/sub_videos";
}

function product_Detail(body) {
    const {product_id} = body;
    return 'products/' + product_id;
}

function logistics_info(body) {
    const {shipping_number, express_code, order_number} = body;
    return 'shipments/search?shipping_number=' + shipping_number + "&express_code=" + express_code + "&order_number=" + order_number;
}

