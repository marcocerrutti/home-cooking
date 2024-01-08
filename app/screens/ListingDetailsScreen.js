import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/foodForSale.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Non Veggie Food</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/UCHE-PIX.jpg")}
                        title="Uche Nwaigwe"
                        subTitle="5 Listings "
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },

    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontweight: "bold",
        fontSize: 20,
        marginVertical:10,
    },
 
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;