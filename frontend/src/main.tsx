import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { createRoot } from 'react-dom/client'
import { getOrCreateSessionId } from './utils/session.ts'
import { Router } from './routes'
import { FavoritesInitializer } from './state/FavoritesInitializer.tsx'

import './styles/globals.scss'

getOrCreateSessionId()

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <Suspense fallback="Loading...">
      <FavoritesInitializer />
      <Router />
    </Suspense>
  </RecoilRoot>,
)
