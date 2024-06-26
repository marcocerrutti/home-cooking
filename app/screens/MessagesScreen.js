import React,{useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';



const initialMessages = [
    {
        id: 1,
        title: "Uche Nwaigwe",
        description: "Hey! Is this item still available?",
        image: require('../assets/UCHE-PIX.jpg')
    },
    {
        id: 2,
        title: "Uche Nwaigwe",
        description:
          "I'm interested in this item. When will you be able to post it?",
        image: require('../assets/UCHE-PIX.jpg')
    }

];


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const  [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        
        //Delete the message from messages
        setMessages(messages.filter((m) => m.id != message.id));
        //Call the server
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => (message.id.toString())}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={()=> handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/UCHE-PIX.jpg')
                        },
                    ])
                }}
            />  
        </Screen>
    );
}

const styles = StyleSheet.create({
    
});
export default MessagesScreen;