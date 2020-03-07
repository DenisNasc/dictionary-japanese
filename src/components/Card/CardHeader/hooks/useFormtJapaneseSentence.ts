import {useEffect, Dispatch, SetStateAction} from 'react';

const useFormatJapaneseSentence = (
  sentence: string,
  setCardSentence: Dispatch<SetStateAction<string>>,
  setKanjisAndFuriganas: Dispatch<SetStateAction<{kanji: string; furigana: string}[]>>,
  setSentenceWithouFurigana: Dispatch<SetStateAction<string[]>>
) => {
  useEffect(() => {
    const putFuriganaInSentence = () => {
      const getFurigana = /\[.{1,3}\]/g;
      const getKanjis = /[\u4e00-\u9faf\u3400-\u4dbf]/g;
      const getHiraganaKatakana = /[\u3040-\u309f\u30a0-\u30ff]/g;

      const furiganas = sentence
        .match(getFurigana)
        ?.toString()
        .replace(/,/g, '')
        .replace(/\[/g, '')
        .replace(/\]/g, ' ')
        .split(' ');

      const sentenceWithouFurigana = sentence.replace(getFurigana, '').replace(/ /g, '');
      const kanjisAboveSentence = sentenceWithouFurigana.replace(getHiraganaKatakana, ' ');

      const kanjis = kanjisAboveSentence
        .replace(/ /g, '')
        .replace(/、/g, '')
        .replace(/。/g, '')
        .split('');

      const kanjisAndFuriganas = kanjis.map((e, i) => ({
        kanji: e,
        furigana: furiganas ? furiganas[i] : ''
      }));

      setCardSentence(sentenceWithouFurigana);
      setKanjisAndFuriganas(kanjisAndFuriganas);
      setSentenceWithouFurigana(sentenceWithouFurigana.split(''));
    };

    putFuriganaInSentence();
  }, []);
};

export default useFormatJapaneseSentence;
