import { Container, Row, Col, Button }  from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail.js';
import CampsitesList from '../features/campsites/CampsitesList.js';
// ask why this is below is within curly brackets in class
import { selectRandomCampsite } from '../features/campsites/campsitesSlice.js';

const CampsitesDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        let selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    }

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList />
                </Col>
                <Col sm="7" md="5">
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;