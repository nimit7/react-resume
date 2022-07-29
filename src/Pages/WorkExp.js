import React, { Fragment } from 'react';
import Card from '../components/UI/Card';

import classes from './WorkExp.module.css';

import incedoLogo from '../assets/incedo_logo.png';
import allFriendsStudioLogo from '../assets/all_friends_studio_logo.png';
import spaceLogo from '../assets/space_logo.png'
import { useState } from 'react';

const WorkExp = () => {
  let works = [
    {
      id: 'w1',
      key: 'w1',
      profile: 'Software Developer',
      duration: '5 July 2021 - Present',
      company: {
        name: 'Incedo Inc.',
        logo: {
          name: incedoLogo,
          className: '',
        },
        website: 'https://www.incedoinc.com/',
        description: '',
      }
    },
    {
      id: 'w3',
      key: 'w3',
      profile: 'Research Intern',
      duration: 'Dec-Jan 2019',
      company: {
        name: 'Space Technology and Education Pvt. Ltd.',
        logo: {
          name: spaceLogo,
          className: '',
        },
        website: 'https://www.space-india.com/',
        description: '',
      }
    },
    {
      id: 'w2',
      key: 'w2',
      profile: 'Game Developer Intern',
      duration: 'Aug 2018',
      company: {
        name: 'All Friends Studio',
        logo: {
          name: allFriendsStudioLogo,
          className: 'bg-white border rounded-4',
        },
        website: 'https://allfriends.studio/',
        description: '',
      }
    },
  ]

  const [chosenCardIndex, setChosenCardIndex] = useState('');

  // const cardDescDiv = document.querySelector('card-desc');
  // cardDescDiv.addEventListener('mouseenter', () => cardDescDiv.classList.remove('d-none'))
  return (
    <Fragment>
      <h1 className='text-white'>Work</h1>
      {works.map((work, cardIndex) =>
        <Card className={`m-2 ${classes.card}`} width="30%" onClick={() => {
          if (chosenCardIndex === cardIndex) setChosenCardIndex(-1);
          else setChosenCardIndex(cardIndex);
        }}>
          <div style={{ height: '250px' }}>
            <div className="d-flex flex-column text-center text-white pt-4" style={{ height: 'inherit' }}>
              <h5>{work.profile}</h5>
              <p className='m-0'>@</p>
              <a href={work.company.website} target='_blank' rel="noreferrer" >
                <img className={`my-2 p-0 ${work.company.logo.className}`} src={work.company.logo.name} alt={work.company.name} style={{ height: '50px', width: 'auto' }} />
              </a>
              <h5>{work.company.name}</h5>
              <h6 className=''>{work.duration}</h6>
            </div>
            <div className='mt-4' id='card-desc'>
              Hey There!
            </div>
          </div>

        </Card>
      )}
    </Fragment>
  )
}

export default WorkExp