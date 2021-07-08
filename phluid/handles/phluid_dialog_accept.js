export let phluid_dialog_accept = function() {
 
 let click = function(e) {
  let app = this;
  app.ui.acceptDialog();
 }
 click.useCapture = true;

 return {
         click: click
        };
}();