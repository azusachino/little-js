/**
 * ブラウザの種類
 */
function myBrowser() {
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    }
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }
}
