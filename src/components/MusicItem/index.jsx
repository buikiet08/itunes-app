import React, { useState } from 'react'
import { Skeleton } from '../Skeleton'
import { PATH } from '@/config/path'
import { Link, generatePath } from 'react-router-dom'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setUrlThunkAction } from '@/store/musicReducer'
import styled from 'styled-components'
import { PlayCircleOutlined } from '@ant-design/icons'

const CardStyled = styled.div`
    .play{
        width:80px;
        height:40px;
        bottom: -50px;
        margin: 0 auto;
        transition:bottom 0.2s linear;
    },
    .musicImgae:hover .play{
        bottom:15px
    }
`
export const MusicItem = ({ previewUrl,trackId, artworkUrl100, trackCensoredName, artistName }) => {
    const path = generatePath(PATH.Detail, { id: trackId })
    const dispatch = useDispatch()

    return (
        <CardStyled className='overflow-hidden w-[236px] flex flex-col justify-start items-start'>
            <div className='relative overflow-hidden musicImgae'>
                <Link to={path}>
                    <img src={artworkUrl100} className='w-[175px] h-[175px] mb-2 rounded-2xl' />
                </Link>
                <span
                    onClick={() => {
                        dispatch(setUrlThunkAction(previewUrl))
                    }} className='play absolute left-0 right-0 bg-white rounded-full flex justify-center items-center font-bold cursor-pointer'>
                    <Link to={path}>Phát</Link>
                </span>
            </div>
            <p className='whitespace-normal overflow-hidden'>{trackCensoredName}</p>
            <p className='text-xs font-light whitespace-normal overflow-hidden' >{artistName}</p>
        </CardStyled>
    )
}

export const MusicItemLoading = () => {
    return (
        <div>
            <Skeleton width={140} height={140} />
            <br />
            <Skeleton width={140} height={10} />
            <br />
            <Skeleton width={140} height={10} />
        </div>
    )
}

export const MusicItemList = ({ trackId, artworkUrl100, trackCensoredName, artistName, previewUrl }) => {
    const path = generatePath(PATH.Detail, { id: trackId })
    const dispatch = useDispatch()
    return (
        <div className='overflow-hidden flex justify-between w-full items-start mb-4 pb-4 border-b border-b-slate-200 pr-4'>
            <div className='flex justify-center items-center'>
                <Link to={path}>
                    <img src={artworkUrl100} className='w-[40px] h-[40px] rounded-md' />
                </Link>
                <div className='pl-4'>
                    <p className='whitespace-normal overflow-hidden font-bold'>{trackCensoredName}</p>
                    <p className='text-xs font-light whitespace-normal overflow-hidden' >{artistName}</p>
                </div>
            </div>
            <Button onClick={() => {
                dispatch(setUrlThunkAction(previewUrl))
            }}>
                <Link to={path}>Phát</Link>
            </Button>
        </div>
    )
}

export const MusicItemListLoading = () => {
    return (
        <div className='overflow-hidden flex justify-start items-start mb-4'>
            <Skeleton width={40} height={40} />
            <div className='pl-4'>
                <Skeleton width={300} height={10} />
                <br />
                <Skeleton width={200} height={10} />
            </div>
        </div>
    )
}