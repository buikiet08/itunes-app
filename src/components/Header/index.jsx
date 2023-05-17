import { Typography } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined, AppleFilled } from '@ant-design/icons'
import SearchDrawer from '../SearchDrawer'


function Header() {
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <>
            <SearchDrawer open={openSearch} onClose={() => setOpenSearch(false)} />
            <div className='w-full bg-[#3c3c4308] h-[54px] flex justify-center items-center relative'>
                <Typography.Title level={2} className='font-bold text-center !mb-0 flex items-center' ><AppleFilled /> Music</Typography.Title>
                <div className='absolute right-4 top-0 bottom-0 cursor-pointer flex items-center' onClick={() => setOpenSearch(true)}>
                    <SearchOutlined className='text-2xl' />
                </div>
            </div>
        </>
    )
}

export default Header