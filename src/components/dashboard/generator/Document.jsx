import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  text: { fontSize: 18 },
  img: { width: 200, height: 200 },
});

export const MyDocument = ({ subject, summary, images }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.text}>{subject}</Text>
      <Text style={styles.text}>{summary}</Text>
      {images.length > 0 &&
        images.map((image) => <Image src={image.base64} style={styles.img} />)}
    </Page>
  </Document>
);
