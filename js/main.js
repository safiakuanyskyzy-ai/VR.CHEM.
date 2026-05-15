/*прокрутка скрол*/
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll-container');

  // IntersectionObserver
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
      });
  }, { threshold: 0.3 });

  document.querySelectorAll('.scroll-container img').forEach(img => observer.observe(img));

  // стрелки
  document.querySelector('.arrow.left').onclick = () => {
      container.scrollBy({ left: -200, behavior: 'smooth' });
  };
  document.querySelector('.arrow.right').onclick = () => {
      container.scrollBy({ left: 200, behavior: 'smooth' });
  };
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const images = document.querySelectorAll('.scroll-container img');
    const imgWidth = images[0].offsetWidth + 20; // ширина + отступы

    document.querySelector('.arrow.right').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: imgWidth,
            behavior: 'smooth'
        });
    });

    document.querySelector('.arrow.left').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -imgWidth,
            behavior: 'smooth'
        });
    });
});



/*проект*/
document.addEventListener('DOMContentLoaded', () => {
    // === Твой код с прокруткой ===
    const container = document.querySelector('.scroll-container');
    const images = document.querySelectorAll('.scroll-container img');
    const imgWidth = images[0].offsetWidth + 20;

    document.querySelector('.arrow.right').addEventListener('click', () => {
        container.scrollBy({ left: imgWidth, behavior: 'smooth' });
    });

    document.querySelector('.arrow.left').addEventListener('click', () => {
        container.scrollBy({ left: -imgWidth, behavior: 'smooth' });
    });

    // === Новый код с модальным видео ===
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeVideo');
    const videoFrame = document.getElementById('videoFrame');

    const thumbs = document.querySelectorAll('.video-thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const videoURL = thumb.getAttribute('data-video');
            videoFrame.src = videoURL;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        videoFrame.src = "";
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            videoFrame.src = "";
            modal.style.display = 'none';
        }
    });
});



/*EMAIL*/
function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if(!email.includes('@')) alert('no @ symbol');
    else if(!email.includes('.')) alert('no . symbol');
    else alert('Great!');
}








const form = document.getElementById('signupForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e){
        e.preventDefault(); // басты бетке өтпейді
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(username && email && password){
            message.style.color = "green";
            message.textContent = "Successfully registered!";
            form.reset();
        } else {
            message.style.color = "red";
            message.textContent = "Please fill in all fields!";
        }
    });