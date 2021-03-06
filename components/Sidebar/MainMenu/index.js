import React from 'react';
import Link from 'next/link';
import { EclenLogo } from '../../../utils/loadSVG';
import { Icon } from 'semantic-ui-react';
import SubMenu from '../SubMenu';

export default function MainMenu(props) {
  const { item, subMenuActive, queryObject } = props;
  const activeUrl = queryObject.chemgrade;
  // link.url = chem8 - chem9 - chem10 ...
  return (
    <ul className='mainmenu' key={item.tag}>
      <h3 className='menu-title'> {item.category} </h3>
      {item.links.map((link) => (
        <li
          className={
            activeUrl === link.url ? 'menu-link open-submenu' : 'menu-link'
          }
          key={link.url}
        >
          <Link href='/[link.url]' as={`/${link.url}`}>
            <a className={activeUrl === link.url ? 'highlight-menu' : null}>
              <EclenLogo className={'link-icon'} />
              <span>{link.name}</span>
              <Icon
                name='chevron down'
                className='dropdown-icon'
                onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                }}
              />
            </a>
          </Link>
          {/* Submenu */}
          <SubMenu
            link={link}
            subMenuActive={subMenuActive}
            activeUrl={activeUrl}
            queryObject={queryObject}
          />
        </li>
      ))}
    </ul>
  );
}
