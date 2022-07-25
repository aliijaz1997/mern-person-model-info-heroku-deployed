import {
  Box,
  Checkbox,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel
} from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Person } from "../types/person"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { toast, ToastContainer } from "react-toastify"
import { PersonsApis } from "../agent/agent"

enum professionEnum {
  comedian = "comedian",
  actor = "actor",
  actress = "actress",
  model = "model"
}

interface IFormInput {
  firstName: string
  lastName: string
  picture: string
  profession: professionEnum
  hairColor: number
  hairLength: number
  braSize: number
  waistSize: number
  height: number
  weight: number
  dateOfBirth: string
  castings: string[]
}
const options = ["movies", "commercials", "newspapers", "magzines"]

interface Props {}
export function PersonCreate({}: Props) {
  const { create } = PersonsApis
  const [castings, setCastings] = React.useState<string[]>([])
  const [date, setDate] = React.useState<Date>(new Date())

  const { register, handleSubmit, reset } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => {
    const {
      firstName,
      lastName,
      height,
      weight,
      hairColor,
      hairLength,
      braSize,
      profession,
      picture,
      waistSize
    } = data
    create({
      firstName,
      lastName,
      profession,
      castings,
      weight,
      height,
      braSize,
      waistSize,
      dateOfBirth: date?.toISOString(),
      picture,
      hairColor,
      hairLength
    })
      .then(res => {
        toast.success("The person is added successfully", {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        setCastings([])
        setDate(new Date())
        reset()
      })
      .catch(err => toast.error(`Error Occured ${err}`))
  }

  const handleCastingChange = (event: any) => {
    const value = event.target.value
    if (value[value.length - 1] === "all") {
      setCastings(castings.length === 4 ? [] : castings)
      return
    }
    setCastings(value)
  }

  const handleChangeDate = (newValue: Date | null) => {
    setDate(newValue ?? new Date())
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              label="Enter your first name"
              {...register("firstName", { required: true })}
            />
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              label="Enter your last name"
              {...register("lastName", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your color of hair"
              {...register("hairColor", { required: true })}
            />
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your length of hair in cm"
              {...register("hairLength", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your bra size"
              {...register("braSize", { required: true })}
            />
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your waist size"
              {...register("waistSize", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your height in cm"
              {...register("height", { required: true })}
            />
            <TextField
              sx={{ margin: "5px !important" }}
              fullWidth
              type="number"
              label="Enter your weight in Kg"
              {...register("weight", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <TextField
              label="Select your profession"
              required
              select
              {...register("profession", { required: true })}
            >
              <MenuItem value="comedian">Comedian</MenuItem>
              <MenuItem value="actor">Actor</MenuItem>
              <MenuItem value="actress">Actress</MenuItem>
              <MenuItem value="model">Model</MenuItem>
            </TextField>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Select your Castings
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                multiple
                autoWidth
                required
                label="Select your Castings"
                value={castings}
                onChange={handleCastingChange}
                renderValue={selected => selected.join(", ")}
              >
                {options.map(option => (
                  <MenuItem key={option} value={option}>
                    <ListItemIcon>
                      <Checkbox checked={castings.indexOf(option) > -1} />
                    </ListItemIcon>
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
              margin: "15px"
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Choose your date of Birth"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={handleChangeDate}
                renderInput={params => <TextField required {...params} />}
              />
            </LocalizationProvider>
            <TextField
              sx={{ m: "20px" }}
              label="Image URL"
              {...register("picture", { required: true })}
            />
          </Box>
          <TextField sx={{ margin: "20px !important" }} type="submit" />
        </Box>
      </form>
      <ToastContainer />
    </React.Fragment>
  )
}
