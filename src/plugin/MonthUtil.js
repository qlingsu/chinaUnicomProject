//获取month的数组，形如[202003,202004,202005],如果没有指定参考年月，以当前年月为准
//入参，第一个，前几个月，第二个，参考月份如202007
export function getPreMonths(monthNum, endYearMonth) {
    let now = new Date();
    let currentYear = new String(now.getFullYear());
    let currentMonth = addZero(now.getMonth() + 1);

    let end = ""; //结束年月为给定年月或者当前年月
    let endYear = "";
    let endMonth = "";

    if (endYearMonth) {
        end = endYearMonth;
        endYear = endYearMonth.slice(0, 4);
        endMonth = endYearMonth.slice(4, 6);
    } else {
        end = currentYear + currentMonth;
        endYear = currentYear;
        endMonth = currentMonth;
    }

    let result = [];

    for (let i = 0; i < monthNum; i++) {
        let re = "";
        let tempMonth = parseInt(endMonth) - i;
        if (tempMonth <= 0) {
            tempMonth = tempMonth + 12;
            endMonth = parseInt(endMonth) + 12;
            endYear--;
        }

        re = endYear + "" + addZero(tempMonth);
        result.unshift(re);
    }
    return result;
}

export function getNextMonths(monthNum, startYearMonth) {
    let now = new Date();
    let currentYear = new String(now.getFullYear());
    let currentMonth = addZero(now.getMonth() + 1);

    let start = ""; //开始年月为给定年月或者当前年月
    let startYear = "";
    let startMonth = "";

    if (startYearMonth) {
        start = startYearMonth;
        startYear = startYearMonth.slice(0, 4);
        startMonth = startYearMonth.slice(4, 6);
    } else {
        start = currentYear + currentMonth;
        startYear = currentYear;
        startMonth = currentMonth;
    }

    let result = [];

    for (let i = 0; i < monthNum; i++) {
        let re = "";
        let tempMonth = parseInt(startMonth) + i;
        if (tempMonth > 12) {
            tempMonth = tempMonth - 12;
            startMonth = parseInt(startMonth) + 12;
            startYear++;
        }

        re = startYear + "" + addZero(tempMonth);
        result.unshift(re);
    }
    return result;
}
export function addZero(num) {
    return num < 10 ? "0" + num : num;
}