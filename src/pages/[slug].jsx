import { Breadcrumb } from '@/components/Breadcrumb'
import { PATH } from '@/config/path'
import { useFetch } from '@/hooks/useFetch'
import { musicService } from '@/services/music'
import { Button, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'
import { MusicItemList, MusicItemListLoading } from '@/components/MusicItem'
import styled from 'styled-components'
import { Skeleton } from '@/components/Skeleton'
import Playing from '@/components/Playing'
import { useDispatch } from 'react-redux'
import { setUrlThunkAction } from '@/store/musicReducer'

const RowStyles = styled(Row)`
    height: calc(100vh - 54px - 16px - 21px - 88px);
`
const ListMusicStyled = styled.div`
    height: calc(100vh - 54px - 16px - 21px - 44px - 88px);
    overflow-y: scroll;
`
function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, loading } = useFetch(() => musicService.getDetail(id), [id])
    const res = data?.results[0]

    const { data: dataOther, loading: loadingDataOther } = useFetch(async () => await musicService.getMusic({
        term: res?.artistName,
        media: 'music',
        limit: 20,
    }), [res])
    return (
        <>
            <Row className='container m-auto pt-4'>
                <Col span={24}>
                    <Breadcrumb>
                        <Breadcrumb.Title to={PATH.Home}>Home</Breadcrumb.Title>
                        <Breadcrumb.Title to=''>{res?.trackCensoredName}</Breadcrumb.Title>
                    </Breadcrumb>
                </Col>
                <Col span={6} className='pr-4 pt-2'>
                    {
                        loading &&
                        <>
                            <Skeleton width='100%' height={304} />
                            <br />
                            <Skeleton width='100%' />
                            <br />
                            <Skeleton width='50%' />
                            <br />
                            <Skeleton width='100%' height={40} />
                        </>
                    }
                    <img src={res?.artworkUrl100} className='w-full rounded-lg' />
                    <div className='mt-2'>
                        <p className='text-2xl font-bold'>{res?.trackCensoredName}</p>
                        <p className='text-gray-600'>{res?.artistName}</p>
                    </div>
                    <div className='flex justify-start items-center mt-6'>
                        <Button className='flex items-center font-bold mr-4' onClick={() => dispatch(setUrlThunkAction(res?.previewUrl))}>
                            <PlayCircleOutlined className='text-gray-600 mr-2' /> Phát
                        </Button>
                        <Button className='min-w-[160px]'>{res?.collectionPrice} {res?.currency}</Button>
                    </div>
                </Col>
                <Col span={18} className='pl-4'>
                    <Typography.Title level={3}>Bài hát liên quan</Typography.Title>
                    <ListMusicStyled className='listMusicOther'>
                        {
                            loadingDataOther ? Array.from(Array(10)).map((_, i) => <MusicItemListLoading key={i} />) :
                                dataOther?.results?.map((e, i) => <MusicItemList key={i} {...e} />)
                        }
                    </ListMusicStyled>
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <Playing />
                </Col>
            </Row>
        </>
    )
}

export default Detail