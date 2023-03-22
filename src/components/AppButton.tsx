import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export enum ButtonVersion {
  START = 'start',
  STOP = 'stop',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  version?: ButtonVersion;
}

export default function AppButton({
  children,
  className,
  version = ButtonVersion.START,
  ...rest
}: PropsWithChildren<IAppButtonProps>) {
  return (
    <Root className={className} $version={version} {...rest}>
      {children}
    </Root>
  );
}

const Root = styled.button<{ $version: ButtonVersion }>`
  padding: 8px 16px;

  color: #ffffff;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.3s ease;

  ${({ $version }) => {
    switch ($version) {
      case ButtonVersion.START:
        return `
          background-color: #76d8a3;

          &:hover {
            background-color: #2dc071;
          }`;

      case ButtonVersion.STOP:
        return `
          background-color: #faa0a0;

          &:hover {
            background-color: #e0232e;
          }`;

      default:
        break;
    }
  }}
`;
