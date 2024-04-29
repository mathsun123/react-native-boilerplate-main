import { colors } from '@theme';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const IconSize = 24;

const AppHeader = ({ style, menu, back, title, right, onRightPress, optionalBtn, optionalBtnPress, rightComponent, headerBg, iconColor, titleAlight, optionalBadge }: any) => {

    const LeftView = () => (
        <View style={styles.view}>
            {menu && <TouchableOpacity onPress={() => { }}>
                <Feather name="menu" size={IconSize} color={iconColor} />
            </TouchableOpacity>}
            {back && <TouchableOpacity onPress={() => { }}>
                <Feather name="arrow-left" size={IconSize} color={iconColor} />
            </TouchableOpacity>}
        </View>
    )
    const RightView = () => (
        rightComponent ? rightComponent :
            <View style={[styles.view, styles.rightView]}>
                {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
                    <Feather name={optionalBtn} size={IconSize} color={iconColor} />
                    {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
                </TouchableOpacity>}
                {right && <TouchableOpacity onPress={onRightPress}>
                    <Feather name={right} size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
    )
    const TitleView = () => (
        <View style={styles.titleView}>
            <Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
        </View>
    )
    return (
        <Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
            {/* <View>
                <Text style={{ color: colors.white }}>Helo</Text>
            </View> */}
            <LeftView />
            <TitleView />
            <RightView />
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: colors.white,
        color: colors.white,
    },
    view: {
        marginHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
    titleView: {
        flex: 1,
        fontSize: 9999,
        color: colors.white
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})