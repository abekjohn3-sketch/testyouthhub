const donationTypeBtns = document.querySelectorAll('.donation-btn');
const personalFields = document.querySelector('.personal-fields');
const companyFields = document.querySelector('.company-fields');

donationTypeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    donationTypeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if(btn.dataset.type === 'personal') {
      personalFields.style.display = 'block';
      companyFields.style.display = 'none';
    } else {
      personalFields.style.display = 'none';
      companyFields.style.display = 'block';
    }

    // Reset payment fields
    document.querySelectorAll('.payment-fields').forEach(f => f.style.display = 'none');
  });
});

// Payment method fields
const paymentSelect = document.getElementById('payment');
const paymentFields = document.querySelectorAll('.payment-fields');

paymentSelect.addEventListener('change', () => {
  const value = paymentSelect.value;
  paymentFields.forEach(f => f.style.display = 'none'); // hide all
  if(value === 'paypal') document.querySelector('.paypal-fields').style.display = 'block';
  if(value === 'sepa') document.querySelector('.sepa-fields').style.display = 'block';
  if(value === 'credit') document.querySelector('.credit-fields').style.display = 'block';
  if(value === 'wire') document.querySelector('.wire-fields').style.display = 'block';
});
