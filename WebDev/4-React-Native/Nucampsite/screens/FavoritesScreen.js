// FavoritesScreen.js
import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../components/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// FavoritesScreen function component
const FavoritesScreen = ({ navigation }) => {
    // Selector hooks to access state
    const { campsitesArray, isLoading, errMess } = useSelector(
        (state) => state.campsites
    );
    const favorites = useSelector((state) => state.favorites);

    // renderFavoriteItem function for rendering each favorite campsite
    const renderFavoriteItem = ({ item: campsite }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('Directory', {
                        screen: 'CampsiteInfo',
                        params: { campsite }
                    })
                }
            >
                <Avatar rounded source={{ uri: baseUrl + campsite.image }} />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    // Conditional rendering based on isLoading and errMess
    if (isLoading) {
        return <Loading />;
    }

    if (errMess) {
        return (
            <View>
                <Text>{errMess}</Text>
            </View>
        );
    }

    // FlatList to display favorite campsites
    return (
        <FlatList
            data={campsitesArray.filter((campsite) =>
                favorites.includes(campsite.id)
            )}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default FavoritesScreen;
