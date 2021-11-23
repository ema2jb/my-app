import {useState, useEffect} from 'react'
import API from '../../API'
import {isPersistedStorage} from '../../helpers'


const initialState = {
    page:0,
    results:[],
    total_pages:0,
    total_rsults:0
}


export const useHomeFetch = ()=>{
    const[searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState()
    const [isError, setIsError] = useState(false)
    const [loadMore, setLoadMore] = useState(false) 

const fetchMovies = async (searchTerm, page)=>{
    try{
        setIsError(false)
        setIsLoading(true)

        const movies = await API.fetchMovies(searchTerm, page)
        console.log(searchTerm)

        setState(prev => ({
            ...movies, 
            results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

        }))

    } catch (error){
        setIsError(true)
    }
    setIsLoading(false)
}

    
useEffect(()=>{
    if(!searchTerm){
        const sessionState = isPersistedStorage('homeState')
        if(sessionState){
            setState(sessionState)
            return
        }
    }
    setState(initialState)
    fetchMovies(searchTerm, 1)
}, [searchTerm])

useEffect(()=>{
    if(!loadMore) return
    fetchMovies(searchTerm, state.page + 1)
    setLoadMore(false)
}, [loadMore])

//write to session storage
useEffect(()=>{
    if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
}, [searchTerm, state])

    return {state, isLoading, isError, searchTerm, setSearchTerm, setLoadMore}
}