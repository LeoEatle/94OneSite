import React from 'react';
import {
  Container,
} from 'amazeui-react';

const year = new Date().getFullYear();

const SiteFooter = function SiteFooter() {
  return (
    <footer className="ask-footer">
      <Container>
        <p>© {year} 94 OneSite. LeoEatle. 
          Developed with WebStorm.</p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
