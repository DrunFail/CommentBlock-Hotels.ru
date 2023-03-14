import Sprite from '../img/sprite.svg';
import LikeBlock from './components/LikeBlock';
import { dateData } from './helpers';


export default function commentNode(comment) {
    // main container for comment
    let article = document.createElement('article');

    //author name
    let name = document.createElement('p');
    name.classList.add('name');
    name.innerHTML = `${comment.name}`;

    //comment text
    let title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = `${comment.data}`;

    //comment date create
    let date = document.createElement('p');
    date.classList.add('date');
    date.innerHTML = dateData(comment);

    //remove comment btn
    let btnRemove = document.createElement('button');
    btnRemove.classList.add('remove');
    btnRemove.addEventListener('click', () => article.remove());



    let remSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let remUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    remUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#remove`);
    remSvg.appendChild(remUse);

    btnRemove.append(remSvg);

    let profileImg = document.createElement('div');
    profileImg.classList.add('profile-img');

    let nameDateContainer = document.createElement('div');
    nameDateContainer.classList.add('name-date-container');
    nameDateContainer.append(name, date);

    let commentBody = document.createElement('div');
    commentBody.classList.add('comment-body');
    commentBody.append(nameDateContainer, title, LikeBlock(comment));
    
    article.append(profileImg,commentBody,  btnRemove);

    

    return article;
}