import { getCurrentDate } from './helpers';
import { commentDiv } from './commentList';
import { commentNode } from './commentNode';

let { currentDate } = getCurrentDate();


export function formControl() {
    const form = document.querySelector('.comment-form');
    let inputDate = document.querySelector('#date');



    inputDate.setAttribute('value', currentDate);



    let formOpenBtn = document.querySelector('.add-comm-btn');
    let formContainer = document.querySelector('.form-container');
    formOpenBtn.onclick = () => formContainer.classList.toggle('open');
    let btnClose = document.querySelector('#close');
    btnClose.onclick = () => formContainer.classList.toggle('open');






    let initId = 6;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let name = formData.get('name');
        let data = formData.get('text');
        let date = formData.get('date');



        let newComment = { id: initId, name, data, date };

        commentDiv.append(commentNode(newComment));
        let inputName = document.querySelector('#name');
        let inputText = document.querySelector('#text');

        inputName.value = '';
        inputText.value = '';
        inputDate.value = currentDate;

        initId++;
        formContainer.classList.toggle('open');

    })

}