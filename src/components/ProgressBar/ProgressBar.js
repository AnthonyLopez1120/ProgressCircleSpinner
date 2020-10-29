import React, {useState, useEffect, useRef} from "react"
import './ProgressBar.css'

const ProgressBar = (props) => {
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke
    } = props

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null)

    const center = size / 2;
    const radius = size / 2 - (strokeWidth / 2);

    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in;"

    }, [setOffset, circumference, progress, offset]);

    return (
        <div className="container">
        <svg 
            className="svg" 
            width={size}
            height={size}
        >
            <circle
                className="svg-circle-bg"
                r={radius}
                cx={center}
                cy={center}
                stroke={circleOneStroke}
                strokeWidth={strokeWidth}
            />
            <circle
                className="svg-circle"
                
                r={radius}
                cx={center}
                cy={center}
                stroke={circleTwoStroke}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                ref={circleRef}
                strokeDashoffset={offset}
                strokeLinecap={"round"}
            />
        </svg>
            <div className="svg-circle-text">

                <span className="svg-circle-text">{progress}<span className="fancyPercent">%</span></span>
            </div>
        </div>
    )
}

export default ProgressBar