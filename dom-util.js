
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (!(node.childNodes)) {
    return;
  }
  node.childNodes.forEach(node => {
    visitAllNodes(node, callback);
  });
  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  const arr = [];
  visitAllNodes(node, item => {
    if(item!==undefined){
      arr.push(item);
    }
    
  });
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};