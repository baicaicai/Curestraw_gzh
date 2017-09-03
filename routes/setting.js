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
                "name":"测试1",
                "sub_button":[
                    {
                    "type":"click",
                    "name":"子菜单名1",
                    "key":"name1"
                    },
                    {
                    "type":"click",
                    "name":"子菜单名2",
                    "key":"name2"
                    }
                ]
                },
                {
                "type":"view",
                "name":"aboutus",
                "url":"http://www.baidu.com"
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

module.exports = router;