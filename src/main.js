document.addEventListener("DOMContentLoaded", ()=>{
       const timeEl = document.getElementById('timeMs');
      function tick(){
        timeEl.textContent = String(Date.now());
      }
      tick();
      const interval = setInterval(tick, 500);

      const avatarInput = document.getElementById('avatarInput');
      const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
      avatarInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if(!file) return;

        if(!file.type.startsWith('image/')) return alert('Please upload an image file');
        const url = URL.createObjectURL(file);
        avatarImg.src = url;
        avatarImg.alt = file.name || 'User avatar';
      });

      const messageBtn = document.querySelector('[data-testid="test-message-btn"]');
      messageBtn.addEventListener('click', () => {
        const name = document.querySelector('[data-testid="test-user-name"]').textContent.trim();
        window.location.href = `mailto:?subject=Hello ${encodeURIComponent(name)}&body=Hi ${encodeURIComponent(name)}, nice to connect!`;
      });

      const connectBtn = document.querySelector('[data-testid="test-connect-btn"]');
      connectBtn.addEventListener('click', (e)=>{ e.preventDefault(); alert('Connection request sent!'); });

      window.addEventListener('beforeunload', ()=> clearInterval(interval));
})

