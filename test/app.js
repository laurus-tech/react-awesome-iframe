import React from "react";
import ReactDOM from "react-dom";

import IFrame from "../src/IFrame";

const props = {
    loading: true,
    loadingText: "加载中",
    width: "100%",
    height: window.innerHeight - 30,
    src: "https://www.bing.com"
};

ReactDOM.render(<IFrame {...props} />, document.getElementById("app"));
