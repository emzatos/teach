import React from 'react';
import './App.css';
import Quote from "./Quote.js";

function Preface(props) {


  return (
      <body>
        <div className="Body">
        <Quote title='Preface' quote="i hate algebra" author="John Conway"/>
        I’d like to begin by describing my motivations and goals for this project.
        <br/>
        <br/>
        I have a very sincere and deep passion for math. I began developing an interest in the 4th grade when I discovered that long multiplication wasn’t always necessary to find the product between two numbers. Sometimes there were tricks that allowed you to compute it faster. This concept of discovering hidden procedures led me down a rabbit hole of number patterns that developed into a fascination with the underlying mechanics.
        <br/>
        <br/>
        Even so, at that point I was only aware that there was <i>something</i> going on – pinning down something exact was still far from reach. During my second year in college, I began my first foray into what I would describe as real mathematics: linear algebra. Up until this point, I still believed that math was a numbers game. It was a collection of formulas and calculations and the very best mathematicians were those who could derive new ones or memorize a lot of them. While this may be an apt description for arithmetic, I realized that my assumptions had been completely wrong. 
        <br/>
        <br/>
        Math is art. It is the foundation of our understanding of the universe. It is the fullest realization of humanity’s ability to create and think. It is the canvas of expression for logic, the paradoxical intersection of creativity and rationality. 
        <br/>
        <br/>
        Once these truths became self-evident, I soon realized that most others didn’t share my passion. And that’s fine, not everyone has to be a mathematician. What bothered me is how most hadn’t even <i>seen</i> what math really is. Most saw math as an unforgiving, unending string of formulas to be memorized. Those who were unable to develop an intuition for something so brazenly unintuitive were left to feel like they were “bad” at it. Students everywhere were developing ill-informed opinions about my favorite thing in the world. 
        <br/>
        <br/>
        My goal is to show you real math. I want you to understand why I like it. I want you to be able to see things differently, see the art hidden behind the logic. I will try to make no assumptions of your past knowledge, and I will motivate <i>everything</i> with reasoning. Nothing will be taken for granted. 
        <br/>
        <br/>
        I hope you enjoy the journey as much as I did.
        </div>
      </body>
  );
}

export default Preface