import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'reactstrap';
import timeZones from '../../assets/timeZones.json';
import SaveIndicator from '../../components/SaveIndicator';
import LaddaButton, { CONTRACT } from '@zumper/react-ladda';

const Account = ({ userProfile, submit, updateUserProfile, isSaving, success, error, loadError }) => {
  const sortedTimeZones = timeZones.sort();

  const [invalidEmail, setInvalidEmail] = useState(false);

  const { username, email, firstName, lastName, timezone } = userProfile;

  const handleOnChange = (name, value) => {
    const updatedUserProfile = userProfile;
    updatedUserProfile[name] = value;
    updateUserProfile(updatedUserProfile);
  };

  const handleOnEmailChange = (name, value) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    setInvalidEmail(!emailRegex.test(value));
    handleOnChange(name, value);
  };

  if (loadError)
    return (
      <div className='mr-3 w-100'>
        <Row className='my-5 ml-4'>
          <Col>
            <div className='h-100 d-flex align-items-center justify-content-center'>
              User profile could not be loaded at this time.
            </div>
          </Col>
        </Row>
      </div>
    );

  return (
    <div className='mr-3 w-100'>
      <Row>
        <Col className='font-weight-bold my-3 ml-3 secondary-header'>User Profile</Col>
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Username
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='username'
            placeholder=''
            value={username || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            First Name
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='firstName'
            placeholder=''
            value={firstName || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Last Name
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='lastName'
            placeholder=''
            value={lastName || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Email
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='email'
            name='email'
            placeholder=''
            value={email || ''}
            invalid={invalidEmail}
            onChange={(e) => handleOnEmailChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Time Zone
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='select'
            name='timezone'
            value={timezone || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          >
            <option value=''>Select</option>
            {sortedTimeZones.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </Input>
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col className='text-center'>
          <LaddaButton
            className='btn btn-primary'
            style={CONTRACT}
            loading={isSaving}
            onClick={() => submit('account')}
            spinnerColor='#fff'
            spinnerLines={12}
          >
            Save
          </LaddaButton>
          <SaveIndicator success={success} error={error} />
        </Col>
      </Row>
    </div>
  );
};

Account.propTypes = {
  userProfile: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  updateUserProfile: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
  success: PropTypes.bool,
  loadError: PropTypes.bool,
  error: PropTypes.bool
};

export default Account;
