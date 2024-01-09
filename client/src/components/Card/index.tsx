import { DELETE_POST } from "@/graphql/mutation";
import GetPostModel from "@/models/GetPostModel";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<GetPostModel> = ({ description, id, title }) => {
  const [deletePost] = useMutation(DELETE_POST);

  const router = useRouter();
  const onClick = (e: any) => {
    router.push(`/details/${id}`);
  };

  const deleteCard = (e: any) => {
    e.stopPropagation();
    deletePost({ variables: { deletePostId: id } });
    console.log("card", e);
  };

  return (
    <div className="card" onClick={onClick}>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <div className="close" onClick={deleteCard}>
        X
      </div>
    </div>
  );
};

export default Card;
