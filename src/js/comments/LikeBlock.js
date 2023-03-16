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
    likeContainer.classList.add('like');

    // svg sprite
    //let likeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //let likeUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    //likeUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#like`);
    //likeSvg.appendChild(likeUse);

    
    //let dislikeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //let dislikeUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    //dislikeUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#like`);
    //dislikeSvg.appendChild(dislikeUse);

    let heartSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let heartUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    heartUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${Sprite}#heart`);
    heartSvg.appendChild(heartUse);


    ////radio inputs
    //let inputLike = document.createElement('input');
    //inputLike.setAttribute('name', `like${comment.id}`);
    //inputLike.setAttribute('type', 'radio');
    //inputLike.setAttribute('id', `l${comment.id}`);



    //let inputDislike = document.createElement('input');
    //inputDislike.setAttribute('name', `like${comment.id}`);
    //inputDislike.setAttribute('type', 'radio');
    //inputDislike.setAttribute('id', `d${comment.id}`);


    ////label for input
    //let likeLabel = document.createElement('label');
    //likeLabel.setAttribute('for', `l${comment.id}`);
    //likeLabel.append(likeSvg);

    //let dislikeLabel = document.createElement('label');
    //dislikeLabel.setAttribute('for', `d${comment.id}`);
    //dislikeLabel.append(dislikeSvg);


    //handlerLike(inputDislike, inputLike);

    //likeContainer.append(inputLike, likeLabel, inputDislike, dislikeLabel);

    const likeBtn = document.createElement('button');
    likeBtn.append(heartSvg);


    likeBtn.addEventListener('click', () => likeBtn.classList.toggle('liked'));

    likeContainer.append(likeBtn);



    return likeContainer;

}