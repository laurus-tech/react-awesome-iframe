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
        const { loading, onLoad, ...iframeProps } = this.props;

        const handleOnReadyStateChange = () => {
            this.setState({ isLoading: false });
        };

        return (
            <>
                {loading && this.state.isLoading ? (
                    <div className="loading">
                        <p className="loading-content">{iframeProps.loadingText}</p>
                    </div>
                ) : (
                    ""
                )}

                <iframe {...iframeProps} onLoad={handleOnReadyStateChange} />
            </>
        );
    }
}

export default IFrame;
