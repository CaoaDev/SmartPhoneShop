import { Routes, Route } from "react-router-dom";
import React from 'react';
import { Navbar2 } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { InicioScreen } from "../components/inicio/InicioScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroeScreen } from "../components/heroes/HeroScreen";

export const DashBoardRoutes = () => {
    return (
        <>
            < Navbar2 />
            <div className='container'>
                <Routes>
                    <Route path='' element={<InicioScreen />}/>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroeScreen />} />
                    <Route path='/*' element={<InicioScreen />}/>

                </Routes>
            </div>
        </>
    )
}
