import { Card } from 'reactstrap';

const cardContainerStyle = {
    content: '',
    backgroundColor: 'rgb(7,7,7,0.5)',
    minHeight: '400px',
    minWidth: '200px',
    padding: '1rem',
}

const CardContainer = (props) => {

    return (
        <Card style={cardContainerStyle}>
            {props.children}
        </Card>
    )

}

export default CardContainer;