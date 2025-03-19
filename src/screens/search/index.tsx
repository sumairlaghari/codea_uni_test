import React, {useState, useEffect, useCallback, useMemo} from 'react';
import getStyles from './styles';
import {GlobalImports} from '../../config/globalImports';
import ThemeWrapper from '../../components/themeWrapper';
import {getRequestWithoutAuth} from '../../config/helperFunction';
import {SearchPeopleUrl} from '../../config/urls';
import useDebounce from '../../hooks/useDebounce';
import {translateKeys} from '../../redux/translations';
import Header from './header';
import List from './list';
import SearchComp from './search';

const Search: React.FC = ({navigation}: any) => {
  const {colors} = GlobalImports.useTheme();

  const styles = useMemo(() => {
    return getStyles(colors);
  }, [colors]);

  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchText, 1000);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getData(undefined, debouncedSearchTerm);
    } else {
      resetState();
    }
  }, [debouncedSearchTerm]);

  const getData = async (
    nextUrl: string | null = SearchPeopleUrl,
    query: string = '',
    newSearch: boolean = true,
  ) => {
    setSearchLoading(true);
    try {
      const response = await getRequestWithoutAuth(`${nextUrl}${query}`);
      if (response) {
        const translatedKeys = translateKeys(response);
        setSearchData(
          newSearch
            ? translatedKeys.results
            : [...searchData, ...translatedKeys.results],
        );
        setNextUrl(response.next);
      }
    } catch (error) {
      console.log('Error fetching peoples:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  const resetState = useCallback(() => {
    setSearchData([]);
    setNextUrl(null);
    setSearchLoading(false);
    setSearchText('');
  }, []);

  const loadMore = useCallback(() => {
    if (nextUrl && !searchLoading) {
      getData(nextUrl, undefined, false);
    }
  }, [nextUrl, searchLoading]);

  const handleNav = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <ThemeWrapper>
      <Header handleNav={handleNav} styles={styles} colors={colors} />

      <SearchComp
        styles={styles}
        colors={colors}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <List
        loadMorePeople={loadMore}
        styles={styles}
        navigation={navigation}
        peoples={searchData}
        loading={searchLoading}
      />
    </ThemeWrapper>
  );
};

export default Search;
