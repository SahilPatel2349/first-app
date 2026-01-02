import React from 'react'
import singleSpaReact from 'single-spa-react'
import ProductsMFE from './mfe/products'
import ReactDOM from 'react-dom/client'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ProductsMFE,
  domElementGetter: () => document.getElementById('app-products') || document.createElement('div'),
  errorBoundary() {
    return null
  }
})

export const { bootstrap, mount, unmount } = lifecycles
