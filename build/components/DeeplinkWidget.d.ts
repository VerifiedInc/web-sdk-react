import { FC } from 'react';
import { HolderApp } from '@unumid/types';
import './DeeplinkWidget.css';
export interface Props {
    holderApp: Pick<HolderApp, 'name' | 'deeplinkButtonImg'>;
    deeplink: string;
    qrCode: string;
    canScan: boolean;
}
/**
 * Component responsible for rendering a deep link referencing a PresentationRequest,
 * either as a QR code (default on desktop) or a button (default on mobile).
 */
declare const DeeplinkWidget: FC<Props>;
export default DeeplinkWidget;
//# sourceMappingURL=DeeplinkWidget.d.ts.map