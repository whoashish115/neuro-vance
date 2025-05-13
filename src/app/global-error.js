'use client'

import React from "react";
import { InternalServerError as InternalServerErrorComponent } from  "../components";

export const metadata = {
 title: 'Internal Server Error | Neurovance',
 description: 'Error page',
} 

export default function InternalServerError() {
  return (
    <InternalServerErrorComponent/>
  );
};
