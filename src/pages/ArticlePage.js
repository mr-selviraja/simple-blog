import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
  // key of the params object is articleId and value will be whatever that has been specified in the url after ".../articles/"
  // const params = useParams();
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.name}</h1>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
