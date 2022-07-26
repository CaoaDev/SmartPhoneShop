import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroImagen } from "../../helpers/HeroImagen";
import { getElementById } from "../../selectors/getHeroById";

export const HeroeScreen = () => {
    const { heroeId }= useParams();
    const hero = useMemo ( () => getElementById( heroeId ), [ heroeId ] );
    const navigate=useNavigate();
    const handleReturn= () => {
        navigate( -1 )
    }

    if ( !hero ) {
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // const imagePath= `../assets/${ id }.jpg`; // solo si la imagen esta en assets public
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    // src={ heroImages(`./${ heroeId }.jpg`) } // era para cuando este en public
                    src={ HeroImagen( `./${ heroeId }.jpg` ) }
                    alt={ superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
        <div className='col-8 animate__animated animate__fadeInRight'>
            <h3>{ superhero }</h3>
                <ul className='list-group list-group-flex'>
                    <li className='list-group-item'><b> Alter Ego: </b>{ alter_ego }</li>
                    <li className='list-group-item'><b> Publisher: </b>{ publisher }</li>
                    <li className='list-group-item'><b> First Apperance: </b>{ first_appearance }</li>
                </ul>
            <h5 className='mt-3'>Characters</h5>
            <p>{ characters }</p>
            <button 
                className='btn btn-outline-info'
                onClick={ handleReturn }
            >
                Regresar
            </button>
        </div>
    </div>
    )
}