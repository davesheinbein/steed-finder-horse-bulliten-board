import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HorseCard.module.css'

function HorseCard({ horse, handleDeleteHorse }) {
    return (
        <div className={styles.horseCard}>
            <div className={styles.panel}>
                <div className={styles.panelHeading}>
                    <div className={styles.panelTitle}>{horse.name}</div>
                    <div>{horse.image}</div>
                </div>
                <div className={styles.panelBody}>
                    <dl>
                        <div className={styles.reAlign}>
                            <dt>Name: </dt>
                            <dd>{horse.name}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt>Age: </dt>
                            <dd>{horse.age}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt>Breed: </dt>
                            <dd>{horse.breed}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt>Price: </dt>
                            <dd>${horse.price}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt>Location: </dt>
                            <dd>{horse.location}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt>Contact #: </dt>
                            <dd>{horse.location}</dd>
                        </div>
                    </dl>
                </div>
                <div className={styles.panelFooter}>
                    <Link
                        className={styles.panelEditBtn}
                        to={{
                            pathname: '/edit',
                            state: { horse }
                        }}
                    >
                        EDIT
                    </Link>
                    <Link
                        to='/marketplace'
                        className={styles.panelReturnBtn}
                    >
                        RETURN TO LIST
                    </Link>
                    <button
                        className={styles.panelDeleteBtn}
                        onClick={() => handleDeleteHorse(horse._id)} //breaks code need to figure out how to make sure props is being passed.
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HorseCard;