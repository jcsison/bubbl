import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import styled from 'styled-components'
import TimelineRouter from './components/timeline/TimelineRouter.jsx'

global.React = React
global.ReactDOM = ReactDOM
global.ReactDOMServer = ReactDOMServer
global.styled = styled
global.TimelineRouter = TimelineRouter
