import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Form from '../components/formulario'
import Table from '../components/tabla'

export default function Home() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Form/>
      <Table/>
      <Footer/>
    </div>
  )
}


