import React, {useState} from 'react';
import searchValidation from '../../helpers/searchValidation';

let initialForm = {
    name: ""
  };
  
  
  const SearchForm = (props) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialForm);
    const [queryOption, setQueryOption] = useState('country');
    
    
    function handleChange (e) {
      let property = e.target.name,
      value = e.target.value;
      setForm(
        {
          ...form,
          [property]: value
        }
      )
      setErrors(
        searchValidation(
          {...form, [property]: value}
          )
        )
    }

      
    function handleSubmit (e) {
      e.preventDefault();
      if(Object.keys(errors).length === 0){
        props.putQuery(form.name, queryOption);
        setForm(initialForm)
        setErrors(initialForm)
        } else {
          window.alert('Debe llenar todos los campos');
      }
    }
    
  return ( 
    <>
    <h3>Search</h3>
    <form onSubmit={handleSubmit}>
    <label>
      Select query:
      <select 
      value={queryOption}
      name="query-opt"
      onChange={e => setQueryOption(e.target.value)}
      >
        <option value="country">Country</option>
        <option value="activity">Activity</option>
      </select>
    </label>
    <label htmlFor="name">Name:</label>
    <input 
      type="text"
      name='name'
      id='name'
      value={form.name}
      onChange={handleChange}
    />
    {errors.name && <p>{errors.name}</p>}
    <button type='submit'>Submit</button>
  </form>


    </>
   );
}
 
export default SearchForm;