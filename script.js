const menu = document.getElementById('hamburguer');
const navMenu = document.querySelector('.nav-menu');
navMenu.style.border = '1px solid blue'

const navbar = document.getElementById("nav-header");
const nome = document.getElementById("nome");
const hamb = document.querySelectorAll('#hamburguer span');

const iconsSocial = document.querySelectorAll('.icon-social');

let con = 0


menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')) {
        console.log('ativo');
        navMenu.style.display = 'block'

        hamb.forEach(elemnt => {
            elemnt.style.backgroundColor = '#000'
        });

        fetch('dados.json').then((res)=> {
            res.json()
            .then((data)=> {
                con++
                if(con > 1) {
                    return
                }
                data.forEach(dado => {
                    
                    // const arrayData = dado.dados
                    
                    const newli = document.createElement('li')
                    newli.setAttribute('id', 'newli')

                    const boxTitle = document.createElement('div')
                    boxTitle.setAttribute('id', 'box-title')

                    const paragrafo = document.createElement('p')
                    paragrafo.setAttribute('class', 'paragrafo-nav-menu')
                    paragrafo.innerText = dado.name

                    const button_exibir = document.createElement('button')
                    button_exibir.setAttribute('id', 'button-exibir')
                    button_exibir.innerHTML = '<ion-icon name="add-outline"></ion-icon>'

                    const ul_infor = document.createElement('ul')
                    ul_infor.setAttribute('id', 'ul-infor')

                    button_exibir.addEventListener('click', ()=> {
                        ul_infor.classList.toggle('flex')

                        if(ul_infor.classList.contains('flex')) {
                            ul_infor.style.display = 'block'
                            button_exibir.style.color = 'rgb(0, 149, 255)'
                        } else {
                            ul_infor.style.display = 'none'
                            button_exibir.style.color = '#000'
                        }
                    });

                    const dadoss = dado.dados

                    for (let index = 0; index < dadoss.length; index++) {
                        const dado = dadoss[index];

                        const dataLi = document.createElement('li');
                        dataLi.style.padding = '10px'
                        dataLi.innerText = dado
                        ul_infor.append(dataLi);

                    }

                    navMenu.append(newli);
                    newli.append(boxTitle);
                    boxTitle.append(paragrafo, button_exibir);
                    newli.append(ul_infor);
                });
            });
        });

    } else{
        console.log('não ativo')
        navMenu.style.display = 'none'

        hamb.forEach(elemnt => {
            elemnt.style.backgroundColor = '#fff'
        });
    }
});


window.onscroll = function () {
    if (window.pageYOffset >= 0.7 * window.innerHeight) {
        navbar.classList.add("fixed");
        nome.style.display = 'none'
        navbar.style.padding = '0 170px'

        hamb.forEach(elemnt => {
            elemnt.style.backgroundColor = '#000'
        });
    } else {
        navbar.classList.remove("fixed");
        nome.style.display = 'block'
        navbar.style.padding = '0'

        hamb.forEach(elemnt => {
            elemnt.style.backgroundColor = '#fff'
        });
    }
};
