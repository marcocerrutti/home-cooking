import React from 'react';
import Screen from '../components/Screen';
import Card from "../components/Card";
import { FlatList, StyleSheet} from 'react-native';
import colors from '../config/colors';

function ListingScreen(props) {

    const listings = [
        {
            id: 1,
            title: 'Red jacket for sale',
            price: 100,
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            price: 100,
            image: require('../assets/couch.jpg')
        }
    ];

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image} />
              }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingScreen;