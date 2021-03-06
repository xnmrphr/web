import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Container from '../../components/Container/Container';
import { fetchDevicesList } from '../../store/actions/nativeData';
import { selectMatchedDevices } from '../../store/selectors/nativeData';
import './MatchedDevices.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const MatchedDevices = () => {
  const dispatch = useDispatch();
  const matchedDevices = useSelector(selectMatchedDevices);

  useEffect(() => {
    dispatch(fetchDevicesList());
  }, [dispatch]);

  const renderEmptyState = () => (
    <div className="matched-devices__empty">List urządzeń jest pusta</div>
  );

  const renderMatchedDevicesList = () => (
    <ul className="matched-devices__list">
      {matchedDevices.map(({ name, timestamp, duration, status }) => (
        <li key={name} className="matched-devices__list-item">
          <b>{name}</b>
          {moment(timestamp).format('YYYY-MM-DD HH:mm')}
          <br />
          {Math.floor(moment.duration(duration, 'seconds').asMinutes())}{' '}
          minut(y)
          <br />
          {status === 1 ? <div className="matched-devices__active" /> : ''}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="view matched-devices">
      <Header />
      <Container className="matched-devices__container">
        <h4 className="h1 text-center medium">Spotkane urządzenia</h4>
        <div className="content">
          {matchedDevices.length
            ? renderMatchedDevicesList()
            : renderEmptyState()}
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default MatchedDevices;
