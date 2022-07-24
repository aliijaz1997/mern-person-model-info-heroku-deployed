import React from "react"
import { Route, Routes } from "react-router-dom"
import { PersonsApis } from "./components/agent/agent"
import { Layout } from "./components/layout/layout"
import { PersonCreate } from "./components/person/personCreate"
import { PersonsList } from "./components/person/personsList"
import { Person } from "./components/types/person"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const { list } = PersonsApis
  const [persons, setPersons] = React.useState<Person[]>([])

  React.useEffect(() => {
    list().then(res => {
      setPersons(res)
    })
  }, [])

  const handleAddPerson = () => {}
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PersonsList persons={persons} />} />
        <Route path="/create" element={<PersonCreate />} />
      </Routes>
    </Layout>
  )
}

export default App
