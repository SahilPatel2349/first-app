import React, { useEffect, useState } from 'react'

export default function ProductsMFE() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Load mock JSON from static site when hosted on Azure Storage
    const url = window.location.hostname.includes('web.core.windows.net')
      ? '/mock/products.json'
      : '/api/products'

    fetch(url)
      .then((r) => r.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div>
      <h2>Products MFE</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div>Loading products...</div>}
    </div>
  )
}
