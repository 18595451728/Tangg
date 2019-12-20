
export var baseUrl = "http://tangguan.123bingo.cn";
// var Token = getCookie('token');
export var token="ae4256621198039a911977f4a54898ed";
// export function getCookie(name){
//     var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
//     if(arr!=null){
//         return unescape(arr[2]);
//         return null;
//     }
// }
// export function delCookie(name){
//     var exp=new Date();
//     console.log(exp);
//     exp.setTime(exp.getTime()-1);
//     var cval=getCookie(name);
//     if(cval!=null){
//         document.cookie=name+"="+cval+";expires="+exp.toGMTString();
//     }
// }


// export function setCookie(name, value, liveMinutes) {
//     if (liveMinutes == undefined || liveMinutes == null) {
//         liveMinutes = 60 * 2;
//     }
//     if (typeof (liveMinutes) != 'number') {
//         liveMinutes = 60 * 2;//默认120分钟
//     }
//     var minutes = liveMinutes * 60 * 1000;
//     var exp = new Date();
//     exp.setTime(exp.getTime() + minutes + 8 * 3600 * 1000);
//     //path=/表示全站有效，而不是当前页
//     document.cookie = name + "=" + value + ";path=/;expires=" + exp.toUTCString();

// }