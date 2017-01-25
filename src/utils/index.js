/**
 * Created by vadimsky on 23/01/17.
 */
"use strict";

const compareFileItems = (a, b, direction)  => {
    //same types
    if (a.type === b.type) {
        return inverter (a.name < b.name, direction);
    }
    return (a.type < b.type);
};

const inverter = (value, direction) => {return direction ? value : !value;};

const deleteItem = (array, item) =>{
  array.splice (
    array.findIndex((i) => i.name === item.name),
    1
  );
  return array;
};

const findByName = (array, name) =>{
  let index = array.findIndex((i) => i.name === name);
  return (index === -1) ? undefined : array[index];
};


const findInTree = (name, node, path = [node], found = []) => {
  if (node.name === name) {
    found.push({node: node, path: path});
  }
  node.children.forEach( (child) => {
    if (child.name === name && child.type === "file") {
      found.push({node: child, path: path});
    }
    if (child.type === "folder") {
      findInTree(name, child, [...path, child], found);
    }
  });
  return found;
};


const sort = (nodes, direction=0) =>{
  if (!nodes) {
    return nodes;
  }
  return nodes.sort((a, b) => Utils.compareFileItems(a,b, direction));
};


export const Utils = {
  compareFileItems:  compareFileItems,
  inverter: inverter,
  deleteItem: deleteItem,
  findByName: findByName,
  search: findInTree,
  sort: sort
};
