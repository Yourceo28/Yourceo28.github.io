// J&L Holdings — minimal JS: mobile nav, year, mailto contact form.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Contact form: no backend. Builds a mailto: link to the address in data-mailto.
  // To use Formspree or Netlify Forms instead, see the comment above the <form> in the HTML.
  var form = document.getElementById('contact-form');
  if (form && form.dataset.mode === 'mailto') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = new FormData(form);
      var to = form.dataset.mailto;
      var subject = 'Website inquiry: ' + (f.get('topic') || 'General');
      var body = 'Name: ' + f.get('name') + '\nEmail: ' + f.get('email') +
        (f.get('company') ? '\nBusiness: ' + f.get('company') : '') +
        '\nTopic: ' + f.get('topic') + '\n\n' + f.get('message');
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var s = document.getElementById('form-status');
      if (s) s.textContent = 'Opening your email app… If nothing happens, email us directly at ' + to + '.';
    });
  }
  // Preselect the topic from ?topic=... (e.g. index.html?topic=listing-check#contact) or data-topic links.
  var t = new URLSearchParams(window.location.search).get('topic');
  var topicSel = document.getElementById('topic');
  if (t && topicSel && topicSel.querySelector('option[value="' + t + '"]')) topicSel.value = t;
  document.querySelectorAll('[data-topic]').forEach(function (a) {
    a.addEventListener('click', function () {
      var sel = document.getElementById('topic');
      if (sel) sel.value = a.dataset.topic;
    });
  });
})();
