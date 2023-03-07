import Sprite from '../../img/sprite.svg';


const handlerLike = (inputDislike,inputLike) => {
    let statusLike = false; //initial state 

    inputDislike.addEventListener('click', () => {    //handler dislike

        if (inputDislike.checked && statusLike == 'dislike') {
            inputDislike.checked = false;
            statusLike = false;

        } else {
            statusLike = 'dislike';
        }
    });

    inputLike.addEventListener('click', () => {       //handler like
        if (inputLike.checked && statusLike == 'like') {
            inputLike.checked = false;
            statusLike = false;
        } else {
            statusLike = 'like'
        }
    })
}




export default function LikeBlock(comment) {
    let likeContainer = document.createElement('div');
    let likeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let likeUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    let dislikeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let dislikeUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    let inputLike = document.createElement('input');
    let inputDislike = document.createElement('input');
    let likeLabel = document.createElement('label');
    let dislikeLabel = document.createElement('label');

    likeContainer.classList.add('like');


    inputLike.setAttribute('name', `like${comment.id}`);
    inputLike.setAttribute('type', 'radio');
    inputLike.setAttribute('id', `lik${comment.id}`);

    inputDislike.setAttribute('name', `like${comment.id}`);
    inputDislike.setAttribute('type', 'radio');
    inputDislike.setAttribute('id', `dislik${comment.id}`);

    likeLabel.setAttribute('for', `lik${comment.id}`);
    dislikeLabel.setAttribute('for', `dislik${comment.id}`);


    likeUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#like`);
    likeSvg.appendChild(likeUse);

    dislikeUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#like`);
    dislikeSvg.appendChild(dislikeUse);

    likeLabel.append(likeSvg);
    dislikeLabel.appendChild(dislikeSvg);
    handlerLike(inputDislike, inputLike);

    likeContainer.append(inputLike, likeLabel, inputDislike, dislikeLabel);

    return likeContainer;

}