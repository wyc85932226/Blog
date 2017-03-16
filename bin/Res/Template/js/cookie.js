//read a cookie
function getCookie(cookieName){
    var arg = cookieName + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    //alert(document.cookie);
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            var endstr = document.cookie.indexOf(";", j);
            if (endstr == -1) {
                endstr = document.cookie.length;
            }
            var ret = unescape(document.cookie.substring(j, endstr));
            if (ret != "") {
                return ret;
            }
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) 
            break;
    }
    return "";
}

//delete a cookie
function delCookie(cookieName){
    var exp = new Date();
    exp.setTime(exp.getTime() - 100);
    document.cookie = cookieName + "=; path=/; domain=kuwo.cn; expires=" + exp.toGMTString();
    document.cookie = cookieName + "=; path=/; expires=" + exp.toGMTString();
}

//add a cookie
function addCookie(cookieName, cookieValue){
    var expdate = new Date();
    var argv = addCookie.arguments;
    var argc = addCookie.arguments.length;
    var expires = (argc > 2 && argv[2] != 0) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    if (expires != null) {
        expdate.setTime(expdate.getTime() + (expires * 1000));
    }
    document.cookie = cookieName + "=" + escape(cookieValue) +
    ((expires == null) ? "" : ("; expires=" + expdate.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
}