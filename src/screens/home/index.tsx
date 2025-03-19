import React, {useState, useEffect, useCallback, useMemo} from 'react';
import getStyles from './styles';
import {GlobalImports} from '../../config/globalImports';
import {setDarkMode, setLightMode} from '../../redux/reducer/themeReducer';
import {getPeoples} from '../../redux/reducer/peoplesReducer';
import {getFilms} from '../../redux/reducer/filmsReducer';
import {getPlanets} from '../../redux/reducer/planetsReducer';
import ThemeWrapper from '../../components/themeWrapper';
import Header from './header';
import Toggler from './toggler';
import Tabs from './tabs';
import List from './list';

const Home: React.FC = ({navigation}: any) => {
  const {dispatch, getState} = GlobalImports.useReduxStore();
  const {colors} = GlobalImports.useTheme();

  const styles = useMemo(() => {
    return getStyles(colors);
  }, [colors]);

  const peoples = getState('peoples');
  const planets = getState('planets');
  const films = getState('films');
  const {state} = getState('themeMode');

  const [selected, setSelected] = useState<string>('films');
  const [activeSwitch, setActiveSwitch] = useState<boolean>(
    state == 'light' ? true : false,
  );

  useEffect(() => {
    dispatch(getPeoples());
    dispatch(getFilms());
    dispatch(getPlanets());
  }, []);

  const handleToggle = useCallback(() => {
    if (activeSwitch) {
      dispatch(setDarkMode());
      setActiveSwitch(false);
    } else {
      dispatch(setLightMode());
      setActiveSwitch(true);
    }
  }, [activeSwitch]);

  const loadMorePeople = useCallback(() => {
    if (peoples.nextUrl && peoples.status !== 'loading') {
      dispatch(getPeoples(peoples.nextUrl));
    }
  }, [peoples.nextUrl, peoples.status]);

  const loadMorePlanet = useCallback(() => {
    if (planets.nextUrl && planets.status !== 'loading') {
      dispatch(getPlanets(planets.nextUrl));
    }
  }, [planets.nextUrl, planets.status]);

  const loadMoreFilm = useCallback(() => {
    if (films.nextUrl && films.status !== 'loading') {
      dispatch(getFilms(films.nextUrl));
    }
  }, [films.nextUrl, films.status]);

  const handleNav = useCallback(() => {
    navigation.navigate('search');
  }, [navigation]);

  return (
    <ThemeWrapper>
      <Header handleNav={handleNav} styles={styles} colors={colors} />
      <Toggler
        styles={styles}
        colors={colors}
        activeSwitch={activeSwitch}
        handleToggle={handleToggle}
      />
      <Tabs
        styles={styles}
        colors={colors}
        selected={selected}
        setSelected={setSelected}
      />
      <List
        styles={styles}
        navigation={navigation}
        loadMoreFilm={loadMoreFilm}
        loadMorePeople={loadMorePeople}
        loadMorePlanet={loadMorePlanet}
        peoples={peoples}
        films={films}
        planets={planets}
        selected={selected}
      />
    </ThemeWrapper>
  );
};

export default Home;
