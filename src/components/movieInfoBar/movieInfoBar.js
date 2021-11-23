import React from 'react'
//helpers
import {convertMoney, calcTime} from '../../helpers'
//styles
import {Wrapper, Content} from './movieInfoBar.styles'
import PropTypes from 'prop-types';

const MovieInfoBar = ({time, revenue, budget})=>(
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Running Time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className='column'>
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.PropTypes = {
    time: PropTypes.number,
    revenue:PropTypes.number,
    budget:PropTypes.number
}

export default MovieInfoBar