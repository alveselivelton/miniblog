import styles from "./Search.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useSearchParams } from "react-router-dom";

// components
import PostDetail from "../../components/PostDetail";

import { Link } from "react-router-dom";

const Search = () => {
  const [params] = useSearchParams();
  const search = params.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Resultados para: {search}</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
