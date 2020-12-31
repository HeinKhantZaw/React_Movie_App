import React from 'react';
import PropTypes from "prop-types";

class PercentageCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const sqSize = this.props.sqSize;
        const strokeWidth = this.props.strokeWidth;
        const percentage = this.props.percentage;
        const radius = (sqSize - strokeWidth) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * percentage / 100;

        return (
            <svg
                width={sqSize}
                height={sqSize}
                viewBox={viewBox}>
                <circle
                    className="circle-background"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    stroke={"#ddd"}
                    fill={"#fff"}
                />
                <circle
                    className="circle-progress"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    fill={"none"}
                    stroke={"#1e7e34"}
                />
                <text
                    className="circle-text"
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle"
                    fontSize={"1em"}
                    fontWeight={"bold"}
                    fill={"#1c7430"}
                >
                    {`${percentage}%`}
                </text>
            </svg>
        );
    }
}

export default PercentageCircle;

PercentageCircle.propTypes = {
    sqSize: PropTypes.number,
    percentage: PropTypes.number,
    strokeWidth: PropTypes.number
};

PercentageCircle.defaultProps = {
    sqSize: 100,
    percentage: 15,
    strokeWidth: 10
};