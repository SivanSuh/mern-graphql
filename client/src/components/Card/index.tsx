import GetPostModel from "@/models/GetPostModel";
import React from "react";

const Card: React.FC<GetPostModel> = ({ description, id, title }) => {
  return (
    <div className="card">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};

export default Card;
