import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Countries from './components/Countries';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

  function App() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchCountries, setSearchCountries] = useState("");
    const [query, setQuery] = useState("");
    const [darkMode, setDarkMode] = useState(getInitialMode());
  
    useEffect(() => {
      const fetchItems = async () => {
        if (query === "") {
          const result = await axios(`https://restcountries.eu/rest/v2/all`);
          setCountries(result.data);
          setIsLoading(false);
        } else {
          const result = await axios(
            `https://restcountries.eu/rest/v2/name/${query}`
          );
          setCountries(result.data);
          setIsLoading(false);
        }
      };
  
      fetchItems();
    }, [query]);
  
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);
  
    function getInitialMode() {
      const savedMode = JSON.parse(localStorage.getItem("darkMode"));
      return savedMode || true;
    }
  
    const modeChanger = () => {
      setDarkMode((prevMode) => !prevMode);
    };
  
    const onChange = (e) => {
      setSearchCountries(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(searchCountries);
    };
  
    return (
      <div className={`App ${darkMode ? `dark` : `light`}`}>
        <Header darkMode={darkMode} modeChanger={modeChanger} />
  
        <SearchForm
          darkMode={darkMode}
          handleSubmit={handleSubmit}
          onChange={onChange}
          searchCountries={searchCountries}
        />
  
        <Countries
          countries={countries}
          isLoading={isLoading}
          darkMode={darkMode}
        />

<footer> By Shella 
        Saya tidak mencopy lain... ini tugas saya sebelumnya dan saya edit/oper-oper video yg ada di mentor JR, edit kesalahan bug di bagian components dan CSS lalu diperbaiki
      </footer>
      </div>

     
    );
  }
  
  export default App