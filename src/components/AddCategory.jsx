import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrimmed = inputValue.trim();
      
        if (inputValueTrimmed.length < 1) return;
        
        onNewCategory(inputValueTrimmed);
        setInputValue('');
    };

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};