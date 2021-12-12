import React from 'react'
import { View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper';


export default function Finder({cityHandler}) {
    const searchCity = () => {
        if (searchQuery.length!=0){
        cityHandler(searchQuery)
        }
    }
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ marginTop: 15, }} >
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={searchCity}
    />
        </View>
    )
}
