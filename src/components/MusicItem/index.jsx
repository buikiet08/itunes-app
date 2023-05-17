import React, { useState } from 'react'
import { Skeleton } from '../Skeleton'
import { PATH } from '@/config/path'
import { Link, generatePath } from 'react-router-dom'
import { Button } from 'antd'
import MusicPlayer from '../MusicPlayer'
import { useDispatch } from 'react-redux'
import { setUrlThunkAction } from '@/store/musicReducer'

export const MusicItem = ({ trackId, artworkUrl100, trackCensoredName, artistName }) => {
    const path = generatePath(PATH.Detail, { id: trackId })
    return (
        <div className='overflow-hidden w-[236px] flex flex-col justify-start items-start'>
            <Link to={path}>
                <img src={artworkUrl100} className='w-[175px] h-[175px] mb-2 rounded-2xl' />
            </Link>
            <p className='whitespace-normal overflow-hidden'>{trackCensoredName}</p>
            <p className='text-xs font-light whitespace-normal overflow-hidden' >{artistName}</p>
        </div>
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

export const MusicItemList = ({ trackId, artworkUrl100, trackCensoredName, artistName,previewUrl }) => {
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
            }}>Phát</Button>
        </div>
    )
}

export const MusicItemListLoading = () => {
    return (
        <div className='overflow-hidden flex justify-start items-start mb-4'>
            <Skeleton width={40} height={40} />
            <div className='pl-4'>
                <Skeleton width={300} />
                <br />
                <Skeleton width={200} />
            </div>
        </div>
    )
}