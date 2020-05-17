import React from 'react';
import './App.css';

function Quote(props) {
    const quoteStyle = {
        display: 'block',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'start',
        fontSize: 'calc(12px + 2vmin)',
        marginBlockStart: 'auto',
        color: 'rgb(184, 182, 182)',
        fontFamily: 'Alegreya Sans SC , sans-serif',
        fontStyle: 'italic'
      }
    
    const authorStyle = {
        display: 'block',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'start',
        fontSize: 'calc(6px + 2vmin)',
        marginBlockStart: 'auto',
        color: 'rgb(184, 182, 182)',
        fontWeight: '400',
        fontFamily: 'Alegreya Sans SC , sans-serif',
      }
      
    return (
        <div>
        <span style={quoteStyle}>{props.quote}</span>
        <span style={authorStyle}>{props.author}</span>
        </div>
    );
}

export default Quote