/**
 * Created by Administrator on 2016/9/29.
 */

//ʹ��requireJS���л�������������

require.config({
    paths:{
        //·��Ϊ����������ļ���·�����ļ����� .js ʡȥ
        'jquery':'js/libs/jquery',
        'template':'js/libs/template',
        'jquery-ui':'js/libs/jquery-ui/jquery-ui.min',
        'underscore':'js/libs/underscore',
        'backbone':'js/libs/backbone'
    },
    //����������
    shim:{
        'backbone':['underscore','jquery'],
        'jquery-ui':['jquery']
    }
});

//����ģ�鱩¶���ⲿ�ĵ�
require([],function(){

});