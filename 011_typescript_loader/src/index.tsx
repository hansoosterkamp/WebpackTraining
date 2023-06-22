import * as React from "react";
import * as ReactDOM from "react-dom";

namespace Sample001 {

   export class PageLogic {
        
       //constructor() {
       //}

       public init() {
           const x = 0;
           console.log(10 / x);
           ReactDOM.render(
               <ul>
                   <li>Let React render something from script!</li>
                   <li>🤖</li>
                   <li>🤠</li>
                   <li>🌝</li>
                   <li>test</li>
               </ul>,
               document.getElementById("root")
           );
       }
   }
}

// *************************************************************************
// Last thing to do Self execute
// *************************************************************************

(() => {

    window.addEventListener("load", () => { new Sample001.PageLogic().init();  })
    
})();

