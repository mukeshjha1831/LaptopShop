import React from 'react'

function FilterCard({handleHDDChange, handlePriceChange, handleRAMChange, selectedPrice, selectedHDD, selectedRAM}) {
//Checkboxes to filter using different catagories eg. Price, Ram, etc.
  return (
    <div className="card">
  <h3>Filter by Catagory</h3>
  <h4>Price</h4>
  <div className="checkboxes">
    <input type="checkbox" onChange={handlePriceChange} name="price" value="799" checked={selectedPrice === '799'} id="checkbox1" />
    <label for="checkbox1">799 or less</label>
    <br/>
    <input type="checkbox" onChange={handlePriceChange} name="price" value="1299" checked={selectedPrice === '1299'} id="checkbox2" />
    <label for="checkbox2">1299  or less</label>
    </div>
    <h4>HDD</h4>
  <div className="checkboxes">
    <input type="checkbox" onChange={handleHDDChange} name="HDD" value="2 TB" checked={selectedHDD.includes('2 TB')} id="checkbox3" />
    <label for="checkbox3">2 TB or less</label>
    <br/>
    <input type="checkbox" onChange={handleHDDChange} name="HDD" value="4 TB" checked={selectedHDD.includes('4 TB')} id="checkbox4" />
    <label for="checkbox4">4 TB or less</label>
    </div>
    <h4>RAM</h4>
  <div className="checkboxes">
    <input type="checkbox" onChange={handleRAMChange} name="RAM" value="2 GB" checked={selectedRAM.includes('2 GB')} id="checkbox5" />
    <label for="checkbox5">2 GB or less</label>
    <br/>
    <input type="checkbox" onChange={handleRAMChange} name="RAM" value="4 GB" checked={selectedRAM.includes('4 GB')} id="checkbox6" />
    <label for="checkbox6">4 GB or less</label>
    </div>
</div>
  )
}

export default FilterCard