//根据key给数组去重,没有key的话就平铺去重
Array.prototype.unique = function (key, sortKey, sort) {
    var obj = new Object();
    this.map((item) => {
        if (key && item[key] && !obj[item[key]]) {
            obj[item[key]] = item[sortKey] || 1;
        } else if (!key && item && !obj[item]) {
            obj[item] = 1;
        }
    })
    let temp = [];
    Object.keys(obj).forEach(function (key) {

        // console.log(key, obj[key]);
        temp.push({
            key: key,
            value: obj[key]
        })
    })
    if(sortKey && sort){
        temp.sort((a, b) => {
            if (!sort || sort == "asc") {
                return a.value - b.value;
            } else if (sort == "desc") {
                return b.value - a.value;
            }
        })
    }
    let result = [];
    temp.map((item) => {
        result.push(item.key)
    })
    return result;
}