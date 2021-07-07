import React from 'react';
import Account from './Account';
import BrandingConfig from './BrandingConfig';

const Content = ({
  contentType,
  submit,
  brandingConfig,
  updateBrandingConfig,
  isSaving,
  success,
  error,
  userProfile,
  customBrandingLoadError,
  userProfileLoadError,
  updateUserProfile
}) => {
  const getContent = (contentType) => {
    switch (contentType) {
      case 'branding-config':
        return (
          <BrandingConfig
            brandingConfig={brandingConfig}
            updateBrandingConfig={updateBrandingConfig}
            submit={submit}
            isSaving={isSaving}
            success={success}
            error={error}
            loadError={customBrandingLoadError}
          />
        );
      default:
        return (
          <Account
            userProfile={userProfile}
            updateUserProfile={updateUserProfile}
            submit={submit}
            isSaving={isSaving}
            success={success}
            error={error}
            loadError={userProfileLoadError}
          />
        );
    }
  };

  return getContent(contentType);
};

export default Content;
