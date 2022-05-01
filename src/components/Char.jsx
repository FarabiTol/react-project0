import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "./charSlice";


import {
    Card,
    Button,
    CardMedia,
    Typography,
  } from "@mui/material";

  function Char() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const newData = data.characters;
    
    
    useEffect(() => {
      dispatch(callAPI());
    }, [dispatch]);
  
    return (
      <>
      
        
        <div className="render">
          {newData.map((user) => {
            return (
              <Card className="cardex" sx={{ maxWidth: 345 }} key={user.id} style={{borderRadius: 20, cursor:'pointer', height: '500px'}}>
                <CardMedia style={{marginTop: 20}}
                  component="img"
                  height="250"
                  image={user.imageUrl}
                  alt="Character"
                />
                <div className="info">
                  <Typography className="text"  variant="h6" color="black">Name:</Typography>
                  <Typography className="text"  variant="h6" color="black">
                    {user.fullName}
                  </Typography>
                  <Typography className="text"  variant="h6" color="black">Title:</Typography>
                  <Typography className="text" variant="h6" color="black">
                   {user.title}
                  </Typography>
                  <Typography className="text"  variant="h6" color="black">Family:</Typography>
                  <Typography className="text" variant="h6" color="black">
                   {user.family}
                  </Typography>
                </div>
                <Button fullWidth className="text"  variant="h4" color="black">
                Choose
                </Button>
              </Card>
            );
          })}
        </div>
  
       
      </>
    );
  }
  
  export default Char;