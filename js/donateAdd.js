document.getElementById('noakhaliAddBtn').addEventListener('click',function(){
    const inputValue = getInputFieldValue('donateValue');
    const noakhaliMoney = getId('noakhaliDonate');
    const countMoney = getId('count');
    const text = document.getElementById('textN').innerText;
    const footer = document.getElementById('footer');
    if(inputValue >0 && inputValue !== isNaN(inputValue)){
    
    const tatalDonate = inputValue + noakhaliMoney;
    const totalMoney = document.getElementById('noakhaliDonate').innerText = tatalDonate;
    const needDonateMoney = countMoney - inputValue;
    document.getElementById('count').innerText = needDonateMoney;

    // add History section
        const div = document.createElement('div');
        div.innerHTML=`
        <h1 className="text-xs md:text-xl font-bold text-emerald-700">${inputValue} Taka ${text}</h1>
        <br>
        <p className = "text-xs md:text-xl font-bold text-emerald-700">${new Date()}</p>
        `
        document.getElementById('history').appendChild(div);
        div.classList.add('border',':rounded-xl','m-6','md:p-12');

        // add popUp btn
        footer.classList.remove('hidden')
    }
    else{
        alert('Invalid Donate Amount');
    }
})

document.getElementById('feniDonateBtn').addEventListener('click',function(){
    const feniInputValue = getInputFieldValue('feniInput');
    const feniMoney = getId('feniMoney');
    const countMoney = getId('count');
    const text = document.getElementById('textF').innerText;
    const footer = document.getElementById('footer');
    if(feniInputValue >0 && feniInputValue !== isNaN(feniInputValue)){
        const feniTotalDonate = feniInputValue + feniMoney;
    const totalMoney = document.getElementById('feniMoney').innerText = feniTotalDonate;
    const needDonateMoney = countMoney - feniInputValue;
    document.getElementById('count').innerText = needDonateMoney;
    // add History section
    const div = document.createElement('div');
    div.innerHTML=`
    <h1 className = "text-xs md:text-xl font-bold text-slate-950">${feniInputValue} Taka ${text}</h1>
    <br>
    <p className = "text-xs md:text-xl font-bold text-slate-950">${new Date()}</p>
    `;
    document.getElementById('history').appendChild(div);
    div.classList.add('border','rounded-xl','m-6','md:p-12');
    footer.classList.remove('hidden')
    }
    else{
        alert('Invalid Donate Amount');
    }
})

document.getElementById('addBtn').addEventListener('click',function(){
    const inputValue = getInputFieldValue('inputValue');
    const money = getId('money');
    const countMoney = getId('count');
    const text = document.getElementById('text').innerText;
    const footer = document.getElementById('footer');
    if(inputValue >0 && inputValue !== isNaN(inputValue)){
    const totalDonateMoney = inputValue + money;
    const totalMoney = document.getElementById('money').innerText = totalDonateMoney;
    const needDonateMoney = countMoney - inputValue;
    document.getElementById('count').innerText = needDonateMoney;
    // add History section
    const div = document.createElement('div');
    div.innerHTML=`
    <h1 className="text-xs md:text-xl font-bold text-yellow-800">${inputValue} Taka ${text}</h1>
    <br>
    <p className="text-xs md:text-xl font-bold text-yellow-800">${new Date()}</p>
    `
    document.getElementById('history').appendChild(div);
    div.classList.add('border','rounded-xl','m-6','md:p-12');
    footer.classList.remove('hidden')
    }
    else{
        alert('Invalid Donate Amount');
    }
})

// blog section

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href=`blog.html`;
})

// popUp remove 

const popUp = document.getElementById('popUp-btn').addEventListener('click',function(){
    const footer = document.getElementById('footer');
    footer.classList.add('hidden');
})