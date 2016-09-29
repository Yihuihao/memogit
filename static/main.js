/**
 * Created by Administrator on 2016/9/29.
 */

//使用requireJS进行基本依赖项设置

require.config({
    paths:{
        //路径为相对于自身文件的路径，文件类型 .js 省去
        'jquery':'js/libs/jquery',
        'template':'js/libs/template',
        'jquery-ui':'js/libs/jquery-ui/jquery-ui.min',
        'underscore':'js/libs/underscore',
        'backbone':'js/libs/backbone'
    },
    //依赖项设置
    shim:{
        'backbone':['underscore','jquery'],
        'jquery-ui':['jquery']
    }
});

//将各模块暴露给外部文档
require(['jquery','js/views/header'],function($,Header){
    $(function(){
       $('#loading').hide();
        //$('main').css('display','block');
        $('main').stop().fadeIn();
    });

    new Header();
});