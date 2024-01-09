import GetPostModel from "@/models/GetPostModel";
import Link from "next/link";
import React from "react";

const Card: React.FC<GetPostModel> = ({ description, id, title }) => {
  return (
    <Link href={`/details/${id}`} className="card">
      <strong>{title}</strong>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
