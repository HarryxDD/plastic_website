import React, { useState } from 'react';
import { Header } from './components';

import './App.css'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default App