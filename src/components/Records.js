import React from "react";
import Spinner from "./common/Spinner";

const Records = ({ records, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      {records &&
        records.map((record) => (
          <main key={record.Email}>
            <h4>{record.FirstName}</h4>
            {record.LastName}
            {record.Gender}
            {record.CreditCardType}

            {record.Email}
            {record.DomainName}
            {record.PhoneNumber}

            {record.MacAddress}
            {record.URL}
            {record.UserName}

            {record.LastLogin}
            {record.PaymentMethod}
          </main>
        ))}
    </div>
  );
};

export default Records;

{
  /**********

"Gender": "Female",
"Latitude": 41.29564,
"Longitude": -175.04175,
"CreditCardNumber": "3528991048039905",
"CreditCardType": "JCB",
"Email": "ASqEBTd@VvUnOFt.info",
"DomainName": "nXxQoXI.net",
"PhoneNumber": "628-915-1034",
"MacAddress": "61:a2:05:4b:3c:dd",
"URL": "https://www.hyrLsVD.net/JDNvBEe",
"UserName": "QjFWCAR",
"LastLogin": "2007-01-04 11:10:45",
"PaymentMethod": "money order"


*/
}
