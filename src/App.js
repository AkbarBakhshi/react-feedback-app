import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'

import { FeedbackProvider } from './context/FeedbackContext'


import AboutPage from './pages/AboutPage'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <Card>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </Card>
        </div>
      </Router>


    </FeedbackProvider>
  );
}

export default App;
