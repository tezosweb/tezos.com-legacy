import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExternalLink from 'components/ExternalLink'

function parseHeading(cat) {
    let secondSpaceIdx = -1;
    for (let i = 0; i < cat.length; i++) {
        if (cat[i] === ' ' && cat.indexOf(' ') !== i) {
            secondSpaceIdx = i;
            break;
        }
    }

    return (
        <th>
            {cat.slice(0, secondSpaceIdx)}
            <br />
            {cat.slice(secondSpaceIdx + 1)}
        </th>
    )

}

const JobsModule = ({ dev, coms, ops }) => {
    const {siteConfig} = useDocusaurusContext();

    let jobs;
    if (['/', 'fr'].includes(siteConfig.baseUrl)) jobs = require(`../../data/jobs/jobs-${siteConfig.baseUrl === '/' ? 'en' : siteConfig.baseUrl.split('/')[1]}.json`)
    else jobs = require('../../data/jobs/jobs-en.json');

    return (
        <div className={clsx('container', styles.jobsContainer)}>
            <div className={styles.categoryContainer}>
            {jobs['Development & Engineering'] && (<table className={styles.jobsTable}>
                <thead>
                    <tr>
                        {dev && parseHeading(dev)}
                    </tr>
                </thead>
                <tbody>
                    {jobs['Development & Engineering'].map((job, i) => (
                        <tr key={`de${i}`}>
                            <td>
                            <ExternalLink link={job.link} text={job.title} /> <br />
                            {job.location}
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>)}
            </div>
            <div className={styles.comsAndOps}>
            {jobs['Communications & Marketing'] && (<table className={styles.jobsTable}>
                <thead>
                    <tr>
                        {coms && parseHeading(coms)}
                    </tr>
                </thead>
                <tbody>
                {jobs['Communications & Marketing'].map((job, i) => (
                    <tr key={`cm${i}`}>
                        <td>
                        <ExternalLink link={job.link} text={job.title} /> <br />
                        {job.location}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>)}
            {jobs['Operations'] && (<table className={styles.jobsTable}>
            <thead>
                    <tr>
                        <th>{ops} <div className={styles.operationsSpace}><br /></div></th>
                    </tr>
                </thead>
                <tbody>
                {jobs['Operations'].map((job, i) => (
                    <tr key={`o${i}`}>
                        <td>
                        <ExternalLink link={job.link} text={job.title} /> <br />
                        {job.location}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>)}
            </div>
        </div>
    )

};

export default JobsModule;