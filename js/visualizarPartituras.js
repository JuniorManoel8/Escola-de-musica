document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.dropdownMais');
    const menu = document.querySelector('.dropdownMenu');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.style.display === 'block';
        menu.style.display = isOpen ? 'none' : 'block';
        toggle.setAttribute('aria-expanded', !isOpen);
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', () => {
        menu.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
    });

    // Evento para clicar em uma opção
    menu.querySelectorAll('.dropdownItem').forEach(item => {
      item.addEventListener('click', () => {
        alert(`Você associou ${item.textContent} à partitura`);
        menu.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
});