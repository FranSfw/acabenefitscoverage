var quizz1 = document.getElementById('quizz1');
var quizz1Yes = document.getElementById('quizz1Yes');
var quizz1No = document.getElementById('quizz1No');

var quizz2 = document.getElementById('quizz2');
var quizz2No = document.getElementById('quizz2No');
var quizz2Medicare = document.getElementById('quizz2Medicare');
var quizz2Medicaid = document.getElementById('quizz2Medicaid');

var quizzPrec = document.getElementById('quizzPrec');
var quizzPreC1 = document.getElementById('quizzPreC1');
var quizzPreC2 = document.getElementById('quizzPreC2');
var quizzPreC3 = document.getElementById('quizzPreC3');

var quizzCongratulations = document.getElementById('quizzCongratulations');

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 8000);
});

quizz1Yes.addEventListener('click', function () {
    quizz1.classList.add('hidden');
    quizz2.classList.remove('hidden');
});
quizz1No.addEventListener('click', function () {
    quizz1.classList.add('hidden');
    quizz2.classList.remove('hidden');
});
quizz2No.addEventListener('click', function () {
    quizz2.classList.add('hidden');
    setTimeout(() => {
        quizzPreC1.classList.remove('hidden');
    }, 2000);
    setTimeout(() => {
        quizzPreC1.classList.add('hidden');
        quizzPreC2.classList.remove('hidden');
    }, 4000);
    setTimeout(() => {
        quizzPreC2.classList.add('hidden');
        quizzPreC3.classList.remove('hidden');
    }, 6000);
    setTimeout(() => {
        quizzPreC3.classList.add('hidden');
        quizzPrec.classList.remove('pb-40');
        quizzCongratulations.classList.remove('hidden');
    }, 8000);
    
});
/*
quizz2No.addEventListener('click', function () {
    quizz2.classList.add('hidden');
    promesa.then(() => {
        quizzPreC1.classList.remove('hidden');
        promesa.then(() => {
            quizzPreC1.classList.add('hidden');
            quizzPreC2.classList.remove('hidden');
            promesa.then(() => {
                quizzPreC2.classList.add('hidden');
                quizzPreC3.classList.remove('hidden');
                promesa.then(() => {
                    quizzPreC3.classList.add('hidden');
                    quizzCongratulations.classList.remove('hidden');
                });
            });
        });
    });
    
});
*/ 

quizz2Medicare.addEventListener('click', function () {
    window.location.href = 'https://healthpolicyzone.com/medicare/advantage/call/2?mb=BG&pub_id=AFdbd29be54d104ca8aabcd5582ed313f2&utm_source=aca_dq';

});
quizz2Medicaid.addEventListener('click', function () {
    window.location.href = 'https://benefitscoverage.org/aca/sorry/debt';
});


