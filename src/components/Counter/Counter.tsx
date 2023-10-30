import React from "react";

interface Props {
    tries: number;
}
const Counter: React.FC<Props> = ({tries}) => {

    return (
        <p>Total tries: {tries}</p>
    );
};

export default Counter;