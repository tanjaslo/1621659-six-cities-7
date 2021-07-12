import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import Property from '../../property/property';
import {fetchRoom, fetchReviews, fetchOffersNearby} from '../../../store/api-actions';
import {getOffersNearby, getReviews, getRoom, getRoomLoadStatus} from '../../../store/data/selectors';

function RoomPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const id = +params.id;
  const room = useSelector(getRoom);
  const reviews = useSelector(getReviews);
  const offersNearby = useSelector(getOffersNearby);
  const isRoomDataLoaded = useSelector(getRoomLoadStatus);

  useEffect(() => {
    dispatch(fetchRoom(id));
    dispatch(fetchReviews(id));
    dispatch(fetchOffersNearby(id));
  }, [id, dispatch]);

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

export default RoomPage;
