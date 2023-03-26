import { Pressable, Text, View, StyleSheet } from "react-native"

interface IItem {
    item: string;
    id: string;
}

interface IGoalItem {
    onDelete: () => void;
    goal: IItem;
}

export default function GoalItem({ onDelete, goal }: IGoalItem) {
    return <View>
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={onDelete.bind(this, goal.id)}
      style={({pressed}) => pressed && styles.pressedGoal}
    >
      <Text style={styles.goalsItem}>
        {goal.item}
      </Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
    pressedGoal: {
      opacity: 0.5
    },
    goalsItem: {
      margin: 16,
      marginBottom: 8,
      padding: 16,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      color: "#fff"
    }
  });