import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../index';
import { Colors } from 'react-native-ui-lib';

const LayoutsPage: Array<Record<'name', keyof RootStackParamList>> = [
    {
        name: 'Normal',
    },
];

const Index = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ScrollView
            style={{ flex: 1 }}
            stickyHeaderIndices={[
                0,
            ]}
        >
            <View style={styles.section}>
                <Text style={styles.sectionText}>{'Layouts'}</Text>
            </View>
            {LayoutsPage.map(({ name }, index) => {
                return (
                    <TouchableHighlight
                        key={index}
                        onPress={() => navigation.navigate(name)}
                    >
                        <View style={styles.listItem}>
                            <Text style={styles.text}>{name}</Text>
                        </View>
                    </TouchableHighlight>
                );
            })}
        </ScrollView>
    );
};

export default Index;

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'flex-start',
        borderColor: Colors.grey60,
        borderBottomWidth: 0.5,
        padding: 16,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
    },
    section: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.grey60,
    },
    sectionText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
