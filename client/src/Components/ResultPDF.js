import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import font from '../fonts/Lato-Regular.ttf';
import fontBlack from '../fonts/Lato-Black.ttf';
import fontItalic from '../fonts/Lato-Italic.ttf';

Font.register({ family: 'Lato', src: font });
Font.register({ family: 'LatoBlack', src: fontBlack });
Font.register({ family: 'LatoItalic', src: fontItalic });
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
        fontFamily: 'Lato',
        fontSize: '15px',
        color: "#121212"
    },
    question: {
        fontSize: '15px',
        fontFamily: 'LatoBlack',
        color: "#121212",
    },
    answer: {
        fontFamily: 'LatoItalic',
        fontSize: '15px',
        color: "#121212",
        marginBottom: '10px'
    },
    subHeading: {
        fontSize: '15px',
        fontFamily: 'Lato',
        color: "#121212",
    },
    footer: {
        width: '100%',
        height: "3%",
        position: 'absolute',
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: '0.5px solid #cccccc',
    },
    smallHeading: {
        fontSize: '14px',
        fontFamily: 'LatoBlack',
        color: "#121212",
    },
    result: {
        color: "#090069",
        fontFamily: 'LatoBlack',
        fontSize: '13px',
        marginTop: '10px',
        marginLeft: '10px',
        textDecoration: 'underline'
    },
    resultDesc: {
        color: "#4a4a4a",
        fontFamily: 'Lato',
        fontSize: '13px',
        marginTop: '10px',
        marginLeft: '10px',
        marginBottom: "20px"
    },
    footerText: {
        fontSize: '8px',
        fontFamily: 'Lato',
    }
});

const ResultPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section} fixed>
                <Text style={styles.heading}>Jivan Safalya | The Mirror Test</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeading}>Personal Details</Text>
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
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Height</Text>
                        <Text style={styles.boxValue}>173 cm</Text>
                    </View>
                    <View style={styles.boxRow}>
                        <Text style={styles.boxField}>Weight</Text>
                        <Text style={styles.boxValue}>64 kg</Text>
                    </View>

                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeading}>Additional Details</Text>
                <View style={styles.detailsBox}>
                    <Text style={styles.question}>Do you smoke?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Do you drink?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Do you have glasses?</Text>
                    <Text style={styles.answer}>Yes</Text>
                    <Text style={styles.question}>What are some of your hobbies?</Text>
                    <Text style={styles.answer}>Piano, reading books, exploring technology.</Text>
                    <Text style={styles.question}>Do you have any physical conditions?</Text>
                    <Text style={styles.answer}>No</Text>
                    <Text style={styles.question}>Were you diagnosed with any childhood illnesses?</Text>
                    <Text style={styles.answer}>No</Text>
                </View>
            </View>
            <View style={styles.footer} fixed>
                <Text style={styles.footerText}>Jivan Safalya | The Mirror Test</Text>
            </View>
            <View style={styles.details} break>
                <Text style={styles.detailsHeading}>Your Views on Life</Text>
                <Text style={styles.subHeading}>On a scale of 1 (you strongly disagree) to 10 (you strongly agree), answer the following questions.</Text>
                <View style={styles.detailsBox}>
                    <Text style={styles.question}>1. I do what my heart tells me to do.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>2. I believe that love at first sight is the perfect way to get a partner.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>3. I have weaknesses.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>4. I never lie.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>5. I would rather go out than read a book.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>6. I have issues in paying attention or concentrating on things.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>7. I like to sit quietly.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>8. Reading books (other than academics) has played a major role in my life.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>9. I believe everything is fair in love and getting success.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>10. I value relationships more than my self-esteem.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>11. Destiny decides everything, we are merely its tools.</Text>
                    <Text style={styles.answer}>10</Text>
                    <Text style={styles.question}>12. My life will be filled with happiness forever after finding my soulmate.</Text>
                    <Text style={styles.answer}>10</Text>
                </View>
            </View>
            <View style={styles.details} break>
                <Text style={styles.detailsHeading}>Your Test Results</Text>
                <View style={styles.detailsBox}>
                    <Text style={styles.smallHeading}>Part 1: Adverse Childhood Experience (ACE) Score</Text>
                    <Text style={styles.result}>Your Adverse Childhood Experience Score is 0</Text>
                    <Text style={styles.resultDesc}>Your ACE score indicates that you have a secure childhood. People with ACE scores
                        greater than 4 are more likely to commit to drugs and alcohol and have unsuccessful relationships. They are also more prone to committing suicide.</Text>

                    <Text style={styles.smallHeading}>Part 2: Attachment Style</Text>
                    <Text style={styles.result}>Your Attachment Style is Secure</Text>
                    <Text style={styles.resultDesc}>A secure attachment style refers to the ability to form secure, loving relationships with others. A securely attached person can trust others and be trusted, love and accept love, and get close to others with relative ease.</Text>

                    <Text style={styles.smallHeading}>Part 3: Optimism</Text>
                    <Text style={styles.result}>Your optimism score is 5</Text>
                    <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>
                </View>
            </View>
        </Page>
    </Document>
);


export default ResultPDF;