import React, {useState} from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export const Filter = (props) => {
    //React Hooks
    const [inputFilter, setInputFilter] = useState('');
    const [rateValue, setRateValue] = useState(5);
    //Anime rating search
    const ratingSetValueHandler = (nextValue) => {
        setRateValue(nextValue);
        props.onChange(nextValue);
    }

    //Anime title search
    const filterTextHandler = (e) => {
        e.preventDefault();
        setInputFilter(e.target.value);
        props.onSubmit(e.target.value);
    }
    
    return (
        <div className='header'>
                <input type='text' 
                value={inputFilter}
                onChange={filterTextHandler}
                placeholder='Anime Search ...'></input>
            <br></br>
            <Rate style={{fontSize : 30}}
                value={rateValue}
                onChange={ratingSetValueHandler}
                allowClear={false}/>
        </div>
    )
}

