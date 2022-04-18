import React, { useState } from 'react';
import { Navbar, Header } from './components';

import './App.css'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <Navbar />
        <Header />
    </div>
  )
}

export default App