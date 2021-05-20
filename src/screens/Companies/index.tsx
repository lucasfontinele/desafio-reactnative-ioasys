import React, {useState} from 'react';

import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store/createStore';

import {companies, emptyCompany, Enterprise, RootObject} from '../../services/companies';

import {Text} from '../../components/Text';
import {Input} from '../../components/Input';

import {
  Container,
  TitleContainer,
  SearchContainer,
  CompanyCard,
} from './styles';

const FLATLIST_NUMBER_OF_COLUMNS = 2;

const handleFormatData = (data: Enterprise[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ ...emptyCompany, id: numberOfElementsLastRow, empty: true });

    numberOfElementsLastRow += 1;
  }

  return data;
};

function Companies() {
  const { investor } = useSelector((state: ApplicationState) => state.investor);
  const [search, setSearch] = useState('');

  const flatlistData = companies.enterprises.filter(company => company.enterprise_name.startsWith(search));

  return (
    <FlatList
      ListHeaderComponent={(
        <Container>
          <TitleContainer>
            <Text
              size={14}
              color="#B7B7C8"
              weight="semibold"
            >
              Bem vindo ao Enterprises, {investor?.investor_name}
            </Text>
            <Text
              color="#313140"
              size={32}
              weight="bold"
              style={styles.subtitle}
            >
              Selecione uma empresa
            </Text>
          </TitleContainer>
          <SearchContainer>
            <Input
              placeholder="Buscar uma empresa"
              icon="search"
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(text) => setSearch(text)}
              returnKeyType="search"
            />
          </SearchContainer>
        </Container>
      )}
      renderItem={({ item }) => (
        <CompanyCard
          style={item.empty ? styles.invisibleItem : styles.normalItem}
          name={item.enterprise_name}
          empty={!!item.empty}
        />
      )}
      data={handleFormatData(flatlistData, FLATLIST_NUMBER_OF_COLUMNS)}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.flatList}
      numColumns={FLATLIST_NUMBER_OF_COLUMNS}
    />
  );
};

const styles = StyleSheet.create({
  subtitle: {
    width: '100%',
    maxWidth: 250,
  },
  contentContainerStyle: {
    backgroundColor: '#fff',
    // marginTop: 24,
  },
  flatList: {
    backgroundColor: '#fff',
    // marginTop: 24,
  },
  invisibleItem: {
    backgroundColor: 'transparent',
  },
  normalItem: {
  },
});

export default Companies;
