import { PATH } from "@/config/path";
import Detail from "@/pages/[slug]";
import { lazy } from "react";

const Home = lazy(() => import("@/pages"))
const Page404 = lazy(() => import("@/pages/404"))
const MainLayout = lazy(() => import("@/layouts/MainLayout"))

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                path: PATH.Home,
                element: <Home />
            },
            {
                path:PATH.Detail,
                element:<Detail />
            },
            {
                path: '*',
                element: <Page404 />
            }
        ]
    }
]