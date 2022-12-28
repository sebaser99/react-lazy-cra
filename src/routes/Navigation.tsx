import { Suspense } from "react"
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { routes } from "./routes"
import reactLogo from '../assets/react.svg'


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loanding....</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img width={120} src={reactLogo} alt="React Logo" />
                    <ul>
                        {
                            routes.map(route => (
                                <li key={route.to}>
                                    <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to={route.to}>
                                        {route.name}
                                    </NavLink>
                                </li>))
                        }
                    </ul>
                    
                </nav>

                <Routes>
                    {
                        routes.map(({path, Component, to}) =>( <Route  key={to} path={path} element={<Component/>} />))
                    }

                    <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>

        </BrowserRouter>
    </Suspense>
  )
}
