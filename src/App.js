import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
// import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'

import { FeedbackProvider } from './context/FeedbackContext'

// import FeedbackData from "./data/FeedbackData"

import AboutPage from './pages/AboutPage'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        {/* <Header text = 'Hello World'/> */}
        {/* <Header text = {true}/>  This one will throw an error becasue header text type is defined as string */}
        {/* <Header bgColor = 'red' textColor = 'white' /> */}
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
                {/* <Card>
          Hello World
        </Card> */}
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
