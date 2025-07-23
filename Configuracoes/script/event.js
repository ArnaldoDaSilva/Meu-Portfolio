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




  