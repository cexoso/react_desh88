export const items = [
    {
        "question1": '德州扑客是什么样的平台呢？',
        "question2": '《德州扑客》为德州扑克牌手及德州扑克爱好者提供一系列服务的平台，平台内含国内外海量资讯及视频，出售赛事相关旅游套票。'
    },
    {
        "question1": '怎么注册app账号',
        "question2": '微信可以直接登录，但是需要手机号验证，以后可以直接用微信登陆。\n' +
        '   手机号直接注册登录，也可以通过微信登陆绑定用手机注册过的账号。'
    },
    {
        "question1": '购买票务后怎么收到购买的套餐。',
        "question2": "1.实体票，工作人会通过您填写的地址寄送 实体票给你。\n" +
        "                                2.电子票，工作人员会发送电子邀请函到您填写的邮箱。您到比赛现场后，出示您的电子邀请函给工作人员即可。\n" +
        "                                套餐内的酒店等服务，工作人员也会通过您提供的身份证信息进行给您预订酒店。"
    },
    {
        "question1": '在扑客购买的票务能够转手吗？',
        "question2": '通过在扑客平台下单的票务，暂时无法转授予他人，因为已经登记了您的实名信息以便您参赛。'
    },
    {
        "question1": '购买票务后能退款吗？',
        "question2": '目前扑客平台的套餐购买后是无法退单的，因为购买套餐后，这边会帮自动预订套餐内的服务，目前是无法退单的。若遇不可抵挡因为导致赛事无法进行，才可以进行退款。'
    },
    {
        "question1": '实名认证可以修改吗？',
        "question2": '实名认证后是无法修改的。若您有填写有误，可以联系客服进行修改。'
    },
    {
        "question1": '票务有保障吗？',
        "question2": '这个是有保障的，我们这里是各大官方举行的比赛，权威机构认证。'
    },
    {
        "question1": '为什么要身份证认证跟护照认证?',
        "question2": '因为参加国内比赛的需要实名认证，所以需要填写身份证信息进行实名认证。\n' +
        '   海外的比赛则需要提供护照的信息了。而且购票时候会需要您的证件信息进行预订酒店车票等。'
    }
]
export const default_img = "https://www.deshpro.com/pokerpro.png";
export const image_url = 'http://cdn.deshpro.com';  //生产环境cdn地址
var local_image_url = 'http://localhost:3000';  //本地环境

export const sharePage01 = image_url + '/static/images/H5SahrePage01.png';
export const sharePage02 = image_url + '/static/images/H5SahrePage02.png';
export const sharePage05 = image_url + '/static/images/H5SahrePage05.png';
export const sharePage08 = image_url + '/static/images/H5SahrePage08.png';
export const person01 = image_url + '/static/images/person01.png';
export const person02 = image_url + '/static/images/person02.png';
export const person03 = image_url + '/static/images/person03.png';
export const person04 = image_url + '/static/images/person04.png';
export const character = image_url + '/static/images/h5-character.png';

//支付
export const ICBC = local_image_url + '/static/images/pay/ICBC.png';
export const everbright = local_image_url + '/static/images/pay/everbright.png';
export const guangdongDevelopment = local_image_url + '/static/images/pay/guangdongDevelopment.png';
export const Huaxia = local_image_url + '/static/images/pay/Huaxia.png';
export const construction = local_image_url + '/static/images/pay/construction.png';
export const communications = local_image_url + '/static/images/pay/communications.png';
export const minsheng = local_image_url + '/static/images/pay/minsheng.png';
export const ABC = local_image_url + '/static/images/pay/ABC.png';
export const pingAn = local_image_url + '/static/images/pay/pingAn.png';
export const Pudong = local_image_url + '/static/images/pay/Pudong.png';
export const Industrial = local_image_url + '/static/images/pay/Industrial.png';
export const postal = local_image_url + '/static/images/pay/postal.png';
export const Merchants = local_image_url + '/static/images/pay/Merchants.png';
export const china = local_image_url + '/static/images/pay/China.png';
export const CITIC = local_image_url + '/static/images/pay/CITIC.png';
export const Shanghai = local_image_url + '/static/images/pay/Shanghai.png';

export const BANK_ITEMS = [
    {'image': ICBC, 'name': "中国工商银行", 'credit_single_limit': "2万元丨2万元", 'Debit_single_limit': "2万元丨2万元"},
    {'image': everbright, 'name': "中国光大银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': guangdongDevelopment, 'name': "中国广发银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': Huaxia, 'name': "华夏银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': construction, 'name': "中国建设银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': communications, 'name': "交通银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': minsheng, 'name': "民生银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': ABC, 'name': "中国农业银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': pingAn, 'name': "平安银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': Pudong, 'name': "上海浦发银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': Industrial, 'name': "兴业银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': postal, 'name': "中国邮政储蓄银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': Merchants, 'name': "招商银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': china, 'name': "中国银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': CITIC, 'name': "中信银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
    {'image': Shanghai, 'name': "上海银行", 'credit_single_limit': "5万元丨4万元", 'Debit_single_limit': "2万元丨4万元"},
]

