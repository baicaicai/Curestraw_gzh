'use strict';
var router = require('express').Router();

var WechatAPI = require('wechat-api');
var api = new WechatAPI('wx57e7a9c41e3e2e53','06749f7b355dd05cf4368d3ad66ebc75');

// 查询 setting 列表
router.get('/', function(req, res, next) {
    res.render('settings', {
      title: '环球易诊公众号后台'
    })
});

//设置初始的公众号菜单
router.get('/setMenu', function(req, res, next) {
    var menu =  {  
            "button":[
                {
                "name":"环球医讯",
                "sub_button":[
                    {
                    "type":"click",
                    "name":"突破性疗法",
                    "key":"name1"
                    },
                    {
                    "type":"click",
                    "name":"海外药品价格",
                    "key":"name2"
                    },
                    {
                    "type":"view",
                    "name":"最新资讯",
                    "url":"http://123.206.15.93/?page_id=12597"
                    }
                ]
                },
                {
                "name":"我们的服务",
                "sub_button":[
                    {
                    "type":"click",
                    "name":"免疫及靶向疗法",
                    "key":"pd1"
                    },
                    {
                    "type":"click",
                    "name":"基因检测",
                    "key":"gene"
                    },
                    {
                    "type":"click",
                    "name":"罕见病",
                    "key":"orphan"
                    }
                ]
                },
                {
                "name":"关于",
                "sub_button":[
                    {
                    "type":"click",
                    "name":"关于我们",
                    "key":"about"
                    },
                    {
                    "type":"click",
                    "name":"常见问题",
                    "key":"q&a"
                    },
                    {
                    "type":"click",
                    "name":"服务流程",
                    "key":"process"
                    }
                ]
                }
            ]
    };

    api.createMenu(menu,function(errcode,errmsg){
        console.log(errcode,errmsg);
    });

    res.render('settings', {
      menu: menu
    })
});

router.get('/getMaterials', function(req,res,next){
    var materials = '';
    var type = 'news';
    var offset= 0;
    var count = 20;
    api.getMaterials(type, offset, count, function(err,result,res){
        console.log(result);
        console.log(result.item[0].content);
    });
});

module.exports = router;