import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const SearchFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const search = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="name" value={filter} onChange={search} />
    </Label>
  );
};

export default SearchFilter;
