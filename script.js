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
    var btnSend = document.querySelector('.contact_form-btn')
    var listItem = document.querySelectorAll('.list_item')
    var scroll = document.querySelectorAll('.scroll')
    var ft = document.querySelector('.footer')
    console.log(ft.offsetTop)
    for(let i=0; i<listItem.length; i++) {
       listItem[i].addEventListener('click', ()=> {
            for ( let k =0 ; k <listItem.length;k++) {
                listItem[k].classList.remove('background-btn')
            }
           window.scrollTo(0,scroll[i].offsetTop)
           listItem[i].classList.add('background-btn')
           console.log(window.pageYOffset)
       })
    }
    

    benner = parseInt(banner);
    var scrollStatus = "duoi" ;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset>818 & window.pageYOffset<1625) {
                for (let k =0 ; k<listItem.length; k++) {
                    listItem[k].classList.remove('background-btn')
                }
                listItem[0].classList.add('background-btn')
            } else if (window.pageYOffset>818 & window.pageYOffset<2269) {
                for (let k =0 ; k<listItem.length; k++) {
                    listItem[k].classList.remove('background-btn')
                }
                listItem[1].classList.add('background-btn')

            } else if (window.pageYOffset>2269 & window.pageYOffset<3289) { 
                for (let k =0 ; k<listItem.length; k++) {
                    listItem[k].classList.remove('background-btn')
                }
                listItem[2].classList.add('background-btn')
            } else  {
                for (let k =0 ; k<listItem.length; k++) {
                    listItem[k].classList.remove('background-btn')
                }
            }

            }
        )
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

