import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {

const [people, setpeople] = useState(data);
const [index, setindex] = useState(0);

useEffect(() => {
  const lastindex = people.length - 1;
  if(index < 0){
      setindex(lastindex);
  }
  if(index > lastindex){
    setindex(0);
  }
}, [index, people]);

useEffect(() => {
  let slider = setInterval(() => {
    setindex(index + 1);
  }, 3000);
  return ()=> clearInterval(slider);
}, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((singleperson, personindex) => {
            const {id, image, name, title, quote} = singleperson;
            
            let position = 'nextSlide';

            if(personindex === index){
              position = 'activeSlide';
            }

            if(personindex === index - 1 ||
                (index === 0 && personindex === people.length - 1)){
                  position = 'lastSlide';
                }
            
        return (
          <article className={position} key={id} >
            <img src={image} alt={name} className='person-img'/>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
        </article>
        )
        })}
        <button className='prev' onClick={() => setindex(index-1)}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={() => setindex(index+1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  )

}

export default App;