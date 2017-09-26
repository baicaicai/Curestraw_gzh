'use strict';
var router = require('express').Router();

var WechatAPI = require('wechat-api');
var api = new WechatAPI('wx57e7a9c41e3e2e53', '06749f7b355dd05cf4368d3ad66ebc75');

// 查询 setting 列表
router.get('/', function (req, res, next) {
    res.render('settings', {
        title: '环球易诊公众号后台'
    })
});

//设置初始的公众号菜单
router.get('/setMenu', function (req, res, next) {
    var menu = {
        "button": [{
            "type": "view",
            "name": "在线咨询",
            "sub_button": [{
                "type": "view",
                "name": "药价查询",
                "url": "http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000032&idx=1&sn=50f3dc4033a44900addca39278c6e220&chksm=7bf469104c83e0068709d6ae950781833277ae0c4b460b19c67a87709f98864904e674101e65#rd"
            },
            {
                "type": "view",
                "name": "在线咨询药师",
                "url": "https://static.meiqia.com/dist/standalone.html?_=t&eid=74531"
            }
            ]
        },
        {
            "name": "我们的服务",
            "sub_button": [{
                "type": "view",
                "name": "环球问药服务",
                "url": "http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000026&idx=1&sn=ff1001570d9d1a5b590bf76a627284e3&chksm=7bf4692a4c83e03cbb9dacb6291455a1d4f84b3e02846c56430dc47cd2e0bb0db89b9ecc8686#rd"
            }
            ]
        },
        {
            "name": "关于",
            "sub_button": [{
                "type": "view",
                "name": "关于我们",
                "url": "http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000005&idx=1&sn=74300138fa01e846af0e4fcfcd770a13&chksm=7bf469354c83e023000dd39a3454d5ba8653bdad39db808489f20fb2ed3c300a19d285c594b9#rd"
            },
            {
                "type": "view",
                "name": "常见问题",
                "url": "http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000015&idx=1&sn=b261dd02afed886f724325454b29b55c&chksm=7bf4693f4c83e029536f324c53d2decd3bc09921fd99127aa6231d66b67cbf1670173539125b#rd"
            },
            {
                "type": "view",
                "name": "服务流程",
                "url": "http://mp.weixin.qq.com/s?__biz=MzU1MzI4ODAzMQ==&mid=100000026&idx=1&sn=ff1001570d9d1a5b590bf76a627284e3&chksm=7bf4692a4c83e03cbb9dacb6291455a1d4f84b3e02846c56430dc47cd2e0bb0db89b9ecc8686#rd"
            }
            ]
        }
        ]
    };

    api.createMenu(menu, function (errcode, errmsg) {
        console.log(errcode, errmsg);
    });

    res.render('settings', {
        menu: menu
    })
});

router.get('/getMaterials', function (req, res, next) {
    var materials = '';
    var type = 'news';
    var offset = 0;
    var count = 20;
    api.getMaterials(type, offset, count, function (err, result, res) {
        console.log(result);
        console.log(result.item[0].content);
    });
});

module.exports = router;