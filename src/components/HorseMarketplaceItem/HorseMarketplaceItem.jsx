import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HorseMarketplaceItem.module.css'

function HorseMarketplaceItem({ horse, handleDeleteHorse, user }) {
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
              state: { horse }
            }}
          >
            DETAILS
          </Link>
        </div>
        {
          horse.user === user._id ?
            <Link
              className={styles.panelEditBtn}
              to={{
                pathname: '/edit',
                state: { horse }
              }}
            >
              EDIT
            </Link> : null
        }
        {
          horse.user === user._id ?
            <button
              className={styles.panelDeleteBtn}
              onClick={() => handleDeleteHorse(horse._id)}
            >
              DELETE
          </button> : null
        }
      </div>
    </div>
  );
}

export default HorseMarketplaceItem;