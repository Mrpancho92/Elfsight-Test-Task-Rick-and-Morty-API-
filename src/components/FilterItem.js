import styled from 'styled-components';
export const FilterItem = ({ propertysFitler, setPropertysFitler }) => {
  return (
    <>
      <ItemInput
        placeholder="name"
        value={propertysFitler.name}
        onChange={(e) =>
          setPropertysFitler({ ...propertysFitler, name: e.target.value })
        }
      />
      <ItemSelect
        placeholder="status"
        value={
          propertysFitler.status === ''
            ? 'selectStatus'
            : propertysFitler.status
        }
        onChange={(e) =>
          setPropertysFitler({ ...propertysFitler, status: e.target.value })
        }
      >
        <option value="selectStatus" disabled>
          Select status
        </option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </ItemSelect>

      <ItemInput
        placeholder="species"
        value={propertysFitler.species}
        onChange={(e) =>
          setPropertysFitler({ ...propertysFitler, species: e.target.value })
        }
      />
      <ItemInput
        placeholder="type"
        value={propertysFitler.type}
        onChange={(e) =>
          setPropertysFitler({ ...propertysFitler, type: e.target.value })
        }
      />
      <ItemSelect
        placeholder="gender"
        value={
          propertysFitler.gender === ''
            ? 'selectGender'
            : propertysFitler.gender
        }
        onChange={(e) =>
          setPropertysFitler({ ...propertysFitler, gender: e.target.value })
        }
      >
        <option value="selectGender" disabled>
          Select gender
        </option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </ItemSelect>
    </>
  );
};

const ItemInput = styled.input`
  height: 30px;
  width: 20%;
  font-size: 16px;
  background-color: lightblue;
  ${window.screen.width < 930 && 'width: 50%'};
`;

const ItemSelect = styled.select`
  height: 30px;
  width: 20%;
  font-size: 16px;
  background-color: lightblue;
  ${window.screen.width < 930 && 'width: 50%'};
`;
