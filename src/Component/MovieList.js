import {MovieCard} from './MovieCard';
import {AddMovie} from './AddMovie';
import {Filter} from './Filter';
//import React, {useState, useEffect} from 'react';

export const MovieList = ({animelist, setanime}) => {
    const handleOk = (addTerm) => {
        setanime([...animelist, addTerm]);
    };
    const ratingSetValueHandler = (rating) => {
        setanime(animelist.filter(el => el.rate <= rating ));
    };
    const searchSubmitHandler = (searchTerm) => {
        setanime(animelist.filter(el => el.title.toLowerCase().indexOf(searchTerm) > -1))        
    }
    return (
        <div>
            <Filter onChange={ratingSetValueHandler} onSubmit={searchSubmitHandler}/>
            <AddMovie onOk={handleOk}/>
            <div className='anime-container'>
                {animelist.map((el,i) => (
                    <MovieCard key={i} item={el}/>
                ))}
            </div>
        </div>
    );
}