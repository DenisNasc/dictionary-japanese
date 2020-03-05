import {useEffect} from 'react';
import axios from 'axios';

const useFiltredWords = (selectedFilter: string) => {
  useEffect(() => {
    const fetchWord = async () => {
      const {data: wordFiltred} = await axios.get(
        `http://localhost:5050/words?${selectedFilter}=true`
      );
      console.log(wordFiltred);
    };

    fetchWord();
  }, [selectedFilter]);
};

export default useFiltredWords;
