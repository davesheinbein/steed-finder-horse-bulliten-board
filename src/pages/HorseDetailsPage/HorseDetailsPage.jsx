import React from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import { Link } from 'react-router-dom';
import styles from './HorseDetailsPage.module.css'

function HorseDetailPage(props) {
    // Refer to PuppyListItem to see how puppy is being passed via the <Link>
    const horse = props.location.state.horse;
    return (
        <>
            <div className={styles.detailsTitle}>Horse Details</div>
            <div>
                <HorseCard
                    handleDeleteHorse={props.handleDeleteHorse}
                    key={horse._id}
                    horse={horse}
                />
            </div>
        </>
    );
}

export default HorseDetailPage;