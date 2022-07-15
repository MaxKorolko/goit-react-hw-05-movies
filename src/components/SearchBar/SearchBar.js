import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';

export default function SearchBar({ onGetRequest }) {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      return toast.error('search cannot be an empty string');
    }
    onGetRequest(input.trim().toLowerCase());
    setInput('');
  };

  return (
    <div className={s.wrap}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={input}
          onChange={event => setInput(event.currentTarget.value)}
        ></input>
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};
