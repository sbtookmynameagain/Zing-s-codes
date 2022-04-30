const Email = document.querySelector('#validate_Email');
const checkEmail = document.querySelector('#check_Email');
const  form = document.querySelector('form');


checkEmail.addEventListener('click',e=>{
    const emailAccount = Email.value;
    
    let markup=``;
//peter.parker@zylker.com. ...
//firstname.initial@domain.com. Example: peter.p@zylker.com. ...
//firstname@domain.com. Example: peter@zylker.com.
//8776461212@qq.com
    const regExp=/((^[a-z0-9]+)(\.[a-z0-9]+)?\@[a-z]{2,}\.[a-z]{3,}$)/;

    if (emailAccount.match(regExp)){
        markup=`<div class="alert alert-success" role="alert">${emailAccount} is a valid Email </div>`;
        form.insertAdjacentHTML('beforebegin',markup);

    }else{
        markup=`<div class="alert alert-danger" role="alert">${emailAccount} is an invalid Email </div>`
        form.insertAdjacentHTML('beforebegin',markup);
    }
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },1000);
})


form.addEventListener('submit', e=>{
    e.preventDefault();
})






