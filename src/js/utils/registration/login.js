let signIn = document.querySelector('#signIn');
    
    

signIn.addEventListener('click', () => {
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
      } else if(accObj[login] != pass){
          alert('Не верно введены данные');
      } else {
        localStorage.setItem('lastLogin', login)
          alert('Все в порядке');
          document.location.href = 'myaccount.html';
      }
      
console.log(localStorage.getItem('lastLogin'));

        
});