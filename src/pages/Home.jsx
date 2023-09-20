import React from 'react'
import Main from '..components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main />
    <Row rowID='1' title='RequestMovie' fetchURL={requests.requestMovie}/>
    </>
  )
}

export default Home
