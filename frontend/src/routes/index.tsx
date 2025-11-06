import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router"

import { MainLayout } from "@/layouts"
import { DetailsPage, DiscoverPage } from "@/features/movies/pages"
import { FavoritesListPage } from "@/features/favorites/pages"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DiscoverPage />} />
          <Route path="favorites" element={<FavoritesListPage />} />
          <Route path="movie/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}