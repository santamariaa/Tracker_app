document.addEventListener('DOMContentLoaded', function() {
  //send api method with url
  // console.log(chrome)
  var activeTab;
  chrome.tabs.getSelected(null,function(tab) {
    console.log(tab.url);
    activeTab = tab;
  });
  console.log(activeTab);

  var checkPageButton = document.getElementById('trackPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var form = d.createElement('form');
      form.action = 'http://localhost:3000/api/v1/visits';
      form.method = 'post';

      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;

      // var checkIn = d.createElement('input');
      // checkIn.type = 'hidden';
      // checkIn.name = 'checked_in';
      // checkIn.value = true;

      // var checkOut = d.createElement('input');
      // checkOut.type = 'hidden';
      // checkOut.name = 'checked_out';
      // checkOut.value = true;

      var email = document.getElementById("email").value;
      var emailField = d.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'email';
      emailField.value = email;

      form.appendChild(i);
      // form.appendChild(checkIn);
      // form.appendChild(checkOut);
      form.appendChild(emailField);
      d.body.appendChild(form);
      form.submit();
    });
  }, false);
}, false);