import { Outlet } from "react-router"
import { Header } from "../../components"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}