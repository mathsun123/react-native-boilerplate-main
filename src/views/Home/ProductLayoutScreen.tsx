import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions, Animated as RNAnimated } from 'react-native';
import { colors } from '@theme';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { StackParamList, StackProps } from '@navigator';
import AppHeader from '@components/AppHeader/AppHeader';
import { useAppSlice } from '@modules/app';
import TouchableScale from 'react-native-touchable-scale';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sharedElementTransition } from './test';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductLayoutScreen = ({ navigation }: StackProps) => {
  const [scrollY, setScrollY] = useState(new RNAnimated.Value(0));
  const { dispatch, setLoggedOut } = useAppSlice();
  const [headerVisible, setHeaderVisible] = useState(true);


  const handleScroll = RNAnimated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const numbers = Array.from({ length: 99999 }, (_, index) => ({
    id: index + 1,
    title: `iGodisHere ${index + 1}`,
    imageUrl: `https://picsum.photos/id/${index}/200/300`, // Placeholder image URL with larger dimensions
  }));

  const ProductItem = ({ item }: { item: StackParamList['ProductDetailsScreen'] }) => {
    return (
      <TouchableScale
        activeScale={0.9}
        tension={10}
        friction={2}
        useNativeDriver
        onPress={() => navigation.navigate('ProductDetailsScreen', item)}>
        <View style={styles.productContainer}>
          <Animated.Image
            source={{ uri: item.imageUrl }}
            style={styles.productImage}
            sharedTransitionTag={`sharedTagSPECIAL${item.id}`} // Unique tag per product
            sharedTransitionStyle={sharedElementTransition} // doesnt WORK 
          />
          <Animated.View style={styles.productDescriptionContainer} sharedTransitionTag='description' >
            <Text style={styles.productDescriptionText}>{item.title}, {item.imageUrl}, {`sharedTag${item.id}`}</Text>
          </Animated.View>
        </View>
      </TouchableScale>
    );
  };

  return (
    <>

      <SafeAreaView>
        <AppHeader title={'PRODUCT'} menu right={'search'} onRightPress={() => dispatch(setLoggedOut())} />
      </SafeAreaView>

      <FlatList
        data={numbers}
        renderItem={ProductItem}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false} // Prevent insets adjustment
        keyExtractor={(item) => item.id.toString()}
        horizontal={false} // Render items in vertical layout
        contentContainerStyle={styles.flatListContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </>

  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flexGrow: 1, // Allow content to grow vertically
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center', // Center items horizontally
    overflow: 'hidden',
    backgroundColor: 'inherit'
  },
  productContainer: {
    maxWidth: '100%', // Limit item width to the available width
    width: Dimensions.get('window').width - 20, // Responsive width with padding
    height: 280, // Fixed height for each product item
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.gray,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '80%', // Adjust image height to desired ratio
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  productDescriptionContainer: {
    padding: 10,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: '100%',
  },
  productDescriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default ProductLayoutScreen;