/**
 * Created by vadimsky on 23/01/17.
 */

import {Utils} from "./utils/index";
// import * as React from "react";
//
// class FilesSystemItem extends React.ClassComponent {
//   constructor(type, name) {
//     super(type, name);
//     this.name = name;
//     this.type = type;
//   }
// }


/*

class Folder extends FilesSystemItem {
  constructor(parent, folder) {
    super(folder.type, folder.name);
    this.parentNode = parent;
    this.children = folder.children || [];
  }

  items () {

  }


  up () {
    return this.parentNode
  }

  add(item) {
    this.children.push(item);
  }

  delete (item) {
    this.children.splice (
      this.children.findIndex((i) => i.name === item.name),
      1
    );
  }

  sort (direction) {
    return this.children.sort((a, b) => Utils.compareFileItems(a,b, direction));
  }

}
*/

export const FilesData =  {
  type: "folder",
  name: "animals",
  children: [
    {
      type: "folder",
      name: "cat",
      children: [
        {
          type: "folder",
          name: "images",
          children: [
            {
              type: "file",
              name: "cat001.jpg"
            },
            {
              type: "file",
              name: "cat002.jpg"
            }
          ]
        }
      ]
    },
    {
      type: "folder",
      name: "dog",
      children: [
        {
          type: "folder",
          name: "images",
          children: [
            {
              type: "file",
              name: "dog001.jpg"
            },
            {
              type: "file",
              name: "cat001.jpg"
            },
            {
              type: "file",
              name: "dog002.jpg"
            }
          ]
        }
      ]
    },
    {
      type: "file",
      name: "bear.png"
    },
    {
      type: "file",
      name: "horse.png"
    }
  ]
};
