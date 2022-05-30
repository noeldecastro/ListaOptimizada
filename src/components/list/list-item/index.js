import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {  styles } from './styles'


const ListItem = ({ item, onPressItem}) => {
    return (
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={styles.containerCheck}>
                <Text></Text>
              </TouchableOpacity>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onPressItem(item.id)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default ListItem