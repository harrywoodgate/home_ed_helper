import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 20},
    text: {fontSize: 18}
})

export const MyDocument = ({ input }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.text}>{input}</Text>
        </Page>
    </Document> 
)