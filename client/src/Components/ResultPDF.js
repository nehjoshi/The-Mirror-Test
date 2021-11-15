import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import font from '../fonts/Lato-Regular.ttf';
import fontBlack from '../fonts/Lato-Black.ttf';

Font.register({ family: 'Lato', src: font });
Font.register({ family: 'LatoBlack', src: fontBlack });
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Lato'
    },
    section: {
        width: '100%',
        height: "10%",
        backgroundColor: "#320488",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        position: 'absolute',
        left: '20px',
        top: '20px'
    },
    heading: {
        fontSize: '25px',
        textAlign: 'center',
        marginTop: '10px',
        fontFamily: 'LatoBlack',
        color: "#fff"
    },
    details: {
        width: '100%',
        padding: "30px 20px"
    },
    detailsHeading: {
        fontSize: '20px',
        color: "#121212",
        fontFamily: 'LatoBlack'
    },
    detailsBox: {
        width: '90%',
        // border: '1px solid #320488',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20
    },
    boxRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: "5px 5px",
        borderBottom: '1px solid #cccccc'
    },
    boxField: {
        fontSize: '15px',
        fontFamily: 'LatoBlack',
        color: "#121212"
    },
    boxValue: {
        fontSize: '15px',
    }
});

const ResultPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.heading}>Jivan Safalya | The Mirror Test</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeading}>Basic Details</Text>
                <View style={styles.detailsBox}>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Name</Text>
                        <Text style={styles.boxValue}>Neh Samir Joshi</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Nationality</Text>
                        <Text style={styles.boxValue}>British</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Religion</Text>
                        <Text style={styles.boxValue}>Hindu</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Date of Birth</Text>
                        <Text style={styles.boxValue}>05/03/2002</Text>
                    </View>
                    
                </View>
            </View>
        </Page>
    </Document>
);


export default ResultPDF;