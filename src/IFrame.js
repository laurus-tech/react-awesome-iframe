import React, { Component } from "react";
require("./IFrame.css");

class IFrame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    render() {
        const { loading = true, loadingText = "Loading", loadFunc, ...iframeProps } = this.props;

        const handleOnReadyStateChange = () => {
            this.setState({ isLoading: false });
            loadFunc();
        };

        return (
            <div className="iframe" style={{ width: iframeProps.width, height: iframeProps.height }}>
                {loading && this.state.isLoading ? (
                    <div className="loading">
                        <p className="loading-content">{loadingText}</p>
                    </div>
                ) : (
                    ""
                )}

                <iframe {...iframeProps} onLoad={handleOnReadyStateChange} />
            </div>
        );
    }
}

export default IFrame;
