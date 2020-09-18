import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

const App = ({children}) => (
    <BrowserRouter>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </BrowserRouter>
)

export default App