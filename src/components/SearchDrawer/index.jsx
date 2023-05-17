import { Button, Drawer } from 'antd'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { useAsync } from '@/hooks/useAsync'
import { useDebounce } from '@/hooks/useDebounce'
import { musicService } from '@/services/music'
import { MusicItem, MusicItemList, MusicItemListLoading, MusicItemLoading } from '../MusicItem'
import { useMusic } from '@/hooks/useMusic'
import { useDispatch } from 'react-redux'
import { removeHistoryThunkAction, setHistoryThunkAction } from '@/store/musicReducer'

function SearchDrawer({ open, onClose }) {
  const { history } = useMusic()
  const dispatch = useDispatch()
  const [value, setValue] = useDebounce('')
  const { data, loading, excute } = useAsync(() => value != '' && musicService.getMusic({
    term: value,
    media: 'music',
    limit: 10,
  }), [value])
  const onSearch = async () => {
    if (value.trim() && value != '') {
      excute()
      dispatch(setHistoryThunkAction(value))
    }
  }

  const onRemoveHistory = async () => {
    dispatch(removeHistoryThunkAction())
  }

  if (open === false) {
    setValue('')
  }
  return (
    <Drawer width={400} open={open} onClose={onClose} headerStyle={{ display: 'none' }} bodyStyle={{ padding: 0 }}>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-6'>
          <CloseOutlined className='text-xl cursor-pointer' onClick={onClose} />
          <h2 className='font-bold text-base'>Tìm kiếm</h2>
          <span></span>
        </div>
        <div className='flex flex-col'>
          <input defaultValue={value} onChange={ev => setValue(ev.target.value)} className="p-2 py-3 hover:outline-none focus:outline-none w-full border border-gray-400 rounded-lg text-gray-700" type="search" placeholder="Nhập từ khóa" />
          <Button className='w-full h-[40px] font-bold mt-4 bg-[#3c3c4308]' onClick={onSearch}>Tìm kiếm</Button>
        </div>

        <div className='pt-4'>
          {
            data?.results === undefined &&
            <div>
              <div className='mb-4 flex justify-between items-center'>
                <p className='font-bold'>Lịch sử tìm kiếm</p>
                <p className='text-[#ff0000] cursor-pointer' onClick={onRemoveHistory}>Xóa lịch sử</p>
              </div>
              {
                history?.length > 0 && history.slice(0, 4)?.map((e, i) => (
                  <div className='cursor-pointer hover:text-blue-600' key={i} onClick={() => setValue(e)}>{e}</div>
                ))
              }
            </div>
          }
          {
            data?.resultCount === 0 && <span>Không tìm thấy kết quả!</span>
          }
          {
            loading ? Array.from(Array(6)).map((_, i) => <MusicItemListLoading key={i} />) :
              data?.results?.map((e, i) => <MusicItemList key={i} {...e} />)
          }

        </div>

      </div>
    </Drawer>
  )
}

export default SearchDrawer