export let styles = function() {
 let _styles = `
  /* App */
  .phluid {
   display: block;
   position: relative;
   top: 0; left: 0; right: 0px;
   height: 100%;
   margin: 0px 0px 0px 0px;
  
   --fontFamily: 'Roboto';
   font-family: var(--fontFamily);
   font-size: 12pt;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   -moz-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
   cursor: default;
  
   /* Constant Definitions */
   --bg: white;
   --outline: grey;
   --title: black;
   --link: black;
   --shadow: lightgrey;
   --highlight: CornflowerBlue;
   --selected: blue;
   --outlineWidth: 1px;
   --shadowWidth: 1px;
   --progress: CornflowerBlue;
  
   /* Sizes */
   --goldenRatio: 1.618;
   --topbarHeight: 60px;
   --topbarToMainPanelMargin: 40px;
   --mainPanelMinHeight: 500px;
   --mainPanelMinWidth: calc(var(--mainPanelMinHeight) * var(--goldenRatio));
   --mainPanelHeightFaction: 0.75;
   --mainPanelHeight: calc((100vh - var(--topbarHeight) - var(--topbarToMainPanelMargin)) * var(--mainPanelHeightFaction));
   --mainPanelWidth: calc(var(--mainPanelHeight) * var(--goldenRatio));
  
   /* Dialogs */
   --dialogItemPadding: 20px;
   --dialogLinePadding: 10px;  
  }
  
  .phluid .disable {
   filter: opacity(50%);
  }
    
  /* Dialogs */
    
  .phluid .phluid_dialog {
   position: relative;
   top: var(--topbarHeight);
   left: 0;
   right: 0;
   height: calc((100% - var(--topbarHeight) - 2*var(--dialogItemPadding)) * 0.95); 
   width: calc((100% - 2*var(--dialogItemPadding)) * 0.95);
   min-height: var(--mainPanelMinHeight);
   min-width: var(--mainPanelMinWidth);
   margin-left:auto;
   margin-right:auto;
   overflow: hidden;
   padding: var(--dialogItemPadding);
   background: var(--bg);
   box-shadow: 0px 0px 0px var(--outlineWidth) var(--outline);
   visibility: hidden;
  }
  
  .phluid .phluid_dialog .phluid_dialog_fromTop {
   transform: translateY(-110%);
  }

  @keyframes phluid-slide-out {
   0% { transform: translateY(0%); visibility: visible; }
   100% { transform: translateY(-100%);  visibility: hidden; }
  }
  .phluid .phluid_dialog .phluid_dialog_fromTop.hide {
   animation: phluid-slide-out 0.25s forwards;
  }

  @keyframes phluid-slide-in {
   0% { transform: translateY(-110%); visibility: visible; }
   100% {  transform: translateY(0%);  visibility: visible; }
  }
  .phluid .phluid_dialog .phluid_dialog_fromTopBar.show {
   animation: phluid-slide-in 0.25s forwards;
  }

  
  .phluid .phluid_dialog .phluid_dialog_fromMid {
   transform: scale(0);
   transform-origin: 50% 50%;
  }

  @keyframes phluid-shrink {
   0% { transform: scale(1); visibility: visible; }
   100% { transform: scale(0);  visibility: hidden; }
  }
  .phluid .phluid_dialog .phluid_dialog_fromMid.hide {
   animation: phluid-shrink 0.25s forwards;
  }

  @keyframes phluid-grow {
   0% { transform: scale(0); visibility: visible; }
   100% {  transform: scale(1); visibility: visible; }
  }
  .phluid .phluid_dialog .phluid_dialog_fromMidScreen.show {
   animation: phluidgrow 0.25s forwards;
  }
  
  .phluid .phluid_dialog * {
   display: inline-block;
  }
  
  .phluid .phluid_dialog .hide {
   display: none;
  }
  
  .phluid .phluid_dialog .show {
   display: inline-block;
  }
  
  .phluid .phluid_dialog .phluid_dialog_divider {
   position: relative;
   margin-bottom: var(--dialogItemPadding);
   width: 100%;
   float: left;
   clear: left;
   border-top: var(--outlineWidth) solid var(--outline);
  }
  
  .phluid .phluid_dialog .phluid_dialog_button {
   vertical-align: middle;
   text-align: center;
   box-shadow: 0px 0px 0px var(--outlineWidth) var(--outline), inset 0px 0px 0px var(--shadowWidth) var(--shadow);
   border-radius: 3px;
  }
  
  .phluid .phluid_dialog .phluid_dialog_button:hover {
   box-shadow: 0px 0px 0px var(--outlineWidth) var(--outline), inset 0px 0px 0px 1px var(--highlight);
  }
  
  .phluid .phluid_dialog .phluid_interstitialButton {
   padding-left: 5px;
   padding-right: 5px;
   min-width: 150px;
   height: 20px;
   margin-bottom: var(--dialogItemPadding);
  }
  
  .phluid .phluid_dialog .phluid_dialog_reject,
  .phluid .phluid_dialog .phluid_dialog_accept{
   position: relative;
   width: 60px;
   height: 20px;
   bottom: 10px;
  }
  .phluid .phluid_dialog .phluid_dialog_reject {
   right: 90px;
  }
  .phluid .phluid_dialog .phluid_dialog_accept {
   right: 10px;
  }
  
  @keyframes phluid-flash-red {
   0% { background: white; }
   50% { background: red; }
   100% { background: white; }
  }
  .phluid .phluid_dialog .phluid_dialog_accept.warn {
   animation: phluid-flash-red 0.5s 1;
  }
  
  
  .phluid .phluid_dialog .phluid_dialog_item {
   position: relative;
   margin-bottom: var(--dialogItemPadding);
   width: 100%;
   float: left;
   clear: left;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item * {
   margin-right: 10px;
   vertical-align: baseline;
   margin-bottom: var(--dialogLinePadding);
  }
  
  .phluid .phluid_dialog .phluid_dialog_item * > span {
   margin-right: 0px;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input {
   height: 20px;
   font-size: 100%;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='checkbox'] {
   height: initial;
   vertical-align: middle;
   margin-bottom: 8px;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='text'] {
   width: 100px;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='number'],
  .phluid .phluid_dialog .phluid_dialog_item input[type='text'] {
   text-align: center;
   border: 1px solid var(--outline);
   -moz-appearance:textfield;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='number']::-webkit-inner-spin-button,
  .phluid .phluid_dialog .phluid_dialog_item input[type='number']::-webkit-outer-spin-button {
   -webkit-appearance: none;
   opacity: 0;
   margin: 0;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item select {
   height: 20px;
   width: 150px;
   padding: 0px;
   font-family: var(--fontFamily);
   font-size: 100%;
   background: linear-gradient(90deg, var(--progress) 0%, white 0%, white 100%);
   background-image: url(../img/dropdownArrow.png);
   background-repeat: no-repeat;
   background-position: right center;
   background-size: 12px 8px;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   border: 0px;
   box-shadow: inset 0px 0px 0px var(--outlineWidth) var(--outline);
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='checkbox'].phluid_dialog_expander ~ * {
   display: none;
  }
  
  .phluid .phluid_dialog .phluid_dialog_item input[type='checkbox'].phluid_dialog_expander ~ label:first-of-type,
  .phluid .phluid_dialog .phluid_dialog_item input[type='checkbox'].phluid_dialog_expander:checked ~ * {
   display: inline-block;
  }
  
  /* OptionTables */
  
  .phluid .phluid_optionTable {
   display: inline-table !important;
   border-collapse: collapse;
   position: relative;
  }
  
  .phluid .phluid_optionTable * {
   display: revert !important;
   margin-right: 0px !important;
   margin-bottom: 0px !important;
   box-shadow: none !important;
   text-align: center;
  }
  
  .phluid .phluid_optionTable tr,
  .phluid .phluid_optionTable th,
  .phluid .phluid_optionTable td {
   border: 1px solid var(--outline);
   padding: 0px;
   height: 20px;
  }
  
  .phluid .phluid_optionTable th,
  .phluid .phluid_optionTable td.phluid_optionTable_cell {
   padding-left: 10px;
   padding-right: 10px;
  }
  
  .phluid .phluid_optionTable .pre {
   display: block;
   unicode-bidi: embed;
   font-family: monospace;
   white-space: pre;
  }
  
  .phluid .phluid_optionTable .phluid_optionTable_plus {
   position: absolute;
   right: -15px;
   bottom: 2px;
  }
 `;
 return _styles
}();