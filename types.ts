
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location: string;
}