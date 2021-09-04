import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import Buddha from '../Images/buddha.png'
import font from '../fonts/Lato-Regular.ttf';

Font.register({family: 'Lato', src: font});
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Lato'
    },
    section: {
        width: '100%',
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
        fontWeight: '900',
    },
    hr: {
        width: '400px',
        height: '1px',
        marginTop: '10',
        display: 'block',
        backgroundColor: 'gray'
    },
    date: {
        position: 'absolute',
        right: '20px',
        top: '60px',
        fontSize: '10px'
    },
    name: {
        position: 'absolute',
        right: '20px',
        top: '80px',
        fontSize: '10px'
    },  
    gender: {
        position: 'absolute',
        right: '20px',
        top: '100px',
        fontSize: '10px'
    },  
    nation: {
        position: 'absolute',
        right: '20px',
        top: '120px',
        fontSize: '10px'
    },  
    part: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        border: '1px solid #e0e0d1',
        borderRadius: '5px',
        width: '400px',
        marginTop: '5px',
        marginBottom: '5px'
    },
    headingPart1: {
        marginTop: '40px',
        marginLeft: '20px'
    },
    headingPart: {
        marginTop: '20px',
        marginLeft: '20px'
    },
    score: {
        fontSize: '14px',
        marginLeft: '20px',
        color: '#636363',
        marginTop: '5px'
    },
    imgLogo: {
        height: '40px',
        position: 'absolute',
        left: '20px',
    }
});

const getDate = () => {
    let today = new Date().toLocaleDateString()
    return today;
}

const ResultPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Image src={Buddha} style={styles.imgLogo} />
                <Text style={styles.heading}>Jivan Safalya | The Mirror Test</Text>
                <Text style={styles.date}>Date of Test: {getDate()}</Text>
                <Text style={styles.name}>Name: {localStorage.getItem("name")}</Text>
                <Text style={styles.gender}>Gender: Male</Text>
                <Text style={styles.nation}>Nationality: British</Text>
                <View style={styles.hr}></View>
            </View>
            <View style={styles.part}>
                <Text style={styles.headingPart1}>Part 1: Adverse Childhood Experience (ACE)</Text>
                <Text style={styles.score}>Your ACE Score is: {localStorage.getItem("result")}</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.headingPart}>Part 2: Attachment Style</Text>
                <Text style={styles.score}>Your attachment style is: {localStorage.getItem("result2")}</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.headingPart}>Part 3: Optimism</Text>
                <Text style={styles.score}>Your optimism Score is: {localStorage.getItem("optScore")}</Text>
                <Text style={styles.score}>{localStorage.getItem("optDesc")}</Text>
                <Text style={styles.score}>Your hope Score is: {localStorage.getItem("hopeScore")}</Text>
                <Text style={styles.score}>{localStorage.getItem("hopeDesc")}</Text>
                <Text style={styles.score}>Your self-esteem Score is: {localStorage.getItem("esteemScore")}</Text>
                <Text style={styles.score}>{localStorage.getItem("esteemDesc")}</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.headingPart}>Part 4: Big Five Personality (BFT) Test</Text>
                <Text style={styles.score}>Your extraversion score is: {localStorage.getItem("e")}</Text>
                <Text style={styles.score}>Your agreeableness score is: {localStorage.getItem("a")}</Text>
                <Text style={styles.score}>Your conscientiousness score is: {localStorage.getItem("c")}</Text>
                <Text style={styles.score}>Your neuroticism score is: {localStorage.getItem("n")}</Text>
                <Text style={styles.score}>Your openess score is: {localStorage.getItem("o")}</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.headingPart}>Part 5: PERMA Profiler Test</Text>
                <Text style={styles.score}>Your PERMA score is: {localStorage.getItem("PERMA")}</Text>
 
            </View>
        </Page>
    </Document>
);


export default ResultPDF;