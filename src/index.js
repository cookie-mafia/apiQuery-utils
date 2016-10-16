'use strict';

function rawSafe(obj, def={}) {
  return obj || def;
}

function safeAttr(base, ...attribs) {
  let value = rawSafe(attribs, [])
    .reduce((res = {}, attrib) => res[attrib], base);

  return rawSafe(value);
}

module.exports = {
  safeAttr,
  'version': '1.0.0'
};
