import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='search-bar'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search-box'
          value={term}
          placeholder='Search...'
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className='submit-btn'>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
