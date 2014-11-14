(function () {

  var donationURL = 'https://sendto.mozilla.org/page/contribute/givenow-1page?ref=EOYFR2014&utm_campaign=EOYFR2014&utm_source=testA_selectamt&utm_medium=snippet';

  // Element cache :

  var btnAmounts = document.querySelectorAll('.donation-amounts .button');
  var btnSelected = document.querySelector('.donation-amounts .button-selected');
  var btnDonate = document.querySelector('#donate-button');
  var elHighlighted = document.querySelector('#mofo-eoy-2014 em');

  // View functions

  function selectAmount(element) {
    element.classList.add('button-selected');
    btnSelected.classList.remove('button-selected');
    btnSelected = element;
    btnDonate.attributes['href'].value = donationURL + '#amount-' + element.attributes['data-amount'].value;
  }

  // Event binding :

  for(var i=0; i<btnAmounts.length; i++) {
    btnAmounts[i].addEventListener('click', function (event) {
      selectAmount(event.target);
    });
  }

  btnDonate.addEventListener('click', function (event) {
    btnDonate.blur();
  });

  // Fade in highlight on text
  setTimeout(function() {
    if (elHighlighted) {
      elHighlighted.classList.add('active');
    }
  }, 1000);

})();
