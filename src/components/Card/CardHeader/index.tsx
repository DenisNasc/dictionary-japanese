import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useFormatJapaneseSentence from './hooks/useFormtJapaneseSentence';

interface StyledProps {}

interface Props {
  sentence: string;
}

const CardHeader = ({sentence}: Props) => {
  const [cardSentence, setCardSentence] = useState('');
  const [kanjisAndFuriganas, setKanjisAndFuriganas] = useState<{kanji: string; furigana: string}[]>(
    []
  );
  const [sentenceWithouFurigana, setSentenceWithouFurigana] = useState<string[]>([]);

  console.log(sentenceWithouFurigana, kanjisAndFuriganas);

  useFormatJapaneseSentence(
    sentence,
    setCardSentence,
    setKanjisAndFuriganas,
    setSentenceWithouFurigana
  );

  return (
    <Container>
      <h3 id="expression">
        {sentenceWithouFurigana.map(word => {
          let ola = (
            <div id="no-kanji" key={`${Math.random().toFixed(8)}`}>
              {word}
            </div>
          );

          kanjisAndFuriganas.forEach(({kanji, furigana}) => {
            if (word === kanji) {
              ola = (
                <div id="kanji-furigana" key={furigana}>
                  <div id="kanji">{kanji}</div>
                  <div id="furigana">{furigana}</div>
                </div>
              );
            }
          });
          return ola;
        })}
      </h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  #expression {
    display: flex;
  }

  #no-kanji,
  #kanji-furigana {
    margin: 0px 1px;
  }

  #kanji-furigana:hover {
    color: black;
  }

  #kanji-furigana {
    display: flex;
    flex-direction: column;
    align-items: center;

    #furigana {
      font-size: 10px;
    }
  }
`;

export default CardHeader;
