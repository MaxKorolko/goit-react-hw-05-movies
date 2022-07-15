import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../requests/fetchAPI';
import s from './Reviews.module.css';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id).then(results => setReviews(results));
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li className={s.item} key={id}>
              <p className={s.author}>{`Author: ${author}`}</p>
              <p className={s.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
