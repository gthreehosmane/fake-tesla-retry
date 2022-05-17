import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RideList from '../car/CarList';

const ReviewRide = (props) => {

    
    const {ride} = props;
    /*check if current day is weeked or weekday*/
    const today = new Date()
    const day = today.getDay();
    var extraCharges = 0;
    var charges = ride.chargePerDay;
    if(day == 0 || day == 6){
        extraCharges = 5;
    console.log("weekend");
    }
    else{
    console.log("weekday");
    const hour = today.getHours();
    if(hour>0 || hour<20){
        extraCharges = Math.floor(Math.random() * 100);
    console.log("evening");
    }
    }
    const finalPrice = ride.chargePerDay + (ride.chargePerDay* (extraCharges/100));
    console.log("finalPrice:",finalPrice);
    console.log("extraCharges:",extraCharges);
    console.log("currentcharge: ",ride.chargePerDay);
    sessionStorage.setItem("finalPrice", finalPrice);

    const Display = () => {
       if(charges !== finalPrice){
           return <>
            <div>
                <p>We are experiencing high demand right now, Please bare with extra charges</p>
            </div>
           </>
       }
       return <></>;
    };

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
                <TableRow
                    key={ride.source}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Course
                    </TableCell>
                    <TableCell align="right">{ride.source}</TableCell>
                </TableRow>
                <TableRow
                    key={ride.destination}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Destination
                    </TableCell>
                    <TableCell align="right">{ride.destination}</TableCell>
                </TableRow>
                <TableRow
                    key={ride.carType}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Type
                    </TableCell>
                    <TableCell align="right">{ride.carType}</TableCell>
                </TableRow>
                <TableRow
                    key={ride.carId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Number
                    </TableCell>
                    <TableCell align="right">{ride.carNumber}</TableCell>
                </TableRow>
                <TableRow
                    key={ride.model}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Model
                    </TableCell>
                    <TableCell align="right">{ride.model}</TableCell>
                </TableRow>
                <TableRow
                    key={ride.chargePerDay}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="ride">
                        Total charges for your ride
                    </TableCell>
                    <TableCell align="right">{finalPrice}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          <Display/>
        </TableContainer>
      );
}

export default ReviewRide;