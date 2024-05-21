import { useParams } from "react-router-dom";

const ArticlesDetails = () => {
  const { toto } = useParams();
  console.log(toto);
  return <div>Contenu de la variable toto : {toto}</div>;
};

export default ArticlesDetails;
