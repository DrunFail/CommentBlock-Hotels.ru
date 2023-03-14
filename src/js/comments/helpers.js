export const dateData = (commentCreateDate) => {
    let commentDate = new Date(commentCreateDate).toLocaleDateString();
    let commentTime = new Date(commentCreateDate).toLocaleTimeString().slice(0, -3);


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