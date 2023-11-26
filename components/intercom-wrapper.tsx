"use client"

import { IntercomProvider } from 'react-use-intercom';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function IntercomProviderWrapper({ children }: Props) {
  return (
    <IntercomProvider appId="q9kulbz0">
      {children}
    </IntercomProvider>
  );
}