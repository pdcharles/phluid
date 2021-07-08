export let Dialog = function() {

 let _Dialog= function(ui,nodeId,classes) {
  this.ui = ui;

  this.node = document.createElement('div');
  this.node.id = nodeId
  this.node.classList.add('phluid_dialog',classes);

  this.elements = document.createElement('div');
  this.elements.classList.add('phluid_dialog_item');

  //Reject and Accept

  [this.node.reject,this.node.accept] = ttrlib.UI.components.common.rejectAccept();
  this.node.append(this.node.reject,this.node.accept);
  
  this.ui.view.dialogs.append(this.node);
 }

 _Dialog.prototype.update = function() {
  this.elements.forEach(ele => ele.update());
 }

 _Dialog.prototype.open = function() {
  this.update();
  phluid.UI.show(this.node);
 }

 _Dialog.prototype.close = function() {
  phluid.UI.hide(this.node);
 }

 _Dialog.prototype.validate = function() {
  return this.elements.every(ele => ele.validate());
 }

 _Dialog.prototype.onReject = function() {
  //do nothing
 }

 _Dialog.prototype.onAccept = function() {
  //do nothing
 }

 return _Dialog;
}();
