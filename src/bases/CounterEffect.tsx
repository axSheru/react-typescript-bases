import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

    const [ counter, setCounter ] = useState( 6 );
    const counterElement = useRef<HTMLHeadingElement>( null );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUM_COUNT ) );
    };

    useEffect(() => {
        
        if ( counter < 10 ) return;

        console.log( '%cSe llegó al valor máximo.', 'color: red; background-color: yellow' );

        const tl = gsap.timeline();

        tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
        .to( counterElement.current, { y:0, duration: 0.2, ease: 'bounce.out' } );

    }, [ counter ]);
    

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={ counterElement } >{ counter }</h2>
            <button
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    );
};
