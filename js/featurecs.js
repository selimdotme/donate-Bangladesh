document.getElementById('donateBtn').addEventListener('click',function(){
    const btnD = document.getElementById('donateBtn');
    const btnH = document.getElementById('historyBtn')
    // btnD bg change
    btnD.classList.remove('bg-slate-300','hover:bg-slate-300');
    btnD.classList.add('bg-green-600','hover:bg-green-400');
    // end btn change
    // btn H change
    btnH.classList.add('bg-slate-300','hover:bg-slate-300');
    btnH.classList.remove('bg-green-600','hover:bg-green-400');
    // btnH end
    const history = document.getElementById('history');
    const donate = document.getElementById('donate');
    donate.classList.remove('hidden');
    history.classList.add('hidden')
})
document.getElementById('historyBtn').addEventListener('click', function(){
    const btnD = document.getElementById('donateBtn');
    const btnH = document.getElementById('historyBtn')
    // btnD bg change
    btnD.classList.add('bg-slate-300','hover:bg-slate-300');
    btnD.classList.remove('bg-green-600','hover:bg-green-400');
    // end btn change
    // btn H change
    btnH.classList.remove('bg-slate-300','hover:bg-slate-300');
    btnH.classList.add('bg-green-600','hover:bg-green-400');
    // btnH end
    const history = document.getElementById('history');
    const donate = document.getElementById('donate');
    donate.classList.add('hidden');
    history.classList.remove('hidden');
})