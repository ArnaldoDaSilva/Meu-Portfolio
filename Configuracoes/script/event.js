document.addEventListener("mousemove", function(e) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);
    
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    // Remove após a animação
    setTimeout(() => {
      particle.remove();
    }, 1000);
  });

let slideIndex = 0;

function mudarSlide(direcao) {
  const slide = document.querySelector('.carrossel-slide');
  const totalSlides = slide.children.length;
  slideIndex += direcao;

  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  const tamanhoSlide = 600; // largura de cada slide
  slide.style.transform = `translateX(${-slideIndex * tamanhoSlide}px)`;
}

// Auto Slide (opcional)
setInterval(() => mudarSlide(1), 4000);



  