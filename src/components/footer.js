import Link from 'next/link';
import styled from 'styled-components';
import Logo, { Bug } from './logo';
import repeater from 'img/repeater.svg';
import rainbow from 'img/rainbow-bg.svg';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0 64px 120px 64px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: url(${rainbow.src});
    background-size: cover;
    width: 100%;
    height: 200%;
    bottom: 0;
    left: 0;
  }

  .wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 1312px;

    @media (max-width: 800px) {
      flex-wrap: wrap;
    }
  }

  .repeater {
    background: url(${repeater.src});
    width: 100%;
    height: 24px;
    margin-top: 200px;
  }

  dl {
    width: 100%;
    // background: blue;
    margin-top: 64px;

    dt {
      font-family: 'Elevon';
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 24px;
      text-shadow: ${(props) => props.theme.textShadow};
    }

    dd {
      margin-bottom: 16px;

      a {
        font-family: 'JetBrains Mono', monospace;
        // text-transform: underline;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform-origin: 100% 50%;
          transform: scale3d(1, 1, 1);
          transition: transform 0.4s;
        }

        &:hover:before {
          transform-origin: 0% 50%;
          transform: scale3d(0, 1, 1);
        }
      }
    }
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Footer = () => {
  console.log('ok');
  return (
    <StyledFooter>
      <div className="repeater" />
      <div className="wrapper">
        <dl>
          <Bug />
          <p>
            &copy; 2022 DigitalOcean, LLC. <br /> All Rights Reserved.
          </p>
        </dl>

        <dl>
          <dt>Share</dt>
          <dd>
            <a href="">Twitter</a>
          </dd>
          <dd>
            <a href="">Facebook</a>
          </dd>
          <dd>
            <a href="">LinkedIn</a>
          </dd>
          <dd>
            <a href="">Hacker News</a>
          </dd>
          <dd>
            <a href="">Reddit</a>
          </dd>
        </dl>

        <dl>
          <dt>Follow</dt>
          <dd>
            <a href="https://discord.gg/hacktoberfest">Discord</a>
          </dd>
          <dd>
            <a href="https://twiter.com/hacktoberfest">Twitter</a>
          </dd>
          <dd>
            <a href="https://reddit.com/r/hacktoberfest">Reddit</a>
          </dd>
        </dl>

        <dl>
          <dt>Legal</dt>
          <dd>
            <a href="https://www.digitalocean.com/legal/terms-of-service-agreement">
              Terms
            </a>
          </dd>
          <dd>
            <a href="https://www.digitalocean.com/legal/privacy-policy">
              Privacy
            </a>
          </dd>
          <dd>
            <Link href="/events#brand">Brand Guidelines</Link>
          </dd>
        </dl>
      </div>
    </StyledFooter>
  );
};

export default Footer;
