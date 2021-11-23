import React, {useState, useEffect, useRef} from 'react'

import searchIcon from '../../images/search-icon.svg'

import {Wrapper, Content} from './searchBar.styles'
import PropTypes from 'prop-types';

const SearchBar = ({setSearchTerm})=>{
    const [searchWord, setSearchWord] = useState('')
    //useref is used because changing its value doesn't cause a re-render
    const initial = useRef()

    useEffect(()=>{
        //This is used to prevent useeffect from running on first render
        if(initial.current){
            initial.current = false
            return
        }
        const timer = setTimeout(()=>{
            setSearchTerm(searchWord)
        }, 500)
        return ()=>clearTimeout(timer)
    }, [setSearchTerm, searchWord])

    return <div>
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                type='text' 
                placeholder='search movie'
                onChange = {event => setSearchWord(event.target.value)}
                value={searchWord}
                 />
            </Content>
        </Wrapper>
    </div>
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;