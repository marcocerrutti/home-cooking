import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Message",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
];

function AccountScreen(props) {
    return (
        <Screen>
             <View style={styles.container}>
                <ListItem
                    title="Uchenna Nwaigwe"
                    subTitle="hgsl@gmail.com"
                    image={require("../assets/UCHE-PIX.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }/>
                     } />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
});
export default AccountScreen;