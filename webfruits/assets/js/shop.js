(function(){
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        // Make elements visible immediately for accessibility
        document.querySelectorAll('[data-anim]').forEach(el => el.classList.add('visible'));
        return;
      }

      const items = Array.from(document.querySelectorAll('[data-anim]'));
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target;
            const delay = parseInt(el.getAttribute('data-anim-delay') || 0, 10);
            setTimeout(() => { el.classList.add('visible'); }, delay);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.2 });

      items.forEach(i => io.observe(i));
    })();
// ********************slide small shop **********************
  const cards = document.querySelectorAll(".deal-card");
    const revealOnScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();