import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style.tsx'
import {Song, SongCardProps} from '../models.tsx';

const SongCard: React.FC<SongCardProps> = ({ song }: { song: Song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
        <View style={styles.inner_container}>
            <Text style={styles.title}>{song.title}</Text>
            <View style={styles.content_container}>
                <View style={styles.info_container}>
                    <Text>{song.artist}</Text>
                    <Text style={styles.year}>{song.year}</Text>
                </View>
                {song.isSoldOut && (
                    <Text style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>Tükendi</Text>
                    </Text>
                )}
            </View>
        </View>
    </View>
  );
};
export default SongCard;
