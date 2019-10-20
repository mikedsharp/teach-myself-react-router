import React from 'react';
import { useParams } from 'react-router-dom';
export function Thing() {
  let { thingId } = useParams();
  return <h2>Requested thing ID: {thingId}</h2>;
}
