import React, { useCallback, useEffect } from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc'},
];

const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas( sortBy, category));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    (obj) => {
      dispatch(setSortBy(obj));
    },
    [dispatch],
  );


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categories} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })
          : Array(10)
              .fill(0)
              .map((__, index) => {
                return <PizzaLoadingBlock key={index} />;
              })}
      </div>
    </div>
  );
};

export default Home;
