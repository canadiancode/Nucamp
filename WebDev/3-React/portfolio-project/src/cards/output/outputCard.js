// Imports
import '../output/cardStyle.css';
import { useState, useEffect } from 'react';
import { fetchCryptoDetails } from '../../api/cryptoDetailsAPI';

// Component to export
const OutputCard = ({ previouslySelected }) => {

    // Set the state and function to edit the state
    const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
    const [fetchedCryptoList, setFetchedCryptoList] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCryptoDetails(selectedCrypto);
                console.log(data);
                setFetchedCryptoList(data);
                setFetched(true);
            } catch (err) {
                console.log('Error: ' + err);
                setError(err);
                setFetched(false);
            }
        };
        fetchData();
    }, [selectedCrypto]);

    useEffect(() => {
        if (previouslySelected && previouslySelected.length > 0) {
            // Assuming the ID of the crypto is used for fetching details
            setSelectedCrypto(previouslySelected[0].id);
            console.log(previouslySelected[0].id);
        }
    }, [previouslySelected]);

    const renderSelectedComponent = () => {
        let componentToRender;

        if (error) {
            componentToRender = (
                <p>There has been too many requests sent out to the free public CoinGecko API.</p>
            );
        } else if (!fetched) {
            componentToRender = (
                <p>Loading...</p>
            );
        } else if (selectedCrypto === '') {
            componentToRender = (
                <p>Please select an asset.</p>
            );
        } else {
            componentToRender = (
                <div className='custom-main'>

                    <div className='row-one custom-text-container'>
                        <div className='text-content'>
                            <img src={fetchedCryptoList.image.small} alt={fetchedCryptoList.name} />
                            <h3>{fetchedCryptoList.name}</h3>
                        </div>
                        <div className='ticker-symbol'>
                            <h3>${fetchedCryptoList.symbol.toUpperCase()}</h3>
                        </div>
                    </div>

                    <div className='row-two custom-text-container'>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Price:</p>
                            <p>${fetchedCryptoList.market_data.current_price.usd} USD</p>
                        </div>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Market Cap:</p>
                            <p>${Math.round(fetchedCryptoList.market_data.market_cap.usd / 1000000000)}B</p>
                        </div>
                    </div>
                    <div className='row-three custom-text-container'>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Hash Algo:</p>
                            <p>{fetchedCryptoList.hashing_algorithm}</p>
                        </div>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>First Block:</p>
                            <p>{new Date(fetchedCryptoList.genesis_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                        </div>
                    </div>
                    <div className='row-four custom-text-container'>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Max Supply:</p>
                            <p>{fetchedCryptoList.market_data.max_supply > 0 ? (fetchedCryptoList.market_data.max_supply / 1000000) + 'M' : '∞'}</p>
                        </div>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Current Supply:</p>
                            <p>{(fetchedCryptoList.market_data.circulating_supply / 1000000).toFixed(2)}M</p>
                        </div>
                    </div>
                    <div className='row-five custom-text-container'>
                        <div className='custom-subtext-container'>
                            <p className='def-text'>Description:</p>

                            {/* ^: Matches the start of the string. */}
                            {/* (.*?): Matches any character (non-greedy) until the next part of the pattern. */}
                            {/* // (?<!\/.{0,3})\.: This is a negative lookbehind assertion. It matches a period (\.) only if there isn't a forward slash followed by 0 to 3 characters behind it. */}
                            <p>{fetchedCryptoList.description.en.match(/^(.*?)(?<!\/.{0,3})\./)[0]}</p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {componentToRender}
            </div>
        );
    };

    // Return JSX
    return (
        <>
            {renderSelectedComponent()}
        </>
    );
}

export default OutputCard;