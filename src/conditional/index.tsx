import React, {Fragment} from 'react'
import {FCWithChildren} from '../types'
import {ConditionalProps} from './types'

const Conditional: FCWithChildren<ConditionalProps> = ({value, children}) =>
    value ? <Fragment>{children}</Fragment> : null

export default Conditional
