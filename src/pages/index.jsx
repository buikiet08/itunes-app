import { MusicItem, MusicItemLoading } from '@/components/MusicItem';
import Slider from '@/components/Slider';
import { useFetch } from '@/hooks/useFetch';
import { musicService } from '@/services/music'
import { Button, Col, Row, Typography } from 'antd';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {FireOutlined} from '@ant-design/icons'


const listImg = [
  { link: 'https://photo-zmp3.zmdcdn.me/banner/e/8/d/e/e8de6efdb2db7edb52ba1c5cbe6cc67c.jpg' },
  { link: 'https://photo-zmp3.zmdcdn.me/banner/b/7/b/d/b7bd51b37195097c2026f0e5a1453ee8.jpg' },
  { link: 'https://photo-zmp3.zmdcdn.me/banner/5/1/1/9/5119af317dcb7a52793029d71fd3cf32.jpg' },
  { link: 'https://photo-zmp3.zmdcdn.me/banner/4/8/3/9/48390e507b1d1102541f6bd535404c08.jpg' },
]
export const Home = () => {
  const [more, setMore] = useState(12)
  const { data, loading } = useFetch(() => musicService.getMusic({
    term: 'Việt Nam',
    media: 'music',
    limit: more,
    country: 'VN',
    sort: 'popularity',
  }), [more])

  return (
    <Row className='overflow-hidden'>
      <Col className='w-full overflow-hidden'>
        <Slider>
          {
            listImg.map((i, e) => (
              <SwiperSlide key={e}><img src={i.link} alt="" className="" /></SwiperSlide>
            ))
          }
        </Slider>

        {/* list music */}
        <div className='container m-auto pt-4'>
          <Typography.Title level={3} className='flex items-center'>Bài hát mới <FireOutlined className='text-[#ff0000] ml-2 text-xl' /></Typography.Title>
          <div className='grid grid-cols-6 gap-4'>
            {
              loading ? Array.from(Array(6)).map((_, i) => <MusicItemLoading key={i} />) :
                data?.results?.map((e, i) => <MusicItem key={i} {...e} />)
            }
          </div>
          {
            more <= data?.resultCount &&
            <div className='w-full flex justify-center my-6'>
              <Button className='h-[40px] text-bold min-w-[200px]' onClick={() => setMore(more + 12)}>Xem Thêm</Button>
            </div>
          }
        </div>
      </Col>
    </Row>
  )
}

export default Home