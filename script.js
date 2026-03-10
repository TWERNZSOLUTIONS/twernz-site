// FORMULÁRIO -> WHATSAPP
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value.trim();
  const service = document.querySelector('select').value;

  const prefix = document.querySelector('.phone-prefix').value;
  const phone = document.querySelector('.phone-input').value.trim();

  if (!name || !service || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // telefone completo para uso futuro (backend)
  const fullPhone = `${prefix}${phone.replace(/\D/g, '')}`;

  const phoneNumber = '5599985401540';

  const message = `Olá Thiago, me chamo ${name}.

Gostaria de um atendimento personalizado com:
${service}.`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});

// SERVIÇOS – APENAS UM CARD ABERTO
const serviceCards = document.querySelectorAll('.services .service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    serviceCards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });

    card.classList.toggle('active');
  });
});

// MÁSCARA TELEFONE
const phoneInput = document.querySelector('.phone-input');

phoneInput.addEventListener('input', function () {

  let value = phoneInput.value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  if (value.length > 6) {
    value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
  } 
  else if (value.length > 2) {
    value = `(${value.slice(0,2)}) ${value.slice(2)}`;
  }

  phoneInput.value = value;

});
