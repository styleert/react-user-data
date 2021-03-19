import React from 'react';

export const Header = ({onHeaderFieldChange}) => (
    <header>
        <input type="text" onChange={onHeaderFieldChange}/>
    </header>
);
