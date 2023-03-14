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


export const dateData = (comment) => {
    let commentDate = new Date(comment.date).toLocaleDateString();
    let commentTime = new Date(comment.date).toLocaleTimeString().slice(0, -3);


    let dateNow = new Date();
    let yesterday = new Date();
    yesterday = new Date(yesterday.setDate(yesterday.getDate() - 1));


    if (commentDate === dateNow.toLocaleDateString()) {
        return `сегодня, ${commentTime}`;
    } else if (commentDate === yesterday.toLocaleDateString()) {
        return `вчера, ${commentTime}`
    } else {
        return `${commentDate}, ${commentTime}`
    }
}