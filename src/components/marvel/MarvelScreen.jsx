import { HeroList } from "../heroes/HeroList";
import React from 'react';

export const MarvelScreen = () => {
    return (
        <div>
            <h1><center>Marvel Héroes</center></h1>
            <hr />
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}