import React, {useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import music_data from './music_data.json';
import SongCard from './SongCard';
import {Song} from './models.tsx';
import SearchBar from './SearchBar';

const App = () => {
    const [list, setList] = useState<Song[]>(music_data);

    const renderSong = ({ item }: { item: Song }) => <SongCard song={item} />;

    const renderSeparator = () => <View style={style.seperator} />;

    const handleSearch = (text: any) => {
        const filteredList = music_data.filter((song: Song) => {
            const matchedSong = song.title.toLowerCase().indexOf(text.toLowerCase());
            const matchedArtist = song.artist.toLowerCase().indexOf(text.toLowerCase());
            return matchedSong > -1 || matchedArtist > -1;
        });
        setList(filteredList);
    };


    return (
        <SafeAreaView>
            <SearchBar onSearch={handleSearch} />
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={list}
                    renderItem={renderSong}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperator: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
});

