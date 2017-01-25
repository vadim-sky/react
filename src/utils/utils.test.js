"use strict";

import 'babel-polyfill';
import expect from 'expect';
import {Utils} from "./index";
import {FilesData} from "../MockData";


describe('Test Files name compare', () => {

  const files = [
    {name:"A", type: "folder"},
    {name:"B", type: "folder"},
    {name:"C", type: "folder"},
    {name:"a", type: "file"},
    {name:"z", type: "file"},
    {name:"b", type: "file"}
  ];


  it('ASC Compare file names', () => {
    let res  = Utils.compareFileItems(files[0], files[1], 1);
    expect(true).toEqual(res);
  });

  it('DESC Compare file names', () => {
    let res  = Utils.compareFileItems(files[0], files[1], 0);
    expect(false).toEqual(res);
  });

  it('ASC Sort files by names', () => {
    let res  = files.sort((a, b) => Utils.compareFileItems(a,b, 0));
    expect(res[5].name).toEqual("z");
  });

  it('ASC Sort ROOT', () => {
    let res  = FilesData.children.sort((a, b) => Utils.compareFileItems(a,b, 0));
    // res.forEach((node) => {
    //   console.log(node.name, " [", node.type, "] \n" );
    // });

    expect(res[0].name).toEqual("cat");
  });

  it('DESC Sort ROOT', () => {
    let res  = FilesData.children.sort((a, b) => Utils.compareFileItems(a,b, 1));
    // res.forEach((node) => {
    //   console.log(node.name, " [", node.type, "] \n" );
    // });
    expect(res[0].name).toEqual("dog");
    expect(res[res.length -1].name).toEqual("bear.png");
  });

  it('DESC Sort files by names', () => {
    let res  = files.sort((a, b) => Utils.compareFileItems(a,b, 1));
    expect(res[5].name).toEqual("a");
  });



  it('Delete file by name', () => {

    let res = Utils.deleteItem(files, {name:"z", type: "file"})
    res = res.sort((a, b) => Utils.compareFileItems(a,b, 0));
    expect(res[res.length-1].name).toEqual("b");
  });

  it('Find file by name', () => {
    let item = Utils.findByName(files, "C");
    expect(item.name).toEqual("C");
  });

  it ('Search Root Folder', () => {
    let res = Utils.search("animals", FilesData);
    expect(res[0].node.name).toEqual("animals");
  });

  it ('Search multiple cat001 file', () => {
    let res = Utils.search("cat001.jpg", FilesData);
    // res.forEach((el) => {
    //   console.log(el.node.name, " [", el.node.type, "] -->" , el.path.toString(), "\n" );
    // });
    expect(res[0].node.name).toEqual("cat001.jpg");
  });

  it ('Search root files', () => {
    let res = Utils.search("horse.png", FilesData);
    // res.forEach((el) => {
    //   console.log(el.node.name, " [", el.node.type, "] -->" , el.path.toString(), "\n" );
    // });
    expect(res[0].node.name).toEqual("horse.png");
  });

  it ('Search Folders with same name', () => {
    let res = Utils.search("images", FilesData);
    // res.forEach((el) => {
    //   console.log( '/n');
    //   console.log(el.node.name, " [", el.node.type, "] -->" , el.path);
    //
    // });

    expect(res.length > 0);
  });




});
