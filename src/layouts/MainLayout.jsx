import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header';
import MusicPlayer from '@/components/MusicPlayer';

export const MainLayout = () => {
  return (
    <Suspense fallback={<div>Page Loading....</div>}>
      <Header />      
      <Outlet />
    </Suspense>
  )
}

export default MainLayout