import React from 'react';
import {POSTER_SIZE, IMAGE_BASE_URL} from '../config'
import NoImage from '../images/no_image.jpg'
import Grid from './Grid/grid'
import Spinner from './Spinner/spinner'
import {useMovieFetch} from './hooks/useMovieFetch'
import {useParams} from 'react-router-dom'
import BreadCrumb from './BreadCrumb/breadCrumb'
import MovieInfo from './movieInfo/movieInfo'
import MovieInfoBar from './movieInfoBar/movieInfoBar'
import Actor from './Actor/actor'

const Movie = ()=>{

    //rename a parameter when destructuring it e.g state
    const{movieId} = useParams()
    const {movie, loading, error} = useMovieFetch(movieId)
    console.log(movie)
   

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>

    return (
    <div>
    <BreadCrumb movieTitle={movie.original_title}/>
    <MovieInfo movie={movie} />
    <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
    <Grid header='Actors'>
        {
            movie.actors.map((actor)=>(
                <Actor 
                key={actor.credit_}
                name={actor.name}
                character={actor.character}
                imageUrl = {
                    actor.profile_path
                    ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    :NoImage
                }
                />
            ))
        }
    </Grid>
    </div>
    )
    
}

export default Movie