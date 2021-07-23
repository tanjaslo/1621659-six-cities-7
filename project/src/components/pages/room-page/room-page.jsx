import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../header/header';
import Property from '../../property/property';
import LoadingScreen from '../../loading-screen/loading-screen';
import {fetchOffer, fetchReviews, fetchOffersNearby} from '../../../store/api-actions';
import {getOffersNearby, getCurrentOffer, getOfferLoadingStatus} from '../../../store/data/selectors';

function RoomPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const id = Number(params.id);
  const currentOffer = useSelector(getCurrentOffer);
  const offersNearby = useSelector(getOffersNearby);
  const isOfferDataLoaded = useSelector(getOfferLoadingStatus);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchOffersNearby(id));
  }, [id, dispatch]);

  if (!isOfferDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <Property
          offer={currentOffer}
          offersNearby={offersNearby}
        />
      </main>
    </div>
  );
}

export default RoomPage;
