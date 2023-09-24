'use client'
import './globals.css'
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '650f4489f9c7b600075cd598' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Silly Goose</title>
        <meta name="description" content="Beginners' crypto assistant"></meta>
      </head>
      <body className="bg-[#FFDED2]">{children}</body>
    </html>
  )
}
