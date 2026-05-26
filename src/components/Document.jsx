import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 20},
    text: {fontSize: 18},
    img: {width: 200, height: 200},
})

export const MyDocument = ({ input, images }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.text}>{input}</Text>
            {images.length > 0 && images.map((image) =>
                <Image src={image.base64} style={styles.img}/>)}
        </Page>
    </Document> 
)