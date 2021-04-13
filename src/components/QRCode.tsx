import React, { useState, FunctionComponent } from 'react';

import LinkButton from 'components/LinkButton';
import Spinner from 'components/Spinner';
import Branding from 'components/Branding';

import './QRCode.css';

interface Props {
  qrCode: string;
  holderAppName: string;
}

/**
 * Component responsible for rendering a QR code
 */
const QRCode: FunctionComponent<Props> = ({ qrCode, holderAppName }) => {
  const [showNeedHelp, setShowNeedHelp] = useState(false);

  const handleLinkButtonClick = (): void => {
    setShowNeedHelp(!showNeedHelp);
  };

  const renderQrCode = () => (
    <div className="image-wrapper">
      <img className="qr-code-img" alt="qr code" src={qrCode} />
      <Branding />
    </div>
  );

  return (
    <div className="qr-code">
      <div className="bold">To continue, scan this QR code</div>
      <div className="light">with your phone camera or {holderAppName} app:</div>
      <LinkButton onClick={handleLinkButtonClick}>Need help scanning?</LinkButton>
      {
          showNeedHelp && (
          <div className="help">
            <div className="help-item">1. Install the {holderAppName} app from the app store.</div>
            <div className="help-item">2. Open the {holderAppName} app and click &quot;Scan a QR code&quot;.</div>
            <div className="help-item">3. Hover over the QR code.</div>
          </div>
          )
      }
      <div className="qrcode-img-wrapper">
        {qrCode ? renderQrCode() : <Spinner />}
      </div>
    </div>
  );
};

export default QRCode;
