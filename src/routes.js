import {Brands, BrandDetail, HomeLayout, ErrorPage} from "pages"


const routes = [
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                path: "",
                element: <Brands/>
            },
            {
                path: ":type/:brandsUrl",
                element: <BrandDetail/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage/>,
       
    }
]


export default routes