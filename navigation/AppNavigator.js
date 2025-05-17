import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import HomeScreen from "../screens/HomeScreen";

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}