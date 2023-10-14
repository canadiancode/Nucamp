// Imports
import '../input/cardStyle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { useState } from 'react';
import { fetchCryptoData } from '../../api/cryptoAPI';

// Fetching the crypto data for the input list
let cryptoArray = [];
let fetched = null;
async function fetchData() {
    try {
        cryptoArray = [];
        const fetchedCryptoList = await fetchCryptoData();
        fetchedCryptoList.forEach(crypto => {
            // console.log(crypto);
            cryptoArray.push(crypto);
        })
        fetched = true;
    } catch (err) {
        console.log('Error: ' + err);
        fetched = false;
    }
}
fetchData();

// Component to export
const InputCard = () => {

    // Set the state and function to edit the state
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ selectedCrypto, setSelectedCrypto ] = useState('Select asset...');
    const [ previouslySelected, setSelectedList ] = useState([]);

    // toggle function
    const toggle = () => setDropdownOpen(prevState => !prevState);

    // Set the selected cryptocurrency
    const handleSelect = (crypto) => {
        
        // Change which asset is selected
        setSelectedCrypto(crypto.name);

        // Add asset to prev list
        if (previouslySelected.length  === 4) {
            setSelectedList((prevSelected) => prevSelected.pop());
            setSelectedList((prevSelected) => [crypto, ...prevSelected]);
        } else {
            setSelectedList((prevSelected) => [crypto, ...prevSelected]);
            renderSelectedComponent(crypto);
        }

        // closing the dropdown menu
        setDropdownOpen(false);
        toggle();
    };

    const renderSelectedComponent = (crypto) => {

        let componentToRender;

        if (fetched === false) {
            componentToRender = (
                <p>Fetch has failed due to too many requests using the free CoinGecko API.</p>
            );
        }
        else if (previouslySelected.length === 0) {
            componentToRender = (
                <p>Select an asset to display a component.</p>
            );
        } 
        else if (previouslySelected.length == 5) {
            componentToRender = previouslySelected.map((crypto, index) => (
                <Button key={index} onClick={() => handleSelect(crypto)}>
                    <img src={crypto.image} alt={crypto.name} />
                    {crypto.name}
                </Button>
            ));
        } 
        else {
            componentToRender = previouslySelected.map((crypto, index) => (
                <Button key={index}>
                    <img src={crypto.image} alt={crypto.name} />
                    {crypto.name}
                </Button>
            ));
        }

        return (
            <div className='prevButtonContainer'>
                {componentToRender}
            </div>
        );
    };

    // Return JSX
    return (
        <>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <div className='search-container'>
                <div className="input-group-text">
                    <img height='25' width='25' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png' alt="search" />
                </div>
                <DropdownToggle caret>{selectedCrypto}</DropdownToggle>
            </div>
            <DropdownMenu>
                {cryptoArray.map((crypto, index) => (
                    <DropdownItem key={index} onClick={() => handleSelect(crypto)}>
                        <img src={crypto.image} />
                        {crypto.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </ButtonDropdown>
        {renderSelectedComponent()}
        </>
    )

}

export default InputCard;