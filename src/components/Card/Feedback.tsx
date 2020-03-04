import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Like} from '../../assets/icons/like.svg';
import {ReactComponent as UnLike} from '../../assets/icons/unlike.svg';
import {ReactComponent as Favorite} from '../../assets/icons/favorite.svg';

interface StyledProps {
  alreadyLike: boolean;
  alreadyUnLike: boolean;
  favorite: boolean;
}

const Feedback = () => {
  const [favorite, setFavorite] = useState(false);

  const [like, setLike] = useState(0);
  const [alreadyLike, setAlreadyLike] = useState(false);

  const [unLike, setUnLike] = useState(0);
  const [alreadyUnLike, setAlreadyUnLike] = useState(false);

  const handleLike = () => {
    if (alreadyLike) {
      setLike(count => count - 1);
      setAlreadyLike(false);
    } else {
      if (alreadyUnLike) {
        setUnLike(count => count - 1);
        setAlreadyUnLike(false);
      }
      setLike(count => count + 1);
      setAlreadyLike(isLiked => isLiked || true);
    }
  };

  const handleUnLike = () => {
    if (alreadyUnLike) {
      setUnLike(count => count - 1);
      setAlreadyUnLike(false);
    } else {
      if (alreadyLike) {
        setLike(count => count - 1);
        setAlreadyLike(false);
      }

      setUnLike(count => count + 1);
      setAlreadyUnLike(isUnLiked => isUnLiked || true);
    }
  };

  return (
    <Container favorite={favorite} alreadyLike={alreadyLike} alreadyUnLike={alreadyUnLike}>
      <Favorite id="favorite" onClick={() => setFavorite(isFavorite => !isFavorite)} />
      <div id="feedback">
        <div id="like">
          <Like id="like-icon" onClick={handleLike} />
          <span id="count-like">{like}</span>
        </div>

        <div id="unlike">
          <UnLike id="unlike-icon" onClick={handleUnLike} />
          <span id="count-unlike">{unLike}</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #favorite {
    fill: red;
    fill-opacity: ${({favorite}: StyledProps) => (favorite ? '100%' : '50%')};
    align-self: flex-end;
  }

  #favorite:hover {
    fill-opacity: 100%;
    cursor: pointer;
  }

  #feedback {
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 70px;

    #like,
    #unlike {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #like-icon {
      fill: #00d394;
      fill-opacity: ${({alreadyLike}: StyledProps) => (alreadyLike ? '100%' : '50%')};
    }

    #unlike-icon {
      fill: #f44949;
      fill-opacity: ${({alreadyUnLike}: StyledProps) => (alreadyUnLike ? '100%' : '50%')};
    }

    #like-icon:hover,
    #unlike-icon:hover {
      fill-opacity: 100%;
      cursor: pointer;
    }
  }
`;

export default Feedback;
