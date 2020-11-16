import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Highlight from '../components/Highlight';
import Loading from '../components/Loading';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const ProfileComponent = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [UserMetadata, setUserMetadata] = useState();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-7geibe2q.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        console.log(user_metadata);
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log('error');
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    <Container className='mb-5'>
      <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
        <Col md={2}>
          <img
            src={user.picture}
            alt='Profile'
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className='lead text-muted'>{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
