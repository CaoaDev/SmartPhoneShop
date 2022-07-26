import { HeroList } from "../heroes/HeroList";
import React from 'react';

export const DcScreen = () => {
    return (
        <div>
            <h1><center>Dc Héroes</center></h1>
            <hr />
            <HeroList publisher='DC Comics' />
        </div>
    )
}