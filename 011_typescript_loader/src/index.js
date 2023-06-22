import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
var Sample001;
(function (Sample001) {
    class PageLogic {
        init() {
            const x = 0;
            console.log(10 / x);
            ReactDOM.render(_jsxs("ul", { children: [_jsx("li", { children: "Let React render something from script!" }), _jsx("li", { children: "\uD83E\uDD16" }), _jsx("li", { children: "\uD83E\uDD20" }), _jsx("li", { children: "\uD83C\uDF1D" }), _jsx("li", { children: "test" })] }), document.getElementById("root"));
        }
    }
    Sample001.PageLogic = PageLogic;
})(Sample001 || (Sample001 = {}));
(() => {
    window.addEventListener("load", () => { new Sample001.PageLogic().init(); });
})();
