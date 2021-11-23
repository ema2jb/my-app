import {useState, useEffect} from 'react'

import {isPersistedStorage} from '../../helpers'
import API from '../../API'



export const useMovieFetch = movieId =>{
    const [movie, setMovie] = useState({directors:[], actors:[]})
    const [loading, setLoading] = useState()
    const [error, setError] = useState() 
    console.log(movie)

    const fetchMovie = async()=>{
        try{
            setLoading(true)
            setError(false)

            const thisMovie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)
            //get directors of the movie
            const directors = credits.crew.filter(member=>member.job==='Director')

            setMovie({...thisMovie, actors:credits.crew, directors})

            setLoading(false)
        }catch(error){
            setError(true)
        }
    }

    useEffect(()=>{
        const sessionState = isPersistedStorage(movieId)
        if(sessionState){
            setMovie(sessionState)
            setLoading(false)
            return
        }
        fetchMovie();
    }, [movieId])

    //write to session storage
    useEffect(()=>{
        sessionStorage.setItem(movieId, JSON.stringify(movie))

    }, [movieId, movie])
return {movie, loading, error}
}
