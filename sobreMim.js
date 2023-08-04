function sobreMim() {


    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');


    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }


    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index);
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index);
        });
    });

}
