let reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    innerText: "Click me to visit Google",
  },
};

function generateHTML(reactElement) {
  return `<${reactElement.type} href="${reactElement.props.href}">${reactElement.props.innerText}</${reactElement.type}>`;
}

function customRender(reactElement, selector) {
  let htmlString = generateHTML(reactElement);
  document.querySelector(selector).innerHTML = htmlString;
}

customRender(reactElement, "#root");
