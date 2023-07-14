import logo from './logo.svg';
import './App.css';
import Catagory from './Catagory';
import FilterCard from './FilterCard';
import { useEffect, useState } from 'react';
function App() {
  const [laptopData, setLaptopData] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedHDD, setSelectedHDD] = useState([]);
  const [selectedRAM, setSelectedRAM] = useState([]);

//Get data form dummy api "laptop.json"

  const getLaptopData = async () => {
    const res =  await fetch("/laptop.json")
    const data = await res.json()
    if(res.status === 200){
      setLaptopData(data)
    }
  
  }
  useEffect(() => {
    getLaptopData()
  }, [])
  
  // Onchange functions for filter catagory checkboxes
  const handlePriceChange = (event) => {
    const priceValue = event.target.checked ? event.target.value : '';
    setSelectedPrice(priceValue);
  };

  const handleHDDChange = (event) => {
    const hddOption = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedHDD([...selectedHDD, hddOption]);
    } else {
      setSelectedHDD(selectedHDD.filter((option) => option !== hddOption));
    }
  };

  const handleRAMChange = (event) => {
    const RamOption = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedRAM([...selectedRAM, RamOption]);
    } else {
      setSelectedRAM(selectedRAM.filter((option) => option !== RamOption));
    }
  };

  const filteredItems = laptopData?.filter((item) => {
    // Check if price matches the selected price range
    const priceMatch = selectedPrice === '' || item.price <= parseFloat(selectedPrice);
    // Check if price matches the selected price range
    const hddMatch =
    selectedHDD.length === 0 ||
    selectedHDD.some((option) => parseFloat(option) >= parseFloat(item.HDD.replace(' TB', '')));
    // Check if HDD matches any of the selected RAM options
  const RamMatch =
  selectedRAM.length === 0 ||
  selectedRAM.some((option) => parseFloat(option) >= parseFloat(item.RAM.replace(' GB', '')));
return priceMatch && hddMatch && RamMatch;
  });

  return (
    <div className="container-gird">      
    <Catagory laptopData={filteredItems}/>
    <FilterCard selectedPrice={selectedPrice} selectedRAM={selectedRAM} selectedHDD={selectedHDD} handlePriceChange={handlePriceChange}  handleHDDChange={handleHDDChange} handleRAMChange={handleRAMChange} />
    </div>
  );
}

export default App;
