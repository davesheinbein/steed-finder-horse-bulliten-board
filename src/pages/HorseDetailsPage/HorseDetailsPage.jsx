import React from 'react';
import HorseCard from '../../components/HorseCard/HorseCard';

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
    </>
  );
}

export default HorseDetailPage;