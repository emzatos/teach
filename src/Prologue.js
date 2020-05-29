import React from 'react';
import Definition from './Definition.js';
import './App.css';
import Quote from './Quote.js';

function Prologue(props) {

  return (
        <div className="Body">
        <Quote title='Prologue' quote='mathematics is the art of giving the same name to different things' author='Henri Poincaré'/>
          In the following introductory lesson, I would like to go over how to think about mathematical concepts. My goal is to try and get you away from thinking about math as formulas and instead get you to develop natural intuitions for concepts. 
          <br/>
          <br/>
          For the purposes of this project, our working definition of <i>mathematics</i> is the process of finding meaningful patterns within abstractions.
          <br/>
          <br/>
          Now, this is by no means an end-all definition. Math is wonderfully complex, and many have offered their own interpretations of what it means. However, I want you to think of every concept we learn as an <i>abstraction</i>. Defining and understanding what abstractions are will comprise the bulk of the rest of this section.
          <br/>
          <br/>
          <Definition>
            An <i>abstraction</i> is a simplified model of a concept. It attempts to remove unnecessary features that complicate our understanding of how something works.
          </Definition>
          <br/>
          Before I elaborate further, let’s look at an example.
          <br/>
          <br/>
          If you were travelling through a city and wanted to draw a map of your surroundings to help you get around, you would probably trace out some roads, draw in some buildings, and add some names to streets. This map you’ve now created is an abstraction of the city itself. Each feature you draw in is an abstraction of something in the city, or a representation of something real. For example, the lines in your drawing are an abstraction of the roads in real life. They are a simplified model of what we see. 
          <br/>
          <br/>
          <Definition title="Note">
          Pause and ponder. Do you have a grasp on what abstractions are? What are other abstractions in our map? Can you think of other examples of abstractions?
          </Definition>
          <br/>
          Now, this map is pretty great for modelling your surroundings and it’s particularly good at helping you navigate the city. 
          <br/>
          <br/>
          But let’s say over time you become more familiar with your surroundings. You don’t necessarily need a detailed map to give you information about where you are. Instead, you’re more interested in how points of interest in the city connect to each other. You only want to know if there is a path between landmarks and nothing else. We don’t care about the shape of the roads, just whether there is a road that takes us from one building to the next. This task <i>can</i> be accomplished with our original map, but there’s unnecessary detail that impedes our new desires. These details were useful before when we were less familiar with the city, but now that we’re experienced they can be disregarded.
          <br/>
          <br/>
          So let’s try and construct a new model. Instead of drawings of buildings, let’s just have a circle with the name of the building. Instead of having a detailed reconstruction of the roads of our city, let’s just have a line connect two circles if there is a road connecting two buildings. Now our map looks quite different! To the untrained eye, it looks like a bunch of randomly connected circles. But we devised this new model with a specific goal in mind - to understand how buildings in our city are connected at a high level. We want to look at our map and instantly know if there is a way to get from one building to the next. The details of the route are not important anymore, we just want to know if it’s possible. This new model has removed the details that were required for navigation because our goal has now shifted. 
          <br/>
          <br/>
          The fact that we developed this new model not from looking at the city, but rather from looking at a <i>map</i> of the city indicates something that is rather profound: abstractions can build upon existing abstractions. We took what we knew about maps and tried to minimize the number of details to look at our city in a new way. This concept alone is what makes math so vast and powerful. We can continually develop abstractions and gain even more insight as we go along.
          <br/>
          <br/>
          Though our new map fulfills its task of understanding proximity well, it fails miserably as a navigation tool. If we were to give our new map to a new resident of the city, they would probably look at us with confusion and ask us to leave them alone. But why are they behaving like this? It’s because our new map lacks the necessary details for navigation and only really makes sense to someone who has already lived in the city. To a newcomer who still <i>needs</i> the details, it doesn’t do a great job. 
          <br/>
          <br/>
          This paves the way for another key insight: abstraction is a spectrum. The more abstract our model, the more details we lose, but the more general our insights. 
          <br/>
          <br/>
          [insert map abstraction]
          Abstractions are an extremely common tool used pretty much any time we want to represent something in the real world.
          <br/>
          <br/>
          Let’s consider some mathematical abstractions. One of the most fundamental objects in math is the <i>set</i>.
          <br/>
          <br/>
          <Definition>A <i>set</i> is  a collection of other objects. It is an abstraction of one’s idea of a container, or a list.</Definition>
          <br/>
          [set example]
          When we want to develop intuitions about how mathematical objects behave, we typically do so by analyzing sets. For example, we could spend our whole life studying the color blue, but that really doesn’t help us understand color as a whole. We should instead look at the <i>set</i> of all colors, of which blue is an <i>element</i>. Now, anything we glean about this set applies not only to blue, but to <i>all</i> colors, and our life has no longer been wasted! Sets are valuable because they are a natural generalization - we want to consider how <i>all</i> objects of a certain type behave, not just the one. 
          <br/>
          <br/>
          Another important mathematical concept is that of a <i>function</i>. 
          <br/>
          <br/>
          <Definition>A <i>function</i> is a mathematical object that takes in an input and assigns it uniquely to an output. It can be thought of as an abstraction of a machine; it takes something in and modifies it in a consistent way.</Definition>
          <br/>
          While sets may be the most valuable structure in math, they are very static in nature. Once you define a set, there’s nothing you can do to really <i>change</i> the set. You can define a new set, but that doesn’t change anything about the first one. But what if we want to look at how multiple sets interact with each other? What if we want to take some elements from one set and combine them with elements from a second set? 
          <br/>
          <br/>
          These things are only possible with functions. Functions are the moving parts of math; they are the bridges that link sets. If sets are like nouns in our mathematical language, then functions are like verbs. They make things happen. 
          <br/>
          <br/>
          We will go into greater detail on sets and functions and their many flavors in the future, but for now just try and develop a basic intuition for what they might mean to you.
          <br/>
          <br/>
          The topics covered in this section may be brand new or may not be completely intuitive. And that’s fine! I’m trying to get you to think in a completely new way, which may be uncomfortable at first. Like anything, it’s a skill that is developed over time through continually engaging with the topic. Going forward, I want you to think about what kind of abstractions we’re making when we cover new topics. What is the underlying structure this new object is trying to explain? How does this abstraction relate to others we’ve seen before? What is the value in looking at an abstraction over what we are trying to model?
          <br/>
          <br/>
          Our next section will be the beginning of our first unit on vectors, but the topics here are instrumental to all future sections. If you need a refresher, feel free to come back here and reconsider the fundamentals. If something feels confusing in the text, feel free to reach out to me for clarifications. I’ll also add links to other resources that I find very helpful.
          <br/>
          <br/>
          With that, our journey continues!

        </div>
  );
}

export default Prologue