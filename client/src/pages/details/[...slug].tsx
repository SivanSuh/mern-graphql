import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { DETAIL_POST } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

const CardDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(DETAIL_POST, {
    variables: { postId: slug?.toString() },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <Layout>
      <Link href={"/"}>Back To Home</Link>
      <div style={{ marginTop: "20px" }}>
        <p>Title: {data?.getPostDetail?.title}</p>
        <p>Description: {data?.getPostDetail?.description}</p>
      </div>
    </Layout>
  );
};
export default CardDetail;
