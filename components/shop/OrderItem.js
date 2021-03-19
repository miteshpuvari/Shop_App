import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import Cart from '../../components/UI/Cart';

const OrderItem = props => {
        const [showDetails, setShowDetails] = useState(false);
    return (
    <Cart style={styles.OrderItem} >
        <View style={styles.summery} >
            <Text style={styles.totalAmount} >${props.amount.toFixed(2)}</Text>
            <Text style={styles.date} >{props.date}</Text>
        </View>
        <Button color={Colors.primary} 
                title={showDetails ? 'Hide Details' : "Show Details"} 
                onPress={() => {setShowDetails(prevState => !prevState)}} 
        />
        {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (<CartItem 
                                            key={cartItem.productId}
                                            qantity={cartItem.qantity} 
                                            amount={cartItem.sum} 
                                            title={cartItem.productTitle} 
                                        />))}    
        </View>
        )}
    </Cart>
    );
};

const styles = StyleSheet.create({
    OrderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summery: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItem;
