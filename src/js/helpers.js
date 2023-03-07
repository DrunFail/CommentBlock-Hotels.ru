export function getCurrentDate() {
    let curDate = new Date();
    let [month, day, year] = [
        curDate.getMonth(),
        curDate.getDate(),
        curDate.getFullYear(),
    ];
    if (month < 10) month = '0' + (month + 1).toString();
    if (day < 10) day = '0' + day.toString();

    let currentDate = year + '-' + month + '-' + day;
    return { month, day, year, currentDate }

}