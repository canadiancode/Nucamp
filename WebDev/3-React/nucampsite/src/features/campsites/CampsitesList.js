import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard.js';
import { selectAllCampsites } from './campsitesSlice.js';
import Error from '../../components/Error.js';
import Loading from '../../components/Loading.js';

const CampsitesList = () => {
    const campsites =  useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        <Row>
            <Error errMsg={errMsg} />
        </Row>
    }

    return (
        <Row className='ms-auto'>{campsites.map((campsite) => {
            return (
                <Col 
                    md='5' 
                    className='m-4' 
                    key={campsite.id}
                    >
                    <CampsiteCard campsite={campsite} />
                </Col>
            )
        })}
        </Row>
    );
};

export default CampsitesList;