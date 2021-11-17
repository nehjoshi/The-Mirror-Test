import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import font from '../fonts/Lato-Regular.ttf';
import fontBlack from '../fonts/Lato-Black.ttf';
import fontItalic from '../fonts/Lato-Italic.ttf';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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

const ResultPDF = () => {
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const history = useHistory();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios.get(`https://self-growth-questionaire.herokuapp.com/fetch-result?email=${localStorage.getItem("email")}`, {
            headers: {
                "x-access-token": token,
            },
        })
            .then((res) => {
                if (res.data.auth === true) {
                    setData(res.data.completeData)
                    console.log(res.data.completeData);
                    setLoading(false);
                } else {
                    history.push("/");
                }
            })
            .catch((e) => {

            });

    }, [history]);
    return loading ? null : 
    (
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
                            <Text style={styles.boxValue}>{data.userDetails.name}</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxField}>{data.userDetails.nationality}</Text>
                            <Text style={styles.boxValue}>British</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxField}>{data.userDetails.religion}</Text>
                            <Text style={styles.boxValue}>Hindu</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxField}>Date of Birth</Text>
                            <Text style={styles.boxValue}>{data.userDetails.dob.substring(0,10).split("-").reverse().join("-")}</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxField}>Height</Text>
                            <Text style={styles.boxValue}>{data.userDetails.height} cm</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxField}>Weight</Text>
                            <Text style={styles.boxValue}>{data.userDetails.weight} kg</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsHeading}>Additional Details</Text>
                    <View style={styles.detailsBox}>
                        <Text style={styles.question}>Do you smoke?</Text>
                        <Text style={styles.answer}>{data.userDetails.smoke}</Text>
                        <Text style={styles.question}>Do you drink?</Text>
                        <Text style={styles.answer}>{data.userDetails.drink}</Text>
                        <Text style={styles.question}>Do you have glasses?</Text>
                        <Text style={styles.answer}>{data.userDetails.glasses}</Text>
                        <Text style={styles.question}>What are some of your hobbies?</Text>
                        <Text style={styles.answer}>{data.userDetails.hobbies}</Text>
                        <Text style={styles.question}>Do you have any physical conditions?</Text>
                        {!data.userDetails.physicalConditions ? <Text style={styles.answer}>No</Text>
                        : <Text style={styles.answer}>{data.userDetails.physicalConditions}</Text>}
                        <Text style={styles.question}>Were you diagnosed with any childhood illnesses?</Text>
                        {!data.userDetails.childhoodIllnesses ? <Text style={styles.answer}>No</Text>
                        : <Text style={styles.answer}>{data.userDetails.childhoodIllnesses}</Text>}
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
                        <Text style={styles.answer}>{data.reg2.q1}</Text>
                        <Text style={styles.question}>2. I believe that love at first sight is the perfect way to get a partner.</Text>
                        <Text style={styles.answer}>{data.reg2.q2}</Text>
                        <Text style={styles.question}>3. I have weaknesses.</Text>
                        <Text style={styles.answer}>{data.reg2.q3}</Text>
                        <Text style={styles.question}>4. I never lie.</Text>
                        <Text style={styles.answer}>{data.reg2.q4}</Text>
                        <Text style={styles.question}>5. I would rather go out than read a book.</Text>
                        <Text style={styles.answer}>{data.reg2.q5}</Text>
                        <Text style={styles.question}>6. I have issues in paying attention or concentrating on things.</Text>
                        <Text style={styles.answer}>{data.reg2.q6}</Text>
                        <Text style={styles.question}>7. I like to sit quietly.</Text>
                        <Text style={styles.answer}>{data.reg2.q7}</Text>
                        <Text style={styles.question}>8. Reading books (other than academics) has played a major role in my life.</Text>
                        <Text style={styles.answer}>{data.reg2.q8}</Text>
                        <Text style={styles.question}>9. I believe everything is fair in love and getting success.</Text>
                        <Text style={styles.answer}>{data.reg2.q9}</Text>
                        <Text style={styles.question}>10. I value relationships more than my self-esteem.</Text>
                        <Text style={styles.answer}>{data.reg2.q10}</Text>
                        <Text style={styles.question}>11. Destiny decides everything, we are merely its tools.</Text>
                        <Text style={styles.answer}>{data.reg2.q11}</Text>
                        <Text style={styles.question}>12. My life will be filled with happiness forever after finding my soulmate.</Text>
                        <Text style={styles.answer}>{data.reg2.q12}</Text>
                    </View>
                </View>
                <View style={styles.details} break>
                    <Text style={styles.detailsHeading}>Your Test Results</Text>
                    <View style={styles.detailsBox}>
                        <Text style={styles.smallHeading}>Part 1: Adverse Childhood Experience (ACE) Score</Text>
                        <Text style={styles.result}>Your Adverse Childhood Experience Score is {data.result.quiz1.result}</Text>
                        <Text style={styles.resultDesc}>{data.result.quiz1.resultDesc}</Text>

                        <Text style={styles.smallHeading}>Part 2: Attachment Style</Text>
                        <Text style={styles.result}>Your Attachment Style is {data.result.quiz2.result}</Text>
                        <Text style={styles.resultDesc}>{data.result.quiz2.resultDesc}</Text>

                        <Text style={styles.smallHeading}>Part 3: Optimism</Text>
                        <Text style={styles.result}>Your optimism score is {data.result.quiz3.optScore}</Text>
                        <Text style={styles.resultDesc}>{data.result.quiz3.optDesc}</Text>

                        <Text style={styles.result}>Your hope score is {data.result.quiz3.hopeScore}</Text>
                        <Text style={styles.resultDesc}>{data.result.quiz3.hopeDesc}</Text>

                        <Text style={styles.result}>Your self-esteem score is {data.result.quiz3.esteemScore}</Text>
                        <Text style={styles.resultDesc}>{data.result.quiz3.esteemDesc}</Text>

                        <Text style={[styles.smallHeading, { marginTop: 20 }]} break >Part 4: Big Five Personality Test</Text>
                        <Text style={styles.result}>Your extraversion score is 5</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>

                        <Text style={styles.result}>Your agreeableness score is 5</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>

                        <Text style={styles.result}>Your conscientiousness score is 5</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>

                        <Text style={styles.result}>Your neuroticism score is 5</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>

                        <Text style={styles.result}>Your openess score is 5</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>

                        <Text style={[styles.smallHeading, { marginTop: 20 }]} break >Part 5: PERMA Profiler Test</Text>
                        <Text style={styles.result}>Your PERMA score is 11.23</Text>
                        <Text style={styles.resultDesc}>Your optimism score shows that you are mildly optimistic. In most situations throughout life, you are able to stay hopeful and calm. Although tough or intense circumstances may temporarily disorient you from your level optimism, nevertheless, you remain rested and hopeful. </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
export default ResultPDF;