const html = require('bel');
const vxv = require('vxv');

const styles = vxv`
font-family: sans-serif;
left: 0px;
right: 0px;
position: fixed;
padding: 8px 15px;
background: white;
text-align: center;
opacity: 0;
transition: all .3s;

& h1, & p {
  margin: 0px 0px 5px 0px;
}

&.top {
  border-bottom: solid #E0E0E0 1px;
  top: 0px;
}

&.bottom {
  border-top: solid #E0E0E0 1px;
  bottom: 0px;
}
`;

module.exports = opts => {
  opts.time = opts.time || 3000;
  opts.classes = opts.classes || [];
  opts.position = opts.position || 'top';

  opts.classes = typeof opts.classes == 'string' ? [opts.classes] : opts.classes;

  if (opts.position !== 'top' && opts.position !== 'bottom') {
    throw new Error('position must be `top` or `bottom`');
  }

  const element = html`<div class="${styles} ${opts.position} ${opts.classes.join(' ')}">
    <h1>${opts.heading}</h1>
    <p>${opts.text}</p>
  </div>`;

  document.body.appendChild(element);

  setTimeout(() => {
    element.style.opacity = 1;
  }, 5);

  setTimeout(() => {
    element.style.opacity = 0;
  }, opts.time);

  setTimeout(() => {
    element.remove();
  }, opts.time + 300);
};
