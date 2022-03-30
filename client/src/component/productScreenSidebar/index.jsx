import React, {useState} from 'react'
import './style.css'
import {Slider} from "@reach/slider";
  import "@reach/slider/styles.css";

const ProductScreenSidebar = () => {

    const [adult, setAdult] =useState()
    const [children, setChildren] =useState()

    const [accessoriesProduct, setAccessoriesProduct] = useState({
        // selectedItem: [],
        response: [],
    });

    //uses to display the range
    function sliderRange() {
        return <Slider min={0} max={200} step={10} />;
      }

     //use to select the clothing check list
     const handleClothingChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { selectedItem } = accessoriesProduct;

       
        if (checked) {
            setAccessoriesProduct({
                // selectedItem: [...selectedItem, value],
                response: [...selectedItem, value],
            });
        }

        else {
            setAccessoriesProduct({
                // selectedItem: selectedItem.filter((e) => e !== value),
                response: selectedItem.filter((e) => e !== value),
            });
        }
    };

    //use to select the adult radio box list
    const handleAdultChange =(e) =>{
        const { name, value } = e.target;

        setAdult({
            [name]:value
        });
    }
    //use to select the children radio box list
    const handleChildrenChange =(e) =>{
        const { name, value } = e.target;

        setChildren({
            [name]:value
        });
    }

  return (
    <>
        {/* ==clothing and accessories */}
        <div className="productScreenLeftContainer">
                    <p className='clothing'>Clothing & Accessories</p>

                    <form >
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='bagsId'
                                value='Bags'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="bagsId"
                            >
                                Bags
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='beadsId'
                                value='Beads'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="beadsId"
                            >
                                Beads
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='beltId'
                                value='Belt'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="beltId"
                            >
                                Belt
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='capId'
                                value='Cap'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="capId"
                            >
                                Cap
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='handBagId'
                                value='HandBag'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="handBagId"
                            >
                                Hand Bags
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='jeansId'
                                value='Jeans'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="jeansId"
                            >
                                Jeans
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='jewelriesId'
                                value='Jewelries'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="jewelriesId"
                            >
                                Jewelries
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='pantsId'
                                value='Pants'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="pantsId"
                            >
                                Pants
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='shoesId'
                                value='Shoes'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="shoesId"
                            >
                                Shoes
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='trouserId'
                                value='Trousers'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="trouserId"
                            >
                                Trousers
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='tshirtsId'
                                value='T-shirts'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="tshirtsId"
                            >
                                T-shirts
                            </label>
                        </div>
                    </form>
                </div>
                {/* =====Brands========= */}
                <div className="productScreenLeftBrands">
                    <p className='brands'>Brands</p>

                    <form >
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='ourBrandId'
                                value='OurBrands'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="ourBrandId"
                            >
                                Our Brands
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='premiumBrandId'
                                value='PremiumBrands'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="premiumBrandId"
                            >
                                Premium Brands
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="checkbox"
                                id='popularbrandId'
                                value='PopularBrands'
                                onChange={handleClothingChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="popularbrandId"
                            >
                                Popular Brands
                            </label>
                        </div>
                    </form>
                </div>
                {/* =====Gender========= */}
                <div className="productScreenLeftGender">
                    <p className='gender'>Gender</p>

                    {/* =====Adult======== */}
                    <p className='aldult'>Adult</p>
                    <form >
                        <div className="checkboxRow">
                            <input type="radio"
                                id='maleId'
                                value='Male'
                                name='adult'
                                onChange={handleAdultChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="maleId"
                            >
                                Male
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="radio"
                                id='femailId'
                                value='Female'
                                name='adult'
                                onChange={handleAdultChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="femailId"
                            >
                                Female
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="radio"
                                id='allId'
                                value='All'
                                name='adult'
                                onChange={handleAdultChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="allId"
                            >
                                All
                            </label>
                        </div>
                    </form>
                    {/* =====Children======== */}
                    <p className='aldult'>Children</p>
                    <form >
                        <div className="checkboxRow">
                            <input type="radio"
                                id='maleChildId'
                                value='Male'
                                name='children'
                                onChange={handleChildrenChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="maleChildId"
                            >
                                Male
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="radio"
                                id='femailChildId'
                                value='Female'
                                name='children'
                                onChange={handleChildrenChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="femailChildId"
                            >
                                Female
                            </label>
                        </div>
                        <div className="checkboxRow">
                            <input type="radio"
                                id='allChildId'
                                value='All'
                                name='children'
                                onChange={handleChildrenChange}
                            /> &nbsp; &nbsp;
                            <label
                                className="checkboxLabel"
                                htmlFor="allChildId"
                            >
                                All
                            </label>
                        </div>
                    </form>
                </div>
                {/* ======price in====== */}
                <div className="productScreenLeftPrice">
                    <div className="priceIn">
                        <p>Price in (€)</p>
                        <div className="priceInBtn">
                            <p>Apply</p>
                        </div>
                    </div>

                   <div className="sliderContaer">
                   { sliderRange()}
                   </div>

                    <div className="priceInInput">
                        <input type="text" placeholder='20' />
                        <input type="text" placeholder='50' />
                    </div>
                </div>
    </>
  )
}

export default ProductScreenSidebar