import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { colors } from '@theme';
import Animated from 'react-native-reanimated';
import { StackParamList, StackProps } from '@navigator';
import { RouteProp, useRoute } from '@react-navigation/native';
import { sharedElementTransition } from './test';

const ProductDetailsScreen = ({ navigation }: StackProps) => {

  const route = useRoute<RouteProp<{ params: StackParamList['ProductDetailsScreen'] }, 'params'>>();

  const id = route.params?.id
  const productName = route.params?.title
  const productImageUrl = route.params?.imageUrl

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.productImageContainer}>
        <Pressable >
          <Animated.Image
            source={{ uri: productImageUrl }}
            style={styles.productImage}
            sharedTransitionTag={`sharedTagSPECIAL${id}`}
            sharedTransitionStyle={sharedElementTransition}  // doesnt WORK 
          />
        </Pressable>
      </View>
      <Animated.View style={styles.productDescriptionContainer} sharedTransitionTag='description' >
        <Text style={styles.productDescriptionText}>{productName}, {productImageUrl}, {`sharedTag${id}`}</Text>
      </Animated.View>
    </View>
  )
};

const styles = StyleSheet.create({

  previewContainer: {
    flex: 1,
    backgroundColor: 'inherit',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productContainer: {
    width: '87%',
    borderRadius: 15,
    height: 250,
    backgroundColor: colors.darkPurple,
    margin: 10,

    display: 'flex',
    justifyContent: 'flex-end'
  },
  productImageContainer: {
    height: '70%',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    overflow: 'hidden',
    width: '100%'
    // width: 'inherit',
  },
  productImage: {
    width: '100%',
    minHeight: '100%',
    height: '100%', // Adjust image height to desired ratio
    resizeMode: 'center',
    overflow: 'hidden'
  },
  productDescriptionContainer: {
    borderWidth: 1,
    height: '30%',
    borderColor: colors.black2,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: colors.black,
    width: '100%',
    padding: 8
  },
  productDescriptionText: {
    color: colors.white
  },
});

export default ProductDetailsScreen;