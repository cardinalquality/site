'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking utility
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Pre-configured conversion tracking functions
export const trackConsultationClick = (location: string) => {
  trackEvent('consultation_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

export const trackCalendlyOpen = () => {
  trackEvent('calendly_open', {
    event_category: 'conversion',
    event_label: 'calendly_modal',
    value: 10,
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
  });
};
