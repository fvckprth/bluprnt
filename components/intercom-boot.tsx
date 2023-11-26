"use client"

import { useIntercom } from 'react-use-intercom';
import React, { useEffect } from 'react';

export default function IntercomBoot() {
  const { boot } = useIntercom();

  useEffect(() => {
    boot();
  }, [boot]);

  return null;
}