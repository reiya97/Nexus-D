'use strict'

{
    const btn = document.getElementById('btn');
    const timeRemain = document.getElementById('countDown');
    const count = document.getElementById('count');
    const message = document.getElementById('message');
    const countBtn = document.createElement("button");
    
    let start;
    let clickCount=0;



    btn.addEventListener('click', () => {
        btn.disabled = true;
        start = new Date();
        threeCountDown();
    });

    function threeCountDown(){
        const d = new Date(new Date() - start);
        const s = 3-d.getSeconds();
        message.textContent = s;
        const timeoutId = setTimeout(() => {
            threeCountDown();
        }, 1000);
        if(d.getSeconds() === 3) {
            message.textContent = "00回";
            btn.disabled = false;
            clearTimeout(timeoutId);
            start = new Date();
            tenCountDown();
            // console.log(clickCount);
            const body = document.querySelector('body');
            body.appendChild(countBtn);
            countBtn.id = 'btn';
            countBtn.addEventListener('click', () => {
            clickCount++;
            message.textContent = `${clickCount}回`
        });
        }
    }

    function tenCountDown(){

        const d = new Date(new Date() - start);
        const s = String(9-d.getSeconds()).padStart(2, '0');
        const ms = String(999-d.getMilliseconds()).padStart(3, '0');

        countBtn.textContent = "クリック！";

        
        timeRemain.textContent = `${s}:${ms}`;
        const timeoutId = setTimeout(() => {
            tenCountDown();
        }, 10);

        if(d.getSeconds()===10) {
            timeRemain.textContent = '00:000';
            countBtn.remove();
            btn.disabled = true;
            btn.textContent = "終了"
            clearTimeout(timeoutId);
        }
    }



}