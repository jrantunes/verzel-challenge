import { createRoot } from 'react-dom/client'
import { getOrCreateSessionId } from './utils/session.ts'
import { Router } from './routes'

import './styles/globals.scss'
import { RecoilRoot } from 'recoil'

getOrCreateSessionId()

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
)
