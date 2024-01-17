// second Page

import { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import SecondComponent from "../../components/secondComponent/SecondComponent";
import { secondCompoenentdata } from "../../libs/data";
import { Skeleton } from "@mui/material";
import "./style.css";


type currentUserType = {
  userName: string;
  userNumber: string;
  userEmail: string;
}

export interface apidataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export default function Home() {
  const [currentUser, setCurrentUser] = useState<currentUserType>();
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate();

  // getting the currentUser from local storage
  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    if (data === null) {
      navigate('/')
    }
    else {
      setCurrentUser(JSON.parse(data));
      if (
        (currentUser?.userEmail === (undefined || null)) ||
        (currentUser?.userNumber === (undefined || null)) ||
        (currentUser?.userName === (undefined || null)) ||
        (currentUser?.userEmail.length === 0) ||
        (currentUser?.userName.length === 0) ||
        (currentUser?.userNumber.length === 0)
      ) {
        navigate('/')
      }
    }
  }, [navigate, currentUser?.userEmail, currentUser?.userName, currentUser?.userNumber]);


  //API call 
  const [apiData, setapiData] = useState<apidataType[] | []>([])

  const getApiDataList = async () => {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      const data = (responseJson) as apidataType[];
      setapiData(data)

      setLoading(false)
      return data
    } catch (err) {
      console.error(err);
      setLoading(false)
      throw new Error(`HTTP error! Status: ${err}`);
    }
  };


  useEffect(() => {
    getApiDataList()
  }, [])


  return (
    <ContentWrapper>

      {/* First component */}
      {
        (loading === false || apiData.length !== 0) ? (

          <DataTable tableData={apiData} />
        ) : (
          // loading Skeleton
          <Skeleton
            
            sx={{
              
              width: "100%",
              marginTop:"40px",
              borderRadius:"4px"
              
            }}
            variant="rectangular"
            height={600}
            animation="wave" 

          />
        )
      }

      {/* second component */}
      <div
        className="secondcomponent"
      >
        {secondCompoenentdata && secondCompoenentdata.map((value, index) => (
          <div
            className=""
            key={index}
          >
            <SecondComponent
              props={value}
            />
          </div>
        ))
        }
      </div>

    </ContentWrapper>
  )
}
