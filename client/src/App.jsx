import React, { Suspense, useState } from 'react'

const MFEUsers = React.lazy(() => import('./mfe/users'))
const MFEProducts = React.lazy(() => import('./mfe/products'))

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div className="app">
      <h1>MFE Test1 (React + Webpack)</h1>
      <div className="nav">
        <button onClick={() => setActive('users')}>Load Users MFE</button>
        <button onClick={() => setActive('products')}>Load Products MFE</button>
      </div>
      <div className="mfe">
        <Suspense fallback={<div>Loading MFE...</div>}>
          {active === 'users' && <MFEUsers />}
          {active === 'products' && <MFEProducts />}
          {!active && <div>Select a microfrontend to load.</div>}
        </Suspense>
      </div>
    </div>
  )
}
