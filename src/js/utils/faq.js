let order = document.querySelector('.order'),
    orderAnswer = document.querySelector('.order-answer'),
    delivery = document.querySelector('.delivery'),
    deliveryAnswer = document.querySelector('.delivery-answer'),
    lorem = document.querySelector('.lorem'),
    loremAnswer = document.querySelector('.lorem-answer');


orderAnswer.style.display = 'none';
deliveryAnswer.style.display = 'none';
loremAnswer.style.display = 'none';

order.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test1');

    let block = orderAnswer;
    if(e.target == order || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

delivery.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test2');

    let block = deliveryAnswer;
    if(e.target == delivery || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

lorem.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test3');

    let block = loremAnswer;
    if(e.target == lorem || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

