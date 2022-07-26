import { HeroList } from "../heroes/HeroList";
import React from 'react';

export const InicioScreen = () => {
    return (
        <div>
            <h1><center>Todos los Héroes</center></h1>
            <hr />
            <HeroList publisher='all'/>
        </div>
    )
}