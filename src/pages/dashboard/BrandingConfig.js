import React from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'reactstrap';
import SaveIndicator from '../../components/SaveIndicator';
import LaddaButton, { CONTRACT } from '@zumper/react-ladda';

const BrandingConfig = ({ brandingConfig, submit, updateBrandingConfig, isSaving, success, error, loadError }) => {
  const { businessName, description, primaryColor, logoUrl } = brandingConfig;

  const handleOnChange = (name, value) => {
    const updatedBranding = brandingConfig;
    updatedBranding[name] = value;
    updateBrandingConfig(updatedBranding);
  };

  if (loadError)
    return (
      <div className='mr-3 w-100'>
        <Row className='my-5 ml-4'>
          <Col>
            <div className='h-100 d-flex align-items-center justify-content-center'>
              Brand settings could not be loaded at this time.
            </div>
          </Col>
        </Row>
      </div>
    );

  return (
    <div className='mr-3 w-100'>
      <Row>
        <Col className='font-weight-bold my-3 ml-3 secondary-header'>Custom Branding Configuration</Col>
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Business Name
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='businessName'
            placeholder=''
            value={businessName || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Description
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='description'
            placeholder=''
            value={description || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Color
          </div>
        </Col>
        <Col xs={12} md={3} className='mb-3 ml-2'>
          <Input
            type='color'
            name='primaryColor'
            placeholder=''
            value={primaryColor || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </Col>
        <Col xs={0} md={1} />
      </Row>
      <Row>
        <Col xs={12} md={3} className='text-right mb-3 ml-2'>
          <div className='font-weight-bold h-100 d-flex align-items-center justify-content-xs-start justify-content-md-end'>
            Logo URL
          </div>
        </Col>
        <Col xs={12} md={8} className='mb-3 ml-2'>
          <Input
            type='text'
            name='logoUrl'
            placeholder=''
            value={logoUrl || ''}
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
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

BrandingConfig.propTypes = {
  brandingConfig: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  updateBrandingConfig: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
  success: PropTypes.bool,
  loadError: PropTypes.bool,
  error: PropTypes.bool
};

export default BrandingConfig;
