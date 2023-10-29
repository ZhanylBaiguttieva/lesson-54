import React from "react";

interface Props {
    hasItem: boolean;
    clicked: boolean;
    onClick: React.MouseEventHandler;
}
const Cell: React.FC<Props> = ({hasItem,clicked, onClick}) => {
    const itemStyle: React.CSSProperties = {
        background: 'white',
        width: '5px',
        height: '20px',
        marginRight: '2px',
        display:'inline-flex',
        borderRadius: '0px'
    };
    if(clicked) {
        itemStyle.background= 'transparent';
        if(hasItem) {
            itemStyle.background = 'green';
        }
    }

    return (
        <button style={itemStyle} onClick={onClick}>
        </button>
    );
};

export default Cell;