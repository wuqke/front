/**
 * Created by wuqiongke703 on 16/9/5.
 */
//debug
var host = window.location.protocol + '//' + window.location.host;

var env = {};

//无登陆拦截的接口
var fHome = '/wuqke/portal';
//有登陆拦截借口的前缀
var fMember = '/wuqke/member';

var visithost = "/wuqke";

env['messageShowTime'] = 3;

env['homePage'] = visithost;
if (process.env.NODE_ENV != "production") {
    host = "http://" + window.location.hostname + ":8989";
    visithost = "";
    env['homePage'] = "/";
}

env['login'] = visithost + "/login";
env['register'] = visithost + "/register";

env['loginCheck'] = host + fHome + '/login';
env['getArticleList'] = host + fHome + "/getArticleList";
env['getCurrentLoginUser'] = host + fMember + "/getCurrentLoginUser";

export {env as default}
