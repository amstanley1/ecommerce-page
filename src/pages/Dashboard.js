import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import Content from './dashboard/Content';
import PageLoader from '../components/PageLoader';

import TEST_USER_PROFILE from '../assets/sampleFiles/userProfile';
import TEST_BRANDING_CONFIG from '../assets/sampleFiles/brandingConfig';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarIsOpen] = useState(true);
  const [active, setActive] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [brandingConfig, setBrandingConfig] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [userProfileLoadError, setUserProfileLoadError] = useState(false);
  const [brandingConfigLoadError, setBrandingConfigLoadError] = useState(false);

  const setContentType = (type) => {
    if (type !== active) {
      setSubmitError(false);
      setSuccess(false);
    }
    setActive(type);
  };

  const updateUserProfile = (updatedUserProfile) => {
    setUserProfile({ ...userProfile, ...updatedUserProfile });
  };

  const updateBrandingConfig = (updatedBrandingConfig) => {
    setUserProfile({ ...brandingConfig, ...updatedBrandingConfig });
  };

  const getPayload = (payloadType) => {
    return payloadType === 'user-profile' ? userProfile : brandingConfig;
  };

  const submit = (submissionType) => {
    setIsSaving(true);
    Promise.resolve(getPayload(submissionType))
      .then((resp) => {
        setIsSaving(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
      })
      .catch((e) => {
        setIsSaving(false);
        setSubmitError(true);
        setTimeout(() => {
          setSubmitError(false);
        }, 7000);
      });
  };

  useEffect(() => {
    async function fetchBrandingConfig() {
      await Promise.resolve(TEST_BRANDING_CONFIG)
        .then((data) => {
          setBrandingConfig(data);
        })
        .catch((err) => {
          setBrandingConfigLoadError(true);
        });
    }

    async function fetchUserProfile() {
      await Promise.resolve(TEST_USER_PROFILE)
        .then((data) => {
          setUserProfile(data);
        })
        .catch((err) => {
          setUserProfileLoadError(true);
        });
    }

    fetchUserProfile();
    fetchBrandingConfig();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className='dashboard-wrapper'>
      <SideBar isOpen={sidebarIsOpen} setContentType={setContentType} />
      <Content
        sidebarIsOpen={sidebarIsOpen}
        contentType={active}
        submit={submit}
        updateUserProfile={updateUserProfile}
        updateBrandingConfig={updateBrandingConfig}
        isSaving={isSaving}
        userProfile={userProfile}
        brandingConfig={brandingConfig}
        success={success}
        error={submitError}
        userProfileLoadError={userProfileLoadError}
        brandingConfigLoadError={brandingConfigLoadError}
      />
    </div>
  );
};

export default Dashboard;
