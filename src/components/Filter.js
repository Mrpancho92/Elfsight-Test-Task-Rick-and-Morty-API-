import styled from 'styled-components';
import { useState, useMemo } from 'react';
import { useData } from './providers';
import { FilterItem } from './FilterItem';

const defaultPropertysFitler = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: ''
};

export const Filter = () => {
  const API_URL = 'https://rickandmortyapi.com/api/character/';
  const { setApiURL } = useData();
  const [propertysFitler, setPropertysFitler] = useState(
    defaultPropertysFitler
  );
  const filterUrl = useMemo(() => {
    let filterUrl = '';
    for (let key in propertysFitler) {
      if (propertysFitler[key]) {
        filterUrl += `${key}=${propertysFitler[key]}&`;
      }
    }
    let filterApi = `${API_URL}?${filterUrl.slice(0, -1)}`;
    return filterApi;
  }, [propertysFitler]);

  const clickFilterButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setApiURL(filterUrl);
  };
  const clickClearFilterButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPropertysFitler(defaultPropertysFitler);
    setApiURL(API_URL);
  };

  if (window.location.search) {
    console.log(window.location.search);
    setApiURL(API_URL + window.location.search);
  }

  return (
    <StyledFilter>
      <FilterHeader>Сharacters filtering</FilterHeader>
      <FilterItem
        propertysFitler={propertysFitler}
        setPropertysFitler={setPropertysFitler}
      />
      <FilterButton onClick={clickFilterButton}>Filter list</FilterButton>
      <ClearFilterButton onClick={clickClearFilterButton}>
        Clear filter
      </ClearFilterButton>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  ${window.screen.width < 930 && 'align-items: center'};
`;

const FilterHeader = styled.h1`
  color: white;
`;

const FilterButton = styled.button`
  height: 40px;
  width: 20%;
  font-size: 16px;
  background-color: lightgreen;
  cursor: pointer;
  &:active {
    background-color: green;
  }
  ${window.screen.width < 930 && 'width: 50%'};
`;
const ClearFilterButton = styled.button`
  height: 40px;
  width: 20%;
  font-size: 16px;
  background-color: lightgreen;
  cursor: pointer;
  &:active {
    background-color: green;
  }
  ${window.screen.width < 930 && 'width: 50%'};
`;
