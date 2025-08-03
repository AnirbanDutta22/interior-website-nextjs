'use server';

import { revalidateTag } from 'next/cache';

// Server action to revalidate cache
export async function revalidateData(tag: string) {
  revalidateTag(tag);
}

// Server action for contact form submission
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const pincode = formData.get('pincode') as string;
  
  // Here you would typically save to a database
  // For now, we'll just log the data
  console.log('Contact form submission:', { name, email, phone, pincode });
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Form submitted successfully!' };
}

// Server action for consultation form
export async function submitConsultationForm(formData: FormData) {
  const name = formData.get('Name') as string;
  const email = formData.get('Email') as string;
  const phone = formData.get('Phone') as string;
  const pincode = formData.get('Pincode') as string;
  
  // Here you would typically save to a database
  console.log('Consultation form submission:', { name, email, phone, pincode });
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Consultation request submitted!' };
} 