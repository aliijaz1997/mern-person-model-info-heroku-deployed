import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Person } from "../types/person"
import dayjs from "dayjs"

interface Props {
  person: Person
}
export function PersonCard({ person }: Props) {
  const {
    firstName,
    lastName,
    hairLength,
    hairColor,
    castings,
    height,
    weight,
    dateOfBirth,
    braSize,
    profession,
    picture
  } = person
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "60rem",
        boxShadow: "0px 0px 17px 1px #CBC3E3",
        p: "10px"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0" }}>
          <Typography component="div" variant="h5">
            {firstName} {lastName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Personal Information
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Profession
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {profession}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Date Of Birth
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {dayjs(dateOfBirth).format("d-MMM-YYYY")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Height
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {height} cm
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Weight
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {weight} Kg
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Hair Length
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {hairLength} cm
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Hair Color
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {hairColor}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Bra Size
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {braSize}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              Castings
            </Typography>
            :
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              sx={{ marginLeft: "2px" }}
            >
              {castings.length &&
                castings.map((c, k) => {
                  if (k === castings.length - 1) {
                    return c
                  }
                  return `${c}, `
                })}
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={picture}
        alt="Profile picture"
      />
    </Card>
  )
}
