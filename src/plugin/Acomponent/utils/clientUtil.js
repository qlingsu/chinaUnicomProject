//判断客户端是不是pc
export function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};