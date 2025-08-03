import {
  StyleSheet,
  Text,
  View,
  Document,
  Page,
  Link,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
    borderBottom: 2,
    borderBottomColor: "#2563eb",
    paddingBottom: 10,
  },

  socialIcon: {
    width: 12,
    height: 12,
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  socialText: {
    fontSize: 9,
    color: "#2563eb",
    textDecoration: "underline",
  },
  separator: {
    color: "#9ca3af",
    fontSize: 10,
  },
  education: {
    textAlign: "center",
    marginTop: 8,
  },
  educationText: {
    fontSize: 10,
    color: "#374151",
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1e40af",
  },
  title: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#2563eb",
    gap: 20,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 8,
    marginBottom: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1e40af",
    textTransform: "uppercase",
    borderBottom: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 3,
  },
  aboutText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#374151",
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontSize: 10,
    backgroundColor: "#f3f4f6",
    padding: 5,
    margin: 2,
    borderRadius: 3,
    color: "#374151",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  educationTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
  },
  educationDate: {
    fontSize: 10,
    color: "#6b7280",
  },
  educationDetails: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 2,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937",
  },
  jobDate: {
    fontSize: 10,
    color: "#6b7280",
  },
  companyOverview: {
    fontSize: 9,
    color: "#4b5563",
    marginBottom: 8,
    textAlign: "justify",
    lineHeight: 1.4,
  },
  contributionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 3,
    paddingLeft: 10,
    lineHeight: 1.4,
  },
  bulletHeader: {
    fontWeight: "bold",
    color: "#1f2937",
  },
  contactInfoLink: {
    fontSize: 9,
    marginBottom: 3,
    color: "#0066cc",
    textDecoration: "none",
  },
});

// Icon components using external PNG URLs
const GitHubIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/14063/14063266.png"
  />
);

const LinkedInIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
  />
);

const PortfolioIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/4154/4154427.png"
  />
);

const EmailIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
  />
);

const PhoneIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
  />
);

const LocationIcon = () => (
  <Image
    style={styles.socialIcon}
    src="https://cdn-icons-png.flaticon.com/128/149/149060.png"
  />
);

// Resume Document Component
const ResumeDocument = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>VASANTH</Text>
          <Text style={styles.title}>FRONTEND DEVELOPER</Text>

          {/* Contact Information */}
          <View style={styles.contactInfo}>
            <View style={styles.socialItem}>
              <Link
                style={styles.socialItem}
                src="mailto:jobsearch.vasanth@gmail.com"
              >
                <EmailIcon />
                <Text style={styles.socialText}>jobsearch.vasanth@gmail.com</Text>
              </Link>
            </View>
            <Text style={styles.separator}>•</Text>

            <View style={styles.socialItem}>
              <PhoneIcon />
              <Text>+91 8838840719</Text>
            </View>
            <Text style={styles.separator}>•</Text>

            <View style={styles.socialItem}>
              <LocationIcon />
              <Text>Coimbatore, India</Text>
            </View>
          </View>

          {/* Social Links */}
          <View style={styles.socialLinks}>
            <Link
              style={styles.socialItem}
              src="https://github.com/vasanth2929"
            >
              <GitHubIcon />
              <Text style={styles.socialText}>github.com/vasanth2929</Text>
            </Link>

            <Text style={styles.separator}>•</Text>

            <Link
              style={styles.socialItem}
              src="https://www.linkedin.com/in/vasanth-t-8b9188140/"
            >
              <LinkedInIcon />
              <Text style={styles.socialText}>
                linkedin.com/in/vasanth-t-8b9188140/
              </Text>
            </Link>

            <Text style={styles.separator}>•</Text>

            <Link
              style={styles.socialItem}
              src="https://portfolio-gules-eight-a9zheughkf.vercel.app/"
            >
              <PortfolioIcon />
              <Text style={styles.socialText}>portfolio</Text>
            </Link>
          </View>

          {/* Education */}
          <View style={styles.education}>
            <Text style={styles.educationText}>
              Karunya University • B.Sc. Information Technology • 2016 - 2019
            </Text>
          </View>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            Experienced software developer with 5 years of professional
            experience specializing in creating and improving user-centric web
            applications. Proficient in optimizing performance through technical
            expertise, analytical thinking, and problem-solving skills. While I
            know basic backend development, I have worked mostly on frontend
            technologies and frameworks. Committed to delivering innovative
            solutions that satisfy clients and end-users. Passionate about
            staying up-to-date with industry trends and technologies to enhance
            development processes.
          </Text>
        </View>

        {/* Software Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Software Skills</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>HTML5</Text>
            <Text style={styles.skill}>CSS</Text>
            <Text style={styles.skill}>JavaScript</Text>
            <Text style={styles.skill}>Typescript</Text>
            <Text style={styles.skill}>React JS</Text>
            <Text style={styles.skill}>Storybook</Text>
            <Text style={styles.skill}>Node JS</Text>
            <Text style={styles.skill}>Nest JS</Text>
            <Text style={styles.skill}>Cypress</Text>
          </View>
        </View>

        {/* Job Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Experience</Text>

          {/* Tribyl Inc */}
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}>
              Tribyl Inc - Front End Developer
            </Text>
            <Text style={styles.jobDate}>Remote • 03/2022 - 06/2025</Text>
          </View>

          <Text style={styles.companyOverview}>
            Company Overview: Tribyl is a Go-To-Market (GTM) intelligence
            platform that helps B2B revenue teams drive growth using buyer
            insights. It delivers AI-powered analytics and visual storytelling
            around buyer behavior, enabling sales, marketing, and product teams
            to align strategy with real-time customer data. By organizing
            fragmented CRM and call data into actionable insights, Tribyl
            empowers CMOs and GTM leaders to improve pipeline performance and
            revenue outcomes.
          </Text>

          <Text style={styles.contributionTitle}>Key Contributions:</Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Built Data-Driven Dashboards:
            </Text>{" "}
            Developed responsive, modular UI components to visualize key metrics
            like sales stage progression, persona engagement, and opportunity
            win/loss trends using dynamic charts and tables.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Integrated AI & Analytics Features:
            </Text>{" "}
            Collaborated with backend and ML teams to surface AI-driven win/loss
            analysis and buyer insights in the frontend—transforming raw data
            into actionable, user-friendly visualizations.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Developed Chrome Extension for Sales Insights:
            </Text>{" "}
            Created a lightweight Chrome Extension that allowed GTM teams to
            access contextual buyer intelligence directly within their CRM tools
            and sales platforms.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Built Slack App for Real-Time Notifications:
            </Text>{" "}
            Engineered a Slack integration that delivered key pipeline and buyer
            insight notifications to sales and marketing teams—enhancing
            collaboration and responsiveness.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Enhanced UX for GTM Tools:
            </Text>{" "}
            Optimized user flows and interfaces across dashboards and embedded
            tools, improving usability, responsiveness, and feature adoption.
          </Text>

          {/* Kodepi Lab */}
          <View style={[styles.jobHeader, { marginTop: 15 }]}>
            <Text style={styles.jobTitle}>Kodepi Lab - Frontend Developer</Text>
            <Text style={styles.jobDate}>01/2021 - 02/2022</Text>
          </View>

          <Text style={styles.companyOverview}>
            Company Overview: Kodepi Lab (previously known as Techardors Global)
            focused on delivering software solutions for business clients and
            internal studio products. The flagship project during my tenure was
            Repolens, a data-driven analytics platform designed for project
            managers.
          </Text>

          <Text style={styles.contributionTitle}>Key Contributions:</Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Repolens - Analytics Dashboard Development:
            </Text>{" "}
            Worked on Repolens, a data-driven analytics software that provided
            meaningful visualizations and actionable insights through
            interactive charts and tabulated data.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>
              • Frontend Implementation for Business Clients:
            </Text>{" "}
            Designed and developed several responsive web pages for both
            external clients and internal product initiatives, focusing on clean
            design and consistent UX.
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={styles.bulletHeader}>• Cross-Team Collaboration:</Text>{" "}
            Partnered with designers and backend developers to implement
            scalable frontend architecture, ensuring smooth integration with
            APIs and backend logic.
          </Text>
        </View>

        {/* Education */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationHeader}>
            <Text style={styles.educationTitle}>Karunya University</Text>
            <Text style={styles.educationDate}>01/2016 - 01/2019</Text>
          </View>
          <Text style={styles.educationDetails}>
            Bachelor's Degree: Information Technology
          </Text>
          <Text style={styles.educationDetails}>GPA: 7.64</Text>
        </View> */}
      </Page>
    </Document>
  </PDFViewer>
);

export default ResumeDocument;
