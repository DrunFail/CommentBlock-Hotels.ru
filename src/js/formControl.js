import { commentDiv } from './commentList';
import commentNode  from './commentNode';


export default function formControl() {
    //get form
    const form = document.querySelector('.comment-form');

    //get input fields
    const inputName = document.querySelector('#name');
    const inputText = document.querySelector('#text');
    const inputDate = document.querySelector('#date');
    /*inputDate.setAttribute('value', currentDate);*/

    const inputFields = [inputName, inputText, inputDate];


    const NAME_REGEX = /^[A-zА-я][A-zА-я0-9-_]{3,23}$/;
    const statusError = {
        name: false,
        text: false
    }


    //get containers for input fields - add alert message
    const nameContainer = document.querySelector('.name');
    const textContainer = document.querySelector('.text');

    
    //alert for name field
    const nameAlert = document.createElement('p');
    nameAlert.classList.add('alert');
    nameAlert.innerHTML = 'Имя должно содержать от 4 до 24 символов'

    //alert for text field
    const textAlert = document.createElement('p');
    textAlert.classList.add('alert');
    textAlert.innerHTML = 'Это поле не может быть пустым';

    
    const toggleAlert = (toggledElem) => { toggledElem.classList.toggle('invalid') };


    inputName.addEventListener('keydown', () => {
        if (statusError.name) {
            toggleAlert(nameAlert);
            statusError.name = false;
        }
    });


    inputText.addEventListener('keydown', () => {
        if (statusError.text) {
            toggleAlert(textAlert);
            statusError.text = false;
        }

    })

    
    nameContainer.append(nameAlert);
    textContainer.append(textAlert);

    //id for new comment
    let initId = 6;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        let name = formData.get('name');
        let text = formData.get('text');
        let date = formData.get('date');

        //checking the entered date
        if (!date) {
            date = new Date();
        } else {
            const currentTime = new Date().toLocaleTimeString();
            date = new Date(date + ' ' + currentTime);
            
        }

        //validation
        const v1 = NAME_REGEX.test(name)

        
        if (v1 && text) {
            let newComment = { id: initId, name, data: text, date };
            commentDiv.append(commentNode(newComment));

            //clearing the field after submitting the form
            inputName.value = '';
            inputText.value = '';
            inputDate.value = '';

            initId++;

        } else {
            if (!v1) {
                if (!statusError.name) {
                    toggleAlert(nameAlert);
                }
                statusError.name = true;
            }
            if (!text) {
                if (!statusError.text) {
                    toggleAlert(textAlert);
                }
                
                statusError.text = true;
            }
        }

    }


    form.addEventListener('submit', handleFormSubmit);

    inputFields.forEach(elem => elem.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') handleFormSubmit(e)
    }))

}