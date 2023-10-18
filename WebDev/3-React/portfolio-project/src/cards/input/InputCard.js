// Imports
import '../input/cardStyle.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import { fetchCryptoList } from '../../api/cryptoListAPI';

// Component to export
const InputCard = ({ setPreviouslySelected, previouslySelected }) => {

    // Set the state and function to edit the state
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState('Select asset...');
    const [cryptoArray, setCryptoArray] = useState([]);
    const [fetched, setFetched] = useState(null);

    // toggle function
    const toggle = () => setDropdownOpen(prevState => !prevState);

    // Fetching the crypto data for the input list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedCryptoList = await fetchCryptoList();
                setCryptoArray(fetchedCryptoList);
                setFetched(true);
            } catch (err) {
                console.log('Error: ' + err);
                setFetched(false);
            }
        };
        fetchData();
    }, []);  // Empty dependency array means this useEffect runs once, similar to componentDidMount

    // Set the selected cryptocurrency
    const handleSelect = (crypto) => {
        // Change which asset is selected
        setSelectedCrypto(crypto.name);
    
        // Update previous list
        setPreviouslySelected(prevSelected => {
            // Ensure prevSelected is an array
            if (!Array.isArray(prevSelected)) {
                prevSelected = [];
            }
    
            if (prevSelected.length === 6) {
                prevSelected.pop();
            }
            return [crypto, ...prevSelected];
        });
    
        // closing the dropdown menu
        if (dropdownOpen === true) {
            setDropdownOpen(false);
            toggle();
        }
    };
    
    
    const renderSelectedComponent = () => {

        let componentToRender;

        if (fetched === false) {
            componentToRender = (
                <p>Fetch has failed due to too many requests using the free CoinGecko API.</p>
            );
        } else if (!previouslySelected || previouslySelected.length === 0) {
            componentToRender = (
                <p>Select an asset from the list above.</p>
            );
        } else {
            componentToRender = previouslySelected.map((crypto, index) => (
                <Button key={index} onClick={() => handleSelect(crypto)}>
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
    );
}

export default InputCard;
