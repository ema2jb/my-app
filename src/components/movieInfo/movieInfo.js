import React from 'react'
//config
import {BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL} from '../../config'
//styles
import {Wrapper, Content, Text} from './movieInfo.styles'
//components
import Thumb from '../Thumb/thumb'
//images
import NoImage from '../../images/no_image.jpg'
import PropTypes from 'prop-types';


const MovieInfo = ({movie})=>(
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                 clickable ={false}
                 image={
                     movie.poster_path
                     ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                     :NoImage 
                 }
                 movieId = {movie.id}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div classsName='rating-directors'>
                    <div>
                        <h3>Rating</h3>
                        <div className='score'>{movie.vote_average}</div>
                    </div>
                    <div>
                        <h3>DIRECTOR{movie.directors.length > 1 ? 's' : ''}</h3>
                        {
                            movie.directors.map(director=>(
                                <p key={director.credit_id}>{director.name}</p>
                            ))
                        }



                    </div>

                </div>
            </Text>
        </Content>
    </Wrapper>
)

MovieInfo.propTypes = {
    movie:PropTypes.object
}

export default MovieInfo