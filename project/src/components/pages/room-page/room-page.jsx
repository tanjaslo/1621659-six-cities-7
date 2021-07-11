import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../../prop-types/offer.prop';
import reviewProp from '../../../prop-types/review.prop';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import Property from '../../property/property';
import {fetchRoom, fetchReviews, fetchOffersNearby} from '../../../store/api-actions';

function RoomPage({room, reviews, offersNearby, loadRoomData, isRoomDataLoaded}) {
  const {id} = useParams();

  useEffect(() => {
    loadRoomData(id);
  }, [id, isRoomDataLoaded, loadRoomData]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property
          room={room}
          reviews={reviews}
          offersNearby={offersNearby}
        />
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  room: offerProp,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  loadRoomData: PropTypes.func.isRequired,
  isRoomDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
  offersNearby: state.offersNearby,
  reviews: state.reviews,
  isRoomDataLoaded: state.isRoomDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadRoomData(id) {
    dispatch(fetchRoom(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchReviews(id));
  },
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
