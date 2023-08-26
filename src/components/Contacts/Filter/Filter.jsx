import React from 'react'

import { FilterInput } from './Filter.styled'



export const Filter = ({onChange, value}) => {
    return (
        <FilterInput
            onChange={onChange}
            value={value}
        />
    )
}