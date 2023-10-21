import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Button,
  Billing,
  CTA,
  Carddeal,
  Clients,
  Feedback,
  Footer,
  Getstartted,
  Testimonials,
  Stats,
} from "./components/index.js";
const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero/>
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         

        </div>
      </div>
    </div>
  );
};

export default App;
