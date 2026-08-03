import styles from "./Services.module.css";

const ServicesData = [
  { id: "01", title: "Frontend / Web Development", description: "Building responsive and modern web applications." },
  { id: "02", title: "Business-Focused Web Solutions", description: "Building websites that align with business goals, sales, and user needs." },
  { id: "03", title: "Customer Support & Account Handling", description: "Providing professional support and managing sales with clear communication." },
  { id: "04", title: "Sales & Lead Management", description: "Managing and converting leads through organized follow-up." },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>

        {/* Section Title */}
        <h2 className={styles.sectionTitle}>What I Can Do For You</h2>
        <p className={styles.sectionSubtitle}>
          I help brands and startups build a modern digital presence with clean UI, smooth UX and optimized performance.
        </p>

        {/* Cards */}
        <div className={styles.servicesGrid}>
          {ServicesData.map((service, i) => (
            <div
              key={i}
              className={styles.serviceCard}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.serviceId}>{service.id}</h3>

                <div className={styles.serviceIcon}>
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>

              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.description}</p>

              <div className={styles.cardLine}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
