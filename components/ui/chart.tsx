
"use client"
import React from 'react';

// Example type definitions
type Payload<ValueType, NameType> = {
  dataKey?: string | number;
  key?: string | number;
  name?: string;
  value: ValueType;
  nameType: NameType;
};

type PayloadItem = {
  dataKey: string;
  key: string | number;
  name: string;
};

type ValueType = string; // Replacing `any` with `string` as an example
type NameType = string; // Replacing `any` with `string` as an example

// Example function that processes payload
const processPayload = (payload: PayloadItem) => {
  console.log('Processing Payload:', payload);
};

// Main chart component
const Chart = () => {
  const items: Payload<ValueType, NameType>[] = [
    {
      dataKey: 'data1',
      key: 'key1',
      name: 'Item 1',
      value: '100', // Changed to string as an example
      nameType: 'type1',
    },
    {
      dataKey: 'data2',
      key: 'key2',
      name: 'Item 2',
      value: '200', // Changed to string as an example
      nameType: 'type2',
    },
    // Add more items here
  ];

  // Handling the Payload types and ensuring the properties exist
  const handlePayload = (item: Payload<ValueType, NameType>) => {
    // Ensure dataKey is a string, with a fallback value if undefined
    const payloadDataKey = typeof item.dataKey === 'string' ? item.dataKey : ''; // Ensure it's a string

    // Ensure key is a string, number, or undefined, default to empty string if undefined
    const key = item.key ?? ''; // Default to empty string if undefined

    // Ensure the property 'name' exists before accessing it, with a fallback value
    const itemName = item.name ?? 'default name'; // Default to 'default name' if missing

    // Process the payload with the correct types
    processPayload({
      dataKey: payloadDataKey,
      key,
      name: itemName,
    });
  };

  // Loop through items and process them
  return (
    <div>
      <h2>Chart</h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <p>Data Key: {item.dataKey}</p>
            <p>Key: {item.key}</p>
            <p>Name: {item.name}</p>
            <button onClick={() => handlePayload(item)}>Process Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
