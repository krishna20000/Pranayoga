'use client';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    setDateString(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 prose lg:prose-xl">
      <h1>Privacy Policy</h1>
      <p>Last updated: {dateString}</p>
      
      <p>PranaFlow Institute ("us", "we", or "our") operates the PranaFlow website (the "Service").</p>
      <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
      
      <h2>Information Collection and Use</h2>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      <h3>Types of Data Collected</h3>
      <h4>Personal Data</h4>
      <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <h4>Usage Data</h4>
      <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

      <h2>Use of Data</h2>
      <p>PranaFlow Institute uses the collected data for various purposes:</p>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: info@pranaflow.com</li>
        <li>By visiting this page on our website: pranaflow.com/contact</li>
        <li>By phone number: (260) 555-1234</li>
      </ul>
    </div>
  );
}
