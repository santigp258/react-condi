import React from 'react'

export type FCWithChildren<P = Record<any, any>> = React.FC<
    P & { children?: React.ReactNode }
>
