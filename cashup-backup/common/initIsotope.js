import Isotope from 'isotope-layout';

const initIsotope = () => {
  if (typeof window === 'undefined') return; // Ensure it runs on client-side

  let iso;
  let grid = document.querySelectorAll('.gallery');
  let filtersElem = document.querySelector('.filtering');
  let buttonGroups = document.querySelectorAll('.filtering');

  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: '.items',
      });
    });
  }

  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!event.target.matches('span')) return;
      
      let filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });

    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener('click', (event) => {
        if (!event.target.matches('span')) return;
        
        buttonGroup.querySelector('.active')?.classList.remove('active');
        event.target.classList.add('active');
      });
    };

    buttonGroups.forEach(radioButtonGroup);
  }
};

export default initIsotope;