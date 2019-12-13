import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Routes from './routes'
import styled from 'styled-components'

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer
global.Routes = Routes
global.styled = styled
