import React from 'react';
import {Link} from 'react-router-dom';
import styles from './HorseMarketplaceItem.module.css'

function HorseMarketplaceItem({horse, handleDeleteHorse}) { 
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeading}>
        <h3 className={styles.panelTitle}>{horse.name}</h3>
        <h3 className={styles.panelSubTitle}>{horse.location}</h3>
      </div>
      <div className={styles.panelDetails}>
        <Link
          className={styles.panelDetailsBtn}
          to={{
            pathname: '/details',
            state: {horse}
          }}
        >
          DETAILS
        </Link>
        <br></br>
        <Link
          className={styles.panelEditBtn}
          to={{
            pathname: '/edit',
            state: {horse}
          }}
        >
          EDIT
        </Link>
        <br></br>
        <button
          className={styles.panelBtn}
          onClick={() => handleDeleteHorse(horse._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default HorseMarketplaceItem;