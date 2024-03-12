// import React, {useEffect, useState} from 'react'
// import Alert from '../../assets/alert.svg'
import "./style.css";

const NftDetails = ({}) => {
  return (
    <div className="nft-cont">
      <div className="img-container">
        <img
          //   onError={(event) => {
          //     event.target.classList.add("error-image");
          //     event.target.classList.remove("nft-img");
          //   }}
          className="nft-img"
          //   src={data?.external_data?.image}
          alt="profileimg"
        ></img>
      </div>
      <div className="nft-details">
        <h1>
          Name
          {/* {data?.external_data?.name} */}
        </h1>
        <h2>
          TokenID
          {/* Token ID : {data?.token_id} */}
        </h2>
        <p>
          Descrip
          {/* {data?.external_data?.description} */}
        </p>
      </div>
    </div>
  );
};

export default NftDetails;
