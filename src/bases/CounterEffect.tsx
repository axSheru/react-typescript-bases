import { useEffect, useState } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

    const [ counter, setCounter ] = useState( 6 );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUM_COUNT ) );
    };

    useEffect(() => {
        
        if ( counter < 10 ) return;

        console.log( '%cSe llegó al valor máximo.', 'color: red; background-color: yellow' );

    }, [ counter ]);
    

    return (
        <>
            <h1>CounterEffect: { counter }</h1>
            <button
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    );
};
