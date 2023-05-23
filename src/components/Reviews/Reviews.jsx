import { ListItem, StyledList } from 'components/Cast/Cast.module';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsMovie } from 'services/getMovies';
import { ReviewsDescr } from './Reviews.module';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);
  return reviews.length === 0 ? (
    <h3>no reviews</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>author: </span>
            {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Reviews;
