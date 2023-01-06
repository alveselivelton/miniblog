import styles from "./Dashboard.module.css";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";

import { Link } from "react-router-dom";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div className={styles.actions}>
                  <Link to={`/posts/${post.id}`} className={styles.actions_btn}>
                    <BsEye />
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className={styles.actions_btn}
                  >
                    <BsPencil />
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className={styles.actions_btn}
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
