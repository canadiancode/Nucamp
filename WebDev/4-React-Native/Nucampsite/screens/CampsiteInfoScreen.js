import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Modal } from 'react-native';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { Rating, Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { postComment } from '../features/comments/commentsSlice';

const CampsiteInfoScreen = ({ route }) => {
    
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state => state.favorites));

    const [ showModal, setShowModal ] = useState(false);
    const [ rating, setRating ] = useState(5);
    const [ author, setAuthor ] = useState('');
    const [ text, setText ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newComment = {
            author,
            rating,
            text,
            campsiteId: campsite.id
        };
        dispatch(postComment(newComment));  // Dispatch postComment instead of console.log
        setShowModal(!showModal);
    };

    const resetForm = () => {
        setRating(5)
        setAuthor('');
        setText('');
    };

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }} >{item.text}</Text>
                <Rating
                    startingValue={item.rating}
                    imageSize={10}
                    readonly
                    style={{ alignItems: 'flex-start', paddingVertical: '5%' }}
                />
                <Text style={{ fontSize: 12 }} >
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
                ListHeaderComponent={
                    <>
                        <RenderCampsite
                            campsite={campsite} 
                            isFavorite={favorites.includes(campsite.id)}
                            markFavorite={() =>
                                dispatch(toggleFavorite(campsite.id))
                            }
                            onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }
            />
        <Modal
            animationType='slide'
            transparent={false}
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
        >
            <View style={styles.modal}>
                <Rating
                    showRating
                    startingValue={rating}
                    imageSize={40}
                    onFinishRating={(rating) => setRating(rating)}
                    style={{ paddingVertical: 10 }}
                />
                <Input
                    placeholder='Author'
                    leftIcon={<FontAwesome name='user-o' />}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(author) => setAuthor(author)}
                    value={author}
                />
                <Input
                    placeholder='Comment'
                    leftIcon={<FontAwesome name='comment-o' />}
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(text) => setText(text)}
                    value={text}
                />
                <View style={{ margin: 10 }}>
                    <Button
                        title='Submit'
                        color='#5637DD'
                        onPress={() => {
                            handleSubmit();
                            resetForm();
                        }}
                    />
                </View>
                <View>
                    <Button
                        onPress={() => {
                            setShowModal(!showModal);
                            resetForm();
                        }}
                        title='Cancel'
                        color='#808080'
                    />
                </View>
            </View>
        </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    commentTitle: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFF'
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
})

export default CampsiteInfoScreen;