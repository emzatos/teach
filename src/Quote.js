import React from 'react';
import './App.css';

function Quote(props) {
    const quoteStyle = {
        display: 'block',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(12px + 2vmin)',
        marginBlockStart: 'auto',
        color: 'rgb(184, 182, 182)',
        fontFamily: 'Alegreya Sans SC , sans-serif',
        fontStyle: 'italic'
      }
    
    const authorStyle = {
        display: 'block',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(6px + 2vmin)',
        marginBlockStart: 'auto',
        color: 'rgb(184, 182, 182)',
        fontWeight: '400',
        fontFamily: 'Alegreya Sans SC , sans-serif',
        letterSpacing: '5px'
      }
    
      const titleStyle = {
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(40px + 2vmin)',
        color: 'black',
        fontFamily: 'Prata, serif',
        marginBlockEnd: '1%'
      }
      
    return (
        <div>
        <p style={titleStyle}>{props.title}</p>
        <span style={quoteStyle}>{props.quote}</span>
        <span style={authorStyle}>{props.author}</span>
        <br/>
        </div>
    );
}

export default Quote