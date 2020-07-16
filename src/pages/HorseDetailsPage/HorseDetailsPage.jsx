import React from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';
import {Link} from 'react-router-dom';

function HorseDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  const horse = props.location.state.horse;
  return (
    <>
      <h1>Horse Details</h1>
      <HorseCard
        key={horse._id}
        horse={horse}
      />
       <Link
          className='panelEditBtn'
          to={{
            pathname: '/edit',
            state: {horse}
          }}
        >
          EDIT
        </Link>
        <br></br>
        <button
          className='panelBtn'
        //   onClick={() => handleDeleteHorse(horse._id)}
        >
          DELETE
        </button>
    </>
  );
}

export default HorseDetailPage;