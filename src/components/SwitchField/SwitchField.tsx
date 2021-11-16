import { ISwitchField } from '@src/interfaces';
import React, { FC } from 'react';
import { modeStyle, sliderStyle, switchStyle } from './SwitchFieldStyles';

export const SwitchField: FC<ISwitchField> = ({ mode, handleModeChange }) => {
  return (
    <label className="switch" css={switchStyle}>
      <input
        name="mode"
        id="checkbox"
        type="checkbox"
        css={modeStyle}
        data-control="checkbox"
        data-testid="switchField"
        checked={mode}
        onChange={handleModeChange}
      />
      <span className="slider round" css={sliderStyle} />
    </label>
  );
};
