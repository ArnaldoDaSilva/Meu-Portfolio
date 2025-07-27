   var myCarousel = document.querySelector('carousel')
        var carousel = new bootstrap.Carousel(carousel)
        // Função para rolar suavemente para uma div
        function smoothScroll(target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // 1.5 segundos
            let startTime = null;

            // Função de animação
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Função de easing para suavizar o movimento
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
        // Seleciona todos os links da navbar
        const navbarLinks = document.querySelectorAll('.navbar-link');
        // Adiciona um ouvinte de evento para cada link
        navbarLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Impede o comportamento padrão do link

                // Obtém o id da div de destino usando o atributo 'data-target'
                const targetId = link.getAttribute('data-target');

                // Seleciona a div de destino
                const targetDiv = document.getElementById(targetId);
                // Rola a página até a div com transição suave
                if (targetDiv) {
                    smoothScroll(targetDiv);
                }
            });
        });
        function myFunction() {
            localStorage.setItem("Click", "true");
            setTimeout(() => {
                window.location.href = "Configuracoes/portifolio.html";
                1000
            });
        }
        function mudarCor() {
            const changeButton = document.getElementById('change');
            const body = document.body;
            changeButton.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('rgb(8, 15, 28)')) {
                    changeButton.classList.remove('fa-moon');
                    changeButton.classList.add('fa-sun');
                } else {
                    changeButton.classList.remove('fa-sun');
                    changeButton.classList.add('fa-moon');
                }
            });
        }
        const frase = document.getElementById('frase');
        const texto = frase.textContent;
        frase.InnerHTML = '';

        for (let letra of texto) {
            const span = document.createElement('span');
            span.textContent = letra;
            frase.appendChild(span);

        }
        function home() {
            window.location.href = "index.html";
        }; // Red
        // ireciona apó