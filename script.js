function handleMobileExchange() {
  const from = document.getElementById('fromService').value;
  const to = document.getElementById('toService').value;
  const amount = document.getElementById('mobileAmount').value;

  if (!amount || amount <= 0) {
    alert("Fadlan geli qiimaha lacagta mobile.");
    return;
  }

  if (from === to) {
    alert("Fadlan dooro adeeg kala duwan (Zaad ↔ eDahab).");
    return;
  }

  alert(Waxaad u wareejinaysaa ${amount} ka ${from} una ${to});
}

function handleCurrencyExchange() {
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const amount = document.getElementById('currencyAmount').value;

  if (!amount || amount <= 0) {
    alert("Fadlan geli qiimaha lacagta qalaad.");
    return;
  }

  if (from === to) {
    alert("Fadlan dooro laba lacagood oo kala duwan.");
    return;
  }

  // Sample fake rates
  const rates = {
    USD: { SLSH: 8500, EUR: 0.92 },
    SLSH: { USD: 0.00012, EUR: 0.00011 },
    EUR: { USD: 1.1, SLSH: 9300 }
  };

  const converted = (amount * rates[from][to]).toFixed(2);

  alert(${amount} ${from} = ${converted} ${to});
}