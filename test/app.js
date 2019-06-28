import React from "react";
import ReactDOM from "react-dom";

import IFrame from "../src/IFrame";

const props = {
    loading: true,
    loadingText: "加载中",
    width: 600,
    height: 400,
    src: "https://www.baidu.com",
    loadFunc: function() {
        alert("already loaded, now you can do something.");
    }
};

ReactDOM.render(<IFrame {...props} />, document.getElementById("app"));
