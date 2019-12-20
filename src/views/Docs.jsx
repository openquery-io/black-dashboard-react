import React from "react";

const ReactMarkdown = require('react-markdown');


class Docs extends React.Component {


    render() {
        const input = '# Refinery Documentation\n\nRefinery is an application designed to make data anonymization rigorous, and easy ';
        return (
            <>
                <div className="content">
                    < ReactMarkdown
                        source={input}
                    />
                </div>
            </>
        )
    }
}

export default Docs;