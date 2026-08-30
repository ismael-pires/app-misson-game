import { Route, Routes } from 'react-router-dom'
import { MenuScreen } from './features/menu/MenuScreen'
import { PartnershipsScreen } from './features/partnerships/PartnershipsScreen'
import { PhasesScreen } from './features/phases/PhasesScreen'
import { ProfileScreen } from './features/profile/ProfileScreen'
import { RankingScreen } from './features/ranking/RankingScreen'
import { ShopScreen } from './features/shop/ShopScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuScreen />} />
      <Route path="/fases" element={<PhasesScreen />} />
      <Route path="/ranking" element={<RankingScreen />} />
      <Route path="/loja" element={<ShopScreen />} />
      <Route path="/perfil" element={<ProfileScreen />} />
      <Route path="/parcerias" element={<PartnershipsScreen />} />
    </Routes>
  )
}

export default App
