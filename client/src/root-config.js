import { registerApplication, start } from 'single-spa'

function hashPrefix(prefix) {
  return () => location.hash === `#${prefix}`
}

registerApplication({
  name: 'users',
  app: () => import('./mfe/users.app.js'),
  activeWhen: hashPrefix('users')
})

registerApplication({
  name: 'products',
  app: () => import('./mfe/products.app.js'),
  activeWhen: hashPrefix('products')
})

start()
