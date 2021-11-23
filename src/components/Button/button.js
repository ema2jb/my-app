import React from 'react';

import {Wrapper} from './button.styles'
import PropTypes from 'prop-types';

const Button = ({text, callBack})=>(
    <Wrapper type='button' onClick={callBack}>
        {text}
    </Wrapper>
)

Button.propTypes = {
    text: PropTypes.string,
    callBack: PropTypes.func
}

export default Button