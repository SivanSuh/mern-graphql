import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const CardDetail = () => {
  const router = useRouter();

  return (
    <Layout>
      <p>detailt</p>
      <p>{router.query.slug}</p>
    </Layout>
  );
};
export default CardDetail;
