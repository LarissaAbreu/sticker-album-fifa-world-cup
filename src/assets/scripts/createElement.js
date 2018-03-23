const createElement = (element, properties, children) => {
  const el = document.createElement(element);

  if (properties) {
    const arr = Object.keys(properties);

    arr.forEach((keyName) => {
      if (keyName === 'class') {
        el.className = properties[keyName];
      } else if (isEventProp(keyName)) {
        el.addEventListener(extractEventName(keyName), properties[keyName]);
      } else {
        el[keyName] = properties[keyName];
      }
    });
  }

  if (children) {
    const textNode = document.createTextNode(children);
    el.appendChild(textNode);
  }

  return el;
}

const isEventProp = (propName) => {
  return /^on/.test(propName);
}

const extractEventName = (propName) => {
  return propName.slice(2).toLowerCase();
}

export default createElement;
