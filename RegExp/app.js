const urlField = document.querySelector('#validate_url');
const checkUrl = document.querySelector('#check_url');

const form = document.querySelector('form');


checkUrl.addEventListener('click', e=>{
    const url = urlField.value;

/*you typed const previously, which throws an error 'uncaught TypeError' 
as you can't assignn variables to the const values.
*/
    let markup=``;

    const regExp = /^((ftp|http|https):\/\/)([a-zA-Z0-9]+\.)?([a-zA-Z]+)\.([a-zA-Z]{2,})$/;

    if(regExp.test(url)){
        markup = `<div class ="alert alert-success" role="alert"><b>${url}</b> is valid URL. </div>`;
        form.insertAdjacentHTML('beforebegin', markup);

    } else{
        markup = `<div class ="alert alert-danger" role="alert"><b>${url}</b> is invalid URL. </div>`
        form.insertAdjacentHTML('beforebegin', markup);
    }
    
    setTimeout(()=>{
        document.querySelector('.alert').remove();
        }, 1000);
        
});


form.addEventListener("submit", e=>{
    e.preventDefault();
});