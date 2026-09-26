import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useLanguage } from "./_layout";

export default function CropManagement() {
  const router = useRouter();
  const { language } = useLanguage();

  const text = {
    English: {
      title: "Crop Management",

      maize: "Maize",
      cropStatus: "Growing • Vegetative Stage",

      growthStage: "Growth Stage",
      vegetativeStage: "Vegetative Stage",
      stageDescription:
        "The crop is actively developing leaves and stems. Maintain proper moisture and nutrient availability.",

      todaysTasks: "Today's Crop Tasks",

      checkIrrigation: "Check irrigation",
      checkIrrigationDesc:
        "Check soil moisture before irrigation.",

      inspectGrowth: "Inspect crop growth",
      inspectGrowthDesc:
        "Look for abnormal leaves or slow growth.",

      checkPests: "Check for pests",
      checkPestsDesc:
        "Inspect leaves and stems for pest activity.",

      recommendation: "Crop Recommendation",
      recommendationTitle: "Maintain healthy growth",
      recommendationText:
        "Monitor soil moisture, remove weeds around the crop and regularly inspect maize leaves for pests or disease symptoms.",
    },

    "हिन्दी": {
      title: "फसल प्रबंधन",

      maize: "मक्का",
      cropStatus: "बढ़ रही है • वानस्पतिक अवस्था",

      growthStage: "विकास अवस्था",
      vegetativeStage: "वानस्पतिक अवस्था",
      stageDescription:
        "फसल में पत्तियों और तनों का सक्रिय विकास हो रहा है। उचित नमी और पोषक तत्वों की उपलब्धता बनाए रखें।",

      todaysTasks: "आज के फसल कार्य",

      checkIrrigation: "सिंचाई की जाँच करें",
      checkIrrigationDesc:
        "सिंचाई से पहले मिट्टी की नमी की जाँच करें।",

      inspectGrowth: "फसल की वृद्धि की जाँच करें",
      inspectGrowthDesc:
        "असामान्य पत्तियों या धीमी वृद्धि की जाँच करें।",

      checkPests: "कीटों की जाँच करें",
      checkPestsDesc:
        "पत्तियों और तनों पर कीटों की गतिविधि की जाँच करें।",

      recommendation: "फसल सुझाव",
      recommendationTitle: "स्वस्थ वृद्धि बनाए रखें",
      recommendationText:
        "मिट्टी की नमी पर नजर रखें, फसल के आसपास की खरपतवार हटाएँ और मक्का की पत्तियों में कीटों या रोग के लक्षणों की नियमित जाँच करें।",
    },

    "मराठी": {
      title: "पीक व्यवस्थापन",

      maize: "मका",
      cropStatus: "वाढ होत आहे • शाकीय अवस्था",

      growthStage: "वाढीची अवस्था",
      vegetativeStage: "शाकीय अवस्था",
      stageDescription:
        "पिकामध्ये पाने आणि खोडांची सक्रिय वाढ होत आहे. योग्य ओलावा आणि पोषक घटकांची उपलब्धता राखा.",

      todaysTasks: "आजची पीक कामे",

      checkIrrigation: "सिंचन तपासा",
      checkIrrigationDesc:
        "सिंचन करण्यापूर्वी मातीतील ओलावा तपासा.",

      inspectGrowth: "पिकाची वाढ तपासा",
      inspectGrowthDesc:
        "असामान्य पाने किंवा कमी वाढ आहे का ते तपासा.",

      checkPests: "किडींची तपासणी करा",
      checkPestsDesc:
        "पाने आणि खोडांवर किडींची लक्षणे तपासा.",

      recommendation: "पीक शिफारस",
      recommendationTitle: "निरोगी वाढ राखा",
      recommendationText:
        "मातीतील ओलाव्यावर लक्ष ठेवा, पिकाभोवतीची तण काढा आणि मका पिकाच्या पानांवर किडी किंवा रोगाची लक्षणे आहेत का याची नियमित तपासणी करा.",
    },
  };

  const currentText = text[language];

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace("/home")}
          style={styles.backButton}
        >
          <Ionicons
            name="chevron-back"
            size={27}
            color="#34783B"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {currentText.title}
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Crop Header */}
        <View style={styles.cropCard}>
          <View style={styles.cropIconBox}>
            <Ionicons
              name="leaf-outline"
              size={34}
              color="#34783B"
            />
          </View>

          <View style={styles.cropInfo}>
            <Text style={styles.cropName}>
              {currentText.maize}
            </Text>

            <Text style={styles.cropStatus}>
              {currentText.cropStatus}
            </Text>
          </View>
        </View>

        {/* Growth Stage */}
        <Text style={styles.sectionTitle}>
          {currentText.growthStage}
        </Text>

        <View style={styles.stageCard}>
          <View style={styles.stageTop}>
            <Text style={styles.stageName}>
              {currentText.vegetativeStage}
            </Text>

            <Text style={styles.stagePercent}>
              55%
            </Text>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.stageDescription}>
            {currentText.stageDescription}
          </Text>
        </View>

        {/* Today's Tasks */}
        <Text style={styles.sectionTitle}>
          {currentText.todaysTasks}
        </Text>

        {/* Irrigation */}
        <View style={styles.taskCard}>
          <View style={styles.taskIcon}>
            <Ionicons
              name="water-outline"
              size={23}
              color="#34783B"
            />
          </View>

          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>
              {currentText.checkIrrigation}
            </Text>

            <Text style={styles.taskDescription}>
              {currentText.checkIrrigationDesc}
            </Text>
          </View>

          <Ionicons
            name="ellipse-outline"
            size={25}
            color="#7B897C"
          />
        </View>

        {/* Crop Growth */}
        <View style={styles.taskCard}>
          <View style={styles.taskIcon}>
            <Ionicons
              name="leaf-outline"
              size={23}
              color="#34783B"
            />
          </View>

          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>
              {currentText.inspectGrowth}
            </Text>

            <Text style={styles.taskDescription}>
              {currentText.inspectGrowthDesc}
            </Text>
          </View>

          <Ionicons
            name="ellipse-outline"
            size={25}
            color="#7B897C"
          />
        </View>

        {/* Pest Check */}
        <View style={styles.taskCard}>
          <View style={styles.taskIcon}>
            <Ionicons
              name="search-outline"
              size={23}
              color="#34783B"
            />
          </View>

          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>
              {currentText.checkPests}
            </Text>

            <Text style={styles.taskDescription}>
              {currentText.checkPestsDesc}
            </Text>
          </View>

          <Ionicons
            name="ellipse-outline"
            size={25}
            color="#7B897C"
          />
        </View>

        {/* Farming Recommendation */}
        <Text style={styles.sectionTitle}>
          {currentText.recommendation}
        </Text>

        <View style={styles.recommendationCard}>
          <View style={styles.recommendationIconBox}>
            <Ionicons
              name="nutrition-outline"
              size={27}
              color="#34783B"
            />
          </View>

          <View style={styles.recommendationContent}>
            <Text style={styles.recommendationTitle}>
              {currentText.recommendationTitle}
            </Text>

            <Text style={styles.recommendationText}>
              {currentText.recommendationText}
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAF5",
  },

  header: {
    height: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E7ECE6",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#245C2A",
  },

  headerSpacer: {
    width: 40,
  },

  content: {
    padding: 20,
  },

  cropCard: {
    backgroundColor: "#DDEFD9",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  cropIconBox: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  cropInfo: {
    marginLeft: 15,
    flex: 1,
  },

  cropName: {
    fontSize: 21,
    fontWeight: "800",
    color: "#245C2A",
  },

  cropStatus: {
    marginTop: 5,
    fontSize: 12,
    color: "#607060",
  },

  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "800",
    color: "#263C29",
  },

  stageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    elevation: 2,
  },

  stageTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  stageName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    color: "#304632",
  },

  stagePercent: {
    fontSize: 14,
    fontWeight: "800",
    color: "#34783B",
  },

  progressBackground: {
    height: 9,
    backgroundColor: "#E5ECE3",
    borderRadius: 10,
    marginTop: 12,
    overflow: "hidden",
  },

  progressFill: {
    width: "55%",
    height: "100%",
    backgroundColor: "#4C944F",
    borderRadius: 10,
  },

  stageDescription: {
    marginTop: 12,
    fontSize: 12,
    lineHeight: 18,
    color: "#788378",
  },

  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 15,
    marginBottom: 11,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
  },

  taskIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#EDF6EA",
    alignItems: "center",
    justifyContent: "center",
  },

  taskContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  taskTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#304632",
  },

  taskDescription: {
    marginTop: 3,
    fontSize: 11,
    lineHeight: 16,
    color: "#788378",
  },

  recommendationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    flexDirection: "row",
    elevation: 1,
  },

  recommendationIconBox: {
    width: 47,
    height: 47,
    borderRadius: 14,
    backgroundColor: "#EDF6EA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  recommendationContent: {
    flex: 1,
  },

  recommendationTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#304632",
  },

  recommendationText: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: "#788378",
  },

  bottomSpace: {
    height: 30,
  },
});
