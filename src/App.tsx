import { Route, Routes } from 'react-router-dom'
import { MenuScreen } from './features/menu/MenuScreen'
import { RankingScreen } from './features/ranking/RankingScreen'
import { ShopScreen } from './features/shop/ShopScreen'
import { ProfileScreen } from './features/profile/ProfileScreen'
import { PhasesScreen } from './features/phases/PhasesScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuScreen />} />
      <Route path="/fases" element={<PhasesScreen />} />
      <Route path="/ranking" element={<RankingScreen />} />
      <Route path="/loja" element={<ShopScreen />} />
      <Route path="/perfil" element={<ProfileScreen />} />
    </Routes>
  )
}

export default App
