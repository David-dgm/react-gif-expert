import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // Validación para no repetir
        if (categories.includes(newCategory)) return;

        setCategories((allCat) => [newCategory, ...allCat]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/** input */}
            <AddCategory
                //  setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
