const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');


const getElementById = function(root, id) {
  const nodes = flattenTreeToArray(root);
  const matches = _.filter(nodes, node => (node.id === id));
  return matches.length > 0 ? matches[0] : null;
};

const getElementsByClassName = function(root, className) {
  const nodes = flattenTreeToArray(root);
  const matches = _.filter(nodes, (node) => {
    let str = node.className;
    if(str !== undefined){
      return str.indexOf(className)>=0;
    }
  });
   return matches;
  };

const getElementsByTagName = function(root, tagName) {
   const nodes = flattenTreeToArray(root);
  const matches = _.filter(nodes, (node) => {
    let str = node.tagName;
    if(str !== undefined){
      return str.indexOf(tagName)>=0;
    }
  });
   return matches;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
