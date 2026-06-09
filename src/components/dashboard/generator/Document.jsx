import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 50 },
  heading: { fontSize: 28, fontWeight: 'bold', paddingBottom: 15 },
  date: {fontSize: 28, fontWeight: 'normal'},
  summary: {paddingBottom: 25},
  img: { width: 150, height: 150 },
  imgContainer: { display: 'flex', flexDirection: 'row', columnGap: 10 }
});

const date = new Date().toLocaleDateString("en-GB");

export const MyDocument = ({ subject, summary, images }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>
        {subject} - <Text style={styles.date}>{date}</Text>
      </Text>
      <Text style={styles.summary}>{summary}</Text>
      <View style={styles.imgContainer}>
        {images.length > 0 &&
          images.map((image) => (
            <Image src={image.base64} style={styles.img} />
          ))}
      </View>
    </Page>
  </Document> 
);
