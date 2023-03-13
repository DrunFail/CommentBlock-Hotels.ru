import { getCurrentDate } from './helpers';
import Sprite from '../img/sprite.svg';
import LikeBlock from './components/LikeBlock';



let { day, month, year, currentDate } = getCurrentDate();



export function commentNode(comment) {
    let article = document.createElement('article');
    let name = document.createElement('p');
    let title = document.createElement('p');
    let date = document.createElement('p');
    let btnRemove = document.createElement('button');
    let remSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let remUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    let infoContainer = document.createElement('div');
    let profileImg = document.createElement('div');
    let commentBody = document.createElement('div');
    let nameDateContainer = document.createElement('div');


   const likeContainer =  LikeBlock(comment);
    commentBody.classList.add('comment-body');
    nameDateContainer.classList.add('name-date-container');

    

    infoContainer.classList.add('info');
    profileImg.classList.add('profile-img');
    name.classList.add('name');
    date.classList.add('date');

    title.classList.add('title');

    btnRemove.classList.add('remove');



    name.innerHTML = `${comment.name}`;
    title.innerHTML = `${comment.data}`;

    remUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#remove`);
    remSvg.appendChild(remUse);


    let commentDate = new Date(comment.date).toLocaleDateString();
    let commentTime = new Date(comment.date).toLocaleTimeString().slice(0, -3);



    const dateData = () => {
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


    date.innerHTML = dateData();
    btnRemove.append(remSvg);


    nameDateContainer.append(name, date);
    infoContainer.append(profileImg);
    commentBody.append(nameDateContainer, title, likeContainer);
    article.append(infoContainer,commentBody,  btnRemove);

    btnRemove.addEventListener('click', () => article.remove());

    return article;
}