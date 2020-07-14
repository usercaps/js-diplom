let reg = document.querySelector('#registration'),
    sign = document.querySelector('#signIn'),
    create = document.querySelector('#create'),
    form = document.querySelector('#testForm'),
    acc = {};

create.addEventListener('click', () => {
    create.style.display = 'none';
    reg.style.display = 'block';
    sign.style.display = 'none';

    event.preventDefault();

});

form.addEventListener('submit', (e) => {
    let login = document.querySelector('#name').value,
    pass = document.querySelector('#password').value;

    let getAcc,
        accObj = {};

        if (localStorage.getItem("accounts") !== null) {
            getAcc = localStorage.getItem("accounts");
            accObj = JSON.parse(getAcc);
          }

        if(login.trim() === '' || pass.trim() === ''){
            alert('Заполните все поля');
        }else {
            
            localStorage.setItem('lastLogin', login);
            acc[login] = pass;
            localStorage.setItem('accounts', JSON.stringify(acc));
            alert('Успешно');
            sign.style.display = 'block';
            reg.style.display = 'none';
            create.style.display = 'block';
        }
              
        e.preventDefault();

        e.target[0].value = '';
        e.target[1].value = '';
});