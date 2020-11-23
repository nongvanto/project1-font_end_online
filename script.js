document.addEventListener('DOMContentLoaded',()=> {
    var header = document.querySelector('.header')
    var barsMenu = document.querySelector('.header_menu-bars');
    var MenuList = document.querySelector('.header_menu-list');
    var banner =  125;
    var Portfolio = document.querySelectorAll('.portfolio_content')
    var modal = document.querySelectorAll('#portfolio_modal');
    var body = document.querySelector('.body');
    var modalBtn = document.querySelectorAll('.modal-btn')
    var modalClose = document.querySelectorAll('.modal-close');
    benner = parseInt(banner);

    var scrollStatus = "duoi" ;
    window.addEventListener('scroll', ()=> {
        if (window.pageYOffset >= banner) {
            if (scrollStatus=="duoi")
            {
                scrollStatus="tren";
                header.classList.add('display_header')
            }
        }  else if(window.pageYOffset < banner) {
            if (scrollStatus=="tren") {
                header.classList.remove('display_header');
                scrollStatus="duoi";
            }
        }
    
    })

    barsMenu.addEventListener('click', () => {
        MenuList.classList.toggle('show')
    })
    for (let i =0 ;i< Portfolio.length; i++) {
        modalBtn[i].addEventListener('click', ()=> {
            modal[i].classList.remove('display_modal');
            body.classList.remove('overflow-hidden')
        })
        modalClose[i].addEventListener('click', ()=> {
            modal[i].classList.remove('display_modal');
            body.classList.remove('overflow-hidden')
        })
        Portfolio[i].addEventListener('click',()=> {
            modal[i].classList.add('display_modal');
            body.classList.add('overflow-hidden');
            let name =  Portfolio[i].getAttribute('data-name');
            console.log(name)
        })

       
    }
})

