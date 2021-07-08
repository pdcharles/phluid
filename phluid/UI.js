import * as components from './components/_index.js';
import * as handles from './handles/_index.js';

export let UI = function() {

 const UI_UPDATE_INTERVAL = 1000;

 let DialogSession = function() {
  let _DialogSession = function() {
   this.open = false;
   this.dialogs = [];
   this.caches = [];
  }
  _DialogSession.prototype.launch = function(dialog) {
   this.open = true;
   this.caches.push({});
   this.dialogs.push(dialog);
   dialog.open();
  }
  _DialogSession.prototype.closeTop = function() {
   this.caches.pop();
   this.dialogs.pop().close();
   if (this.dialogs.length == 0) this.open = false;
  }
  _DialogSession.prototype.getCurrentCache = function() {
   return this.caches[this.caches.length-1];
  }
  _DialogSession.prototype.getCurrentDialog = function() {
   return this.dialogs[this.dialogs.length-1];
  }
  return _DialogSession;
 }();
 
 let _UI = function(app,extraHandles = {},embeddedFonts = false) {
  this.app = app;

  this.style = document.createElement('style');
  this.style.type = 'text/css';
  this.style.textContent = phluid.styles;
  if (embeddedFonts) phluid.fonts.list().forEach((font,i) => this.style.styleSheet.insertRule(phluid.fonts.atRule(font),i));
  document.head.appendChild(this.style);
  
  this.fontFamily = window.getComputedStyle(this.app.container).fontFamily.replace(/"/g,'');

  this.dialogs = {};
  this.dialogSession = new DialogSession();

  this.root = document.createElement('div');
  this.root.classList.add('phluid')

  this.mainLayer = document.createElement('div');
  this.mainLayer.classList.add('phluid-main-layer')
  this.root.append(this.mainLayer);

  this.dialogLayer = document.createElement('div');
  this.dialogLayer.classList.add('phluid-dialog-layer')
  this.root.append(this.dialogLayer);

  this.app.container.append(this.root)

  this.handles = handles;
  Object.entries(extraHandles).forEach((key,value) => this.handles[key] = value);

  Array.from(this.root.querySelectorAll('[id]')).forEach(id => this.assignHandles(app,id) );
  Array.from(this.root.querySelectorAll('[class]')).forEach(ele => { if(!ele.id) this.assignHandles(app,ele) } );
 }


//---

 _UI.prototype.launchDialog = function(dialogName) {
  if (dialogName in this.dialogs) this.dialogSession.launch(this.dialogs[dialogName]);
 }

 _UI.prototype.rejectDialog = function() {
  let dialog = this.dialogSession.getCurrentDialog();
  this.dialogSession.closeTop();
  dialog.onReject();
 }

 _UI.prototype.acceptDialog = function() {
  let dialog = this.dialogSession.getCurrentDialog();
  dialog.node.accept.classList.remove('warn');
  void dialog.node.accept.offsetWidth;
  if (dialog.validate()) {
   this.dialogSession.closeTop();
   dialog.onAccept();
  }
  else {
   dialog.node.accept.classList.add('warn');
  }
 }

 _UI.prototype.appendToParent = function(ele,parent) {
  parent.append(ele);
  this.assignHandles(this.app,ele);
 }

 _UI.prototype.addDialog = function(dialogName,dialog,entrance = 'phluid_dialog_fromMidScreen') {
  this.dialogs[dialogName] = dialog;
  dialog.classList.add('phluid_dialog',entrance);
  phluid.UI.hide(dialog);
  this.appendToParent(dialog,this.dialogLayer);
 }

 _UI.prototype.assignHandles = function(ctx,ele) {
  if ('listeners' in ele) ele.listeners.forEach(listener => ele.removeEventListener.apply(this,listener));
  ele.listeners = []
  Object.entries(this.handles)
  .filter(([targetName,events]) => (ele.id == targetName)|ele.classList.contains(targetName))
  .forEach(([targetName,events]) => {
   console.log(targetName);
   Object.entries(events).forEach(([eventName,action]) => {
    ele.addEventListener(
     eventName,
     action.bind(ctx),
     action.useCapture
    );
    ele.listeners.push([eventName,action,action.useCapture]);
   });
  });
 }

 _UI.removeChildren = function(node) {
  node.querySelectorAll(':scope > *').forEach(child => { node.removeChild(child) });
 }

 _UI.show = function(node) {
  node.classList.remove('hide');
  node.classList.add('show');
 }

 _UI.hide = function(node) {
  node.classList.add('hide');
  node.classList.remove('show');
 }

 _UI.enable = function(node) {
  node.classList.remove('disable');
 }

 _UI.disable = function(node) {
  node.classList.add('disable');
 }

 _UI.components = components;

 return _UI;
}();