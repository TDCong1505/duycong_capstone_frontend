import React from 'react';
import { COMPUTER , TABLET , MOBILE } from '../reducers/constants';

export const isComputer = () => {
    console.log("Day la may tinh")
    return (dispatch) => {
        dispatch({
            type:COMPUTER
        })
    }
}

export const isTablet = () => {
    console.log("Day la may tinh bang")
    return (dispatch) => {
        dispatch({
            type:TABLET
        })
    }
}

export const isMobile = () => {
    console.log("Day la dien thoai")
    return (dispatch) => {
        dispatch({
            type:MOBILE
        })
    }
}