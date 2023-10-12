import {View, Pressable,Text} from 'react-native'

export const CategoryGridTile = ({title, color}) => {
  return (
    <View>
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    </View>
  )
}
