const l = el => document.querySelector(el);
const ls = el => document.querySelectorAll(el);

function setModal() {
    function cloneModal() {
        quiz.forEach(() => {
            let quizitem = l('.modal').cloneNode(true);
                console.log(quizitem)
                randomQuestions(quizitem);

            l('main').append(quizitem);
        });    
    };
    cloneModal();

    function randomQuestions(quizitem) {
        const cart = [];

        let search = quiz.filter(i=> i.id >= 0);
        
        while (cart.length < 1) {
            let random = Math.floor(Math.random() * search.length);

            if (cart.indexOf(random) == -1) {
                cart.push(random);
                
            };
        };

        for(let i in cart) {
            let numbers = cart[i];
            
            let resultNumbers = search[numbers]
            console.log(resultNumbers) 

            quizitem.querySelectorAll('.modal-title strong').forEach(res => {
                res.innerHTML = resultNumbers.question;
            });
    
            quizitem.querySelectorAll('.modal-body .btn').forEach((res, index) => {
                res.innerHTML = resultNumbers.response[index];
            });
        };
    };
};
setModal();

//Alternando de um modal para outro
function numberId() {
    for(let i = 0; i < 5; i++) {
        ls('.modal').forEach(res=> {
            res.setAttribute('id', `modalId${i+=1}`);
        })
    }

    for(let f = 1; f < 5; f++) {
        ls('.principal').forEach(res=> {
            res.setAttribute('data-target', `#modalId${f+=1}`);
        })
    }
};

l('.btn1, .principal').addEventListener('click', numberId);
