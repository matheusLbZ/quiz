const l = el => document.querySelector(el);
const ls = el => document.querySelectorAll(el);

function setModal() {
    function cloneModal() {
        quiz.forEach((item) =>{
            let quizitem = l('.modal').cloneNode(true);

            quizitem.querySelectorAll('.modal-title strong').forEach(res => {
                res.innerHTML = item.question;
            });
    
            quizitem.querySelectorAll('.modal-body .btn').forEach((res, index) => {
                res.innerHTML = item.response[index];
            });

            l('main').append(quizitem);
        });    
    };
    cloneModal();
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
