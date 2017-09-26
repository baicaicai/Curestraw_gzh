var router = require('express').Router();
// 引用 wechat 库，详细请查看 https://github.com/node-webot/wechat
var wechat = require('wechat');
var config = {
    token: 'curestraw',
    appid: 'wx57e7a9c41e3e2e53',
    encodingAESKey: '3MNTFmP7Uflk0v131Vw7QG03wJXm1G5byQoJhD15nsW'
};

var WechatAPI = require('wechat-api');
var api = new WechatAPI('wx57e7a9c41e3e2e53', '06749f7b355dd05cf4368d3ad66ebc75');

router.use('/', wechat(config).text(function(message, req, res, next) {
    // message为文本内容
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125035',
    // MsgType: 'text',
    // Content: 'http',
    // MsgId: '5837397576500011341' }
    var keyArray = ['你好', '约吗'];
    var content = message.Content;
    var keyIndex = keyArray.indexOf(content);
    switch (keyIndex) {
        case 0:
            {
                res.reply({
                    type: "text",
                    content: '您好，大家好才是真的好！'
                });

            }
            break;
        case 1:
            {
                res.reply({
                    type: "text",
                    content: '不约，不约，叔叔我们不约！'
                });

            }
            break;
        default:
            res.transfer2CustomerService();
            break;
    }
}).image(function(message, req, res, next) {
    // message为图片内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359124971',
    // MsgType: 'image',
    // PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
    // MediaId: 'media_id',
    // MsgId: '5837397301622104395' }}).voice(function(message, req, res, next) {
    // TODO
}).voice(function(message, req, res, next) {
    // message为音频内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'voice',
    // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
    // Format: 'amr',
    // MsgId: '5837397520665436492' }
}).video(function(message, req, res, next) {
    // message为视频内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'video',
    // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
    // ThumbMediaId: 'media_id',
    // MsgId: '5837397520665436492' }
    // TODO
}).shortvideo(function(message, req, res, next) {
    // message为短视频内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'shortvideo',
    // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
    // ThumbMediaId: 'media_id',
    // MsgId: '5837397520665436492' }
    // TODO
}).location(function(message, req, res, next) {
    // message为链接内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'link',
    // Title: '公众平台官网链接',
    // Description: '公众平台官网链接',
    // Url: 'http://1024.com/',
    // MsgId: '5837397520665436492' }
    // TODO
}).link(function(message, req, res, next) {
    // message为链接内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'link',
    // Title: '公众平台官网链接',
    // Description: '公众平台官网链接',
    // Url: 'http://1024.com/',
    // MsgId: '5837397520665436492' }
    // TODO
}).event(function(message, req, res, next) {
    // message为事件内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'event',
    // Event: 'LOCATION',
    // Latitude: '23.137466',
    // Longitude: '113.352425',
    // Precision: '119.385040',
    // MsgId: '5837397520665436492' }
    // TODO
    console.log(message);

    switch (message.Event) {
        case "subscribe":
            {
                subInfo();
            }
            break;

        case "unsubscribe":
            {
                //unsubInfo();
            }
            break;

        case "CLICK":
            {
                clickMenu();
            }
            break;
        default:
            {
                res.reply({
                    type: "text",
                    content: '服务器挂掉了，你的要求暂时无法满足……'
                });
            }
            break;
    }

    function subInfo() {
        res.reply([{
            title: '环球易诊',
            description: '海外突破性疗法的资讯、价格、适用性，国内治疗及后续随诊，我们提供一站式服务！',
            picurl: 'http://mmbiz.qpic.cn/mmbiz_jpg/rXibKrBsdIjOr2j73SJ0LlkfHhSUGkMopA8Lm58vkm7UWnxlPI9Xkicme9PeibickbUIzsQPsjGcPFk0fAROckjib0Q/0?wx_fmt=jpeg',
            url: 'http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000005&idx=1&sn=74300138fa01e846af0e4fcfcd770a13&chksm=7bf469354c83e023000dd39a3454d5ba8653bdad39db808489f20fb2ed3c300a19d285c594b9#rd'
        }]);
    };

    function sendAbout() {
        res.reply([{
            title: '环球易诊',
            description: '海外突破性疗法的资讯、价格、适用性，国内治疗及后续随诊，我们提供一站式服务！',
            picurl: 'http://mmbiz.qpic.cn/mmbiz_jpg/rXibKrBsdIjOr2j73SJ0LlkfHhSUGkMopA8Lm58vkm7UWnxlPI9Xkicme9PeibickbUIzsQPsjGcPFk0fAROckjib0Q/0?wx_fmt=jpeg',
            url: 'http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000005&idx=1&sn=74300138fa01e846af0e4fcfcd770a13&chksm=7bf469354c83e023000dd39a3454d5ba8653bdad39db808489f20fb2ed3c300a19d285c594b9#rd'
        }]);
    };

    function sendProcess() {
        res.reply([{
            title: '服务流程',
            description: '我们将用最快的速度，以最低的价格，把最好的突破性疗法交到您手上',
            picurl: 'https://mmbiz.qlogo.cn/mmbiz_png/rXibKrBsdIjNm4phlgR2AGvwA6icOORyy5oPRZKdEgARvBfQQ0Hr80y16UorG68dfPWOf7QSAZc9icNx13dKAVZaQ/0?wx_fmt=png',
            url: 'http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000010&idx=1&sn=f24e1aa63f8cbb308c9d5b956d241996&chksm=7bf4693a4c83e02c2c052f6cc122e8c18f35ff93db33c604da3843f134f22e075e590e38ef18#rd'
        }]);
    };

    function clickMenu() {
        switch (message.EventKey) {
            case "name1":
                {
                    res.reply({
                        type: "text",
                        content: '正在努力整理中，请稍后再试'
                    });
                }
                break;
            case "name2":
                {
                    res.reply({
                        type: "text",
                        content: '正在努力整理中，请稍后再试'
                    });
                }
            case "about":
                {
                    sendAbout();
                }
            case "process":
                {
                    sendProcess();
                }
                break;
            default:
                res.reply({
                    type: "text",
                    content: '服务器挂掉了，你的要求暂时无法满足……'
                });
                break;
        }
    };

}).device_text(function(message, req, res, next) {
    // message为设备文本消息内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'device_text',
    // DeviceType: 'gh_d3e07d51b513'
    // DeviceID: 'dev1234abcd',
    // Content: 'd2hvc3lvdXJkYWRkeQ==',
    // SessionID: '9394',
    // MsgId: '5837397520665436492',
    // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
    // TODO
}).device_event(function(message, req, res, next) {
    // message为设备事件内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'device_event',
    // Event: 'bind'
    // DeviceType: 'gh_d3e07d51b513'
    // DeviceID: 'dev1234abcd',
    // OpType : 0, //Event为subscribe_status/unsubscribe_status时存在
    // Content: 'd2hvc3lvdXJkYWRkeQ==', //Event不为subscribe_status/unsubscribe_status时存在
    // SessionID: '9394',
    // MsgId: '5837397520665436492',
    // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
    // TODO
}).middlewarify());

module.exports = router;