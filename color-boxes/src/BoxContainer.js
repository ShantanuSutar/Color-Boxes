import { Component } from "react";
import Box from "./Box";
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16,
        allColors: ['purple', 'magenta', 'violet', 'pink', 'teal', 'aqua', 'coral', 'yellowgreen', 'turquoise', '	springgreen', 'powderblue', '	olive', 'palevioletred', 'maroon', 'lightsalmon', 'beige', 'bisque', 'aquamarine', 'indianred']
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors} />
        ));

        return <div className="BoxContainer">
            {boxes}
        </div>
    };

}

export default BoxContainer;