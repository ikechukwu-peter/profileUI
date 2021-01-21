import React from "react";
import Spinner from "./common/Spinner";
import styled from "styled-components";
import avatar from "../assets/avatar.png";

const Records = ({ records, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <Background>
      {records &&
        records.map((record) => (
          <Centered key={record.Email}>
            <Box>
              <Avatar>
                <img src={avatar} alt="avatar-icon" />
              </Avatar>
              <h2>
                {record.FirstName} {record.LastName}
              </h2>

              <p> {record.Gender}</p>
              <div>
                <h5>CONTACT DETAILS</h5>
                <InnerBoxContact>
                  <p className="btn-color"> {record.Email}</p>
                  <p className="btn-outline">{record.PhoneNumber}</p>
                </InnerBoxContact>
              </div>
              <div>
                <h5>PAYMENT DETAILS</h5>
                <p> {record.CreditCardType}</p>
                <p>{record.PaymentMethod}</p>
              </div>

              <InnerBoxLoginDetails>
                <div>
                  <p>LOGIN DETAILS</p>
                  <p>{record.UserName}</p>
                  <p> {record.LastLogin}</p>
                </div>
                <div>
                  <p>{record.DomainName}</p>
                  <p> {record.MacAddress}</p>
                </div>

                {/* <p>{record.URL}</p> */}
              </InnerBoxLoginDetails>
            </Box>
          </Centered>
        ))}
    </Background>
  );
};

export default Records;

const Background = styled.div`
  /* background-color: blue; */
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 10px;
  row-gap: 15px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
const Centered = styled.div`
  text-align: center;
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: #231e39;
  /* padding:20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  color: #b3b8cd;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  :hover {
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
    transform: scale(1.02);
    transition: 0.7s ease-out;
  }
  p {
    font-size: 14px;
  }
`;

const InnerBoxContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
  margin: 0px;
  .btn-color {
    flex: 1;
    background-color: #03bfcb;
    border-radius: 3px;
    color: #231e39;
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    padding: 9px;
  }
  .btn-outline {
    flex: 1;
    background-color: transparent;
    color: #02899c;
    border: 1px solid #03bfcb;
    padding: 7px;
    font-size: 13px;
  }
`;

const InnerBoxLoginDetails = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  background-color: #1f1a36;
  text-align: left;
  padding: 12px;
  margin-top: 30px;
  border-radius: 0px 0px 15px 15px;
  div p {
    border: 1px solid #2d2747;
    border-radius: 2px;

    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
`;
const Avatar = styled.div`
  img {
    width: 100px;
  }
`;
