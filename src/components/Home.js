import React from 'react'


import {BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL} from '../config'

import NoImage from '../images/no_image.jpg'

import {useHomeFetch} from './hooks/useHomeFetch'
import HeroImage from './HeroImage/heroImage'
import Grid from './Grid/grid'
import Thumb from './Thumb/thumb'
import Spinner from './Spinner/spinner'
import SearchBar from './SearchBar/searchBar'
import Button from './Button/button'

const Home = ()=>{
    const {state, isLoading, isError, searchTerm, setSearchTerm, setLoadMore } = useHomeFetch()
    console.log(state)
 

    if (isError){
        return <div>Something went wrong...</div>
    }

    return (
    <div>
        {
            !searchTerm && state.results[0] ?
            <HeroImage 
            image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
            title = {state.results[0].original_title}
            text = {state.results[0].overview}
            /> :
            null
        }
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header ={searchTerm?'Search Results':'Popular Movies'}>
            {state.results.map(movie=>(
                <Thumb key={movie.id} 
                    clickable
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        :NoImage 
                    }
                    movieId = {movie.id}
                />
            ))}
        </Grid>
        {isLoading && <Spinner />}
        {state.page < state.total_pages && !isLoading && <Button text = 'Load More' callBack = {()=>setLoadMore(true)}/>}
    </div>
    )
}


export default Home