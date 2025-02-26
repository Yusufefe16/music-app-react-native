import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style.tsx';
import {SearchBarProps} from "../models.tsx";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholderTextColor="black"
                placeholder="Ara..."
                onChangeText={onSearch}
            />
        </View>
    );
};

export default SearchBar;
