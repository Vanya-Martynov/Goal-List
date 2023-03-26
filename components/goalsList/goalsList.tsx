import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import GoalItem from './goalItem';
interface IGoulList {
  key: string;
  item: string;
  id: string;
}

export default function GoalList({ listOfGoals, onDelete }) {
    let list = listOfGoals as IGoulList[]
  return (
          <FlatList data={list} renderItem={
          itemData => {
            return <GoalItem goal={itemData.item} onDelete={ onDelete }></GoalItem>
          }
        }></FlatList>
  );
}
