export let phluid_dialog_reject = function() {
 
 let click = function(e) {
  let app = this;
  app.ui.rejectDialog();
 }
 click.useCapture = true;

 return {
         click: click
        };
}();