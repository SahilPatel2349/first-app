import React from 'react'
import singleSpaReact from 'single-spa-react'
import UsersMFE from './mfe/users'
import ReactDOM from 'react-dom/client'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: UsersMFE,
  domElementGetter: () => document.getElementById('app-users') || document.createElement('div'),
  errorBoundary() {
    return null
  }
})

export const { bootstrap, mount, unmount } = lifecycles
