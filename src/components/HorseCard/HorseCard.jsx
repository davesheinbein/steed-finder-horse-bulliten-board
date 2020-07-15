import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HorseCard.module.css'

function HorseCard({ horse }) {
    return (
        <div className={styles.horseCard}>
            <div className={styles.panel}>
                <div className={styles.panelHeading}>
                    <h3 className={styles.panelTitle}>{horse.name}</h3>
                    <div>{horse.image}</div>
                </div>
                <div className={styles.panelBody}>
                    <dl>
                        <dt>Name: </dt>
                        <dd>{horse.name}</dd>
                        <dt>Age: </dt>
                        <dd>{horse.age}</dd>
                        <dt>Breed: </dt>
                        <dd>{horse.breed}</dd>
                        <dt>Price: </dt>
                        <dd>{horse.price}</dd>
                        <dt>Location: </dt>
                        <dd>{horse.location}</dd>
                        <dt>Contact #: </dt>
                        <dd>{horse.location}</dd>
                    </dl>
                </div>
                <div>
                    <p>{horse.comments}</p>
                </div>
                <div className={styles.panelFooter}>
                    <Link to='/marketplace'>RETURN TO LIST</Link>
                </div>
            </div>
        </div>
    )
}
export default HorseCard;