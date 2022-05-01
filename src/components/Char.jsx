import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "./charSlice";
import { Link, useParams } from "react-router-dom";

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
    let params = useParams();
  
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(Number(params?.page || 0));
    const numberinPage = 8;
    const start = currentPage * numberinPage;
    const end = start + numberinPage;
    const parcialData = newData.slice(start, end);
    const howManyPages = Math.ceil(newData.length / numberinPage);
    const arrayBtn = new Array(howManyPages).fill("buttonPage");

    
    useEffect(() => {
      dispatch(callAPI());
    }, [dispatch]);
  
    return (
      <>
      <h6 className="head">Who is your favorite character?</h6>
        <input
          type="text"
          className="input"
          placeholder="Search by name,title and family"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="render">
          {parcialData.filter((el) => {
            if(search === ''){
              return el
            }else if(el.fullName.toLowerCase().includes(search.toLowerCase())){
              return el;
            }else if(el.title.toLowerCase().includes(search.toLowerCase())){
              return el;
            }else if(el.family.toLowerCase().includes(search.toLowerCase())){
                return el;
          }}).map((user) => {
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
  
        <div className="all-btn">
          <Link to={`/page/${currentPage < 1 ? 1 : currentPage}`}>
            <button
              className="btn prev"
              onClick={() => setCurrentPage((prev) => (prev < 1 ? 0 : prev - 1))}
            >
              Prev
            </button>
          </Link>
          {arrayBtn.map((page, index) => {
            return (
              <>
                <Link to={`/page/${index + 1}`} key={index + page}>
                  <button
                    className="btn"
                    key={page + index}
                    onClick={() => setCurrentPage(index)}
                  >
                    {index + 1}
                  </button>
                </Link>
              </>
            );
          })}
          <Link to={`/page/${currentPage > 10 ? 10 : currentPage + 1}`}>
            <button
              className="btn next"
              onClick={() =>
                setCurrentPage((prev) =>  prev + 1)
              }
            >
              Next
            </button>
          </Link>
        </div>
      </>
    );
  }
  
  export default Char;