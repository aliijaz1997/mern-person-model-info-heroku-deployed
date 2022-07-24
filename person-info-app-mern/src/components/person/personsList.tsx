import { Box, MenuItem, Select, TextField } from "@mui/material"
import React from "react"
import { Person } from "../types/person"
import { PersonCard } from "./personCard"

const filters = [
  "firstName",
  "lastName",
  "hairLength",
  "hairColor",
  "castings",
  "height",
  "weight",
  "braSize",
  "profession"
]
interface Props {
  persons: Person[]
}
export function PersonsList({ persons }: Props) {
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState("none")
  const handleOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }
  const filteredPersons = React.useMemo(() => {
    if (!search.length) return persons
    if (filter !== "none") {
      return persons.filter(
        f => f[filter as keyof Person].toString().includes(search.toLowerCase())
        // This will also work for any array of string such as castings !
      )
    }
    return persons.filter(
      p =>
        p.firstName.toLowerCase().includes(search.toLowerCase()) ||
        p.lastName.toLowerCase().includes(search.toLowerCase()) ||
        p.profession.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, persons])
  return (
    <Box
      sx={{
        p: "5px",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "15px"
        }}
      >
        <TextField
          label="Search for the Persons"
          variant="outlined"
          value={search}
          color="secondary"
          sx={{ bgcolor: "#FFFFF0", width: "300px", mr: "5px" }}
          onChange={handleOnchangeInput}
        />
        <TextField
          value={filter}
          label="Filter"
          color="secondary"
          variant="outlined"
          select
          sx={{ bgcolor: "#FFFFF0", width: "300px" }}
          onChange={handleChangeFilter}
        >
          <MenuItem value="none">None</MenuItem>
          {filters.map(f => (
            <MenuItem key={f} value={f}>
              {f}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {filteredPersons.length
        ? filteredPersons.map(person => (
            <Box
              key={person._id}
              sx={{
                justifyContent: "center",
                display: "flex",
                pt: "10px",
                mt: "5rem"
              }}
            >
              <PersonCard person={person} />
            </Box>
          ))
        : "There is No data available"}
    </Box>
  )
}
