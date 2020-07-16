import React from 'react';
import {Link} from 'react-router-dom';
import styles from './HorseMarketplaceItem.module.css'

function HorseMarketplaceItem({horse, handleDeleteHorse}) { 
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeading}>
        <div className={styles.panelTitle}>{horse.name}</div>
        <div className={styles.panelSubTitle}>{horse.location}</div>
      </div>
      <div className={styles.actionBtns}>
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
        </div>
        <Link
          className={styles.panelEditBtn}
          to={{
            pathname: '/edit',
            state: {horse}
          }}
        >
          EDIT
        </Link>
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