import React, { useEffect, useState } from 'react'

export default function UsersMFE() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Load mock JSON from static site when running from Blob Storage
    const url = window.location.hostname.includes('web.core.windows.net')
      ? '/mock/users.json'
      : '/api/users'

    fetch(url)
      .then((r) => r.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div>
      <h2>Users MFE</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div>Loading users...</div>}
    </div>
  )
}
